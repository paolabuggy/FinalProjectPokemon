import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  nombre?:any;
  foto?:any;

  constructor(private rutaActiva: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.paramMap.get('nombre');
    this.foto = this.rutaActiva.snapshot.paramMap.get('foto');

  }

}
