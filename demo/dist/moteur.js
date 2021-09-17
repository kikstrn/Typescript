"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, kilometrage) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }
    Moteur.prototype.get_vitesse = function () {
        return this._vitesse;
    };
    Moteur.prototype.set_vitesse = function (vitesse) {
        this._vitesse = vitesse;
    };
    Moteur.prototype.get_kilometrage = function () {
        return this._kilometrage;
    };
    Moteur.prototype.set_kilometrage = function (kilometrage) {
        this._kilometrage = kilometrage;
    };
    return Moteur;
}());
exports.Moteur = Moteur;
//# sourceMappingURL=moteur.js.map