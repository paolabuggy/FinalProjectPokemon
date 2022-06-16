import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public Uname: string = '';
  public Password:string='';
  
  constructor() { }

  ngOnInit(): void {
  }


  Loguearse(){
    this.Uname = (<HTMLInputElement>document.getElementById('Unamef')).value;
    this.Password = (<HTMLInputElement>document.getElementById('Passwordf')).value;

    alert(this.Password);
  }

}
