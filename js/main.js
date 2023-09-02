window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

function Jogador(nome, forma){
    this.nome = nome;
    this.forma = forma;
}

var jogador1, jogador2;
var jogadorAtual;
var formas = ['X', 'O'];
var index = null;

var tabuleiro = new Array(9);

ComecaJogo = function() {
    var nomeJogador1 = document.getElementById('jogador1').value;
    var nomeJogador2 = document.getElementById('jogador2').value;
    jogador1 = new Jogador(nomeJogador1, 0); 
    jogador2 = new Jogador(nomeJogador2, 1); 

    jogadorAtual = jogador1;
    setLabelJogadorAtual();

    
    document.getElementById('jogo').style.visibility = 'visible';
    
}


reset = function() { window.location.reload(); }


setLabelJogadorAtual = function() {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;
}

tabuleiroIsFilled = function() {
    var preenchidos = 0;
        for(var i = 0; i < tabuleiro.length; i++)
            if(tabuleiro[i]	!= undefined) 
                preenchidos++;
        return preenchidos == tabuleiro.length;
}


allElementsInSomeLine = function() {
    for( var i = 0; i < 7; i += 3) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X' ) { 
            alert (jogador1.nome + ' Ganhou!!!');
            reset();
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
            alert (jogador2.nome + ' Ganhou!!!');
            reset();
        }
    }
}