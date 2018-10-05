import { Vehicule } from "./vehicule";

export class Reservation {

    id: number;
    vehiculeSoc: Vehicule;
    depart: Date;
    arrive: Date;
    chauffeur: boolean;

    constructor(id, vehiculeSoc, depart, arrive, chauffeur) {
        
        this.id = id;
        this.vehiculeSoc = vehiculeSoc;
        this.depart = depart;
        this.arrive = arrive;
        this.chauffeur = chauffeur;
    }
}