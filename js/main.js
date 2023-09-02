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