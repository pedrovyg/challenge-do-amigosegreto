// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    // Pega o elemento de input pelo id 'amigo'
    let nomeAmigo = document.getElementById('amigo');
    // Pega o elemento ul pelo id 'listaAmigos'
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Valida se o campo de nome não está vazio
    if (nomeAmigo.value == '') {
        alert('Por favor, digite um nome válido!');
        return; // Sai da função se o campo estiver vazio
    }
    
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo.value);
    
    // Cria um novo item de lista (li) para exibir o nome
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo.value;
    
    // Adiciona o novo item à lista na página
    listaAmigos.appendChild(novoAmigo);
    
    // Limpa o campo de texto após adicionar o nome
    nomeAmigo.value = '';
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    // Valida se há nomes suficientes para o sorteio
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return; // Sai da função se não houver nomes suficientes
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    // Pega o nome sorteado usando o índice
    let nomeSorteado = amigos[indiceSorteado];
    
    // Pega o elemento ul pelo id 'resultado' para exibir o sorteado
    let resultado = document.getElementById('resultado');
    
    // Limpa o conteúdo anterior para evitar acúmulo de resultados
    resultado.innerHTML = ''; 
    
    // Cria um novo item de lista (li) para o resultado
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo sorteado é: ${nomeSorteado}!`;
    
    // Adiciona o resultado à lista na página
    resultado.appendChild(itemResultado);
}
