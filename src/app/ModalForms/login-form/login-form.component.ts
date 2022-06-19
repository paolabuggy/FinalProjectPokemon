import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/servicios/window.service';
import { AuthService } from 'src/app/servicios/auth.service';

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

export class PhoneNumber{
  country: string = "";
  area: string = "";
  prefix: string = "";
  line: string = "";

  //Format phone numbers as E.164
  get e164(){
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public Uname: string = '';
  public Password:string='';
  public Metodo:boolean=true;
  
  public advice: string = '';

  //Variables para el login con MSM
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string = "";
  user: any;

  constructor(public authService: AuthService, private win: WindowService) { }

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then((result: any) => {
      this.windowRef.confirmationResult = result;
    }).catch( (error: any) => console.log(error) );
  }

  verifyLoginCode() {
    this.advice="";
    this.windowRef.confirmationResult.confirm(this.verificationCode)
    .then( (result: any) => {
      this.user = result.user;
      localStorage.setItem('sesion','sms');
    }).catch( (error: any) => {
      this.advice="Código incorrecto";
    });
  }

  logOut(){
    firebase.auth().signOut().catch( (error: any) => console.log(error) );
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
