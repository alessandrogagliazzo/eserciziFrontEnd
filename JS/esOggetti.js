
/*Classe persona*/
class Persona{
    constructor(nome,cognome,eta){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
    }

    saluta(){
        return 'Ciao sono '+this.nome+' '+this.cognome;
    }
}


const persona1=new Persona("Pippo","Rossi",20);
console.log(persona1.saluta());



/*Classe libro*/

class Libro{
    constructor(titolo,autore,annoPubblicazione){
        this.titolo=titolo;
        this.autore=autore;
        this.annoPubblicazione=annoPubblicazione;
    }

    descrizione(){
        return 'Queste sono le informazioni del libro'+'\n\n'+'Titolo: '+this.titolo+'\n'+'Autore: '+this.autore+'\n'+'Anno di pubblicazione: '+this.annoPubblicazione
    }

    static anniDallaPubblicazione(libro){
        return 2024-libro.annoPubblicazione;
    }

}


const libro1=new Libro("Harry Potter e la pietra filosofale","J.K. Rowling",1997);
console.log(libro1.descrizione());
console.log(Libro.anniDallaPubblicazione(libro1));



/*Classe studente*/
class Studente extends Persona{
    constructor(nome,cognome,eta,corsoDiStudi){
        super(nome,cognome,eta);
        this.corsoDiStudi=corsoDiStudi;
    }

    descrizione(){
        return 'Lo studente '+this.nome+' '+this.cognome+' ha '+this.eta+' anni e segue il corso di studi di '+this.corsoDiStudi
    }
}


const studente1=new Studente("Alessandro","Gagliazzo",19,"Informatica");
console.log(studente1.descrizione());


