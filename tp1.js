// Almonacid, Fernanda
// tp1 comision 1
//intento hacer el vide pero mi compu no me deja por alguna razón

let img;
function preload() {
  img = loadImage('data/colors.jpg');
}

let fondo;
let invertirColores = false;
let primerClicHecho = true;
let colorCirculo = 0;


function setup() {
  createCanvas(800, 400);
}

let cols = 20;
let filas = 20;
let tamMax = 25;
let tamMin = 5;

function draw() {
  background(108, 113, 117); 
image(img, 0, 0, 400, 400);
  if (primerClicHecho) {
    for (let y = 0; y < filas; y++) {
      for (let x = 0; x < cols; x++) {
        let xPos = map(x, -20, cols - 4, width * 0.1, width * 0.9);
        let yPos = map(y, 1, filas - 2, height * 0.1, height * 0.9);

        let ellipseWidth, ellipseHeight;
        if ((x + y) % 2 === 0) {
          ellipseWidth = calcularRadio(x, y, 0, 0, 20, 20);
          ellipseHeight = ellipseWidth;
          if (invertirColores) {
            fill(255);
          } else {
            fill(colorCirculo);
          }
        } else {
          ellipseWidth = calcularRadio(x, y, 20, 0, 0, 20);
          ellipseHeight = ellipseWidth;
          if (invertirColores) {
            fill(0);
          } else {
            fill(255);
          }
        }

        dibujarCirculo(xPos, yPos, ellipseWidth, ellipseHeight);
      }
    }
  }
}

function mousePressed() {
  if (!primerClicHecho) {
    primerClicHecho = true;
  } else {
    invertirColores = !invertirColores;
  }
}

function calcularRadio(x, y, x1, y1, x2, y2) {
  let d1 = dist(x, y, x1, y1);
  let d2 = dist(x, y, x2, y2);
  let d = min(d1, d2);
  return map(d, 0, max(cols, filas), tamMax, tamMin);
}

function dibujarCirculo(x, y, w, h) {
  noStroke();
  ellipse(x, y, w, h);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    colorCirculo = color(random(255), random(255), random(255));
  }
  if (key === 'r' || key === 'R') {
    colorCirculo = 0;
  }
}
