import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.scss']
})
export class ListeAnnoncesComponent implements OnInit {

  annonces: Annonce[] = [];

  constructor(private _postSrv: CollegueService) { 
    
  }

  ngOnInit() {
    this._postSrv
       .listerAnnonces()
       .subscribe(
        tabAnnonces => this.annonces = tabAnnonces,
        
      );
  }

}
