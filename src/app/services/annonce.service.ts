import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Annonce } from '../models/annonce';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const URL_BACKEND = environment.baseUrl;
const OPTION_HTTP = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private _superBus = new Subject<string>();
  
  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerAnnoncesEnCours(): Observable<Annonce[]>{
    return this._http
    .get(URL_BACKEND+"collaborateur/annonces/encours")
    .pipe(
      map((data: any[]) => data.map(annonce => new Annonce(annonce.id,
          annonce.jourDeDepart,
          annonce.heureDeDepart,
          annonce.lieuDeDepart,
          annonce.lieuDeDestination,
          annonce.nombreDeVoyageurs,
          annonce.vehicule,
          annonce.collegue,
          annonce.nombreDePlacesDisponibles
          )))
    )
  }

  listerAnnoncesHistorique(): Observable<Annonce[]>{
    return this._http
    .get(URL_BACKEND+"collaborateur/annonces/historique")
    .pipe(
      map((data: any[]) => data.map(annonce => new Annonce(annonce.id,
        annonce.jourDeDepart,
        annonce.heureDeDepart,
        annonce.lieuDeDepart,
        annonce.lieuDeDestination,
        annonce.nombreDeVoyageurs,
        annonce.vehicule,
        annonce.collegue,
        annonce.nombreDePlacesDisponibles
        )))
    )
  }

  supprimerAnnonce(id: number): Observable<Annonce>{
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    
    resultat = this._http.post(URL_BACKEND+"collaborateur/annonces/"+id, httpOptions);
    return resultat;
  }

  publierAnnonce(annonce: Annonce): Observable<Annonce> {
    return this._http
        .post(URL_BACKEND + "collaborateur/annonces/creer", annonce, OPTION_HTTP)
        .pipe(
          map(((formServeur:any) =>Annonce.fromAnnonceServeur(formServeur)
        )
        )
        );

}



}
