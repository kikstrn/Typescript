export class Pokemon {
    private _nom : string;
    private _hp : number;
    private _atk : number;
    private _type : string;

    constructor(nom : string, hp : number, atk : number, type : string) {
        this._nom = nom;
        this._atk = atk;
        this._hp = hp;
        this._type = type;
    }

    public get_nom(): string {
        return this._nom;
    }

    public set_nom(nom: string) {
        this._nom = nom;
    }

    public get_hp(): number {
        return this._hp;
    }

    public set_hp(hp: number) {
        this._hp = hp;
    }

    public get_atk(): number {
        return this._atk;
    }

    public set_atk(atk: number) {
        this._atk = atk;
    }

    public get_type(): string {
        return this._type;
    }

    public set_type(type: string) {
        this._type = type;
    }

    idDead = () : boolean => {
        if (this._hp <= 0) {
             console.log(this._nom + " EST MORT !!!");            
            return false;
        }else {
            return true;
        }
    }

    attaque(pokemon : Pokemon) {
        console.log(this._nom + " ATTAQUE " + pokemon._nom);
        let degats = pokemon._hp - this._atk;
        console.log(pokemon._nom + " a subit " + this._atk + " de degats. ! Il lui reste " + degats + " de points de vies !");     
        
    }
}