
let amigos = [];


function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    
    amigos.push(nome);

    
    atualizarLista();

    
    input.value = "";
}


function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.style.cursor = "pointer";

        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}


function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

