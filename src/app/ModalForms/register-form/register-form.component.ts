import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  
  public UnombreC: any = '';
  public Uname: any = '';
  public Uemail: any = '';
  public Udate: any = '';
  public Upassw1: any = '';
  public Upassw2: any = '';

  public advice: string = '';

  password: any = "";
  password_repeat: any = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    passwordf1: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordf2: new FormControl('', [Validators.required, Validators.minLength(6)])
  }
  );

  submit() {
    if (this.formularioContacto.valid) {
      this.advice="";
      (<HTMLInputElement>document.getElementById('errorDatos')).hidden=true;
      this.password=this.formularioContacto.value['passwordf1'];
      this.password_repeat=this.formularioContacto.value['passwordf2'];

      //Se checa si las contraseñas ingresadas coinciden
      //Validación de contraseña
      if (this.password == this.password_repeat) {
        this.UnombreC = this.formularioContacto.value['nombre'];
        this.Uname = this.formularioContacto.value['userName'];
        this.Uemail = this.formularioContacto.value['mail'];
      } else {
        (<HTMLInputElement>document.getElementById('errorDatos')).hidden=false;
        this.advice="Las contraseñas ingresadas deben de coincidir";
        (<HTMLInputElement>document.getElementById('passwordf1')).value="";
        (<HTMLInputElement>document.getElementById('passwordf2')).value="";
      }

      //Si los datos del usuario son válidos y las contraseñas coinciden 
      //se pasa al último filtro donde no se puede tomar el usuario admin
      if((this.Uname!="admin" && this.UnombreC!="Administrador") && this.Uname!="admin" && this.UnombreC!="Administrador"){
        this.authService.SignUp(this.Uname, this.Uemail, this.password, this.UnombreC);
        (<HTMLInputElement>document.getElementById('nombrecompletof')).value="";
        this.limpiaInputs();
      }else{
        (<HTMLInputElement>document.getElementById('errorDatos')).hidden=false;
        this.limpiaInputs();
        this.advice="Nombre de usuario no válido";
      }

    } else {
      (<HTMLInputElement>document.getElementById('errorDatos')).hidden=false;
      this.advice="Se ingresaron datos inválidos, intente de nuevo";
      this.limpiaInputs();
    }

  }

  limpiaInputs(){
    (<HTMLInputElement>document.getElementById('nombrecompletof')).value="";
    (<HTMLInputElement>document.getElementById('unamef')).value="";
    (<HTMLInputElement>document.getElementById('emailf')).value="";
    (<HTMLInputElement>document.getElementById('passwordf1')).value="";
    (<HTMLInputElement>document.getElementById('passwordf2')).value="";
  }
  
}

