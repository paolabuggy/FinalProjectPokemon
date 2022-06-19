import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  Eliminar(){
    alert("eee");
  }

  Modificar(){
   
    this.Pnombre=(<HTMLInputElement>document.getElementById('nombref')).value;
    this.Pentry=(<HTMLInputElement>document.getElementById('entryf')).value;
    this.Patq=parseInt((<HTMLInputElement>document.getElementById('atqe')).value);
    this.Pspa=parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef=parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe=parseInt((<HTMLInputElement>document.getElementById('spef')).value);
    this.Ptip=(<HTMLInputElement>document.getElementById('tipof')).value;
   

  }
}
