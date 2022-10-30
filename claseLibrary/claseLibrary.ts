import { Book1 } from "./book1"


export class Library {

    private books: string[];
    private address: string;
    private manager: string;
    

    constructor(books:string[],address: string,manager: string){

        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public toString():string {

       return this.toString();
    }
        
    public setAddress(address: string){

        this.address = address;
        return address;
    }
    public getAddress(){

        return this.address;
    }
    public setManager(manager: string){

        this.manager = manager;
        return manager;
    }
    public getnManager(){

        return this.manager;
    }
    public getNumberOfBooks():number{

            return this.books.length;
        }
    

    public findByAuthor(author: string):Book1[]{

        let resultado: Book1[]= [ ];
 
        for(let i = 0; i < this.books.length; i++){

            if(this.books.length[i].getAuthor() == author){

                resultado.push(this.books.length[i]);
            }
        }    
        return resultado;        
    }
}
