"use strict";

function Bola() {
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;
  this.cor = "black";
  this.raio = 10;
}

Bola.prototype = {
  atualizar: function () {
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function (context) {
    context.fillStyle = this.cor;
    context.beginPath();
    context.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    context.fill();
  }
};