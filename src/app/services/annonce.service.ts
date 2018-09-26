import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Annonce } from '../models/annonce';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const URL_BASE = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  private _superBus = new Subject<string>();
  
  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerAnnoncesEnCours(): Observable<Annonce[]>{
    return this._http
    .get(URL_BASE+"collaborateur/annonces/encours")
    .pipe(
      map((data: any[]) => data.map(annonce => new Annonce(annonce.id,annonce.horaireDeDepart, annonce.lieuDeDepart, annonce.lieuDeDestination, annonce.nombreDeVoyageurs)))
    )
  }

  listerAnnoncesHistorique(): Observable<Annonce[]>{
    return this._http
    .get(URL_BASE+"collaborateur/annonces/historique")
    .pipe(
      map((data: any[]) => data.map(annonce => new Annonce(annonce.id,annonce.horaireDeDepart, annonce.lieuDeDepart, annonce.lieuDeDestination, annonce.nombreDeVoyageurs)))
    )
  }

  supprimerAnnonce(): Observable<Annonce>{
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    
    resultat = this._http.post(URL_BASE+"collaborateur/annonces/1", httpOptions);
    return resultat;
  }
}
