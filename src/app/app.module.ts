import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqComponent } from './faq/faq.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PokemonesComponent } from './pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    FaqComponent,
    CuentaComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
