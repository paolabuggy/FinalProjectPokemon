import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  public Pnombre:string='';
  public Purl: string = '';
  public Patq: number = 0;
  public Pspa: number = 0;
  public Pdef: number = 0;
  public Pspe: number = 0;
  public Ptip: string = '';

  public advice = "";

  public newPokemonForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    info: new FormControl('', Validators.required),
    ataque: new FormControl('', Validators.required),
    especial: new FormControl('', Validators.required),
    defensa: new FormControl('', Validators.required),
    velocidad: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.newPokemonForm.setValue({
      id: '',
      nombre: '',
      tipo: '',
      info: '',
      foto: '',
      ataque: '',
      especial: '',
      defensa: '',
      velocidad: ''
    });
    
    this.advice="";
    (<HTMLInputElement>document.getElementById('aviso')).hidden=true;

  }

  public newPokemon(form:any) {
      let data = {
        nombre: form.nombre,
        tipo: form.tipo,
        info: form.info,
        foto: form.foto,
        ataque: form.ataque,
        especial: form.especial,
        defensa: form.defensa,
        velocidad: form.velocidad
      }
      this.firestoreService.createPokemon(data).then(() => {
      this.advice="Pokemón registrado exitosamente!";
      (<HTMLInputElement>document.getElementById('aviso')).hidden=false;
      (<HTMLInputElement>document.getElementById('aviso')).value= this.advice;
        console.log('Documento creado exitosamente!');
        this.newPokemonForm.setValue({
          id: '',
          nombre: '',
          tipo: '',
          info: '',
          foto: '',
          ataque: '',
          especial: '',
          defensa: '',
          velocidad: ''
        });
        setTimeout(() => window.location.reload(), 3000);
        
      }, (error) => {
        console.error(error);
      });
  }

}
