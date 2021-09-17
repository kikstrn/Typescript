export class Point2D {
    x : number;
    y : number;

    constructor(x: number, y : number) {
        this.x = x;
        this.y = y;
    }
    translate(dX : number, dY : number){
        this.x += dX;
        this.y += dY;
    }
}