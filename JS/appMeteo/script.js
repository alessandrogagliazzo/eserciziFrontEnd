const params = {
    latitude: 45.4643,
    longitude: 9.1895,
    current: ["temperature_2m", "rain"]
  };
  
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m`;
  
  async function fetchMeteo() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    

    const current = data.current_weather;
  
    const weatherData = {
      current: {
        temperaturaCitta: current.temperature,
        pioggiaCitta: current.rain,
      }
    };
  

    const pCard = document.getElementById("p-card");
    pCard.textContent = `Temperatura: ${weatherData.current.temperaturaCitta}°C`;


    

    if(weatherData.current.pioggiaCitta > 0){
        const immagineCard = document.getElementById("immagine-card");
        immagineCard.src = "https://th.bing.com/th/id/R.ea7768b961310fac6ef0a6eedbb4af64?rik=NppLyOrHoy5AOw&pid=ImgRaw&r=0";
    }

    else{
        const immagineCard = document.getElementById("immagine-card");
        immagineCard.src = "https://th.bing.com/th/id/OIP.uX-dzarEBTF3EcZSZ8UzeAHaKf?rs=1&pid=ImgDetMain";
    }

  }
  

  function aggiornaTabella(){
    const table = document.getElementById("tabella-meteo");
    const tr= document.createElement("tr");
    const tdCitta = document.createElement("td");
    const tdTemperatura = document.createElement("td");
    tdCitta.textContent = document.getElementById("citta").textContent;
    tdTemperatura.textContent = document.getElementById("p-card").textContent.substring(13, 18);
    tr.appendChild(tdCitta);
    tr.appendChild(tdTemperatura);
    table.appendChild(tr);
    

  }

  
  document.addEventListener('DOMContentLoaded', () => {
    fetchMeteo();
    document.getElementById("aggiornaTabella").addEventListener("click", aggiornaTabella);
  });
  