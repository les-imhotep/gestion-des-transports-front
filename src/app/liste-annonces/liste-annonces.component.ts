import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Annonce } from '../models';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.scss']
})
export class ListeAnnoncesComponent implements OnInit {

  @Input() annonce: Annonce = new Annonce("","","")
  annonces: string;

  constructor(private _postSrv: CollegueService) { }

  ngOnInit() {
    this._postSrv
       .listerAnnonces()
       .subscribe(
        Annonce => this.annonce = Annonce,
        
      );
  }

}
