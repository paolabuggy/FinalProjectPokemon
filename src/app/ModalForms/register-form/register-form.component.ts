import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public ArrUsuarios: Usuario[] = [];
  public Unombre:string= '';
  public Uapellido:string='';
  public Uname: string = '';
  public Usex: string = '';
  public Uemail: string = '';
  public Udate: string = '';
  public User: Usuario = {
    nombre: '',
    apellido:'',
    username:'',
    sexo: '',
    email: '',
    fechaNac: '',
  };

  constructor() { }

  ngOnInit(): void {}

  guardaUsuario() {
    this.Unombre=(<HTMLInputElement>document.getElementById('nombref')).value;
    this.Uapellido=(<HTMLInputElement>document.getElementById('apellidof')).value;
    this.Uname = (<HTMLInputElement>document.getElementById('unamef')).value;
    this.Usex = (<HTMLInputElement>document.getElementById('sexof')).value;
    this.Uemail = (<HTMLInputElement>document.getElementById('emailf')).value;
    this.Udate = (<HTMLInputElement>document.getElementById('fechaf')).value;
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(this.Uemail)) {
      if(this.Uname == '' || this.Usex == '' || this.Uemail == '' || this.Udate == ''){
        alert('Datos incompletos');
      }
      else{
        this.User = {
          nombre:this.Unombre,
          apellido:this.Uapellido,
          username: this.Uname,
          sexo: this.Usex,
          email: this.Uemail,
          fechaNac: this.Udate,
        };
        alert('Usuario creado con exito!');

        this.ArrUsuarios.push(this.User);
        alert(this.User.nombre);
        //En caso de querer guardar en localstorage
        //localStorage.setItem('Usuarios', JSON.stringify(this.ArrUsuarios));
      }
    }
    else{
      alert('Ingrese un correo valido');
    }

     
  }

}
