const prompt = require('prompt-sync')();
var palavras = ['pinto', 'piroca', 'pau', 'jeba', 'caralho', 'pica', 'peru', 'cacete', 'bilau', 'rola', 'trolha', 'pemba'];
var tentativas = 6;
var entradas = [];
var palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
var linha = '';
var fimdejogo = false;
var apenasLetras = /^[A-Za-z]+$/;

function verificaJogo() {
    for (var i = 0; i < palavraAleatoria.length; i++) {
        if (entradas.includes(palavraAleatoria[i]) === false) {
            return false;
        }
    }
    return true;
}

console.log(palavraAleatoria);

for (var i = 1; i <= palavraAleatoria.length; i++) {
    linha += '_ ';
}

console.clear();
console.log(linha);

while (tentativas >= 1) {
    linha = '';

    var entrada = prompt('Digite uma letra: ')
    if (entrada === 'exit' || entrada === 'sair') {
        break;
    } else if (apenasLetras.test(entradas)) {
        console.clear();
        console.log('Entrada inválida.')
    } else {
        entradas.push(entrada);
        console.clear();
    }

    if (!palavraAleatoria.includes(entrada)) {
        tentativas--;
    }

    

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
    console.log(`Você tem ${tentativas} tentativa(s).\n`)
    console.log(linha);
    if (verificaJogo()) {
        fimdejogo = true;
        break;
    }
}

if (fimdejogo) {
    console.log('VOCÊ VENCEU!');
} else if (tentativas === 0) {
    console.log('VOCÊ PERDEU!');
} else {
    console.log('Saindo...');
}
