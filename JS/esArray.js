/*Somma Array*/
function sommaArray(array){
    
    let somma=0;

    for(let i=0;i<array.length;i++){    
        somma=somma+array[i];
    }

    return somma;
}

const array1=[2,1,4,3];
console.log(sommaArray(array1));


/*Max Array*/
function maxArray(array){
    
    let max=0;
    
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }

    return max;
}

console.log(maxArray(array1));


/*Array pari*/

function arrayPari(array){

    const pari=array.filter((element) => element % 2 == 0 );

    return pari;
    
}

console.log(arrayPari(array1));



/*Unisci array*/
function unisciArray(array1,array2){
    
    const arrayFinale=array1.concat(array2);

    return arrayFinale;
}


const array2=[5];
console.log(unisciArray(array1,array2));



/*Ordina array*/

function ordinaArray(array){

    const arrayOrdinato=array.sort((a, b) => a - b);

    return arrayOrdinato
}

console.log(ordinaArray(array1));