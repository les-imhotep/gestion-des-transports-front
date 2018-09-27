import { Vehicule } from "./vehicule";
import { Collegue } from "./collegue";

export class Reservation {

    //collegue: Collegue;
    vehicule: Vehicule;
    horaireDepart: Date;
    horaireArrivee: Date;


    constructor(vehicule, horaireDepart, horaireArrivee) {
        //this.collegue = collegue;
        this.vehicule = vehicule;
        this.horaireDepart = horaireDepart;
        this.horaireArrivee = horaireArrivee;
        
    }
}