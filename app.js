let amigos = [];
let alertaExibido = false;
function adicionarAmigo() {
    
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); 

    if (nomeAmigo === "") {
        if (!alertaExibido) {
            alert("Por favor, insira um nome.");
            alertaExibido = true; 
        }
        return;
    }

    amigos.push(nomeAmigo);
    input.value = "";
    
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);