import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Reservation } from '../models/reservation';
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

  listerReservationEnCours(): Observable<Reservation[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsVehicule/encours")
    .pipe(
      map((data: any[]) => data.map(reservation => new Reservation(reservation.vehiculeSoc, reservation.depart, reservation.arrive)))
    )
  }

  listerReservationHistorique(): Observable<Reservation[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsVehicule/historique")
    .pipe(
      map((data: any[]) => data.map(reservation => new Reservation(reservation.vehiculeSoc, reservation.depart, reservation.arrive)))
    )
  }
}