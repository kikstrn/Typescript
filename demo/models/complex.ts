export class Complex {
    numReel1 : number;
    numImaginaire1 : number;
    numReel2 : number;
    numImaginaire2 : number;
    constructor(numReel1 : number, numImaginaire1 : number, numReel2 : number, numImaginaire2 : number) {
        this.numReel1 = numReel1;
        this.numImaginaire1 = numImaginaire1;
        this.numReel2 = numReel2;
        this.numImaginaire2 = numImaginaire2;
    }

    sommeReel = () : number => {
        let resultReel = this.numReel1 + this.numReel2;
        return resultReel;
    }

    sommeImaginaire = () : number => {
        let resultImaginaire = this.numImaginaire1 + this.numImaginaire2;
        return  resultImaginaire;
    }

}