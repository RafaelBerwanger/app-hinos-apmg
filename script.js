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
        // VERIFICAÇÃO DE ÁUDIO
        // Se hino.audio existir e não for uma string vazia
        if (hino.audio && hino.audio !== "") {
            player.src = hino.audio;
            player.style.display = "block"; // Mostra o player
        } else {
            player.src = "";
            player.style.display = "none";  // Esconde o player completamente
        }


        // Mostra a tela de detalhes
        listaHinos.classList.add('hidden');
        detalheHino.classList.remove('hidden');

        // RESET DUPLO: No container e na janela
        detalheHino.scrollTop = 0; 
        letraHino.scrollTop = 0;
        window.scrollTo(0, 0);
    }
}

function voltar() {
    player.pause();
    player.currentTime = 0;

    // Antes de esconder, limpamos a rolagem para a próxima vez
    detalheHino.scrollTop = 0;
    letraHino.scrollTop = 0;

    detalheHino.classList.add('hidden');
    listaHinos.classList.remove('hidden');
    
    window.scrollTo(0, 0);
}

// Suporte ao botão "Voltar" do próprio celular (Android)
window.onpopstate = function() {
    if (!detalheHino.classList.contains('hidden')) {
        voltar();
    }
};