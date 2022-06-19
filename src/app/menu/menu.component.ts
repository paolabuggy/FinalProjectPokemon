import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../servicios/firestore.service';

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombre?: string;
  public aux: any = '';
  public pokemones: any = [];

  constructor(public authService: AuthService, private router: Router, private firestoreService: FirestoreService) {
    this.firestoreService.getPokemones().subscribe((pokemonesSnapshot) => {
      this.pokemones = [];
      pokemonesSnapshot.forEach((pokemonData: any) => {
        this.pokemones.push({
          id: pokemonData.payload.doc.id,
          data: pokemonData.payload.doc.data()
        });
      });
    });
  }

  ngOnInit(): void {
  }

  buscarUnPoke(nombre: string) {
    this.router.navigate(['/home']);

    this.nombre = nombre;
    this.searchUnPoke(this.nombre);
  }



  searchUnPoke(nompoke: any): void {
    this.pokemones.forEach((element: any) => {
      if (element.data.nombre == nompoke) {


        this.router.navigate(['/pokemonPage', element.data.nombre, element.data.foto, element.data.info]).then(() => {
          window.location.reload();
        });


        return
      }
    });
  }

  cerrarSesion() {
    this.aux = localStorage.getItem('sesion');
    if (this.aux != "SMS") {
      this.authService.SignOut();
    } else {
      firebase.auth().signOut().then(() => {
        this.router.navigate(['login']);
      }).catch((error: any) => console.log(error));
    }

  }

}
