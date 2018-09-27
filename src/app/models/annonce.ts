import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Vehicule } from "./vehicule";
import { Collegue } from "./collegue";

export class Annonce {

    id: number;
    horaireDeDepart: Date;
    lieuDeDepart: string;
    lieuDeDestination: string;
    nombreDeVoyageurs: number;
    vehicule: Vehicule;
    collegue: Collegue;

    constructor(id,horaireDeDepart, lieuDeDepart, lieuDeDestination, nombreDeVoyageurs, vehicule, collegue) {
        this.id = id;
        this.horaireDeDepart = horaireDeDepart;
        this.lieuDeDepart = lieuDeDepart;
        this.lieuDeDestination = lieuDeDestination;
        this.nombreDeVoyageurs = nombreDeVoyageurs;
        this.vehicule = vehicule;
        this.collegue = collegue;

    }
}