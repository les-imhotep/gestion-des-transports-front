import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Collegue } from "../auth/auth.domains";

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.scss']
})
export class BandeauComponent implements OnInit {

  collegueConnecte: Observable<Collegue>;

  constructor(private _authSrv: AuthService, private _router: Router) {

}

  ngOnInit(): void {

    this.collegueConnecte = this._authSrv.collegueConnecteObs;
}

}
