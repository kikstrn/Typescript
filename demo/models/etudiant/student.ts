import { Personne } from "./personne";

export class Student extends Personne {

    constructor(age : number) {
        super(age)
    }

    goToClass = () => {
        console.log("I'm going to class");    
    }

    displayAge = () => {
        console.log("My age is " + this.age + " years old.");    
    }

} 