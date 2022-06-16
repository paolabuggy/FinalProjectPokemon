import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
@Component({
  selector: 'app-search-poke-form',
  templateUrl: './search-poke-form.component.html',
  styleUrls: ['./search-poke-form.component.css']
})
export class SearchPokeFormComponent implements OnInit {
  public ArrUsuarios: Pokemon[] = [];
  public Pid:number=0;
  public Pnombre:string='';
  public Ptipo: string = '';
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;
  public buscId:boolean=false;
  public buscType:boolean=false;
  public buscName:boolean=false;
  public buscStat:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarMetodo(opc:number){
      this.buscId=false;
      this.buscName=false;
      this.buscStat=false;
      this.buscType=false;
      switch(opc){
        case 1:
          this.buscId=true;
          break;
        case 2:
          this.buscName=true;
          break;
        case 3:
          this.buscStat=true;
          break;
        case 4:
          this.buscType=true;
          break;
      }
  }


  BuscaID(){
    //Aqui implementar metodo de busqueda en la BD
    let busq:string="";
    busq=(<HTMLInputElement>document.getElementById('idf')).value;
    alert(busq);
  }

  BuscaNombre(){
    //Aqui implementar metodo de busqueda en la BD
    let busq:string="";
    busq=(<HTMLInputElement>document.getElementById('Unamef')).value;
    alert(busq);
  }

  BuscaStats(){
    //Aqui implementar metodo de busqueda en la BD
    this.Patq=parseInt((<HTMLInputElement>document.getElementById('atqf')).value);
    this.Pspa=parseInt((<HTMLInputElement>document.getElementById('spaf')).value);
    this.Pdef=parseInt((<HTMLInputElement>document.getElementById('deff')).value);
    this.Pspe=parseInt((<HTMLInputElement>document.getElementById('spef')).value);
    alert(this.Patq);
  }

  BuscaTipo(){
    let busq:string="";
    busq=(<HTMLInputElement>document.getElementById('tipof')).value;
    alert(busq);
    switch(busq){
      case 'Ofensivo':
        break;
      
      case 'Defensivo':
        break;

      case 'Apoyo':
        break;
      
      case 'Agil':
        break;

      case 'Equilibrado':
        break;
        
    }
  }



}
