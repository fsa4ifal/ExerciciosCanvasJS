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
  atualizar: function () {
    if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.x -= 10;
      this.direcao = DIRECAO_ESQUERDA;
    } else if (this.teclado.pressionada(SETA_DIREITA) && this.x < context.canvas.width - 20) {
      this.x += 10;
      this.direcao = DIRECAO_DIREITA;
    } else if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
      this.y -= 10;
      this.direcao = DIRECAO_CIMA;
    } else if (this.teclado.pressionada(SETA_BAIXO) && this.y < context.canvas.height - 50) {
      this.y += 10;
      this.direcao = DIRECAO_BAIXO;
    }
  },
  desenhar: function (context) {
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, 20, 50);

    context.fillStyle = "green";

    if (this.direcao == DIRECAO_ESQUERDA) {
      context.fillRect(this.x, this.y + 8, 10, 12);
    } else if (this.direcao == DIRECAO_DIREITA) {
      context.fillRect(this.x + 10, this.y + 8, 10, 12);
    } else if (this.direcao == DIRECAO_CIMA) {
      context.fillRect(this.x + 5, this.y + 8, 10, 12);
    } else {
      context.fillRect(this.x + 5, this.y + 30, 10, 12);
    }
  },
  atirar: function () {
    const tiro = new Bola();
    tiro.x = this.x + 10;
    tiro.y = this.y + 10;
    tiro.raio = 2;
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