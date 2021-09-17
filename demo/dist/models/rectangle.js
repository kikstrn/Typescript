"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        var _this = this;
        this.surface = function () {
            var resultat = _this.a * _this.b;
            return resultat;
        };
        this.a = a;
        this.b = b;
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map