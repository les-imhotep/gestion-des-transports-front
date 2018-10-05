import { Vehicule } from "./vehicule";

export class VehiculeDeSociete extends Vehicule {
    photo: string;
    categorie: string;
    statut: string;


    constructor(immatriculation, marque, modele, nombreDePlace, photo, categorie, statut){
        super(immatriculation, marque, modele, nombreDePlace)
        this.photo = photo;
        this.categorie = categorie;
        this.statut = statut;
    }
}