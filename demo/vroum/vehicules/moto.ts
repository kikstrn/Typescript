import { Moteur } from "../moteurs/moteur";
import { Vehicule } from "./vehicule";

export class Moto extends Vehicule{
    constructor(marque : string, couleur : string, prix : number, moteur : Moteur) {
        super(marque, couleur, prix, moteur)
    }

    displayMoto = () => {
        console.log("Ma moto est une " + this.get_marque() + " de couleur " + this.get_couleur() + " que j'ai acheté au prix de " + this.get_prix() + "€, elle a  " + this.moteur.get_kilometrage() + "km au compteur et peut atteindre une vitesse de " + this.moteur.get_vitesse() + "km/h grace a mon moteur " + this.moteur.get_type()); 
    }
}