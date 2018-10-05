export class Vehicule {

    
    immatriculation: string;
    marque: string;
    modele: string;
    nombreDePlace: string;

    constructor(immatriculation, marque, modele, nombreDePlace) {
        this.immatriculation = immatriculation;
        this.marque = marque;
        this.modele = modele;
        this.nombreDePlace = nombreDePlace;
    }
}