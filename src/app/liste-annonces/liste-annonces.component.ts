import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.scss']
})
export class ListeAnnoncesComponent implements OnInit {

  annoncesEnCours: Annonce[] = [];
  annoncesHistorique: Annonce[] = [];

  constructor(private _postSrv: CollegueService, private router: Router) {

  }

  ngOnInit() {
    this._postSrv
      .listerAnnoncesEnCours()
      .subscribe(
        tabAnnonces => this.annoncesEnCours = tabAnnonces);

    this._postSrv
      .listerAnnoncesHistorique()
      .subscribe(
        tabAnnonces => this.annoncesHistorique = tabAnnonces);
  }

  supprimer() {
    this._postSrv.supprimerAnnonce()
    .subscribe(() => this.ngOnInit());
  }
}
