var botoes = document.querySelectorAll('button');
var palavra = document.getElementById('palavra');
var resultado = document.getElementById('resultado');
var reiniciar = document.getElementById('reiniciar');
var popup = document.getElementById('popup');
var tema1 = document.getElementById('tema1');
var tema2 = document.getElementById('tema2');
var palavras = [];
var palavraAleatoria = '';

var cabeca = document.getElementById('cabeça');
var corpo = document.getElementById('corpo');
var bracoE = document.getElementById('braçoE');
var bracoD = document.getElementById('braçoD');
var pernaE = document.getElementById('pernaE');
var pernaD = document.getElementById('pernaD');
var olhos = document.getElementById('olhos');
var erros = 0;

const letrasAcentuadas = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    â: 'a',
    ê: 'e',
    î: 'i',
    ô: 'o',
    û: 'u',
    à: 'a',
    è: 'e',
    ì: 'i',
    ò: 'o',
    ù: 'u',
    ã: 'a',
    õ: 'o',
    ç: 'c',
};

popup.addEventListener('click', function(tema) {
    if (tema.target === tema1) {
        popup.style.display = 'none';
        palavras = ['banana','benga','bengala','berimbau','beringela','bilau','cacete','caralho','chibata','espada','falo','giromba','jeba','malaquias','manjuba','membro','pau','peru','pemba','pênis','pica','pingola','pingolim','pinto','pipi','piroca','pistola','pomba','rola','sabugo','trolha','tromba','vara'];
        palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    } else if (tema.target === tema2) {
        popup.style.display = 'none';
        palavras = ['boceta','chavasca','cona','crica','grelo','pepeca','perereca','periquita','perseguida','prexeca','racha','rata','vagina','vulva','xana','xereca','xibio','ximbica','xota','xoxota'];
        palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    }
    
    linha = []; // Adiciona um underline para cada letra ainda não acertada
    for (var i = 0; i < palavraAleatoria.length; i++) {
        linha.push('_ ');
    }
    palavra.innerHTML = linha.join('');
   
    var letraComAcento = null;
    var letraSemAcento = null;
    for (let i = 0; i < palavraAleatoria.length; i++) {
        let letra = palavraAleatoria.charAt(i);
        console.log(letra)    
        if (letrasAcentuadas.hasOwnProperty(letra)) {
            letraComAcento = letra;
            letraSemAcento = letrasAcentuadas[letra];
            console.log('Achou acento')
            console.log('A letra com acento é ' + letraComAcento)
            console.log('A letra sem acento é ' + letraSemAcento)
            break;
        }
    }

    botoes.forEach(function(botao) { // Adiciona o evento 'click' nos botões
        botao.addEventListener('click', function() {
            var letra = this.innerHTML.toLowerCase();
            var acertouLetra = false;
            for (var i = 0; i < palavraAleatoria.length; i++) {
                if (palavraAleatoria[i] === letra) {
                    linha[i] = letra.toUpperCase() + ' ';
                    acertouLetra = true;
                } else if (palavraAleatoria[i] === letraComAcento && letra === letraSemAcento) {
                    linha[i] = letraComAcento.toUpperCase() + ' ';
                    acertouLetra = true;
                }
            }
            if (acertouLetra) {
                botao.style.backgroundColor = 'green';        
            } else {
                erros++;
                botao.style.backgroundColor = 'red';
                desenhaBoneco();
            }
            botao.disabled = true;
            botao.style.pointerEvents = 'none'; 
            palavra.innerHTML = linha.join('');
            verificaJogo();
        });
    });
});

function desenhaBoneco() { // Desenha o boneco de acordo com os erros
    if (erros === 1) {
        cabeca.removeAttribute('id');        
    } else if (erros === 2) {
        corpo.removeAttribute('id');
    } else if (erros === 3) {
        bracoE.removeAttribute('id');
    } else if (erros === 4) {
        bracoD.removeAttribute('id');        
    } else if (erros === 5) {
        pernaE.removeAttribute('id');
    } else if (erros === 6) {
        pernaD.removeAttribute('id');
        olhos.removeAttribute('id');
    }
}

function verificaJogo() { // Verifica se o jogo terminou e finaliza se verdadeiro
    verificaPalavra = palavraAleatoria.toUpperCase();
    juntarLinha = linha.join('');
    verificaLinha = juntarLinha.replace(/\s/g, '');
    if (verificaPalavra === verificaLinha) {
        resultado.textContent = 'VITÓRIA!';
        for (var i = 0; i < botoes.length; i++) {
            botoes[i].disabled = true;
            botoes[i].style.pointerEvents = 'none';
        }
        reiniciar.style.display = 'block';
    } else if (erros === 6) {
        resultado.textContent = 'DERROTA!';
        for (var i = 0; i < botoes.length; i++) {
            botoes[i].disabled = true;
            botoes[i].style.pointerEvents = 'none';
        }
        reiniciar.style.display = 'block';
    }
}