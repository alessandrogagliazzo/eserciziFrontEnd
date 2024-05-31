async function testPost(object){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(object),
    });
   
    const res = await response.json();
    console.log(res);
    return res;
  }
   
  document.addEventListener('DOMContentLoaded', () =>{
   
    const persona = {
      nome: "Alessandro",
      cognome: "Gagliazzo"
    }
   
    console.log(persona);
   
    document.getElementById('btnSpecial').addEventListener('click', async () => {
      await testPost(persona);
    });
   
  });