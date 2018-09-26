export class Annonce {

    horaireDeDepart: string;
    lieuDeDepart: string;
    lieuDeDestination: string;
    nombreDeVoyageurs: number;

    constructor(lieuDeDepart, lieuDeDestination, nombreDeVoyageurs) {
        this.lieuDeDepart = lieuDeDepart;
        this.lieuDeDestination = lieuDeDestination;
        this.nombreDeVoyageurs = nombreDeVoyageurs;

    }
}