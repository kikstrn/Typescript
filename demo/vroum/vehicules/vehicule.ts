import { Moteur } from "../moteurs/moteur";
import { StationEssence } from "../station/stationEssence";

export class Vehicule {
    private _marque : string;
    private _couleur : string;
    private _prix : number;
    moteur : Moteur

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this.moteur = moteur;
    }

    public get_marque(): string {
        return this._marque;
    }

    public set_marque(marque: string) {
        this._marque = marque;
    }

    public get_couleur(): string {
        return this._couleur;
    }

    public set_couleur(couleur: string) {
        this._couleur = couleur;
    }

    public get_prix(): number {
        return this._prix;
    }

    public set_prix(prix: number) {
        this._prix = prix;
    }

    pleinEssence = (station : StationEssence, nbLitre: number) => {
        let prix = nbLitre * station.getPrixEssence();
        console.log("Le véhicule " + this._marque + " a depense " + prix + "€ pour " + nbLitre + "L d'essence.");
    }
}