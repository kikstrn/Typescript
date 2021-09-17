import { House } from "./house"

export class Person {
    nom : string
    house : House
    constructor(nom : string, house : House) {
        this.house = house;
        this.nom = nom
    }
    
    displayPerson() {
        console.log("Je m'appelle " + this.nom + " , ma maison est de " + this.house.get_surface() + "m², j'ai une porte de couleur " + this.house.door.get_color());
        
    }
}