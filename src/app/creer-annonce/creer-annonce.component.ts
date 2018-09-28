import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';
import { Router } from '@angular/router';
import { Vehicule } from '../models/vehicule';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.scss']
})
export class CreerAnnonceComponent implements OnInit {

  annonce = new Annonce("","","","","","",new Vehicule("","",""), new Collegue("","",""),"");
  errMsg: string;
  constructor(private _annonceSrv: AnnonceService, private router: Router) { }

  ngOnInit() {
  }

  submit() { 
    console.log(this.annonce)
    this._annonceSrv
      .publierAnnonce(this.annonce)
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
