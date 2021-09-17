export class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number)
    constructor(x: number, y: number, z : number)
    constructor(x: number, y: number, z? : number) {
        this._x = x;
        this._y = y;
    }

    distance = (point : Point): number => {
        let distance : number =  0;
        distance = Math.sqrt(Math.pow((this._x - point.x),2) + Math.pow((this._y - point.y),2));
        return distance;
    }

    public get x(): number {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }
}