"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const alternarBtn = document.getElementById("alternarBtn");
const cores = ["black", "gray", "red", "yellow", "green", "blue", "purple"];

const b1 = new Bola(context);
b1.x = 100;
b1.y = 200;
b1.velocidadeX = 20;
b1.velocidadeY = -10;
b1.cor = "red";
b1.raio = 20;

const b2 = new Bola(context);
b2.x = 200;
b2.y = 100;
b2.velocidadeX = -10;
b2.velocidadeY = 20;
b2.cor = "blue";
b2.raio = 30;

const animacao = new Animacao(context);
animacao.novoSprite(b1);
animacao.novoSprite(b2);
animacao.ligar();

alternarBtn.addEventListener("click", function () {
  if (animacao.ligado) {
    animacao.desligar();
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    animacao.ligar();
  }
});

canvas.addEventListener("mousedown", function (e) {
  const bola = new Bola(context);
  bola.x = e.offsetX;
  bola.y = e.offsetY;
  bola.velocidadeX = getRandomIntegerSign(1, 20);
  bola.velocidadeY = getRandomIntegerSign(1, 20);
  bola.cor = cores[getRandomInteger(0, cores.length)];
  bola.raio = getRandomInteger(15, 30);
  animacao.novoSprite(bola);
});

function getRandomBoolean() {
  return Math.random() >= 0.5;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntegerSign(min, max) {
  return getRandomInteger(min, max) * (getRandomBoolean() ? 1 : - 1);
}