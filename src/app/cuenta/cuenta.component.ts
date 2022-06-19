import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  public EncontradoPoke:boolean=true;
  public EncontradoUser:boolean=true;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }



}
