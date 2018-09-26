import { Annonce } from "./annonce";
import { Collegue } from "./collegue";

export class Covoiturage {

    collegue: Collegue;
    annonce: Annonce;
    //horaireDeDepart: Date;
    //lieuDeDepart: string;
    //lieuDeDestination: string;
    //vehicule: string;
    //chauffeur: string;

    constructor(collegue, annonce/*horaireDeDepart, lieuDeDepart, lieuDeDestination, vehicule, chauffeur*/) {
        this.collegue = collegue;
        this.annonce = annonce;
        //this.horaireDeDepart = horaireDeDepart;
        //this.lieuDeDepart = lieuDeDepart;
        //this.lieuDeDestination = lieuDeDestination;
        //this.vehicule = vehicule;
        //this.chauffeur = chauffeur;
    }
}