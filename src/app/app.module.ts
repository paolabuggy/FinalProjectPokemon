import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqComponent } from './faq/faq.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PokemonesComponent } from './pokemones/pokemones.component';

import firebase from "firebase/compat/app";
import { LoginFormComponent } from './ModalForms/login-form/login-form.component';
import { PokemonFormComponent } from './ModalForms/pokemon-form/pokemon-form.component';
import { RegisterFormComponent } from './ModalForms/register-form/register-form.component';
import { SearchPokeFormComponent } from './ModalForms/search-poke-form/search-poke-form.component';
import { SearchUserFormComponent } from './ModalForms/search-user-form/search-user-form.component';
import { PokeGraphsComponent } from './Graficas/poke-graphs/poke-graphs.component';
import { LoginPageComponent } from './login-page/login-page.component';

// Auth service
import { AuthService } from './servicios/auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    FaqComponent,
    CuentaComponent,
    PokemonesComponent,
    LoginFormComponent,
    PokemonFormComponent,
    RegisterFormComponent,
    SearchPokeFormComponent,
    SearchUserFormComponent,
    PokeGraphsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }