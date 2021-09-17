"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(age) {
        this.hello = function () {
            console.log("Hello !");
        };
        this._age = age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=personne.js.map