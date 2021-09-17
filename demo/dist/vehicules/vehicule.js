"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this.moteur = moteur;
    }
    Vehicule.prototype.get_marque = function () {
        return this._marque;
    };
    Vehicule.prototype.set_marque = function (marque) {
        this._marque = marque;
    };
    Vehicule.prototype.get_couleur = function () {
        return this._couleur;
    };
    Vehicule.prototype.set_couleur = function (couleur) {
        this._couleur = couleur;
    };
    Vehicule.prototype.get_prix = function () {
        return this._prix;
    };
    Vehicule.prototype.set_prix = function (prix) {
        this._prix = prix;
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
//# sourceMappingURL=vehicule.js.map