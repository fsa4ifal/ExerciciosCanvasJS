"use strict";
const DIRECAO_CIMA = 1;
const DIRECAO_ESQUERDA = 2;
const DIRECAO_DIREITA = 3;
const DIRECAO_BAIXO = 4;

function Heroi(teclado, animacao) {
  this.teclado = teclado;
  this.animacao = animacao;
  this.x = 0;
  this.y = 0;
  this.direcao = DIRECAO_DIREITA;
}

Heroi.prototype = {
  atualizar: function (context) {
    const canvas = context.canvas;

    if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.x -= 10;
      this.direcao = DIRECAO_ESQUERDA;
    } else if (this.teclado.pressionada(SETA_DIREITA) && this.x < canvas.width - 20) {
      this.x += 10;
      this.direcao = DIRECAO_DIREITA;
    } else if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
      this.y -= 10;
      this.direcao = DIRECAO_CIMA;
    } else if (this.teclado.pressionada(SETA_BAIXO) && this.y < canvas.height - 50) {
      this.y += 10;
      this.direcao = DIRECAO_BAIXO;
    }
  },
  desenhar: function (context) {
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, 20, 50);

    context.fillStyle = "orange";
    if (this.direcao == DIRECAO_ESQUERDA) {
      context.fillRect(this.x, this.y, 5, 50);
    } else if (this.direcao == DIRECAO_DIREITA) {
      context.fillRect(this.x + 15, this.y, 5, 50);
    } else if (this.direcao == DIRECAO_CIMA) {
      context.fillRect(this.x, this.y, 20, 5);
    } else {
      context.fillRect(this.x, this.y + 45, 20, 5);
    }
  },
  atirar: function () {
    const tiro = new Bola();
    tiro.x = this.x + 10;
    tiro.y = this.y + 25;
    tiro.raio = 8;
    tiro.cor = "red";

    if (this.direcao == DIRECAO_ESQUERDA) {
      tiro.velocidadeX = -10;
    } else if (this.direcao == DIRECAO_DIREITA) {
      tiro.velocidadeX = 10;
    } else if (this.direcao == DIRECAO_CIMA) {
      tiro.velocidadeY = -10;
    } else {
      tiro.velocidadeY = 10;
    }

    this.animacao.novoSprite(tiro);
  }
};