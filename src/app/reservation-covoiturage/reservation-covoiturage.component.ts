import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';
import { Annonce } from '../models/annonce';
import { Vehicule } from '../models/vehicule';
import { AnnonceService } from '../services/annonce.service';
import { CovoiturageService } from '../services/covoiturage.service';
import { Router } from '@angular/router';

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

  constructor(private _postAnnSrv: AnnonceService,private _postCovSrv: CovoiturageService, private router: Router) { }

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
      () => this.router.navigate(['/collaborateur/reservations']));
  }
}
