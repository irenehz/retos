import { Contacts } from "./claseContacts"
import { Person } from "./clasePerson"

let misContactos: Contacts = new Contacts();

let persona : Person = new Person();
persona.surname;
persona.address;
console.log(persona)


let persona2:Person = new Person("David", 33);
persona2.surname = "Hungaro";
persona2.address = "Los Barqueros 18, Cartagena";

let persona3:Person = new Person("Pedro", 33);
persona3.surname = "Sanchez";
persona3.address = "Moncola, 1";

let persona4:Person = new Person("Tina", 45);
persona4.surname = "Zapata";
persona4.address = "Calle Mayor 6";

let people = [persona, persona2, persona3, persona4];
console.log(people);


