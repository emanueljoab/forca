const prompt = require('prompt-sync')();
var palavras = ['pinto', 'piroca', 'pau', 'jeba', 'caralho', 'pica', 'peru', 'cacete', 'bilau', 'rola', 'trolha', 'pemba'];
var tentativas = 6;
var entradas = [];
var palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
var linha = '';
var fimdejogo = false;
var jogarNovamente = true;
var letrasErradas = [];
var apenasLetras = /^[a-zA-Z]$/;

function verificaJogo() { // Verifica se todas as letras foram acertadas.
    for (var i = 0; i < palavraAleatoria.length; i++) {
        if (entradas.includes(palavraAleatoria[i]) === false) {
            return false;
        }
    }
    return true;
}

function boneco() { // Desenha a forca e o boneco de acordo com as tentativas restantes.
    if (tentativas === 6) {
        console.log('    _______\n   |       |\n   |       \n   |      \n   |      \n___|___\n')
    } else if (tentativas === 5) {
        console.log('    _______\n   |       |\n   |       O\n   |      \n   |      \n___|___\n')
    } else if (tentativas === 4) {
        console.log('    _______\n   |       |\n   |       O\n   |       |\n   |      \n___|___\n')
    } else if (tentativas === 3) {
        console.log('    _______\n   |       |\n   |       O\n   |      /|\n   |      \n___|___\n')
    } else if (tentativas === 2) {
        console.log('    _______\n   |       |\n   |       O\n   |      /|\\\n   |      \n___|___\n')
    } else if (tentativas === 1) {
        console.log('    _______\n   |       |\n   |       O\n   |      /|\\\n   |      / \n___|___\n')
    } else if (tentativas === 0) {
        console.log('    _______\n   |       |\n   |       O\n   |      /|\\\n   |      / \\\n___|___\n');
    }
}

function jogo() { // Função principal; valida as entradas do usuário, chama outras funções, etc.
    console.clear();
    linha = ''
    palpitesErrados();
    boneco();
    desenhaLinha();
    while (tentativas >= 1 && !verificaJogo()) {
        var entradaInvalida = false;
        linha = '';
        console.log(linha);
        var entrada = prompt('Digite uma letra: ');
        entrada = entrada.toLowerCase();
        if (entrada === 'exit' || entrada === 'sair') {
            jogarNovamente = false;
            console.log('Saindo...')
            break;
        } else if (!apenasLetras.test(entrada)) {
            console.clear();
            palpitesErrados();
            entradaInvalida = true;
        } else if (!palavraAleatoria.includes(entrada) && (!letrasErradas.includes(entrada))) {
            letrasErradas.push(entrada);
            tentativas--;
            console.clear();
            palpitesErrados();
        } else {
            entradas.push(entrada);
            console.clear();
            palpitesErrados();
        }
        
        boneco();
        desenhaLinha();
        if (entradaInvalida) {
            console.log('Entrada inválida')
        }
        if (verificaJogo()) {
            fimdejogo = true;
            break;
        }
    }
}

function desenhaLinha() { // Escreve as letras que o usuário acertou e subtraço (_) para cada letra que ainda não acertou.
    for (var i = 0; i < palavraAleatoria.length; i++) {
        var letraCerta = false;
        for (var j = 0; j < entradas.length; j++){
            if (palavraAleatoria[i] === entradas[j]) {
                linha += palavraAleatoria[i].toUpperCase() + ' ';
                letraCerta = true;
                break;
            }
        }
        if (letraCerta === false) {
            linha  += '_ ';
        }
    }
    console.log(linha);
}

function palpitesErrados() {
let letrasErradasMaiuscula = letrasErradas.map(function(letra) {
    return letra.toUpperCase();
    });
    console.log(`Letras erradas: ${letrasErradasMaiuscula}`)
}

while (jogarNovamente) { // Fluxo do jogo.
    jogo();
    if (fimdejogo) {
        console.log('VOCÊ VENCEU!');
    } else if (tentativas === 0) {
        console.log('VOCÊ PERDEU!');
    } else {
        jogarNovamente = false;
        break;
    }

    var entrada = prompt('Jogar novamente? (S/N) ').toLowerCase();
    if (entrada === 's' || entrada === 'y') {
        palavras = ['pinto', 'piroca', 'pau', 'jeba', 'caralho', 'pica', 'peru', 'cacete', 'bilau', 'rola', 'trolha', 'pemba'];
        tentativas = 6;
        entradas = [];
        palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        linha = '';
        fimdejogo = false;
        jogarNovamente = true;
        letrasErradas = [];
        jogo();
    } else if (entrada === 'n' || entrada === 'exit' || entrada === 'sair') {
        console.log('Saindo...')
        break;
    }
}