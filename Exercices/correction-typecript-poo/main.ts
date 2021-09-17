import { Moteur } from "./models/Moteurs/Moteur";
import { StationEssence } from "./models/StationEssence/StationEssence";
import { Voiture } from "./models/Vehicules/Voiture/Voiture";

let m = new Moteur(130, 19999);

let v = new Voiture("tesla", "rouge", 42999, m);

let s = new StationEssence(1.17, 1.1);

v.getMoteur().setKm(v.getMoteur().getKm() + 134);

console.log(v.getMoteur().getKm());

v.faireLePleinEssence(s, 42);