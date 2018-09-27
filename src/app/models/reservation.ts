import { Vehicule } from "./vehicule";
import { Collegue } from "./collegue";

export class Reservation {

    id: number;
    vehicule: Vehicule;
    horaireDepart: Date;
    horaireArrivee: Date;


    constructor(id, vehicule, horaireDepart, horaireArrivee) {
        
        this.id = id;
        this.vehicule = vehicule;
        this.horaireDepart = horaireDepart;
        this.horaireArrivee = horaireArrivee;
        
    }
}