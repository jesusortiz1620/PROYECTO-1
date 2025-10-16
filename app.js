// Función principal del juego
function jugar() {
    // Genera un número secreto entre 1 y 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;

    console.log("Bienvenido al juego: Adivina el número");
    console.log("He pensado en un número entre 1 y 10. ¡Tienes 3 intentos para adivinarlo!");

    // Bucle principal del juego
    while (intentos > 0) {
        let entrada = prompt(`Te quedan ${intentos} intento(s). Ingresa un número entre 1 y 10:`);

        if (entrada === null) {
            alert("Juego cancelado. ¡Hasta luego!");
            console.log("El usuario canceló el juego.");
            break;
        }

        let numero = Number(entrada);

        // Validaciones
        if (isNaN(numero) || numero < 1 || numero > 10) {
            alert(" Ingresa un número válido entre 1 y 10.");
            console.log("Entrada inválida del usuario:", entrada);
            continue;
        }

        if (numero === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto})`);
            console.log("El jugador adivinó correctamente el número secreto.");
            break;
        } else if (numero < numeroSecreto) {
            alert("Demasiado bajo. Intenta con un número mayor.");
            console.log(`Intento con ${numero}: demasiado bajo.`);
        } else {
            alert("Demasiado alto. Intenta con un número menor.");
            console.log(`Intento con ${numero}: demasiado alto.`);
        }

        intentos--;
    }

    if (intentos === 0) {
        alert(`Lo siento amigo, se te acabaron los intentos. El número era ${numeroSecreto}.`);
        console.log(`El jugador perdió. El número secreto era ${numeroSecreto}.`);
    }

    console.log("Fin del juego.");
}

// Detecta clic en el botón y ejecuta el juego
document.getElementById("btnJugar").addEventListener("click", jugar);
