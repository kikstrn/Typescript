export class Moteur {
    private _vitesse : number;
    private _kilometrage : number;
    private _type : string;

    constructor(vitesse : number, kilometrage : number) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }

    public get_vitesse(): number {
        return this._vitesse;
    }

    public set_vitesse(vitesse: number) {
        this._vitesse = vitesse;
    }

    public get_kilometrage(): number {
        return this._kilometrage;
    }

    public set_kilometrage(kilometrage: number) {
        this._kilometrage = kilometrage;
    }

    public get_type(): string {
        return this._type;
    }

    public set_type(type: string) {
        this._type = type;
    }
}