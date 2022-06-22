"use strict";

function Colisor() {
  this.sprites = [];
  this.aoColidir = null;
}

Colisor.prototype = {
  novoSprite: function (sprite) {
    this.sprites.push(sprite);
  },
  processar: function () {
    const jaTestados = {};

    for (const sprite1 of this.sprites) {
      for (const sprite2 of this.sprites) {
        if (sprite1 == sprite2) continue;

        const id1 = this.stringUnica(sprite1);
        const id2 = this.stringUnica(sprite2);

        if (!jaTestados[id1]) jaTestados[id1] = [];
        if (!jaTestados[id2]) jaTestados[id2] = [];

        if (!(jaTestados[id1].indexOf(id2) >= 0
          || jaTestados[id2].indexOf(id1) >= 0)) {
          this.testarColisao(sprite1, sprite2);
          jaTestados[id1].push(id2);
          jaTestados[id2].push(id1);
        }
      }
    }
  },
  testarColisao: function (sprite1, sprite2) {
    const rets1 = sprite1.retangulosColisao();
    const rets2 = sprite2.retangulosColisao();

    colisoes:
    for (const ret1 of rets1) {
      for (const ret2 of rets2) {
        if (this.retangulosColidem(ret1, ret2)) {
          sprite1.colidiuCom(sprite2);
          sprite2.colidiuCom(sprite1);
          if (this.aoColidir) this.aoColidir(sprite1, sprite2);
          break colisoes;
        }
      }
    }
  },
  retangulosColidem: function (ret1, ret2) {
    return (ret1.x + ret1.largura) > ret2.x && ret1.x < (ret2.x + ret2.largura)
      && (ret1.y + ret1.altura) > ret2.y && ret1.y < (ret2.y + ret2.altura);
  },
  stringUnica: function (sprite) {
    let str = "";
    for (const ret of sprite.retangulosColisao()) {
      str += `x:${ret.x},y:${ret.y},l:${ret.largura},a:{$ret.altura}\n`;
    }
    return str;
  }
}