"use strict";

function Nave(teclado, imagem) {
  this.teclado = teclado;
  this.imagem = imagem;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Nave.prototype = {
  atualizar: function (context) {
    const canvas = context.canvas;

    if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.x -= this.velocidade;
    }

    if (this.teclado.pressionada(SETA_DIREITA) && this.x < canvas.width - this.imagem.width) {
      this.x += this.velocidade;
    }

    if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
      this.y -= this.velocidade;
    }

    if (this.teclado.pressionada(SETA_BAIXO) && this.y < canvas.height - this.imagem.height) {
      this.y += this.velocidade;
    }
  },
  desenhar: function (context) {
    context.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);
  },
  atirar: function () {
    var tiro = new Tiro(this);
    this.animacao.novoSprite(tiro);
  }
}

function Tiro(nave) {
  this.largura = 4;
  this.altura = 20;
  this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
  this.y = nave.y - this.altura;
  this.velocidade = 10;
  this.cor = "red";
}

Tiro.prototype = {
  atualizar: function (context) {
    this.y -= this.velocidade;
  },
  desenhar: function (context) {
    context.fillStyle = this.cor;
    context.fillRect(this.x, this.y, this.largura, this.altura);
  }
}