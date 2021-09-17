"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vhicule = void 0;
var Vhicule = /** @class */ (function () {
    function Vhicule(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this.moteur = moteur;
    }
    Vhicule.prototype.get_marque = function () {
        return this._marque;
    };
    Vhicule.prototype.set_marque = function (marque) {
        this._marque = marque;
    };
    Vhicule.prototype.get_couleur = function () {
        return this._couleur;
    };
    Vhicule.prototype.set_couleur = function (couleur) {
        this._couleur = couleur;
    };
    Vhicule.prototype.get_prix = function () {
        return this._prix;
    };
    Vhicule.prototype.set_prix = function (prix) {
        this._prix = prix;
    };
    return Vhicule;
}());
exports.Vhicule = Vhicule;
//# sourceMappingURL=vehicule.js.map