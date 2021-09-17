"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
var vehicule_1 = require("./vehicule");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(marque, couleur, prix, moteur) {
        var _this = _super.call(this, marque, couleur, prix, moteur) || this;
        _this.displayVoiture = function () {
            console.log("Ma voiture est une " + _this.get_marque() + " de couleur " + _this.get_couleur() + " que j'ai acheté au prix de " + _this.get_prix() + "€, elle a  " + _this.moteur.get_kilometrage() + "km au compteur et peut atteindre une vitesse de " + _this.moteur.get_vitesse() + "km/h grace a mon moteur " + _this.moteur.get_type());
        };
        return _this;
    }
    return Voiture;
}(vehicule_1.Vehicule));
exports.Voiture = Voiture;
//# sourceMappingURL=voiture.js.map