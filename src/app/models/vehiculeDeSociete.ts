import { Vehicule } from "./vehicule";

export class VehiculeDeSociete extends Vehicule {
    photo: string;
    categorie: string;
    statut: string;


    constructor(immatriculation, marque, modele,photo, categorie, statut){
        super(immatriculation, marque, modele)
        this.photo = photo;
        this.categorie = categorie;
        this.statut = statut;
    }
}