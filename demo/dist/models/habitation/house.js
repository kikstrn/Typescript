"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var House = /** @class */ (function () {
    function House(surface, door) {
        var _this = this;
        this.display = function () {
            console.log("J'ai une maison, ma surface est de " + _this._surface + " m².");
        };
        this._surface = surface;
        this.door = door;
    }
    House.prototype.get_surface = function () {
        return this._surface;
    };
    House.prototype.set_surface = function (surface) {
        this._surface = surface;
    };
    House.prototype.getDoor = function () {
        console.log(this.door);
    };
    return House;
}());
exports.House = House;
//# sourceMappingURL=house.js.map