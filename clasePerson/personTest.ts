import { Person } from "./claseperson"

let persona:Person = new Person("Vicky", 30)

console.log(persona.name); // Imprime Vicky.
console.log(persona.yearOfBirth(2022)); // Imprime 1992.

console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Calle Mayor.
console.log(persona.getAddress()); // Imprime Calle San Ildefonso.