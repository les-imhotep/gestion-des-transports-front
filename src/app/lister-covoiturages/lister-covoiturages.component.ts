import { Component, OnInit } from '@angular/core';
import { Covoiturage } from '../models/covoiturage';
import { CovoiturageService } from '../services/covoiturage.service';
import { Annonce } from '../models/annonce';
import { Collegue } from '../models/collegue';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lister-covoiturages',
  templateUrl: './lister-covoiturages.component.html',
  styleUrls: ['./lister-covoiturages.component.scss']
})
export class ListerCovoituragesComponent implements OnInit {

  covoituragesEnCours: Covoiturage[] = [];
  covoituragesHistorique: Covoiturage[] = [];
  //annonce: Annonce = new Annonce("","","","");
  //collegue: Collegue = new Collegue("","","");

  constructor(private _postSrv: CovoiturageService, private _activateRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this._postSrv
      .listerCovoituragesEnCours()
      .subscribe(
        tabCovoiturages => this.covoituragesEnCours = tabCovoiturages);

    this._postSrv
      .listerCovoituragesHistorique()
      .subscribe(
        tabCovoiturages => this.covoituragesHistorique = tabCovoiturages);
  }



}
