import { Moteur } from "./moteur";

export class MoteurElectrique extends Moteur {
    constructor(vitesse : number, kilometrage : number) {
        super(vitesse, kilometrage)
        this.set_type("electrique")
    }
}