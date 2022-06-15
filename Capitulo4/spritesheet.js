"use strict";

function Spritesheet(imagem, linhas, colunas) {
  this.imagem = imagem;
  this.numLinhas = linhas;
  this.numColunas = colunas;
  this.larguraQuadro = this.imagem.width / this.numColunas;
  this.alturaQuadro = this.imagem.height / this.numLinhas;
  this.intervalo = 0;
  this.linha = 0;
  this.coluna = 0;
}

Spritesheet.prototype = {
  proximoQuadro: function () {
    const agora = new Date().getTime();

    if (!this.ultimoTempo) {
      this.ultimoTempo = agora;
    }

    if (agora - this.ultimoTempo < this.intervalo) {
      return;
    }

    if (this.coluna < this.numColunas - 1) {
      this.coluna++;
    } else {
      this.coluna = 0;
    }

    this.ultimoTempo = agora;
  },
  desenhar: function (context, x, y) {
    context.drawImage(
      this.imagem, this.larguraQuadro * this.coluna, this.alturaQuadro * this.linha,
      this.larguraQuadro, this.alturaQuadro, x, y, this.larguraQuadro, this.alturaQuadro
    );
  }
};