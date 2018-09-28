import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from '../models/vehicule';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-vehicule',
  templateUrl: './reservation-vehicule.component.html',
  styleUrls: ['./reservation-vehicule.component.scss']
})
export class ReservationVehiculeComponent implements OnInit {

  vehicule: Vehicule = new Vehicule("", "", "");

  constructor(private route: ActivatedRoute, private _postSrv: ReservationService) { }

  ngOnInit() {
    this._postSrv
      .reserverUnVehicule()
      .subscribe(
        Vehicule => this.vehicule = Vehicule
      );
  }

}
