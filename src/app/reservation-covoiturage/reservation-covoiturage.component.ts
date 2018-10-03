import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';
import { Annonce } from '../models/annonce';
import { Vehicule } from '../models/vehicule';
import { AnnonceService } from '../services/annonce.service';
import { CovoiturageService } from '../services/covoiturage.service';
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-reservation-covoiturage',
  templateUrl: './reservation-covoiturage.component.html',
  styleUrls: ['./reservation-covoiturage.component.scss']
})
export class ReservationCovoiturageComponent implements OnInit {

  errMsg: string;
  depart: string = "";
  destination: string = "";
  dateDepart: string = "";
  heureDepart: string = "";
  annoncesEnCours: Annonce[] = [];
  annonce : Annonce = new Annonce("","","","","","",new Vehicule("","","",""),new Collegue("","",""),"");
  selectedAnnonce: Annonce = new Annonce("","","","","","",new Vehicule("","","",""),new Collegue("","",""),"");

  constructor(private _postAnnSrv: AnnonceService,private _postCovSrv: CovoiturageService) { }

  ngOnInit() {
    this._postAnnSrv
      .listerToutesAnnoncesEnCours()
      .subscribe(
        tabAnnonces => this.annoncesEnCours = tabAnnonces);
  }

  detail(annonce: Annonce) {
    this.selectedAnnonce=annonce;
  }

  reserver(annonce: Annonce){
    this._postCovSrv
    .publierCovoiturage(annonce)
    .subscribe(
      () => this.annonce = new Annonce("","","","","","","","",""),
      errServeur => {
        if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = errServeur.error.text;
      }
    });
  }
}
