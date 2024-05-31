let a=5;
let b=10;
let c=15;
console.log(a+b);
console.log(c-a);
console.log(a*b*c);
console.log(c/b);


function add(num1,num2){
    return num1+num2;
}


function subtract(num1,num2){
    return num1-num2;
}


function multiply(num1,num2){
    return num1*num2;
}


function divide(num1,num2){
    if(num2==0){
        return null;
    }

    else{
    return num1/num2;
    }
}


console.log(add(20,10));
console.log(subtract(20,10));
console.log(multiply(20,10));
console.log(divide(20,10));
console.log(divide(20,0));


for(let n=0;n<10;n++){
    console.log(n);
}


for(let n=2;n<=20;n++){
    if(n%2==0){
        console.log(n);    
    }
}


for(let n=1;n<=19;n++){
    if(n%2==1){
        console.log(n);
    }
}

const somma=0;

for(let n=1;n<=100;n++){
    somma=somma+n;
    console.log(somma);
}


 
 let numero=10;

 while(numero >= 1){
   console.log(numero);
   numero--;
 }

 
 numero=20

 while(numero>=2){
    if(numero%2==0){
        console.log(numero);
    }
    numero--
 }


numero=5
let fattoriale=1;

 while(numero>=1){
    fattoriale=numero*fattoriale;

    if(numero==1){
        console.log(fattoriale);
    }
 }


 function isEven(num){
    if(num%2==0){
        return true;
    }

    else{
        return false;
    }
 }


 function max(num1,num2){
    if(num1>num2){
        console.log("Il numero maggiore è"+num1)
        return num1;
    }

    else if (num2>num1){
        console.log("Il numero maggiore è"+num2)
        return num2;
    }

    else{
        console.log("I numeri sono uguali");
        return null;
    }
 }


 function min(num1,num2){
    if(num1<num2){
        console.log("Il numero minore è"+num1)
        return num1;
    }

    else if (num2<num1){
        console.log("Il numero minore è"+num2)
        return num2;
    }

    else{
        console.log("I numeri sono uguali");
        return null;
    }
 }


 function classifyNumber(num){
    if(num>0){
        console.log("Il numero è positivo");
    }

    else if(num<0){
        console.log("Il numero è negativo");
    }

    else{
        console.log("Il numero è uguale a 0");
    }
 }


 console.log(isEven(4));
 max(4,-7);
 min(4,0);
 classifyNumber(4);
 console.log(isEven(-7));
 console.log(isEven(0));



 function fizzBuzz(){
    for(let n=1;n<=100;n++){
        if(n%3==0 && n%5==0){
            console.log("FizzBuzz");
        }

        else if(n%3==0){
            console.log("Fizz");
        }

        else if(n%5==0){
            console.log("Buzz");
        }

        else{
            console.log(n);
        }
 }
 }

function findPrimes(n) {
  for (let i = 2; i <= n; i++) {
    let primo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      primi.push(i);
    }
  }

  return primi;
}

const n = 100;
const primi = trovaPrimi(n);
console.log(primi);
