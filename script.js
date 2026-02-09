// Seleção de elementos da tela
const listaHinos = document.getElementById('lista-hinos');
const detalheHino = document.getElementById('detalhe-hino');
const tituloHino = document.getElementById('titulo-hino');
const letraHino = document.getElementById('letra-hino');
const player = document.getElementById('player');

/**
 * Função para abrir a tela do hino selecionado
 */
function abrirHino(id) {
    const hino = hinos[id];

    if (hino) {
        tituloHino.innerText = hino.titulo;
        letraHino.innerText = hino.letra;
        player.src = hino.audio;

        // ESCONDE a lista completa de botões
        listaHinos.classList.add('hidden'); 
        
        // MOSTRA a área do hino com o botão de voltar
        detalheHino.classList.remove('hidden'); 

        window.scrollTo(0, 0); // Garante que a tela comece no topo
    }
}

function voltar() {
    player.pause(); // Para a música
    
    // ESCONDE o hino atual
    detalheHino.classList.add('hidden'); 
    
    // MOSTRA a lista de hinos novamente
    listaHinos.classList.remove('hidden'); 
}

// Suporte ao botão "Voltar" do próprio celular (Android)
window.onpopstate = function() {
    if (!detalheHino.classList.contains('hidden')) {
        voltar();
    }
};