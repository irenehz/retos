"use strict";
// CLASE VECTOR (RETO 8)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements;
        this.n = n;
        this.k = k;
    }
    Vector.prototype.add = function (v1) {
        var nuevoVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            nuevoVector.elements.push(this.elements[i] + v1.elements[i]);
        }
        return nuevoVector;
    };
    Vector.prototype.subs = function (v1) {
        var nuevoVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            nuevoVector.elements.push(this.elements[i] - v1.elements[i]);
        }
        return nuevoVector;
    };
    Vector.prototype.mult = function (v1) {
        var nuevoVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            nuevoVector.elements.push(this.elements[i] * v1.elements[i]);
        }
        return nuevoVector;
    };
    Vector.prototype.multNumber = function (n) {
        var nuevoVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            nuevoVector.elements.push(this.elements[i] * n);
        }
        return nuevoVector;
    };
    Vector.prototype.setElements = function (elements) {
        this.elements = elements;
        return elements;
    };
    Vector.prototype.getElements = function (elements) {
        return this.elements;
    };
    Vector.prototype.print = function () {
        return Vector;
    };
    return Vector;
}());
exports.Vector = Vector;
