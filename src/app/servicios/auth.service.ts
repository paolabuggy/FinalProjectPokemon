import { Injectable, NgZone } from '@angular/core';

import { User } from './user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updateProfile } from "firebase/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Guarda los datos del usuario que inició sesión
  usuario: any;

  constructor(
    public afs: AngularFirestore, // Inyecta Firestore service
    public afAuth: AngularFireAuth, // Inyecta Firebase auth service
    public router: Router,
    public ngZone: NgZone) { 

      /* Se guardan los datos del usuario en el localstorage cuando 
    se inicia sesión y cuando se cierra la sesión, los datos se 
    ponen en null*/
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Iniciar sesión con email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Registrarse con email/password y nombre de usuario
  SignUp(name:string, email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Cuando es nuevo usuario, se llama a setUserData
        para el registro y devuelve la promesa */
        window.alert("Usuario creado exitosamente");
        this.SetUserData(result.user);
        //Cambia el displayName al nombre del usuario
        this.usuario=getAuth();
        updateProfile(this.usuario.currentUser, {displayName: name, photoURL: ""});

        this.router.navigate(['login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /* Configuración de datos de usuario al iniciar sesión con username/password,
   al registrarse con username/password e inicio de sesión con el proveedor 
   de autenticación social en la base de datos de Firestore usando 
   AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Cerrar sesión
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

}
