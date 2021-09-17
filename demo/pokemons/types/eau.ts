import { Pokemon } from "../pokemon";

export class Eau extends Pokemon {
    constructor(nom : string, hp : number, atk : number) {
        super(nom, hp, atk, "Eau")
    }

    attaque(pokemon : Pokemon) {
        if(pokemon.get_type() === "Feu"){
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            console.log("L'attaque est efficace !!!");            
            let degats = pokemon.get_hp() - (this.get_atk() * 2 );
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + (this.get_atk() * 2) + " de degats. ! Il lui reste " + degats + " de points de vies !");     
        }else if (pokemon.get_type() === "Plante" || pokemon.get_type() === "Eau") {
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            console.log("L'attaque n'est pas efficace !!!"); 
            let degats = pokemon.get_hp() - (this.get_atk() * 0.5 );
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + (this.get_atk() * 0.5) + " de degats. ! Il lui reste " + degats + " de points de vies !");
        }else {
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            let degats = pokemon.get_hp() - this.get_atk();
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + this.get_atk() + " de degats. ! Il lui reste " + degats + " de points de vies !");
        }
    }
}