document.addEventListener("DOMContentLoaded", function () {
    const root=document.getElementById("root");
    home();


    /*Funzione home()   */
    function home(){
    root.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <img src="https://th.bing.com/th/id/OIP.fnam7mW963uwT8r2xfMNAQHaHa?rs=1&pid=ImgDetMain" alt="Universal Music Group" id="Logo">
        <a class="navbar-brand" href="#root">Menu artisti</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#root" id="link-registrazione">Registrazione</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#root" id="link-eventi">Eventi</a>
                </li>
        </ul>
      </div>
    </div>
    </nav>
    `;
    

    const miglioriArtisti = document.createElement("div");
    miglioriArtisti.id = "migliori-artisti";
    root.appendChild(miglioriArtisti);

    const miglioriArtistiTitle = document.createElement("h4");
    miglioriArtistiTitle.textContent = "Migliori artisti del mese";
    miglioriArtisti.appendChild(miglioriArtistiTitle);

    const hr = document.createElement("hr");
    miglioriArtisti.appendChild(hr);


    const containerCard= document.createElement("div");
    containerCard.className = "container text-center";
    root.appendChild(containerCard);


    const row = document.createElement("div");
    row.className='row';
    containerCard.appendChild(row);


    const col = document.createElement("div");
    col.className='col';
    row.appendChild(col);


    const card = document.createElement("div");
    card.className='card';
    card.style.width="18rem";
    col.appendChild(card);


    const img1Card=document.createElement("img");
    img1Card.src="https://th.bing.com/th/id/OIP.xTzV9KI7XDcIkkybBIHDmwAAAA?rs=1&pid=ImgDetMain";
    img1Card.className="card-img-top";
    card.appendChild(img1Card);


    const cardBody = document.createElement("div");
    cardBody.className="card-body";
    card.appendChild(cardBody);


    const pCardBody=document.createElement("p");
    pCardBody.textContent="Drake";
    cardBody.appendChild(pCardBody);


    const col2 = document.createElement("div");
    col2.className='col';
    row.appendChild(col2);


    const card2 = document.createElement("div");
    card2.className='card';
    card2.style.width="18rem";
    col2.appendChild(card2);


    const img2Card=document.createElement("img");
    img2Card.src="https://th.bing.com/th/id/R.9fbfd5c382447413d2c229ba20c6f303?rik=VLKFLtZBje%2bPxg&pid=ImgRaw&r=0";
    img2Card.className="card-img-top";
    card2.appendChild(img2Card);


    const cardBody2 = document.createElement("div");
    cardBody2.className="card-body";
    card2.appendChild(cardBody2);


    const pCardBody2=document.createElement("p");
    pCardBody2.textContent="Blanco";
    cardBody2.appendChild(pCardBody2);


    const col3 = document.createElement("div");
    col3.className='col';
    row.appendChild(col3);


    const card3 = document.createElement("div");
    card3.className='card';
    card3.style.width="18rem";
    col3.appendChild(card3);


    const img3Card=document.createElement("img");
    img3Card.src="https://th.bing.com/th/id/OIP.IyuE2D15tgJ9-oT5xjr6_wHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    img3Card.className="card-img-top";
    card3.appendChild(img3Card);


    const cardBody3 = document.createElement("div");
    cardBody3.className="card-body";
    card3.appendChild(cardBody3);


    const pCardBody3=document.createElement("p");
    pCardBody3.textContent="Annalisa";
    cardBody3.appendChild(pCardBody3);



    const carosello= document.createElement("div");
    carosello.id="carouselExample";
    carosello.className="carousel slide";
    carosello.innerHTML=`
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.0xlcUnKcejR0DJzZTFRWuAHaFi?rs=1&pid=ImgDetMain  " class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.37495ba46a3d684cd3f5bb10a58fcb71?rik=V0kNg1DNKh6iiQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f59973af5f14aa1ab06cba333%2f59e65d298c56a858139215b0%2f63459d74b4ac22626b37ca66%2f1665506821559%2fmaneskin%2bcourtesy%2bof%2bnme.jpeg%3fformat%3d1500w&ehk=9Yvy1Cd7%2bao6WVSMciMhPwYhT0UewAlIUfBpvuorB4w%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `
    root.appendChild(carosello);


    const contattaci=document.createElement("div");
    contattaci.id="contattaci";


    const hContattaci=document.createElement("h6");
    hContattaci.textContent='Lasciaci i tuoi riferimenti per essere contattato';


    contattaci.appendChild(hContattaci);
    root.appendChild(contattaci);


    const divForm = document.createElement("div");
    divForm.classList.add("container", "text-center");
    root.appendChild(divForm);


    const rowForm = document.createElement("div");
    rowForm.classList.add("row");
    divForm.appendChild(rowForm);


    const col1Form = document.createElement("div");
    col1Form.classList.add("col");
    rowForm.appendChild(col1Form);


    const col2Form = document.createElement("div");
    col2Form.classList.add("col-6");
    rowForm.appendChild(col2Form);


    const form = document.createElement("form");
    col2Form.appendChild(form);


    const div1Form = document.createElement("div");
    div1Form.classList.add("mb-3");
    form.appendChild(div1Form);


    const label1 = document.createElement("label");
    label1.classList.add("form-label");
    label1.textContent = "Nome";    
    div1Form.appendChild(label1);


    const nome = document.createElement("input");
    nome.classList.add("form-control");
    nome.id = "nome";
    div1Form.appendChild(nome);

    
    const div2Form = document.createElement("div");
    div2Form.classList.add("mb-3");
    form.appendChild(div2Form);


    const label2 = document.createElement("label");
    label2.classList.add("form-label");
    label2.textContent = "Email";
    div2Form.appendChild(label2);


    const email = document.createElement("input");
    email.classList.add("form-control");
    email.id = "email";
    div2Form.appendChild(email);

    
    const submit=document.createElement("input");
    submit.type="submit";
    submit.classList.add("btn", "btn-primary");
    form.appendChild(submit);


    const col3Form = document.createElement("div");
    col3Form.classList.add("col");
    rowForm.appendChild(col3Form);
    }



    /*Funzione Registrazione() */
    
    function registrazione(){
        while(root.firstChild){
            root.removeChild(root.firstChild);
        }

        const registrati=document.createElement("div");
        registrati.id="Registrati";
        
    
        const hRegistrati=document.createElement("h6");
        hRegistrati.textContent='Registrati tramite il form qui sotto!';
    
    
        registrati.appendChild(hRegistrati);
        root.appendChild(registrati);
    
    
        const divRegistrazione = document.createElement("div");
        divRegistrazione.classList.add("container", "text-center");
        root.appendChild(divRegistrazione);
    
    
        const rowRegistrazione = document.createElement("div");
        rowRegistrazione.classList.add("row");
        divRegistrazione.appendChild(rowRegistrazione);
    
    
        const col1Registrazione = document.createElement("div");
        col1Registrazione.classList.add("col");
        rowRegistrazione.appendChild(col1Registrazione);
    
    
        const col2Registrazione = document.createElement("div");
        col2Registrazione.classList.add("col-6");
        rowRegistrazione.appendChild(col2Registrazione);
    
    
        const formRegistrazione = document.createElement("form");
        col2Registrazione.appendChild(formRegistrazione);
    
    
        const div1Registrazione = document.createElement("div");
        div1Registrazione.classList.add("mb-3");
        formRegistrazione.appendChild(div1Registrazione);
    
    
        const label1Registrazione = document.createElement("label");
        label1Registrazione.classList.add("form-label");
        label1Registrazione.textContent = "Nome";    
        div1Registrazione.appendChild(label1Registrazione);
    
    
        const nomeRegistrazione = document.createElement("input");
        nomeRegistrazione.classList.add("form-control");
        nomeRegistrazione.id = "nome";
        div1Registrazione.appendChild(nomeRegistrazione);
    
        
        const div2Registrazione = document.createElement("div");
        div2Registrazione.classList.add("mb-3");
        formRegistrazione.appendChild(div2Registrazione);
    
    
        const label2Registrazione = document.createElement("label");
        label2Registrazione.classList.add("form-label");
        label2Registrazione.textContent = "Cognome";
        div2Registrazione.appendChild(label2Registrazione);
    
    
        const cognome = document.createElement("input");
        cognome.classList.add("form-control");
        cognome.id = "cognome";
        div2Registrazione.appendChild(cognome);
    

        const div3Registrazione = document.createElement("div");
        div3Registrazione.classList.add("mb-3");
        formRegistrazione.appendChild(div3Registrazione);
    
    
        const label3Registrazione = document.createElement("label");
        label3Registrazione.classList.add("form-label");
        label3Registrazione.textContent = "Email";    
        div3Registrazione.appendChild(label3Registrazione);
    
    
        const emailRegistrazione = document.createElement("input");
        emailRegistrazione.classList.add("form-control");
        emailRegistrazione.id = "email";
        div3Registrazione.appendChild(emailRegistrazione);
        

        const div4Registrazione = document.createElement("div");
        div4Registrazione.classList.add("mb-3");
        formRegistrazione.appendChild(div4Registrazione);
    
    
        const label4Registrazione = document.createElement("label");
        label4Registrazione.classList.add("form-label");
        label4Registrazione.textContent = "Password";    
        div4Registrazione.appendChild(label4Registrazione);
    
    
        const passwordRegistrazione = document.createElement("input");
        passwordRegistrazione.classList.add("form-control");
        passwordRegistrazione.id = "password";
        div4Registrazione.appendChild(passwordRegistrazione);


        const inviaRegistrazione=document.createElement("input");
        inviaRegistrazione.type="button";
        inviaRegistrazione.value="Registrati";
        inviaRegistrazione.classList.add("btn", "btn-primary");
        formRegistrazione.appendChild(inviaRegistrazione);
        inviaRegistrazione.addEventListener('click',() => {
            location.reload();    
        });
    
    
        const col3Registrazione = document.createElement("div");
        col3Registrazione.classList.add("col");
        rowRegistrazione.appendChild(col3Registrazione);
    
        

    }

    const linkRegistrazione=document.getElementById("link-registrazione");
    linkRegistrazione.addEventListener('click', () => {
        registrazione();
    });
    




    /*Funzione eventi() */
    function eventi(){
       
        while(root.firstChild){
            root.removeChild(root.firstChild);
        }

        
        const eventi=document.createElement("div");
        eventi.id="eventi";
        root.appendChild(eventi);


        const h1=document.createElement("h1");
        h1.textContent="Eventi dei nostri artisti";
        eventi.appendChild(h1);


        const iframe=document.createElement("iframe");
        iframe.src="https://www.ticketone.it";
        eventi.appendChild(iframe);


        const tornaHome=document.createElement("input");
        tornaHome.type="button";  
        tornaHome.value="Home";
        tornaHome.classList.add("btn", "link-controllo");
        eventi.appendChild(tornaHome);
        tornaHome.addEventListener('click',() => {
            location.reload();
        });
 
        
    }
    


    const linkEventi=document.getElementById("link-eventi");
    linkEventi.addEventListener('click', () => {

        eventi();
    });
    

  

});
