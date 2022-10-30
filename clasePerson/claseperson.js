"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.surname;
        this.age = age;
        this.address;
    }
    Person.prototype.printName = function () {
        console.log(persona.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        if (address === void 0) { address = "Calle San Ildefonso"; }
        return address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
var persona = new Person("Vicky", 35);
/* console.log(persona.name); // Imprime Vicky
console.log(persona.yearOfBirth(2022)); // Imprime 1987.
console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Calle Mayor y no calle San Ildefonso
console.log(persona.getAddress()); */ // Imprime Calle San Ildefonso.
