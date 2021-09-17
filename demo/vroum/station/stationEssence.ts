export class StationEssence {

    private _prixEssence : number;
    private _prixDiesel : number;

    constructor(prixEssence: number, prixDiesel: number) {
        this._prixDiesel = prixDiesel;
        this._prixEssence = prixEssence;
    }

    getPrixEssence = () => {
        return this._prixEssence;
    }

    getPrixDiesel = () => {
        return this._prixDiesel;
    }
    
}