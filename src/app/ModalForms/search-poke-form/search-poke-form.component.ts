import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-search-poke-form',
  templateUrl: './search-poke-form.component.html',
  styleUrls: ['./search-poke-form.component.css']
})
export class SearchPokeFormComponent implements OnInit {
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

  public general: any = '';

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
    //Aqui implementar metodo de busqueda en la BD
    /*let busq:string="";
    busq=(<HTMLInputElement>document.getElementById('idf')).value;
    let editSubscribe = this.firestoreService.getPokemon(busq).subscribe((pokemon:any) => {
      this.Pid=busq;
      this.Pnombre=pokemon.payload.data()['nombre'];
      this.Ptipo=pokemon.payload.data()['tipo'];
      this.Pfoto=pokemon.payload.data()['foto'];
      this.Pinfo=pokemon.payload.data()['info'];
      this.Patq=pokemon.payload.data()['ataque'];
      this.Pdef=pokemon.payload.data()['defensa'];
      this.Pspe=pokemon.payload.data()['especial'];
      this.Pspa=pokemon.payload.data()['velocidad'];
      editSubscribe.unsubscribe();
    });*/
    let busq: string = "";
    busq = (<HTMLInputElement>document.getElementById('idf')).value;

    this.firestore.collection('pokemones').doc(busq)
      .get().subscribe((doc: any) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.Pid = busq;
          this.Pnombre = doc.data()['nombre'];
          this.Ptipo = doc.data()['tipo'];
          this.Pfoto = doc.data()['foto'];
          this.Pinfo = doc.data()['info'];
          this.Patq = doc.data()['ataque'];
          this.Pdef = doc.data()['defensa'];
          this.Pspe = doc.data()['especial'];
          this.Pspa = doc.data()['velocidad'];
          alert(this.Pnombre);
        }
        else {
          console.log("no hay tal pokemon");
        }
      });

    //alert(this.Pid);
    //alert(this.general);
  }

  BuscaNombre() {
    //Aqui implementar metodo de busqueda en la BD
    let busq: string = "";
    
    busq = (<HTMLInputElement>document.getElementById('Unamef')).value;

    /*
    this.pokeInfo=this.firestore.collection('pokemones', ref => ref.where('nombre', '==', busq))
    .get().subscribe((pokemonesSnapshot) => {
      this.busqueda = [];
      pokemonesSnapshot.forEach((pokemonData: any) => {
        this.busqueda.push({
          id: pokemonData.id,
          data: pokemonData.data()
        });
      });
    });
    console.log(this.busqueda);
    */
    
    //console.log("Document data:", this.pokeInfo);
   
    for(let pokemon of this.pokemones){
      this.Pnombre="";
      this.Pnombre = pokemon.data.nombre;
      if(this.Pnombre==busq){
        console.log(this.Pnombre);
        this.busqueda.push({
            id: pokemon.data.id,
            data: pokemon.data
        });
      }
    }
    //console.log(this.busqueda[0].data.nombre);
    console.log(this.busqueda);
    this.busqueda.splice(0, this.busqueda.length);
    console.log(this.busqueda);
  }

  BuscaStats() {
    //Aqui implementar metodo de busqueda en la BD
    this.Patq = parseInt((<HTMLInputElement>document.getElementById('atqf')).value);
    this.Pspa = parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef = parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe = parseInt((<HTMLInputElement>document.getElementById('spef')).value);
    alert(this.Patq);

    for(let pokemon of this.pokemones){
      this.Pnombre="";
      let atq = pokemon.data.ataque;
      let spa = pokemon.data.especial;
      let def = pokemon.data.defensa;
      let spe = pokemon.data.velocidad;
      if(this.Patq==atq && this.Pspa==spa && this.Pdef==def && this.Pspe==spe){
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

  BuscaTipo() {
    let busq: string = "";
    busq = (<HTMLInputElement>document.getElementById('tipof')).value;
    alert(busq);
    switch (busq) {
      case 'Ofensivo':
        for(let pokemon of this.pokemones){
          this.Ptipo="";
          this.Ptipo = pokemon.data.tipo;
          if(this.Ptipo=="Ofensivo"){
            this.busqueda.push({
                id: pokemon.data.id,
                data: pokemon.data
            });
          }
        }
        break;

      case 'Defensivo':
        for(let pokemon of this.pokemones){
          this.Ptipo="";
          this.Ptipo = pokemon.data.tipo;
          if(this.Ptipo=="Defensivo"){
            this.busqueda.push({
                id: pokemon.data.id,
                data: pokemon.data
            });
          }
        }
        break;

      case 'Apoyo':
        for(let pokemon of this.pokemones){
          this.Ptipo="";
          this.Ptipo = pokemon.data.tipo;
          if(this.Ptipo=="Apoyo"){
            this.busqueda.push({
                id: pokemon.data.id,
                data: pokemon.data
            });
          }
        }
        break;

      case 'Agil':
        for(let pokemon of this.pokemones){
          this.Ptipo="";
          this.Ptipo = pokemon.data.tipo;
          if(this.Ptipo=="Agil"){
            this.busqueda.push({
                id: pokemon.data.id,
                data: pokemon.data
            });
          }
        }
        break;

      case 'Equilibrado':
        for(let pokemon of this.pokemones){
          this.Ptipo="";
          this.Ptipo = pokemon.data.tipo;
          if(this.Ptipo=="Equilibrado"){
            this.busqueda.push({
                id: pokemon.data.id,
                data: pokemon.data
            });
          }
        }
        break;

    }
  }



}
