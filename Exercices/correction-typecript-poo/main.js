"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moteur_1 = require("./models/Moteurs/Moteur");
var StationEssence_1 = require("./models/StationEssence/StationEssence");
var Voiture_1 = require("./models/Vehicules/Voiture/Voiture");
var m = new Moteur_1.Moteur(130, 19999);
var v = new Voiture_1.Voiture("tesla", "rouge", 42999, m);
var s = new StationEssence_1.StationEssence(1.17, 1.1);
v.getMoteur().setKm(v.getMoteur().getKm() + 134);
console.log(v.getMoteur().getKm());
v.faireLePleinEssence(s, 42);
//# sourceMappingURL=main.js.map