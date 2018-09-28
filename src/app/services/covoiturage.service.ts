import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
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
      map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.id,covoiturage.collegue, covoiturage.annonce)))
    )
  }

  listerCovoituragesHistorique(): Observable<Covoiturage[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsCovoiturage/historique")
    .pipe(
      map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.id,covoiturage.collegue, covoiturage.annonce)))
    )
  }

  supprimerCovoiturage(id: number): Observable<Covoiturage>{
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    console.log(id)
    resultat = this._http.post(URL_BASE+"collaborateur/reservationsCovoiturage/"+id, httpOptions);
    return resultat;
  }

  listerAllCovoituragesEnCours(): Observable<Covoiturage[]>{
    return this._http
    .get(URL_BASE+"collaborateur/reservationsCovoiturage")
    .pipe(
      map((data: any[]) => data.map(covoiturage => new Covoiturage(covoiturage.id,covoiturage.collegue, covoiturage.annonce)))
    )
  }
}