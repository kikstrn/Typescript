export class Rectangle {
    a : number;
    b : number
    constructor(a: number, b : number) {
        this.a = a;
        this.b = b;
    }

    surface = () : number  =>{
        let resultat = this.a * this.b;
        return resultat;
    }
}