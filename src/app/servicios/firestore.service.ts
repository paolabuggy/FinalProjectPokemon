import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //Obtiene todos los pokemones
  public getPokemones() {
    return this.firestore.collection('pokemones').snapshotChanges();
  }
}
