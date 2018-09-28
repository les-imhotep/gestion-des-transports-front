import { Component, OnInit } from '@angular/core';
import { CovoiturageService } from '../services/covoiturage.service';
import { Covoiturage } from '../models/covoiturage';
import { Collegue } from '../models/collegue';
import { Annonce } from '../models/annonce';
import { Vehicule } from '../models/vehicule';

@Component({
  selector: 'app-reservation-covoiturage',
  templateUrl: './reservation-covoiturage.component.html',
  styleUrls: ['./reservation-covoiturage.component.scss']
})
export class ReservationCovoiturageComponent implements OnInit {

  depart: string = "";
  destination: string = "";
  dateDepart: string = "";
  heureDepart: string = "";
  covoituragesEnCours: Covoiturage[] = [];
  selectedCovoit: Covoiturage = new Covoiturage("",new Collegue("","",""), new Annonce("", "","","","","","",new Vehicule("","",""),new Collegue("","","")));

  constructor(private _postSrv: CovoiturageService) { }

  ngOnInit() {
    this._postSrv
      .listerAllCovoituragesEnCours()
      .subscribe(
        tabCovoiturages => this.covoituragesEnCours = tabCovoiturages);
  }
}
