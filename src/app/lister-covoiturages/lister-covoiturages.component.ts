import { Component, OnInit } from '@angular/core';
import { Covoiturage } from '../models/covoiturage';
import { CovoiturageService } from '../services/covoiturage.service';
import { ActivatedRoute} from '@angular/router';
import { Collegue } from '../models/collegue';
import { Annonce } from '../models/annonce';
import { Vehicule } from '../models/vehicule';

@Component({
  selector: 'app-lister-covoiturages',
  templateUrl: './lister-covoiturages.component.html',
  styleUrls: ['./lister-covoiturages.component.scss']
})
export class ListerCovoituragesComponent implements OnInit {

  covoituragesEnCours: Covoiturage[] = [];
  covoituragesHistorique: Covoiturage[] = [];
  selectedCovoit: Covoiturage = new Covoiturage("",new Collegue("","",""), new Annonce("", "","","","","","",new Vehicule("","",""),new Collegue("","","")));

  constructor(private _postSrv: CovoiturageService, private _activateRoute:ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.selectedCovoit);
    this._postSrv
      .listerCovoituragesEnCours()
      .subscribe(
        tabCovoiturages => this.covoituragesEnCours = tabCovoiturages);

    this._postSrv
      .listerCovoituragesHistorique()
      .subscribe(
        tabCovoiturages => this.covoituragesHistorique = tabCovoiturages);
  }

  supprimer(id: number) {
    this._postSrv.supprimerCovoiturage(id)
    .subscribe(() => this.ngOnInit());
  }

  select(covoit: Covoiturage) {
    this.selectedCovoit=covoit;
    console.log(this.selectedCovoit)
  }

}
