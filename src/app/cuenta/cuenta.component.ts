import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  public EncontradoPoke:boolean=true;
  public EncontradoUser:boolean=true;

  traspass: Pokemon = {
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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  RecibirDatos(dato:Pokemon){
      this.traspass.id=dato.id;
      this.traspass.imgUrl=dato.imgUrl;
      this.traspass.pk_atq=dato.pk_atq;
      this.traspass.pk_def=dato.pk_def;
      this.traspass.pk_info=dato.pk_info;
      this.traspass.pk_name=dato.pk_name;
      this.traspass.pk_spa=dato.pk_spa;
      this.traspass.pk_spe=dato.pk_spe;
      this.traspass.pk_type=dato.pk_type;

  }


}
