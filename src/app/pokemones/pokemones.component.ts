import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})




export class PokemonesComponent implements OnInit{
  pokemones:pokemones[]=[
    {nombre:"Greedent", foto:"../../assets/img/greedent.png", tipo:"Defensivo"}
  ];

  constructor() {
    
   }

  ngOnInit(): void {
    this.filtro("all");
  }



anadirclase(element:Element, name:string):void {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

quitarclase(element:Element, name:string):void {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

filtro(c:string):void {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    this.quitarclase(x[i], "show");
    if (x[i].id.indexOf(c) > -1) this.anadirclase(x[i], "show");
  }
}



}

export interface pokemones{
  foto:string;
  nombre:string;
  tipo:string
}