import { Vehicule } from "./vehicule";
import { Collegue } from "./collegue";

export class Reservation {

    //collegue: Collegue;
    id: number;
    vehicule: Vehicule;
    horaireDepart: Date;
    horaireArrivee: Date;


    constructor(id, vehicule, horaireDepart, horaireArrivee) {
        //this.collegue = collegue;
        this.id = id;
        this.vehicule = vehicule;
        this.horaireDepart = horaireDepart;
        this.horaireArrivee = horaireArrivee;
        
    }
}