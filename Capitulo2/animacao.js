"use strict";

function Animacao(context) {
  this.context = context;
  this.sprites = [];
  this.ligado = false;
}

Animacao.prototype = {
  novoSprite: function (sprite) {
    this.sprites.push(sprite);
  },
  ligar: function () {
    this.ligado = true;
    this.proximoFrame();
  },
  desligar: function () {
    this.ligado = false;
  },
  proximoFrame: function () {
    if (!this.ligado) return;

    for (const sprite of this.sprites) {
      sprite.atualizar(this.context);
    }

    this.limparTela();

    for (const sprite of this.sprites) {
      sprite.desenhar(this.context);
    }

    const animacao = this;
    requestAnimationFrame(() => animacao.proximoFrame());
  },
  limparTela: function () {
    const canvas = this.context.canvas;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  }
};