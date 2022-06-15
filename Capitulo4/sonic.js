"use strict";
const SONIC_DIREITA = 1;
const SONIC_ESQUERDA = 2;

function Sonic(teclado, imagem) {
  this.teclado = teclado;
  this.x = 0;
  this.y = 0;

  this.sheet = new Spritesheet(imagem, 3, 8);
  this.sheet.intervalo = 60;

  this.andando = false;
  this.direcao = SONIC_DIREITA;
  this.velocidade = 10;
}

Sonic.prototype = {
  atualizar: function (context) {
    if (this.teclado.pressionada(SETA_DIREITA)) {
      if (!this.andando || this.direcao != SONIC_DIREITA) {
        this.sheet.linha = 1;
        this.sheet.coluna = 0;
      }
      
      this.andando = true;
      this.direcao = SONIC_DIREITA;
      this.sheet.proximoQuadro();

      if (this.x < context.canvas.width - this.sheet.larguraQuadro) {
        this.x += this.velocidade;
      }
    } else if (this.teclado.pressionada(SETA_ESQUERDA)) {
      if (!this.andando || this.direcao != SONIC_ESQUERDA) {
        this.sheet.linha = 2;
        this.sheet.coluna = 0;
      }

      this.andando = true;
      this.direcao = SONIC_ESQUERDA;
      this.sheet.proximoQuadro();

      if (this.x > 0) {
        this.x -= this.velocidade;
      }
    } else {
      this.andando = false;
      this.sheet.linha = 0;

      if (this.direcao == SONIC_DIREITA) {
        this.sheet.coluna = 0;
      } else if (this.direcao == SONIC_ESQUERDA) {
        this.sheet.coluna = 1;
      }
    }
  },
  desenhar: function (context) {
    this.sheet.desenhar(context, this.x, this.y);
  }
};