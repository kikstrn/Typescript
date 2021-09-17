import read from "readline-sync";
import { Appartement } from "./models/habitation/appartement";
import { Pokemon } from "./pokemons/pokemon";
import { Eau } from "./pokemons/types/eau";
import { Feu } from "./pokemons/types/feu";
import { Plante } from "./pokemons/types/plante";
import { MoteurDiesel } from "./vroum/moteurs/moteurDiesel";
import { MoteurElectrique } from "./vroum/moteurs/moteurElectrique";
import { MoteurEssence } from "./vroum/moteurs/moteurEssence";
import { StationEssence } from "./vroum/station/stationEssence";
import { Moto } from "./vroum/vehicules/moto";
import { Vehicule } from "./vroum/vehicules/vehicule";
import { Voiture } from "./vroum/vehicules/voiture";

let read : read = require("readline-sync");

// let str : string = "Hello";
// let num : number = 12;
// let bool : boolean = true;

// let prenoms : string[] = ["", "", ""];

// let addition = (num1:number, num2:number) : number => {
//     let result : number = num1 + num2;
//     return result;
// }

// console.log(addition(12,4));


// HUMAIN
// let humain1 : Humain = new Humain("Kilian", "Tournon", 27, true);

//RECTANGLE
// let rectangle1 : Rectangle = new Rectangle(4,7);
// let surface : number = rectangle1.surface();

// STUDENT
// let nom : string = read.question("Quel est votre nom ? : ");
// let note1 : number = read.questionFloat("Entrer votre premiere note : ");
// let note2 : number = read.questionFloat("Entrer votre deuxieme note : ");
// let student1 : Student = new Student(nom, note1, note2);
// let moyenne : number = student1.moyenne();
//console.log("La moyenne de " + nom + " est de : " + moyenne);


// NOMBRE COMPLEXE
/**
 * Premier nombre
 */
// console.log("Premier nombre");
// let numReel1 : number = read.questionFloat("Entrer un nombre reel : ");
// let numImaginaire1 : number = read.questionFloat("Entrer un nombre imaginaire : ");

/**
 * Deuxieme nombre
 */
// console.log("Deuxieme nombre");
// let numReel2 : number = read.questionFloat("Entrer un nombre reel : ");
// let numImaginaire2 : number = read.questionFloat("Entrer un nombre imaginaire : ");

// let complex : Complex = new Complex(numReel1,numImaginaire1,numReel2,numImaginaire2);
// let sommeReel : number = complex.sommeReel();
// let sommeImaginaire : number = complex.sommeImaginaire();
// console.log("La somme est " + sommeReel + " + " + sommeImaginaire + "i");


// DISTANCE ENTRE 2 POINTS
// let point1 : Point2D = new Point2D(5,6);
// let point2 : Point3D = new Point3D(3,2,6);

// point1.translate(2,2);
// point2.translate(3,3,3);

// console.log(point1);
// console.log(point2);

// L'ETUDIANT
// let personne : Personne = new Personne(27);
// personne.hello();
// console.log(personne);

// let student : Student = new Student(15);
// student.hello();
// student.goToClass();
// student.displayAge();
// console.log(student);

// let teacher : Teacher = new Teacher("Typescript", 40);
// teacher.hello();
// teacher.explain();
// console.log(teacher);

// MAISON
// let door : Door = new Door("rouge")
// let house : House = new House(75, door)
// house.door.DisplayDoor();
// house.display();
// console.log(house);

// let appartement : Appartement = new Appartement(door);
// appartement.displayApt();
// console.log(appartement);

// let person : Person = new Person("Yves", house);
// person.displayPerson();
// console.log(person);


// VEHICULES
// let moteur : MoteurDiesel = new MoteurDiesel(260, 69000);
// let moteurMoto : MoteurEssence = new MoteurEssence(380, 14500);
// let voiture : Voiture = new Voiture("peugeot", "blanche", 16000, moteur);
// let moto : Moto = new Moto("Suzuki", "rouge", 12000, moteurMoto);
// let station : StationEssence = new StationEssence(1.17,1.38);
// voiture.displayVoiture();
// voiture.pleinEssence(station, 50);
// moto.displayMoto();


// POKEMON
let pokemonEau : Eau = new Eau("Carapuce", 100, 13);
let pokemonFeu : Feu = new Feu("Dracaufeu", 100, 19);
let pokemonPlante : Plante = new Plante("Bulbizard", 100, 15);
let pokemonNormal : Pokemon = new Pokemon("Normal", 100, 10, "Normal")
let tour : number = 1;

let tourPokemon = (pokemon1 : Pokemon, pokemon2 : Pokemon) => {
    if(tour % 2 === 0) {
        pokemon1.attaque(pokemon2);
    }else{
        pokemon2.attaque(pokemon1);
    }
}

/**
 * Pokemon 2 attaque pokemon 1
 * @param pokemon1 
 * @param pokemon2 
 */
let combat = (pokemon1 : Pokemon, pokemon2 : Pokemon) =>{
    while (pokemon1.idDead() && pokemon2.idDead()) {
        if (tour%2 === 0) {
            read.question("Le Pokemon " + pokemon1.get_nom() + " s'apprete a attaquer " + pokemon2.get_nom() + "(Appuyez sur entrer)");
        }else {
            read.question("Le Pokemon " + pokemon2.get_nom() + " s'apprete a attaquer " + pokemon1.get_nom() + " (Appuyez sur entrer)");
        }
        tourPokemon(pokemon1,pokemon2);
        tour++;
    }

}

combat(pokemonFeu,pokemonEau);





