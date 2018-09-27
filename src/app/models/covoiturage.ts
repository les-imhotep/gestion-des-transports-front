import { Annonce } from "./annonce";
import { Collegue } from "./collegue";
import { Vehicule } from "./vehicule";

export class Covoiturage {

    id: number;
    collegue: Collegue;
    annonce: Annonce;

    constructor(id, collegue, annonce) {
        this.id = id;
        this.collegue = collegue;
        this.annonce = annonce;
    }
}