"use strict";
const containerElem = document.getElementById("container");

function createCanvas() {
  const elem = document.createElement("canvas")
  elem.width = 300;
  elem.height = 300;
  containerElem.appendChild(elem);

  const context = elem.getContext("2d");
  return context;
}

(function () {
  const context = createCanvas();
  context.fillRect(40, 100, 100, 100);
  context.strokeRect(160, 100, 100, 100);
})();

(function () {
  const context = createCanvas();
  context.fillStyle = "red";
  context.fillRect(100, 100, 100, 100);

  context.lineWidth = 3;
  context.strokeStyle = "blue";
  context.strokeRect(100, 100, 100, 100);
})();

(function () {
  const context = createCanvas();
  context.beginPath();
  context.moveTo(75, 250);
  context.lineTo(150, 50);
  context.lineTo(225, 250);
  context.lineTo(50, 120);
  context.lineTo(250, 120);
  context.lineTo(75, 250);
  context.lineWidth = 2;
  context.strokeStyle = "red";
  context.stroke();
})();

(function () {
  const context = createCanvas();
  context.fillStyle = "gray";
  context.strokeStyle = "black";
  context.lineWidth = 2;

  context.beginPath();
  context.arc(50, 150, 40, 0.5 * Math.PI, 1.5 * Math.PI, false);
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(150, 150, 40, 0.5 * Math.PI, 1.5 * Math.PI, true);
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(250, 150, 40, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
})();

(function () {
  const context = createCanvas();

  const img = new Image();
  img.src = "img/ovni.png";

  img.onload = function () {
    let x = 10;
    let y = 20;

    for (let i = 1; i <= 16; i++) {
      context.drawImage(img, x, y, 64, 32);

      if (x >= context.canvas.width - 80) {
        x = 10;
        y += 70;
      } else {
        x += 70;
      }
    }
  };
})();

(function () {
  const context = createCanvas();

  const img = new Image();
  img.src = "img/explosao.png";

  img.onload = function () {
    context.drawImage(img, 80, 10, 60, 65, 95, 90, 120, 130);
  };
})();

(function () {
  const context = createCanvas();

  context.fillStyle = "green";
  context.fillRect(87, 137, 25, 25);
  context.save();

  context.fillStyle = "purple";
  context.fillRect(137, 137, 25, 25);
  context.restore();

  context.fillRect(187, 137, 25, 25);
})();

(function () {
  const context = createCanvas();

  let x = 40;
  let y = 150;
  let raio = 25;

  let velocidade = 20;
  let anterior = new Date().getTime();

  requestAnimationFrame(mexerBola);

  function mexerBola() {
    const canvas = context.canvas;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, raio, 0, Math.PI * 2);
    context.fill();

    const agora = new Date().getTime();
    const decorrido = agora - anterior;

    if (x - raio > canvas.width) {
      x = -raio;
    } else {
      x += velocidade * decorrido / 250;
    }

    anterior = agora;
    requestAnimationFrame(mexerBola);
  }
})();