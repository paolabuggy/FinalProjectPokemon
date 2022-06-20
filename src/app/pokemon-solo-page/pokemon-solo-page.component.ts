import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-pokemon-solo-page',
  templateUrl: './pokemon-solo-page.component.html',
  styleUrls: ['./pokemon-solo-page.component.css']
})
export class PokemonSoloPageComponent implements OnInit {
  public Pnombre:string='';
  public Pentry: string = '';
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;
  public Ptip: string = '';
  

  @Input() obj: Pokemon = {
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

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  Eliminar(){
    this.firestoreService.deletePokemon(this.obj.id).then(() => {
      console.log('Pokemon eliminado!');
      this.obj.id="";
      this.obj.pk_info="";
      this.obj.pk_name="";
      this.obj.pk_type="";
      this.obj.pk_atq=0;
      this.obj.pk_spa=0;
      this.obj.pk_def=0;
      this.obj.pk_spe=0;
      this.obj.imgUrl="";
    }, (error:any) => {
      console.error(error);
    });
  }

  Modificar(){
   
    this.Pnombre=(<HTMLInputElement>document.getElementById('nombref')).value;
    this.Pentry=(<HTMLInputElement>document.getElementById('entryf')).value;
    this.Patq=parseInt((<HTMLInputElement>document.getElementById('atqe')).value);
    this.Pspa=parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef=parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe=parseInt((<HTMLInputElement>document.getElementById('spef')).value);

    this.Ptip=(<HTMLInputElement>document.getElementById('tipof')).value;
    
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
    this.firestoreService.updatePokemon(this.obj.id, data).then(() => {
      this.obj.id="";
      this.obj.pk_info="";
      this.obj.pk_name="";
      this.obj.pk_type="";
      this.obj.pk_atq=0;
      this.obj.pk_spa=0;
      this.obj.pk_def=0;
      this.obj.pk_spe=0;
      this.obj.imgUrl="";
      console.log('Pokemon editado exitosamente');
    }, (error) => {
      console.log(error);
    });

  }
}
