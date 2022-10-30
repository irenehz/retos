export class Person {

    public name: string;
    public surname: string;
    public age: number;
    private address: string;


    constructor(name: string, age: number){

        this.name = name;
        this.surname;
        this.age = age;
        this.address;
    }
    public printName(){

        console.log(persona.name);
    }
    public yearOfBirth(currentYear: number){  

         return  currentYear - this.age;
    }
    setAddress(address: string = "Calle San Ildefonso"){

        return address;
    }
    getAddress(){

        return this.address;
    }

}

let persona:Person = new Person("Vicky", 35)

/* console.log(persona.name); // Imprime Vicky
console.log(persona.yearOfBirth(2022)); // Imprime 1987.
console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Calle Mayor y no calle San Ildefonso
console.log(persona.getAddress()); */ // Imprime Calle San Ildefonso.