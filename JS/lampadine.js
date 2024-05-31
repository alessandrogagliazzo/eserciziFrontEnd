const lampadina=document.getElementById("lampadina");
const bottonelampadina=document.getElementById("bottone-lampadina");


bottonelampadina.addEventListener('click',() =>{
    if(lampadina.src.match("img/lampadina_spenta.png")){
        lampadina.src="img/lampadina_accesa.png";
    }
    else{
        lampadina.src="img/lampadina_spenta.png";
    }
});


