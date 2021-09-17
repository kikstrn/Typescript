"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
var Complex = /** @class */ (function () {
    function Complex(numReel1, numImaginaire1, numReel2, numImaginaire2) {
        var _this = this;
        this.sommeReel = function () {
            var resultReel = _this.numReel1 + _this.numReel2;
            return resultReel;
        };
        this.sommeImaginaire = function () {
            var resultImaginaire = _this.numImaginaire1 + _this.numImaginaire2;
            return resultImaginaire;
        };
        this.numReel1 = numReel1;
        this.numImaginaire1 = numImaginaire1;
        this.numReel2 = numReel2;
        this.numImaginaire2 = numImaginaire2;
    }
    return Complex;
}());
exports.Complex = Complex;
//# sourceMappingURL=complex.js.map