import { Timestamp } from "rxjs/internal/operators/timestamp";

export class Annonce {

    id: number;
    horaireDeDepart: Date;
    lieuDeDepart: string;
    lieuDeDestination: string;
    nombreDeVoyageurs: number;

    constructor(id,horaireDeDepart, lieuDeDepart, lieuDeDestination, nombreDeVoyageurs) {
        this.id = id;
        this.horaireDeDepart = horaireDeDepart;
        this.lieuDeDepart = lieuDeDepart;
        this.lieuDeDestination = lieuDeDestination;
        this.nombreDeVoyageurs = nombreDeVoyageurs;

    }
}