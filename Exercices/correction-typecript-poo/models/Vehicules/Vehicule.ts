import { Moteur } from "../Moteurs/Moteur";
import { StationEssence } from "../StationEssence/StationEssence";

export class Vehicule {

    private marque: string;
    private couleur: string;
    private prix: number;
    private moteur: Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
    }

    pleinEssence = (station : StationEssence, nbLitre: number) => {
        let prix = nbLitre * station.getPrixEssence();
        console.log(`La voiture ${this.marque} a dépensé ${prix}€ pour ${nbLitre}L d'essence `)
    }

    //GETTERS
    getMarque = () => {
        return this.marque;
    }

    getCouleur = () => {
        return this.couleur;
    }

    getPrix = () => {
        return this.prix;
    }

    getMoteur = () => {
        return this.moteur;
    }

    //SETTERS
    setMarque = (marque: string) => {
        this.marque = marque;
    }

    setCouleur = (couleur: string) => {
        this.couleur = couleur;
    }

    setPrix = (prix: number) => {
        this.prix = prix;
    }

    setMoteur = (moteur: Moteur) => {
        this.moteur = moteur;
    }

}