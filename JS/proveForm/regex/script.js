document.getElementById('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

            // Espressione regolare per validare l'email
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Espressione regolare per validare la password
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let valid = true;

    if (!emailPattern.test(email)) {
        alert('Inserisci un indirizzo email valido.');
        valid = false;
        }

    if (!passwordPattern.test(password)) {
        alert('La password deve contenere almeno 8 caratteri, inclusi una lettera e un numero.');
        valid = false;
        }

    if (!valid) {
        event.preventDefault(); // Blocca l'invio del form se le validazioni falliscono
        }

    });