import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Vehicule } from '../models/vehicule';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { VehiculeDeSociete } from '../models/vehiculeDeSociete';

const URL_BACKEND = environment.baseUrl;
const OPTION_HTTP = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private _superBus = new Subject<string>();

  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerVehiculeDeSociete(): Observable<Vehicule[]> {
    return this._http
      .get(URL_BACKEND + "collaborateur/reservations/creer")
      .pipe(
        map((data: any[]) => data.map(vehicule =>  new VehiculeDeSociete(vehicule.immatriculation, vehicule.marque, vehicule.modele, vehicule.nombreDePlace, vehicule.photo, vehicule.categorie, vehicule.statut))
        )
      )

  }

  listerReservationEnCours(): Observable<Reservation[]> {
    return this._http
      .get(URL_BACKEND + "collaborateur/reservationsVehicule/encours")
      .pipe(
        map((data: any[]) => data.map(reservation => new Reservation(reservation.id, reservation.vehiculeSoc, reservation.depart, reservation.arrive, reservation.chauffeur)))
      )
  }

  listerReservationHistorique(): Observable<Reservation[]> {
    return this._http
      .get(URL_BACKEND + "collaborateur/reservationsVehicule/historique")
      .pipe(
        map((data: any[]) => data.map(reservation => new Reservation(reservation.id, reservation.vehiculeSoc, reservation.depart, reservation.arrive, reservation.chauffeur)))
      )
  }

  supprimerReservation(id: number): Observable<Reservation> {
    let resultat;
    resultat = this._http.post(URL_BACKEND + "collaborateur/reservationsVehicule/" + id, OPTION_HTTP);
    return resultat;
  }

  reservationDeVehicule(reservation: Reservation): Observable<String> {
    let resultat;
    resultat = this._http
    .post(URL_BACKEND + "collaborateur/reservationsVehicule/creer", reservation, OPTION_HTTP)
    return resultat;
  }
}