import { Personne } from "./personne";
    
export class Teacher extends Personne {
    private _subject : string;

    

    constructor(subject : string, age : number) {
        super(age);
        this._subject = subject;
    }

    public get subject(): string {
        return this._subject;
    }

    public set subject(subject: string) {
        this._subject = subject;
    }
    
    explain = () => {
        console.log("Explanation begin about " + this._subject);
        
    }
}