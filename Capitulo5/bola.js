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
  atualizar: function (context) {
    const canvas = context.canvas;

    if (this.x < this.raio || this.x > canvas.width - this.raio) {
      this.velocidadeX *= -1;
    }

    if (this.y < this.raio || this.y > canvas.height - this.raio) {
      this.velocidadeY *= -1;
    }

    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function (context) {
    context.fillStyle = this.cor;
    context.beginPath();
    context.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    context.fill();
  },
  retangulosColisao: function () {
    return [{
      x: this.x - this.raio, y: this.y - this.raio,
      largura: this.raio * 2, altura: this.raio * 2,
    }];
  },
  colidiuCom: function (outro) {
    if (this.x < outro.x) {
      this.velocidadeX = -Math.abs(this.velocidadeX);
    } else {
      this.velocidadeX = Math.abs(this.velocidadeX);
    }

    if (this.y < outro.y) {
      this.velocidadeY = -Math.abs(this.velocidadeY);
    } else {
      this.velocidadeY = Math.abs(this.velocidadeY);
    }
  }
};