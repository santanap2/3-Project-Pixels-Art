/* eslint-disable no-use-before-define */
// REQUISITO 1 (TITULO)
const { body } = document;
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
cor1.style.backgroundColor = 'black';
paletaDeCores.appendChild(cor1);

const cor2 = document.createElement('div');
cor2.className = 'color';
paletaDeCores.appendChild(cor2);

const cor3 = document.createElement('div');
cor3.className = 'color';
paletaDeCores.appendChild(cor3);

const cor4 = document.createElement('div');
cor4.className = 'color';
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

const cleanButton = document.createElement('button');
cleanButton.id = 'clear-board';
cleanButton.innerText = 'Limpar';
newSection.appendChild(cleanButton);

function resetColors() {
  for (let n = 0; n < quadro.children.length; n += 1) {
    const pixels = document.querySelectorAll('#pixel-board div')[n];
    pixels.style.backgroundColor = 'white';
  }
}
cleanButton.addEventListener('click', resetColors);

// REQUISITO 4 E 5(QUADRO 5X5)
const quadro = document.createElement('section');
quadro.id = 'pixel-board';
body.appendChild(quadro);

function criarQuadroPixels(n) {
  const numeroPixels = n * n;
  for (let i = 0; i < numeroPixels; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
  }
  quadro.style.gridTemplateColumns = `repeat(${n}, 40px)`;
  quadro.style.gridTemplateRows = `repeat(${n}, 40px)`;

  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => {
    item.addEventListener('click', pintarPixel);
  });
}

criarQuadroPixels(5);

// REQUISITO 7 (ADICIONAR CLASSE SELECTED)
function removeClasses() {
  if (cor1.classList.contains('selected')) {
    cor1.classList.remove('selected');
  }
  if (cor2.classList.contains('selected')) {
    cor2.classList.remove('selected');
  }
  if (cor3.classList.contains('selected')) {
    cor3.classList.remove('selected');
  }
  if (cor4.classList.contains('selected')) {
    cor4.classList.remove('selected');
  }
  // if (borracha.classList.contains('selected')) {
  //   borracha.classList.remove('selected');
  // }
}

function adicionaClasse1() {
  removeClasses();
  cor1.classList.add('selected');
}

function adicionaClasse2() {
  removeClasses();
  cor2.classList.add('selected');
}

function adicionaClasse3() {
  removeClasses();
  cor3.classList.add('selected');
}

function adicionaClasse4() {
  removeClasses();
  cor4.classList.add('selected');
}

// function adicionaClasse5() {
//   removeClasses();
//   borracha.classList.add('selected');
// }

cor1.addEventListener('click', adicionaClasse1);
cor2.addEventListener('click', adicionaClasse2);
cor3.addEventListener('click', adicionaClasse3);
cor4.addEventListener('click', adicionaClasse4);
// borracha.addEventListener('click', adicionaClasse5);

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

// REQUISITO 10 [INCOMPLETO]
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.placeholder = 'Tamanho do lado';
input.min = '1';
input.max = '50';
newSection.appendChild(input);

const buttonVQV = document.createElement('button');
buttonVQV.id = 'generate-board';
buttonVQV.innerText = 'VQV';
newSection.appendChild(buttonVQV);

function botaoVQV() {
  if (input.value < 1 || input.value === undefined) {
    alert('Board Inválido!');
    criarQuadroPixels(5);
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  quadro.innerHTML = '';
  criarQuadroPixels(input.value);
}

buttonVQV.addEventListener('click', botaoVQV);

// REQUISITO 12 (CORES ALEATÓRIAS)
function numeroAleatorio() {
  const num1 = Math.floor(Math.random() * 255);
  const num2 = Math.floor(Math.random() * 255);
  const num3 = Math.floor(Math.random() * 255);
  const cor = `rgb(${num1}, ${num2}, ${num3})`;
  return cor;
}
function coresAleatorias() {
  const colors = document.querySelectorAll('.color');
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = numeroAleatorio();
  }
}

coresAleatorias();
