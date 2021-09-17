import { Point2D } from "./point2d";


export class Point3D extends Point2D {
        z : number;

    constructor(x : number, y : number, z : number) {
        super(x,y)
        this.z = z;
    }

    translate = (dX : number, dY : number, dZ? : number) : void => {
        this.z += dZ ? dZ : 0;
        super.translate(dX,dY)
    }
}