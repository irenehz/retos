"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book1 = void 0;
var Book1 = /** @class */ (function () {
    function Book1(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book1.prototype.toString = function () {
        /* return `itle -  ${this.title}  Number of Pages - ${this.nPages} ISBN - ${this.isbn} Author - ${this.author} Editorial - ${this.editorial}`; /* TEMPLATE STRINGS*/
        return "Title - " + this.title + "\n Number og Pages - " + this.nPages + "\n ISBN - " + this.isbn + "\n Author - " + this.author + "\n Editorial - " + this.editorial;
    };
    Book1.prototype.setTitle = function (title) {
        this.title = this.title;
        return title;
    };
    Book1.prototype.getTitle = function () {
        return this.title;
    };
    Book1.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
        return nPages;
    };
    Book1.prototype.getnPages = function () {
        return this.nPages;
    };
    Book1.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
        return isbn;
    };
    Book1.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book1.prototype.setAuthor = function (author) {
        this.author = author;
        return author;
    };
    Book1.prototype.getAuthor = function () {
        return this.author;
    };
    Book1.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
        return editorial;
    };
    Book1.prototype.getEditorial = function () {
        return this.editorial;
    };
    return Book1;
}());
exports.Book1 = Book1;
/* let libro:Book = new Book("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith", "Now Editions");
console.log(libro);
console.log(libro.toString()); */
