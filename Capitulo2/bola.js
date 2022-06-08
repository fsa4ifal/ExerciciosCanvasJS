"use strict";

function Bola(context) {
  this.context = context;
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;
  this.cor = "black";
  this.raio = 10;
}

Bola.prototype = {
  atualizar: function () {
    const canvas = this.context.canvas;

    if (this.x < this.raio || this.x > canvas.width - this.raio) {
      this.velocidadeX *= -1;
    }

    if (this.y < this.raio || this.y > canvas.height - this.raio) {
      this.velocidadeY *= -1;
    }

    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function () {
    const context = this.context;
    context.save();
    context.fillStyle = this.cor;
    context.beginPath();
    context.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  }
}