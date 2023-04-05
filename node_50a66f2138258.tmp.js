const prompt = require('prompt-sync')();
var palavras = ['pinto', 'piroca', 'pau', 'jeba', 'caralho', 'pica', 'peru', 'cacete', 'bilau', 'rola', 'trolha', 'pemba'];
var tentativas = 6;
var entradas = [];
var palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
var linha = '';

console.log(palavraAleatoria);

for (var i = 1; i <= palavraAleatoria.length; i++) {
    linha += '_ ';
}

console.log(linha);

while (tentativas >= 1) {
    linha = '';
    
    var entrada = prompt('Faça a sua jogada. ')
    entradas.push(entrada)
    console.log(entrada);

    if (!palavraAleatoria.includes(entrada)) {
        tentativas--;
    }

    for (var i = 0; i < palavraAleatoria.length; i++) {
        var letraCerta = false;
        for (var j = 0; j < entradas.length; j++){
            if (palavraAleatoria[i] === entradas[j]) {
                linha += palavraAleatoria[i] + ' ';
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