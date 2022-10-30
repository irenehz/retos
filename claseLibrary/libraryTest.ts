import { Book1 } from "./book1";
import { Library } from "./claseLibrary"

let libro1: Book1 = new Book1("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith", "Now Editions");
console.log(libro1.getAuthor());

let libro2: Book1 = new Book1("EL señor de los Anillos",801,"56264433-MS23223","Tolkien", "Anagrama");
console.log(libro2);

let libro3: Book1 = new Book1("Los pilares de la Tierra",602,"982433-CR773","Ken Follet", "Gran Editorial");
console.log(libro3);

let libro4:Book1 = new Book1("Contra todo florecen los Almendros",75,"9788439738282","Maria Gripe", "Textos y más");
console.log(libro4);

let biblioteca: Library = new Library([],"Biblioteca Nacional", "ALonso Fernandez");
console.log(biblioteca);

console.log(biblioteca.getNumberOfBooks());


console.log(biblioteca.findByAuthor("Tolkien"));