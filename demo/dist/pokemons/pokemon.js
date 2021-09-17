"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, hp, atk, type) {
        var _this = this;
        this.idDead = function () {
            if (_this._hp <= 0) {
                console.log(_this._nom + " EST MORT !!!");
                return false;
            }
            else {
                return true;
            }
        };
        this._nom = nom;
        this._atk = atk;
        this._hp = hp;
        this._type = type;
    }
    Pokemon.prototype.get_nom = function () {
        return this._nom;
    };
    Pokemon.prototype.set_nom = function (nom) {
        this._nom = nom;
    };
    Pokemon.prototype.get_hp = function () {
        return this._hp;
    };
    Pokemon.prototype.set_hp = function (hp) {
        this._hp = hp;
    };
    Pokemon.prototype.get_atk = function () {
        return this._atk;
    };
    Pokemon.prototype.set_atk = function (atk) {
        this._atk = atk;
    };
    Pokemon.prototype.get_type = function () {
        return this._type;
    };
    Pokemon.prototype.set_type = function (type) {
        this._type = type;
    };
    Pokemon.prototype.attaque = function (pokemon) {
        console.log(this._nom + " ATTAQUE " + pokemon._nom);
        var degats = pokemon._hp - this._atk;
        console.log(pokemon._nom + " a subit " + this._atk + " de degats. ! Il lui reste " + degats + " de points de vies !");
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map