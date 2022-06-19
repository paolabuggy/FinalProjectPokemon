import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.css']
})
export class SearchUserFormComponent implements OnInit {
  public UsuarioEncontrado: boolean = false;

  public Uid: string = '';
  public Unombre: string = '';
  public Uusername: string = '';
  public Uemail: string = '';
  public buscId: boolean = false;
  public buscName: boolean = false;
  public usuarios: any = [];
  public resultados: any = [];

  constructor(private firestoreService: FirestoreService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestoreService.getUsuarios().subscribe((usersSnapshot: any) => {
      this.usuarios = [];
      usersSnapshot.forEach((usuarioData: any) => {
        this.usuarios.push({
          id: usuarioData.payload.doc.id,
          data: usuarioData.payload.doc.data()
        });
      });
    });
  }

  SeleccionarMetodo(opc: number) {
    this.buscId = false;
    this.buscName = false;
    switch (opc) {
      case 1:
        this.buscId = true;
        break;
      case 2:
        this.buscName = true;
        break;

    }
  }

  BuscaID() {
    //Aqui implementar metodo de busqueda en la BD
    this.Uid = "";
    this.Unombre = "";
    this.Uusername = "";
    this.Uemail = "";
    let busq: string = "";
    busq = (<HTMLInputElement>document.getElementById('idf')).value;

    for (let usuarioBD of this.usuarios) {
      this.Uid = "";
      this.Uid = usuarioBD.id;
      if (this.Uid == busq) {
        this.Unombre = usuarioBD.data.displayName;
        this.Uusername = usuarioBD.data.photoURL;
        this.Uemail = usuarioBD.data.email;
        this.UsuarioEncontrado = true;
      }
    }
    setTimeout(() => {
      this.Uid = "";
      this.Unombre = "";
      this.Uusername = "";
      this.Uemail = "";
    }, 7000);
  }

  BuscaNombre() {
    this.resultados = [];
    //Aqui implementar metodo de busqueda en la BD
    let busq: string = "";
    busq = (<HTMLInputElement>document.getElementById('Unamef')).value;
    for (let usuarioBD of this.usuarios) {
      this.Uusername = "";
      this.Uusername = usuarioBD.data.displayName;
      if (this.Uusername == busq) {
        this.resultados.push({
          Unombre: usuarioBD.data.displayName,
          Uusername: usuarioBD.data.photoURL,
          Uemail: usuarioBD.data.email,
          Uid: usuarioBD.id
        });
        console.log(this.resultados);
        this.UsuarioEncontrado = true;
      }
    }
    setTimeout(() => {
      this.resultados = [];
    }, 7000);
  }

}
