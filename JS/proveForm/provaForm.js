document.addEventListener("DOMContentLoaded", () => {
    const formSpecial=document.forms.formSpecial;
    const nameField=formSpecial.nome;
    const emailField=formSpecial.email;
    const checkField=formSpecial.prova;

    formSpecial.addEventListener("input",(e)   => {
        e.preventDefault();

        const formData ={
            nome:nameField.value,
            email:emailField.value,
        }
        console.log(formData); 
    });


    formSpecial.addEventListener("submit",(e)   => {
        e.preventDefault();

        const formData ={
            nome:nameField.value,
            email:emailField.value,
            check:checkField.checked,
        }
        console.log(formData); 
    });

    


});
    
