
class Contatto{

    constructor(nome,telefono,email){
        this.nome=nome;
        this.telefono=telefono;
        this.email=email;
    }

}


class Rubrica{

    constructor(){
        this.rubrica=[]
    }

    aggiungiContatto(contatto){
        this.rubrica.push(contatto);
    }


    visualizzaRubrica(){
        for(let i=0;i<this.rubrica.length;i++){
            console.log(this.rubrica[i]);
        }
    }


    cercaContatto(nome){
        for(let i=0;i<this.rubrica.length;i++){
            if(this.rubrica[i].nome==nome){
                return this.rubrica[i];
            }

            else{
                return 'Contatto non trovato';
            }
        }
    }



    modificaContatto(contatto, nuovoNome, nuovoTelefono, nuovaEmail){

        for(let i=0;i<this.rubrica.length;i++){
            if(this.rubrica[i].nome==contatto){
                this.rubrica[i].nome=nuovoNome;
                this.rubrica[i].telefono=nuovoTelefono;
                this.rubrica[i].email=nuovaEmail;
            }
    }
}


    eliminaContatto(contatto){

        for(let i=0;i<this.rubrica.length;i++){
            if(this.rubrica[i].nome==contatto){
                this.rubrica.splice(i,1);
            }
        }
    }

}


const contatto1=new Contatto("Ale","3510404044","ag@gmail.com");
const contatto2=new Contatto("Beppe","3470101011","beppe@gmail.com");
const contatto3=new Contatto("Giovanni","3281010101","giova@gmail.com");

const rubrica1=new Rubrica();

rubrica1.aggiungiContatto(contatto1);
rubrica1.aggiungiContatto(contatto2);
rubrica1.aggiungiContatto(contatto3);

rubrica1.visualizzaRubrica();

console.log(rubrica1.cercaContatto("Ale"));

rubrica1.modificaContatto("Ale","Alessandro","3510404044","ag@gmail.com");

console.log(rubrica1.cercaContatto("Ale"));

rubrica1.eliminaContatto("Alessandro");

rubrica1.visualizzaRubrica();

