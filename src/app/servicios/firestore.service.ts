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

  //Obtiene 1 pokemon por su id
  public getPokemon(documentId: string) {
    return this.firestore.collection('pokemones').doc(documentId).snapshotChanges();
  }

  public getColeccion(){
    return this.firestore.collection('pokemones');
  }

  //Crea un nuevo pokemon
  public createPokemon(data: {nombre: string, tipo: string, foto: string}) {
    return this.firestore.collection('pokemones').add(data);
  }

  //Actualiza un pokemon
  public updatePokemon(documentId: string, data: any) {
    return this.firestore.collection('pokemones').doc(documentId).set(data);
  }

  // Borra un pokemon
  public deletePokemon(documentId: string) {
    return this.firestore.collection('pokemones').doc(documentId).delete();
  }

  
}
