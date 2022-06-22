"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const b1 = new Bola();
b1.x = 60;
b1.y = 60;
b1.velocidadeX = 10;
b1.velocidadeY = -5;
b1.cor = "blue";
b1.raio = 30;

const b2 = new Bola();
b2.x = 60;
b2.y = canvas.height - 60;
b2.velocidadeX = -10;
b2.velocidadeY = 10;
b2.cor = "red";
b2.raio = 40;

const colisor = new Colisor();
colisor.novoSprite(b1);
colisor.novoSprite(b2);

colisor.aoColidir = function (sprite1, sprite2) {
  // alert("PÁ!");
}

requestAnimationFrame(animar);

function animar() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  b1.atualizar(context);
  b2.atualizar(context);
  b1.desenhar(context);
  b2.desenhar(context);
  colisor.processar();
  requestAnimationFrame(animar);
}