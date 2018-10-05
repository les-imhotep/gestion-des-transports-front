import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Covoiturage } from '../models/covoiturage';
import { Annonce } from '../models/annonce';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';

const URL_BACKEND = environment.baseUrl;
const OPTION_HTTP = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({
  providedIn: 'root'
})

export class CovoiturageService {

  private _superBus = new Subject<string>();

  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerCovoituragesEnCours(): Observable<Covoiturage[]> {
    return this._http
      .get(URL_BACKEND + "collaborateur/reservationsCovoiturage/encours")
      .pipe(
        map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.id, covoiturage.collegue, covoiturage.annonce)))
      )
  }

  listerCovoituragesHistorique(): Observable<Covoiturage[]> {
    return this._http
      .get(URL_BACKEND + "collaborateur/reservationsCovoiturage/historique")
      .pipe(
        map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.id, covoiturage.collegue, covoiturage.annonce)))
      )
  }

  supprimerCovoiturage(id: number): Observable<Covoiturage> {
    let resultat;
    resultat = this._http.post(URL_BACKEND + "collaborateur/reservationsCovoiturage/" + id, OPTION_HTTP);
    return resultat;
  }

  publierCovoiturage(annonce: Annonce): Observable<String> {
    let resultat;
    resultat = this._http
      .post(URL_BACKEND + "collaborateur/reservationsCovoiturage/creer", annonce, OPTION_HTTP);
    return resultat;
  }
}