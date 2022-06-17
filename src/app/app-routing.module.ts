import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'pokemon', component: PokemonesComponent},
  {path: 'login' , component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
