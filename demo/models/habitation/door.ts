export class Door {
    private _color : string

    constructor(color : string) {
        this._color = color
    }

    public get_color(): string {
        return this._color;
    }

    public set_color(color: string) {
        this._color = color;
    }    

    DisplayDoor = () => {
        console.log("Je suis une porte de couleur " + this._color);        
    }
}