// Araay para armazenar os nomes dos amigos.
let amigos = [];


// Função para adicionar um amigo.
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();


    // Confirmnar que o campo está vazio.
    if(nomeAmigo === ''){
        alert(' Por favor escreva um nome.');
        return; // Define a execução da função.
    }

    // Confirmar se o nome não está duplicado.
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome '${nomeAmigo}' já esta incluso `);
        
    }

    // Adicionar um nome.
    amigos.push(nomeAmigo);

    // Limpara a caixa de entrada.
    inputAmigo.value = '';

    // Atualizar a lista no HTML.
    atualizarLista();

}

// Funcão para atualizar a lista de amigos.
function atualizarLista() {
    const lista = document.getElementById('lista');

    //Limpar o conteudo atual da lista.
    lista.innerHTML = '';

    // (for) para percorrer o array com um loop.
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
        
    }
}

// Função para selecionar um amigo aleatoriamente.
function sortearAmigo(){
    //Confirmar amigo.
    if (amigos.length === 0) { 
        // Confirmar se a array amigos esta vazia.
        alert ('Sem amigo disponivél para sortear. Adicione ao menos um amigo.');
        return;
    }

    // Gera um índice aleatório.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Nome sorteado.
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostra o resultado em HTML.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = (`O amigo sorteado é: <strong>${amigoSorteado}</strong>`);
}