import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Collegue } from '../auth/auth.domains';
import { Router } from '@angular/router';
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-menu-collaborateur',
  templateUrl: './menu-collaborateur.component.html',
  styleUrls: ['./menu-collaborateur.component.scss']
})
export class MenuCollaborateurComponent implements OnInit {

  collegue:Collegue;

  constructor(private _authSrv:AuthService, private _router:Router) {

    this.collegue=_authSrv.getCollegue();

  }


  ngOnInit() {
  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/auth'])
    );
  }


  /**
   * Verifie si l'utilisateur est un admin
   */
  isAdmin():boolean {
    
    for (let i=0; i<this.collegue.roles.length; i++){
      if (this.collegue.roles[i]=='ROLE_ADMINISTRATEUR'){
        return true;
      }
    }
    return false;
  }
}
