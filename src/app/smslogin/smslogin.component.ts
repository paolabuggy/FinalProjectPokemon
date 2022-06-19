import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smslogin',
  templateUrl: './smslogin.component.html',
  styleUrls: ['./smslogin.component.css']
})
export class SMSLoginComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    
  }
  /*
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
  */
 


}
