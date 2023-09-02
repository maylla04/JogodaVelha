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
var vencedor = document.getElementById('vencedor').value;
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
            alert (jogador1.nome + ' is the winner!!!!');
            reset();
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
            alert (jogador2.nome + ' is the winner!!!!');
            reset();
        }
    }
}
allElementsInSomeColumn = function() {
    for( var i = 0; i < 3; i++) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
            alert (jogador1.nome + ' is the winner!!!!');
            reset();
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
            alert (jogador2.nome + ' is the winner!!!!');
            reset();
        }
    }

}


allElementsInSomeDiagonal = function() {
    if ( (tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') ||
          (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) {
            alert (jogador1.nome + ' is the winner!!!!');
        reset();
    } else if ( (tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') ||
                (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O') ) {
            alert (jogador2.nome + ' is the winner!!!!');
        reset();
    } 
}

setOnCeil = function(cel, pos) { 
        if(tabuleiro[pos] == undefined) {
            cel.innerHTML = formas[jogadorAtual.forma];
            tabuleiro[pos] = formas[jogadorAtual.forma];

            //define o jogador da rodada
            (jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
            setLabelJogadorAtual();

        } else alert('Fim de Jogo !!');

        allElementsInSomeLine();
        allElementsInSomeColumn();
        allElementsInSomeDiagonal();

        if ( tabuleiroIsFilled() ) {
            alert ('Deu Velha!!');
            reset();
        }
        
    
}