"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    function StationEssence(prixEssence, prixDiesel) {
        var _this = this;
        this.getPrixEssence = function () {
            return _this._prixEssence;
        };
        this.getPrixDiesel = function () {
            return _this._prixDiesel;
        };
        this._prixDiesel = prixDiesel;
        this._prixEssence = prixEssence;
    }
    return StationEssence;
}());
exports.StationEssence = StationEssence;
//# sourceMappingURL=stationEssence.js.map