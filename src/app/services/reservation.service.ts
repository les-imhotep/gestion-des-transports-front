import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Vehicule } from '../models/vehicule';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const URL_BASE = environment.baseUrl;

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
      .get(URL_BASE + "collaborateur/reservations/creer")
      .pipe(
        map((data: any[]) => data.map(vehicule =>  new Vehicule(vehicule.photo, vehicule.immatriculation, vehicule.marque, vehicule.modele))
        )
      )

  }

  listerReservationEnCours(): Observable<Reservation[]> {
    return this._http
      .get(URL_BASE + "collaborateur/reservationsVehicule/encours")
      .pipe(
        map((data: any[]) => data.map(reservation => new Reservation(reservation.id, reservation.vehiculeSoc, reservation.depart, reservation.arrive)))
      )
  }

  listerReservationHistorique(): Observable<Reservation[]> {
    return this._http
      .get(URL_BASE + "collaborateur/reservationsVehicule/historique")
      .pipe(
        map((data: any[]) => data.map(reservation => new Reservation(reservation.id, reservation.vehiculeSoc, reservation.depart, reservation.arrive)))
      )
  }

  supprimerReservation(id: number): Observable<Reservation> {
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    resultat = this._http.post(URL_BASE + "collaborateur/reservationsVehicule/" + id, httpOptions);
    return resultat;
  }
}