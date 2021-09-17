import { Door } from "./door";

export class House {
    private _surface : number
    door : Door

    constructor(surface : number, door : Door) {
        this._surface = surface;
        this.door = door;
    }

    public get_surface(): number {
        return this._surface;
    }

    public set_surface(surface: number) {
        this._surface = surface;
    }

    getDoor() {
        console.log(this.door);        
    }

    display = () => {
        console.log("J'ai une maison, ma surface est de " + this._surface + " m².");
        
    }
}
