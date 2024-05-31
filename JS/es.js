class Persona {
    constructor(nome,cognome){
        this.cognome=cognome;
        this.nome=nome;
    }

    saluta(){
        return 'Ciao sono '+this.nome;
    }
}


const persona1=new Persona('Alessandro', 'Gagliazzo');
console.log(persona1.saluta());


class Sviluppatore extends Persona{

    constructor(nome,cognome,specializzazione){
        super(nome,cognome);
        this.specializzazione=specializzazione;
    }

    sviluppatoreSaluta(){
        return super.saluta()+' '+this.specializzazione; 
       }

}


const persona2=new Sviluppatore("Mattia","Consonni","Front-End");

console.log(persona2.nome);
console.log(persona2.cognome);
console.log(persona2.specializzazione);
console.log(persona2.sviluppatoreSaluta());