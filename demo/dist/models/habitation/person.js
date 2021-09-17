"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(nom, house) {
        this.house = house;
        this.nom = nom;
    }
    Person.prototype.displayPerson = function () {
        console.log("Je m'appelle " + this.nom + " , ma maison est de " + this.house.get_surface() + "m², j'ai une porte de couleur " + this.house.door.get_color());
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map