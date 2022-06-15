"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const teclado = new Teclado(document);
const animacao = new Animacao(context);

const imgSonic = new Image();
imgSonic.src = "img/spritesheet.png";

const sonic = new Sonic(teclado, imgSonic);
sonic.x = 0;
sonic.y = 200;
animacao.novoSprite(sonic);

imgSonic.onload = function () {
  animacao.ligar();
};