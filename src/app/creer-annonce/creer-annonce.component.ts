import { Component, OnInit,  ViewChild} from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';
import { Router } from '@angular/router';
import { Vehicule } from '../models/vehicule';
import { Collegue } from '../models/collegue';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.scss']
})
export class CreerAnnonceComponent implements OnInit {

  annonce = new Annonce("","","","","","",new Vehicule("","","",""), new Collegue("","",""),"");
  selectedAnnonce: Annonce = new Annonce("", "","","","","","",new Vehicule("","","",""),new Collegue("","",""));
  errMsg: string = "";

  
  @ViewChild('basicModalExc') modalExc:ModalDirective;
  @ViewChild('basicModalOK') modalOK:ModalDirective;

  constructor(private _annonceSrv: AnnonceService, private router: Router) { }

  ngOnInit() {
    this.annonce = new Annonce("","","","","","",new Vehicule("","","",""), new Collegue("","",""),"");
    this.errMsg = "";
}

submit() { 
  this._annonceSrv
    .publierAnnonce(this.annonce)
    .subscribe(
      () => {
        this.showModalOK();
      },
      errServeur => {
        if (errServeur.error.message) {
            this.errMsg = errServeur.error.message;
        } else {
            this.errMsg = errServeur.error.text;
        }
        this.showModalEX();
    });
}

  select(annonce: Annonce) {
    this.selectedAnnonce=annonce;
  }

  showModalEX() {
      this.modalExc.show();
    }
    showModalOK() {
      this.modalOK.show();
    }

}
