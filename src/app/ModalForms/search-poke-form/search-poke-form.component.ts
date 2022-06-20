import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-search-poke-form',
  templateUrl: './search-poke-form.component.html',
  styleUrls: ['./search-poke-form.component.css']
})
export class SearchPokeFormComponent implements OnInit {
  @Input() Datos: string = "";
  //AQUI DECIDES EL TIPO DE DATO QUE LE VAS A PASAR <string>
  //@Output() PasarDatos=new EventEmitter<string>();
  @Output() PasarDatos = new EventEmitter<Pokemon>();

  public ArrUsuarios: Pokemon[] = [];
  public Pid: string = '';
  public Pnombre: string = '';
  public Ptipo: string = '';
  public Pinfo: string = "";
  public Pfoto: string = "";
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;
  public buscId: boolean = false;
  public buscType: boolean = false;
  public buscName: boolean = false;
  public buscStat: boolean = false;

  public pokemones: any = [];
  public busqueda: any = [];
  public resultado: any;
  public result: Pokemon = {
    id:"",
    pk_info:"",
    pk_name:"",
    pk_type:"",
    pk_atq:0,
    pk_spa:0,
    pk_def:0,
    pk_spe:0,
    imgUrl:""
  };
  
  public general: any = '';
  public advice: string = "";

  constructor(private firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
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

  //MEDIANTE EL EMIT PASAS COMO PARAMETRO LA INFO A PASAR AL 
  //HTML DE CUENTA.HTML
  PasarInfo() {
    //this.PasarDatos.emit("Estos datos ya estan siendo alertados en un metodo fuera del modal ");
  }

  SeleccionarMetodo(opc: number) {
    this.buscId = false;
    this.buscName = false;
    this.buscStat = false;
    this.buscType = false;
    switch (opc) {
      case 1:
        this.buscId = true;
        break;
      case 2:
        this.buscName = true;
        break;
      case 3:
        this.buscStat = true;
        break;
      case 4:
        this.buscType = true;
        break;
    }
  }


  BuscaID() {
    let busq: string = "";
    busq = (<HTMLInputElement>document.getElementById('idf')).value;

    this.firestore.collection('pokemones').doc(busq)
      .get().subscribe((doc: any) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          /*this.Pid = busq;
          this.Pnombre = doc.data()['nombre'];
          this.Ptipo = doc.data()['tipo'];
          this.Pfoto = doc.data()['foto'];
          this.Pinfo = doc.data()['info'];
          this.Patq = doc.data()['ataque'];
          this.Pdef = doc.data()['defensa'];
          this.Pspe = doc.data()['especial'];
          this.Pspa = doc.data()['velocidad'];
          alert(this.Pnombre);*/
          this.result.id = busq;
          this.result.pk_name = doc.data()['nombre'];
          this.result.pk_type = doc.data()['tipo'];
          this.result.imgUrl = doc.data()['foto'];
          this.result.pk_info = doc.data()['info'];
          this.result.pk_atq = doc.data()['ataque'];
          this.result.pk_def = doc.data()['defensa'];
          this.result.pk_spa = doc.data()['especial'];
          this.result.pk_spe = doc.data()['velocidad'];
          this.PasarDatos.emit(this.result);
        }
        else {
          this.advice = "No se encontró al Pokemón";
          (<HTMLInputElement>document.getElementById('aviso')).hidden = false;
          (<HTMLInputElement>document.getElementById('aviso')).value = this.advice;
        }
      });
  }

  BuscaNombre() {
    //Aqui implementar metodo de busqueda en la BD
    let busq: string = "";

    busq = (<HTMLInputElement>document.getElementById('Unamef')).value;

    for (let pokemon of this.pokemones) {
      this.Pnombre = "";
      this.Pnombre = pokemon.data.nombre;
      if (this.Pnombre == busq) {
        /*console.log(this.Pnombre);
        this.busqueda.push({
            id: pokemon.data.id,
            data: pokemon.data
        });*/
        this.result.id = busq;
        this.result.pk_name = pokemon.data.nombre;
        this.result.pk_type = pokemon.data.tipo;
        this.result.imgUrl = pokemon.data.foto;
        this.result.pk_info = pokemon.data.info;
        this.result.pk_atq = pokemon.data.ataque;
        this.result.pk_def = pokemon.data.defensa;
        this.result.pk_spa = pokemon.data.especial;
        this.result.pk_spe = pokemon.data.velocidad;
        this.PasarDatos.emit(this.result);
      }
    }

    //console.log(this.busqueda[0].data.nombre);
    //console.log(this.busqueda);
    //this.busqueda.splice(0, this.busqueda.length);
    //console.log(this.busqueda);
  }

  BuscaStats() {
    //Aqui implementar metodo de busqueda en la BD
    this.Patq = parseInt((<HTMLInputElement>document.getElementById('atqf')).value);
    this.Pspa = parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef = parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe = parseInt((<HTMLInputElement>document.getElementById('spef')).value);
    alert(this.Patq);

    for (let pokemon of this.pokemones) {
      this.Pnombre = "";
      let atq = pokemon.data.ataque;
      let spa = pokemon.data.especial;
      let def = pokemon.data.defensa;
      let spe = pokemon.data.velocidad;
      if (this.Patq == atq && this.Pspa == spa && this.Pdef == def && this.Pspe == spe) {
        this.busqueda.push({
          id: pokemon.data.id,
          data: pokemon.data
        });
      }
    }
    //console.log(this.busqueda[0].data.nombre);
    console.log(this.busqueda[0].data.nombre);
    //this.busqueda.splice(0, this.busqueda.length);
    //console.log(this.busqueda);
  }

}
