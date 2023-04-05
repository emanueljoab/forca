var prompt = require('prompt-sync')();
var palavras = ['pinto', 'piroca', 'pênis', 'pau', 'jeba', 'caralho', 'pica', 'peru', 'cacete', 'bilau', 'rola', 'trolha', 'pemba'];
console.log(palavras);

var palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavraAleatoria);

var linha = '';

for (var i = 1; i <= palavraAleatoria.length; i++) {
    linha += '_ ';
}

console.log(linha);

linha = ''; 
var tentativas = 6;
var entradas = [];

while (tentativas >= 1) {
   
    linha = '';
    
    var entrada = prompt('Faça a sua jogada. ')
    entradas.push(entrada)
    console.log(entrada);

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
    tentativas = tentativas - 1;

    console.log(linha);    
}
