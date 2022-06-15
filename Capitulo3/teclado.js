"use strict";
const TECLA_ESPACO = 32;
const SETA_CIMA = 38;
const SETA_ESQUERDA = 37;
const SETA_DIREITA = 39;
const SETA_BAIXO = 40;

function Teclado(elemento) {
  this.elemento = elemento;
  this.pressionadas = [];
  this.disparadas = [];
  this.funcoesDisparo = [];

  const teclado = this;
  elemento.addEventListener("keydown", function (evento) {
    const tecla = evento.keyCode;
    teclado.pressionadas[tecla] = true;

    if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {
      teclado.disparadas[tecla] = true;
      teclado.funcoesDisparo[tecla]();
    }
  });

  elemento.addEventListener("keyup", function (evento) {
    const tecla = evento.keyCode;
    teclado.pressionadas[tecla] = false;
    teclado.disparadas[tecla] = false;
  });
}

Teclado.prototype = {
  disparou: function (tecla, callback) {
    this.funcoesDisparo[tecla] = callback;
  },
  pressionada: function (tecla) {
    return this.pressionadas[tecla];
  }
};