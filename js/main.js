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