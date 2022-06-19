import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  
  public UnombreC: string = '';
  public Uname: string = '';
  public Uemail: string = '';
  public Udate: string = '';
  public Upassw1: string = '';
  public Upassw2: string = '';

  password: any = "";
  password_repeat: any = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  resultado!: string;

  formularioContacto = new UntypedFormGroup({
    nombre: new UntypedFormControl('', Validators.required),
    userName: new UntypedFormControl('', [Validators.required, Validators.maxLength(10)]),
    mail: new UntypedFormControl('', [Validators.required, Validators.email]),
    passwordf1: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
    passwordf2: new UntypedFormControl('', [Validators.required, Validators.minLength(6)])
  }
  );

  submit() {
    if (this.formularioContacto.valid) {
      
      this.password=this.formularioContacto.value['passwordf1'];
      this.password_repeat=this.formularioContacto.value['passwordf2'];

      if (this.password == this.password_repeat) {
        this.UnombreC = this.formularioContacto.value['nombre'];
        this.Uname = this.formularioContacto.value['userName'];
        this.Uemail = this.formularioContacto.value['mail'];
        
        this.authService.SignUp(this.Uname, this.Uemail, this.password, this.UnombreC);
        (<HTMLInputElement>document.getElementById('nombrecompletof')).value="";
        (<HTMLInputElement>document.getElementById('unamef')).value="";
        (<HTMLInputElement>document.getElementById('emailf')).value="";
        (<HTMLInputElement>document.getElementById('passwordf1')).value="";
        (<HTMLInputElement>document.getElementById('passwordf2')).value="";
      } else {
        alert('Las contraseñas ingresadas no coinciden');
        (<HTMLInputElement>document.getElementById('passwordf1')).value="";
        (<HTMLInputElement>document.getElementById('passwordf2')).value="";
      }
    } else {
      alert('Se ingresaron datos invalidos');
      (<HTMLInputElement>document.getElementById('nombrecompletof')).value="";
      (<HTMLInputElement>document.getElementById('unamef')).value="";
      (<HTMLInputElement>document.getElementById('emailf')).value="";
      (<HTMLInputElement>document.getElementById('passwordf1')).value="";
      (<HTMLInputElement>document.getElementById('passwordf2')).value="";
    }

  }

}
