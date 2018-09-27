import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lister-reservation',
  templateUrl: './lister-reservation.component.html',
  styleUrls: ['./lister-reservation.component.scss']
})
export class ListerReservationComponent implements OnInit {

  reservationEnCours: Reservation[] = [];
  reservationHistorique: Reservation[] = [];

  constructor(private _postSrv: ReservationService, private _activateRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this._postSrv
      .listerReservationEnCours()
      .subscribe(
        tabReservation => this.reservationEnCours = tabReservation);

    this._postSrv
      .listerReservationHistorique()
      .subscribe(
        tabReservation => this.reservationHistorique = tabReservation);
  }



}
