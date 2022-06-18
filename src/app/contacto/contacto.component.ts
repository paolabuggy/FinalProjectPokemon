import { Component, OnInit } from '@angular/core';
import {EnvioCorreoService} from '../envio-correo.service'
import { usermodel } from '../objuser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  objuser: usermodel={
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    address: ""
  }

  constructor(private envioCorreo: EnvioCorreoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.envioCorreo.send(this.objuser).subscribe((response)=>{
  		console.log('response from POST API is ', response)
  	},(error) => {
  		console.log('error during post is ', error)
  	})
  }
}