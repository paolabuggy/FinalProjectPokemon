import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { FirestoreService } from '../servicios/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pokemon-solo-page',
  templateUrl: './pokemon-solo-page.component.html',
  styleUrls: ['./pokemon-solo-page.component.css']
})
export class PokemonSoloPageComponent implements OnInit {
  public Pnombre: string = '';
  public Pentry: string = '';
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;
  public Ptip: string = '';


  @Input() obj: Pokemon = {
    id: "",
    pk_info: "",
    pk_name: "",
    pk_type: "",
    pk_atq: 0,
    pk_spa: 0,
    pk_def: 0,
    pk_spe: 0,
    imgUrl: ""
  };

  constructor(private firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  Eliminar() {
    //this.firestoreService.deletePokemon(this.obj.id)
    this.firestore.collection('pokemones').doc(this.obj.id).delete().then(() => {
      console.log('Pokemon eliminado!');
      this.obj.id = "";
      this.obj.pk_info = "";
      this.obj.pk_name = "";
      this.obj.pk_type = "";
      this.obj.pk_atq = 0;
      this.obj.pk_spa = 0;
      this.obj.pk_def = 0;
      this.obj.pk_spe = 0;
      this.obj.imgUrl = "";
    }, (error: any) => {
      console.error(error);
    });
  }

  Modificar() {
    this.obj.pk_info = (<HTMLInputElement>document.getElementById('entryf')).value;
    this.obj.pk_name = (<HTMLInputElement>document.getElementById('nombref')).value;
    this.obj.pk_type = (<HTMLInputElement>document.getElementById('tipof')).value;
    this.obj.pk_atq = Number((<HTMLInputElement>document.getElementById('atqe')).value);
    this.obj.pk_spa = Number((<HTMLInputElement>document.getElementById('spaf')).value);
    this.obj.pk_def = Number((<HTMLInputElement>document.getElementById('deff')).value);
    this.obj.pk_spe = Number((<HTMLInputElement>document.getElementById('spef')).value);
    this.obj.imgUrl = (<HTMLInputElement>document.getElementById('fotof')).value;

    let data = {
      id: this.obj.id,
      info: this.obj.pk_info,
      nombre: this.obj.pk_name,
      tipo: this.obj.pk_type,
      ataque: this.obj.pk_atq,
      especial: this.obj.pk_spa,
      defensa: this.obj.pk_def,
      velocidad: this.obj.pk_spe,
      foto: this.obj.imgUrl
    }
    this.firestore.collection('pokemones').doc(this.obj.id).set(data).then(() => {
      (<HTMLInputElement>document.getElementById('entryf')).value="";
      (<HTMLInputElement>document.getElementById('nombref')).value="";
      (<HTMLInputElement>document.getElementById('tipof')).value="";
      (<HTMLInputElement>document.getElementById('atqe')).value="0";
      (<HTMLInputElement>document.getElementById('spaf')).value="0";
      (<HTMLInputElement>document.getElementById('deff')).value="0";
      (<HTMLInputElement>document.getElementById('spef')).value="0";
      (<HTMLInputElement>document.getElementById('fotof')).value="";
      console.log('Pokemon editado exitosamente');
    }, (error) => {
      console.log(error);
    });

  }
}
