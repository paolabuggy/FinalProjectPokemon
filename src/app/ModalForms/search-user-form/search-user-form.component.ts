import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.css']
})
export class SearchUserFormComponent implements OnInit {
  public Uid:number=0;
  public Unombre:string='';
  public buscId:boolean=false;
  public buscName:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarMetodo(opc:number){
    this.buscId=false;
    this.buscName=false;
    switch(opc){
      case 1:
        this.buscId=true;
        break;
      case 2:
        this.buscName=true;
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

}
