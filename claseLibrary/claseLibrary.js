"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.toString = function () {
        return this.toString();
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
        return address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
        return manager;
    };
    Library.prototype.getnManager = function () {
        return this.manager;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var resultado = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books.length[i].getAuthor() == author) {
                resultado.push(this.books.length[i]);
            }
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
