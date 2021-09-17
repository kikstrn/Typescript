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
exports.Plante = void 0;
var pokemon_1 = require("../pokemon");
var Plante = /** @class */ (function (_super) {
    __extends(Plante, _super);
    function Plante(nom, hp, atk) {
        return _super.call(this, nom, hp, atk, "Plante") || this;
    }
    Plante.prototype.attaque = function (pokemon) {
        if (pokemon.get_type() === "Eau") {
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            console.log("L'attaque est efficace !!!");
            var degats = pokemon.get_hp() - (this.get_atk() * 2);
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + (this.get_atk() * 2) + " de degats. ! Il lui reste " + degats + " de points de vies !");
        }
        else if (pokemon.get_type() === "Feu" || pokemon.get_type() === "Plante") {
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            console.log("L'attaque n'est pas efficace !!!");
            var degats = pokemon.get_hp() - (this.get_atk() * 0.5);
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + (this.get_atk() * 0.5) + " de degats. ! Il lui reste " + degats + " de points de vies !");
        }
        else {
            console.log(this.get_nom() + " ATTAQUE " + pokemon.get_nom());
            var degats = pokemon.get_hp() - this.get_atk();
            pokemon.set_hp(degats);
            console.log(pokemon.get_nom() + " a subit " + this.get_atk() + " de degats. ! Il lui reste " + degats + " de points de vies !");
        }
    };
    return Plante;
}(pokemon_1.Pokemon));
exports.Plante = Plante;
//# sourceMappingURL=plante.js.map