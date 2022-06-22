"use strict";

function Fundo(imagem) {
  this.imagem = imagem;
  this.velocidade = 0;
  this.posicaoEmenda = 0;
}

Fundo.prototype = {
  atualizar: function (context) {
    this.posicaoEmenda += this.velocidade;

    if (this.posicaoEmenda > this.imagem.height) {
      this.posicaoEmenda = 0;
    }
  },
  desenhar: function (context) {
    const img = this.imagem;

    let posicaoY = this.posicaoEmenda - img.height;
    context.drawImage(img, 0, posicaoY, img.width, img.height);

    posicaoY = this.posicaoEmenda;
    context.drawImage(img, 0, posicaoY, img.width, img.height);
  }
}