"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(titulo, numeroPaginas, isbn, autor, editorial) {
        this.title = titulo;
        this.nPages = numeroPaginas;
        this.isbn = isbn;
        this.author = autor;
        this.editorial = editorial;
    }
    Book.prototype.toString = function () {
        return "Title - " + this.title + "\n Number og Pages - " + this.nPages + "\n ISBN - " + this.isbn + "\n Author - " + this.author + "\n Editorial - " + this.editorial;
    };
    Book.prototype.setTitle = function (titulo) {
        this.title = titulo;
        return titulo;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setnPages = function (numeroPaginas) {
        this.nPages = numeroPaginas;
        return numeroPaginas;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
        return isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (autor) {
        this.author = autor;
        return autor;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
        return editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    return Book;
}());
exports.Book = Book;
var libro = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(libro);
console.log(libro.toString());
