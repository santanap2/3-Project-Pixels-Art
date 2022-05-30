/* eslint-disable no-use-before-define */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable prefer-destructuring */
// function bemVindo() {
//   alert('Bem vindo ao Projeto Pixels Art! Divirta-se!!!');
// }

// window.onload = bemVindo;

// REQUISITO 1 (TITULO)
const body = document.body;
const titulo = document.createElement('h1');
titulo.id = 'title';
titulo.innerText = 'Paleta de Cores';
body.appendChild(titulo);

// REQUISITO 2, 3 E 6 (PALETA DE CORES)
const paletaDeCores = document.createElement('section');
paletaDeCores.id = 'color-palette';
body.appendChild(paletaDeCores);

const cor1 = document.createElement('div');
cor1.className = 'color selected';
cor1.id = 'paleta1';
cor1.style.backgroundColor = 'black';
paletaDeCores.appendChild(cor1);

const cor2 = document.createElement('div');
cor2.className = 'color';
cor2.id = 'paleta2';
cor2.style.backgroundColor = 'rgb(113, 200, 240)';
paletaDeCores.appendChild(cor2);

const cor3 = document.createElement('div');
cor3.className = 'color';
cor3.id = 'paleta3';
cor3.style.backgroundColor = 'rgb(247, 159, 59)';
paletaDeCores.appendChild(cor3);

const cor4 = document.createElement('div');
cor4.className = 'color';
cor4.id = 'paleta4';
cor4.style.backgroundColor = 'rgb(131, 82, 160)';
paletaDeCores.appendChild(cor4);

// const borracha = document.createElement('div');
// borracha.className = 'color';
// borracha.id = 'borracha';
// borracha.style.backgroundColor = 'rgb(254, 255, 255)';
// paletaDeCores.appendChild(borracha);

// REQUISITO 9 (BOTÃO LIMPAR CORES)
const newSection = document.createElement('section');
newSection.id = 'sec-button';
body.appendChild(newSection);

const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
newSection.appendChild(button);

function reset() {
  for (let n = 0; n < pixels.length; n += 1) {
    const pixels = document.querySelectorAll('#pixel-board div')[n];
    pixels.style.backgroundColor = 'white';
  }
}
button.addEventListener('click', reset);

// REQUISITO 10 [INCOMPLETO]
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.placeholder = 'Tamanho do lado';
input.min = '1';
input.max = '20';
newSection.appendChild(input);

const buttonVQV = document.createElement('button');
buttonVQV.id = 'generate-board';
buttonVQV.innerText = 'VQV';
// buttonVQV.addEventListener('click', );
newSection.appendChild(buttonVQV);

// REQUISITO 4 E 5(QUADRO 5X5)
const quadro = document.createElement('section');
quadro.id = 'pixel-board';
body.appendChild(quadro);

function criarLinhaPixel(n) {
  for (let i = 0; i < n * n; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = i;
    quadro.appendChild(pixel);
  }
}

function tamanhoDoQuadro(n) {
  quadro.style.width = `${42.6 * n}px`;
  quadro.style.heigth = `${42.6 * n}px`;
  criarLinhaPixel(n);
}

tamanhoDoQuadro(8);

// REQUISITO 7 (ADICIONAR CLASSE SELECTED)
const paleta1 = document.getElementById('paleta1');
const paleta2 = document.getElementById('paleta2');
const paleta3 = document.getElementById('paleta3');
const paleta4 = document.getElementById('paleta4');
// const eraser = document.getElementById('borracha');

// eslint-disable-next-line complexity
function removeClasses() {
  if (paleta1.classList.contains('selected')) {
    paleta1.classList.remove('selected');
  }
  if (paleta2.classList.contains('selected')) {
    paleta2.classList.remove('selected');
  }
  if (paleta3.classList.contains('selected')) {
    paleta3.classList.remove('selected');
  }
  if (paleta4.classList.contains('selected')) {
    paleta4.classList.remove('selected');
  }
  // if (eraser.classList.contains('selected')) {
  //   eraser.classList.remove('selected');
  // }
}

function adicionaClasse1() {
  removeClasses();
  paleta1.classList.add('selected');
}

function adicionaClasse2() {
  removeClasses();
  paleta2.classList.add('selected');
}

function adicionaClasse3() {
  removeClasses();
  paleta3.classList.add('selected');
}

function adicionaClasse4() {
  removeClasses();
  paleta4.classList.add('selected');
}

// function adicionaClasse5() {
//   removeClasses();
//   eraser.classList.add('selected');
// }

paleta1.addEventListener('click', adicionaClasse1);
paleta2.addEventListener('click', adicionaClasse2);
paleta3.addEventListener('click', adicionaClasse3);
paleta4.addEventListener('click', adicionaClasse4);
// eraser.addEventListener('click', adicionaClasse5);

// REQUISITO 8 (PINTAR PIXELS)
function pintarPixel(eventoDeOrigem) {
  const pixel = eventoDeOrigem.target;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = selectedColor;
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((item) => {
  item.addEventListener('click', pintarPixel);
});

// REQUISITO 12
// const color1 = Math.floor(Math.random)
