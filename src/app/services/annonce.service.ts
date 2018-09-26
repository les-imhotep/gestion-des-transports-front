import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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

  listerAnnonces(): Observable<Annonce[]>{
    return this._http
    .get(URL_BASE+"collaborateur/annonces")
    .pipe(
      map((data: any[]) => data.map(annonce => new Annonce(annonce.horaireDeDepart, annonce.lieuDeDepart, annonce.lieuDeDestination, annonce.nombreDeVoyageurs)))
    )
  }
}
