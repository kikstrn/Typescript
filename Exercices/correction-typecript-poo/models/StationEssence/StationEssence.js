"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    function StationEssence(prixEssence, prixDiesel) {
        var _this = this;
        this.getPrixEssence = function () {
            return _this.prixEssence;
        };
        this.getPrixDiesel = function () {
            return _this.prixDiesel;
        };
        this.prixDiesel = prixDiesel;
        this.prixEssence = prixEssence;
    }
    return StationEssence;
}());
exports.StationEssence = StationEssence;
//# sourceMappingURL=StationEssence.js.map