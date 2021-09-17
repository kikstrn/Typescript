export class Personne {
    private _age : number;    

    constructor(age : number) {
        this._age = age;
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

    hello = () => {
        console.log("Hello !");
        
    }
}