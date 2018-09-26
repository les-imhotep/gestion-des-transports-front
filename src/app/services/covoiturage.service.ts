import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Covoiturage } from '../models/covoiturage';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const URL_BASE = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class CovoiturageService {

  private _superBus = new Subject<string>();
  
  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerCovoituragesEnCours(): Observable<Covoiturage[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsCovoiturage/encours")
    .pipe(
      map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.collegueVM, covoiturage.annonceVM/*covoiturage.horaireDeDepart, covoiturage.lieuDeDepart, covoiturage.lieuDeDestination, covoiturage.vehicule, covoiturage.chauffeur*/)))
    )
  }

  listerCovoituragesHistorique(): Observable<Covoiturage[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsCovoiturage/historique")
    .pipe(
      map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.collegueVM, covoiturage.annonceVM/*covoiturage.horaireDeDepart, covoiturage.lieuDeDepart, covoiturage.lieuDeDestination, covoiturage.vehicule, covoiturage.chauffeur*/)))
    )
  }
}