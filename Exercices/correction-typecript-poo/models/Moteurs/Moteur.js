"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, km) {
        var _this = this;
        //GETTERS
        this.getVitesse = function () {
            return _this.vitesse;
        };
        this.getKm = function () {
            return _this.km;
        };
        //SETTERS
        this.setVitesse = function (vitesse) {
            _this.vitesse = vitesse;
        };
        this.setKm = function (km) {
            _this.km = km;
        };
        this.vitesse = vitesse;
        this.km = km;
    }
    return Moteur;
}());
exports.Moteur = Moteur;
//# sourceMappingURL=Moteur.js.map