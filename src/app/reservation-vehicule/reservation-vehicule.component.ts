import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from '../models/vehicule';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-vehicule',
  templateUrl: './reservation-vehicule.component.html',
  styleUrls: ['./reservation-vehicule.component.scss']
})
export class ReservationVehiculeComponent implements OnInit {

  chauffeur: boolean = false;
  dateDeDepart: string;
  dateDeRetour: string;
  heureDeDepart: string;
  heureDeRetour: string;
  vehiculeDeSociete: Vehicule[] = [];
  selectedReservation: Reservation = new Reservation("",new Vehicule("","",""),"","","");

  constructor(private router: Router, private _postSrv: ReservationService) {}

  ngOnInit() {
    this._postSrv
      .listerVehiculeDeSociete()
      .subscribe(
        Vehicule => this.vehiculeDeSociete = Vehicule);
  }

  select(vehicule: Vehicule) {
    this.selectedReservation.vehiculeSoc = vehicule;
    this.selectedReservation.depart = new Date(this.dateDeDepart.concat("T"+this.heureDeDepart+":00"));
    this.selectedReservation.arrive = new Date(this.dateDeRetour.concat("T"+this.heureDeRetour+":00"));
    this.selectedReservation.chauffeur = this.chauffeur;
  }

  reserverVehicule(reservation: Reservation) {
    this._postSrv
    .reservationDeVehicule(reservation)
    .subscribe(
      () => this.router.navigate(['/collaborateur/reservations']));
  }
}