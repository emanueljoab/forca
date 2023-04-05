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

const letra = prompt('Faça a sua jogada. ')
console.log(letra);

linha = '';
var tentativas = 6;

while (tentativas >= 1) {
    for (var i = 0; i < palavraAleatoria.length; i++) {
        if (palavraAleatoria[i] === letra) {
            linha += letra.toUpperCase() + ' ';
        } else {
            linha += '_ ';
        }
        tentativas = tentativa - 1;
    }
}
console.log(linha);