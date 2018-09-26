import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import {StatutConnecteService} from "./auth/statut-connecte.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import { MenuCollaborateurComponent } from './menu-collaborateur/menu-collaborateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { ListerCovoituragesComponent } from './lister-covoiturages/lister-covoiturages.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, canActivate:[StatutConnecteService]},
  { path:'tech', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path:'auth', component: AuthComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'collaborateur/annonces', component: ListeAnnoncesComponent, canActivate:[StatutConnecteService]},
  { path: 'collaborateur/reservations', component: ListerCovoituragesComponent, canActivate:[StatutConnecteService]}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MenuCollaborateurComponent,
    AccueilComponent,
    ListeAnnoncesComponent,
    ListerCovoituragesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
