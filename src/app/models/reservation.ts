import { Vehicule } from "./vehicule";

export class Reservation {

    id: number;
    vehiculeSoc: Vehicule;
    depart: Date;
    arrive: Date;


    constructor(id, vehiculeSoc, depart, arrive) {
        
        this.id = id;
        this.vehiculeSoc = vehiculeSoc;
        this.depart = depart;
        this.arrive = arrive;
        
    }
}