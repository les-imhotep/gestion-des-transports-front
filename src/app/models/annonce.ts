import { Timestamp } from "rxjs/internal/operators/timestamp";

export class Annonce {

    horaireDeDepart: Date;
    lieuDeDepart: string;
    lieuDeDestination: string;
    nombreDeVoyageurs: number;

    constructor(horaireDeDepart, lieuDeDepart, lieuDeDestination, nombreDeVoyageurs) {
        this.horaireDeDepart = horaireDeDepart;
        this.lieuDeDepart = lieuDeDepart;
        this.lieuDeDestination = lieuDeDestination;
        this.nombreDeVoyageurs = nombreDeVoyageurs;

    }
}