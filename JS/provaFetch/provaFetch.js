async function handleGetPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        mode: 'cors',
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token'
        },
    }); /*Attende completamento della fetch prima di andare avanti*/
    return await response.json();
}


document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("button").addEventListener("click", async () => {
        const res=await handleGetPosts();
        console.log(res);
    }); 
});