"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
var Door = /** @class */ (function () {
    function Door(color) {
        var _this = this;
        this.DisplayDoor = function () {
            console.log("Je suis une porte de couleur " + _this._color);
        };
        this._color = color;
    }
    Door.prototype.get_color = function () {
        return this._color;
    };
    Door.prototype.set_color = function (color) {
        this._color = color;
    };
    return Door;
}());
exports.Door = Door;
//# sourceMappingURL=door.js.map