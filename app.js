let amigos = [];

function agregarAmigo() {
    let amigoUsuario = document.getElementById("amigo");
    let nombre = amigoUsuario.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    amigoUsuario.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre correspondiente

    let resultado = document.getElementById("resultado"); // Obtener el elemento donde mostrar el resultado
    resultado.innerHTML = `🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉`;
}

document.querySelector(".button-draw").addEventListener("click", sortearAmigo);