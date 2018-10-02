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
import { ListerReservationComponent } from './lister-reservation/lister-reservation.component';
import { CreerReservationComponent } from './creer-reservation/creer-reservation.component';
import { ReservationCovoiturageComponent } from './reservation-covoiturage/reservation-covoiturage.component';
import { ReservationVehiculeComponent } from './reservation-vehicule/reservation-vehicule.component';
import { CreerAnnonceComponent } from './creer-annonce/creer-annonce.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, canActivate:[StatutConnecteService]},
  { path:'tech', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path:'auth', component: AuthComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'collaborateur/annonces', component: ListeAnnoncesComponent, canActivate:[StatutConnecteService]},
  { path: 'collaborateur/reservations', component: ListerCovoituragesComponent, canActivate:[StatutConnecteService]},
  { path: 'collaborateur/reservations', component: ListerReservationComponent, canActivate:[StatutConnecteService]},
  { path: 'collaborateur/reservations/creer', component: CreerReservationComponent, canActivate:[StatutConnecteService]},
  { path: 'collaborateur/annonces/creer', component: CreerAnnonceComponent, canActivate:[StatutConnecteService]},
  { path: 'administrateur', component: EspaceAdminComponent, canActivate:[StatutConnecteService]}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MenuCollaborateurComponent,
    AccueilComponent,
    ListeAnnoncesComponent,
    ListerCovoituragesComponent,
    ListerReservationComponent,
    CreerReservationComponent,
    ReservationCovoiturageComponent,
    ReservationVehiculeComponent,
    CreerAnnonceComponent,
    EspaceAdminComponent
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
