"use strict";

function Spritesheet(imagem, linhas, colunas) {
  this.imagem = imagem;
  this.numLinhas = linhas;
  this.numColunas = colunas;
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
    const larguraQuadro = this.imagem.width / this.numColunas;
    const alturaQuadro = this.imagem.height / this.numLinhas;

    context.drawImage(
      this.imagem, larguraQuadro * this.coluna, alturaQuadro * this.linha,
      larguraQuadro, alturaQuadro, x, y, larguraQuadro, alturaQuadro
    );
  }
};