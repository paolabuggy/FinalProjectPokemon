import { Component, OnInit } from '@angular/core';
import {EnvioCorreoService} from '../envio-correo.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  msg: String="";
  name: String="";
  lastname: String="";
  email: String="";
  phone: String="";
  message: String="";
  // obj: any={
  //   name:"",
  //   lastname:"",
  //   email:"",
  //   message:""
  // }

  constructor(private envioCorreo: EnvioCorreoService) { }

  ngOnInit(): void {
  }

  enviar(): void{
  //   const urapi= `http://localhost:3000/${this.name}`;
  //   // //const urapi= `http://localhost:3000/name=${this.name}&lastname=${this.lastname}&email=${this.email}&phone=${this.phone}&message=${this.message}`;
  //   this.envioCorreo.getJSON(urapi).subscribe((req:any)=>{
  //     console.log(req);

  //     this.name = req['name'];
  //     this.lastname = req['lastname'];
  //     this.email = req['email'];
  //     this.phone = req['phone'];
  //     this.message = req['message'];
  //    })
  //   //this.envioCorreo.httpClient.post("http://localhost:3000/", this.name).subscribe();
  // }
    // this.envioCorreo.send(this.obj).subscribe(data=>console.log('success',data),error=>console.log('error',error));
    // this.envioCorreo.send();
  }
}