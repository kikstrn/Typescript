import { Door } from "./door";
import { House } from "./house";

export class Appartement extends House{

    constructor(door : Door){
        super(50, door)
    }

    displayApt(){
        console.log("La surface de mon appartement est de " + this.get_surface() + "m²");
        
    }
}