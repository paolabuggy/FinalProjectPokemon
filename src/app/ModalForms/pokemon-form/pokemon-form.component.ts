import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  public Pnombre:string='';
  public Purl: string = '';
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  RegistraPoke(){
    this.Pnombre=(<HTMLInputElement>document.getElementById('nombref')).value
    this.Purl=(<HTMLInputElement>document.getElementById('urlf')).value
    this.Patq=parseInt((<HTMLInputElement>document.getElementById('atqf')).value);
    this.Pspa=parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef=parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe=parseInt((<HTMLInputElement>document.getElementById('spef')).value);
    alert(this.Purl);
  
  }

}
