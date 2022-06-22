"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const teclado = new Teclado(document);
const animacao = new Animacao(context);

let carregadas = 0;
const total = 4;

const imgEspaco = carregarImagem("img/fundo-espaco.png");
const imgEstrelas = carregarImagem("img/fundo-estrelas.png");
const imgNuvens = carregarImagem("img/fundo-nuvens.png");
const imgNave = carregarImagem("img/nave.png");

function carregarImagem(src) {
  const imagem = new Image();
  imagem.onload = carregou;
  imagem.src = src;
  return imagem;
}

function carregou() {
  carregadas++;
  if (carregadas == total) iniciar();
}

function iniciar() {
  const fundoEspaco = new Fundo(imgEspaco);
  const fundoEstrelas = new Fundo(imgEstrelas);
  const fundoNuvens = new Fundo(imgNuvens);
  const nave = new Nave(teclado, imgNave);

  fundoEspaco.velocidade = 3;
  fundoEstrelas.velocidade = 7;
  fundoNuvens.velocidade = 10;
  nave.x = canvas.width / 2 - imgNave.width / 2;
  nave.y = canvas.height / 2 - imgNave.height;
  nave.velocidade = 5;

  teclado.disparou(TECLA_ESPACO, () => nave.atirar());
  animacao.novoSprite(fundoEspaco);
  animacao.novoSprite(fundoEstrelas);
  animacao.novoSprite(fundoNuvens);
  animacao.novoSprite(nave);
  animacao.ligar();
}