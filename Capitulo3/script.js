"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const teclado = new Teclado(this);
const animacao = new Animacao(context);

const heroi = new Heroi(teclado, animacao);
heroi.x = 80;
heroi.y = 200;
animacao.novoSprite(heroi);

teclado.disparou(TECLA_ESPACO, function () {
  heroi.atirar();
});

animacao.ligar();