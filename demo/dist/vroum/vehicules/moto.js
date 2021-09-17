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
exports.Moto = void 0;
var vehicule_1 = require("./vehicule");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marque, couleur, prix, moteur) {
        var _this = _super.call(this, marque, couleur, prix, moteur) || this;
        _this.displayMoto = function () {
            console.log("Ma moto est une " + _this.get_marque() + " de couleur " + _this.get_couleur() + " que j'ai acheté au prix de " + _this.get_prix() + "€, elle a  " + _this.moteur.get_kilometrage() + "km au compteur et peut atteindre une vitesse de " + _this.moteur.get_vitesse() + "km/h grace a mon moteur " + _this.moteur.get_type());
        };
        return _this;
    }
    return Moto;
}(vehicule_1.Vehicule));
exports.Moto = Moto;
//# sourceMappingURL=moto.js.map