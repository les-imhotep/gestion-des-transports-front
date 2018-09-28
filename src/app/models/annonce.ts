import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Vehicule } from "./vehicule";
import { Collegue } from "./collegue";

export class Annonce {

    id: number;
    jourDeDepart: string;
    heureDeDepart: string;
    lieuDeDepart: string;
    lieuDeDestination: string;
    nombreDeVoyageurs: number;
    nombreDePlacesDisponibles: number;
    vehicule: Vehicule;
    collegue: Collegue;

    constructor(id, jourDeDepart, heureDeDepart, lieuDeDepart, lieuDeDestination, nombreDeVoyageurs, vehicule, collegue, nombreDePlacesDisponibles) {
        this.id = id;
        this.jourDeDepart = jourDeDepart;
        this.heureDeDepart = heureDeDepart;
        this.lieuDeDepart = lieuDeDepart;
        this.lieuDeDestination = lieuDeDestination;
        this.nombreDeVoyageurs = nombreDeVoyageurs;
        this.vehicule = vehicule;
        this.collegue = collegue;
        this.nombreDePlacesDisponibles = nombreDePlacesDisponibles;

    }

    static fromAnnonceServeur(annonceServeur: any): Annonce {
        const annonceIhm = new Annonce("","","","","","","","", "");
        annonceIhm.jourDeDepart = annonceServeur.jourDeDepart;
        annonceIhm.heureDeDepart = annonceServeur.heureDeDepart;
        annonceIhm.lieuDeDepart = annonceServeur.lieuDeDepart;
        annonceIhm.lieuDeDestination = annonceServeur.lieuDeDestination;
        annonceIhm.nombreDeVoyageurs = annonceServeur.nombreDeVoyageurs;
        annonceIhm.nombreDePlacesDisponibles = annonceServeur.nombreDePlacesDisponibles;
        annonceIhm.vehicule = annonceServeur.vehicule;
        annonceIhm.collegue = annonceServeur.collegue;
        return annonceIhm;
}
}