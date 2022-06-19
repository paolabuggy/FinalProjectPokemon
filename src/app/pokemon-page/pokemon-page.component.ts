import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  nombre?:any;
  foto?:any;
  info?:any;
  public pokemones: any = [];

  constructor(private rutaActiva: ActivatedRoute, private firestoreService: FirestoreService) {
    this.nombre = this.rutaActiva.snapshot.paramMap.get('nombre');
    this.firestoreService.getPokemones().subscribe((pokemonesSnapshot) => {
      this.pokemones = [];
      pokemonesSnapshot.forEach((pokemonData: any) => {
        this.pokemones.push({
          id: pokemonData.payload.doc.id,
          data: pokemonData.payload.doc.data()
        });
      });
    });

    this.searchUnPoke(this.nombre);
    console.log("1."+this.nombre+" 2."+this.foto+"3."+this.info);

    
    
    
  }

  ngOnInit(): void {
    
  }

  searchUnPoke(nompoke:any):void{

    this.pokemones.forEach((element:any)=>{
      if (element.data.nombre==nompoke){
        this.foto=element.data.foto;
        this.info=element.data.info;
        return;
      }
    });
  }



}
