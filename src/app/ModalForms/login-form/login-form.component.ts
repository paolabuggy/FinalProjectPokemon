import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public Uname: string = '';
  public Password:string='';
  public Metodo:boolean=true;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


  Loguearse(){
    this.Uname = (<HTMLInputElement>document.getElementById('Unamef')).value;
    this.Password = (<HTMLInputElement>document.getElementById('Passwordf')).value;

    alert(this.Password);
  }

  verifyLoginCode(){

  }

  sendLoginCode(){

  }


  MetodoLogin(){
    if(this.Metodo==true){
      this.Metodo=false;
    }
    else{
      this.Metodo=true;
    }
  }

}
