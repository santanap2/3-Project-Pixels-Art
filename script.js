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
cor1.id = 'black';
cor1.style.backgroundColor = 'black';
paletaDeCores.appendChild(cor1);

const cor2 = document.createElement('div');
cor2.className = 'color';
cor2.id = 'blue';
cor2.style.backgroundColor = 'rgb(113, 200, 240)';
paletaDeCores.appendChild(cor2);

const cor3 = document.createElement('div');
cor3.className = 'color';
cor3.id = 'orange';
cor3.style.backgroundColor = 'rgb(247, 159, 59)';
paletaDeCores.appendChild(cor3);

const cor4 = document.createElement('div');
cor4.className = 'color';
cor4.id = 'purple';
cor4.style.backgroundColor = 'rgb(131, 82, 160)';
paletaDeCores.appendChild(cor4);

// REQUISITO 4 E 5(QUADRO 5X5)

const quadro = document.createElement('section');
quadro.id = 'pixel-board';
body.appendChild(quadro);

function criarPixel(n) {
  for (let i = 0; i < n; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
  }
}
criarPixel(25);

// REQUISITO 7
const preto = document.getElementById('black');
const azul = document.getElementById('blue');
const laranja = document.getElementById('orange');
const roxo = document.getElementById('purple');
const cores = document.querySelectorAll('color');

function removeClasses() {
  if (preto.classList.contains('selected')) {
    preto.classList.remove('selected');
  }
  if (azul.classList.contains('selected')) {
    azul.classList.remove('selected');
  }
  if (laranja.classList.contains('selected')) {
    laranja.classList.remove('selected');
  }
  if (roxo.classList.contains('selected')) {
    roxo.classList.remove('selected');
  }
}

function adicionaClasse() {
  removeClasses();
  cores.classList.add('selected');
}

preto.addEventListener('click', adicionaClasse);
azul.addEventListener('click', adicionaClasse);
laranja.addEventListener('click', adicionaClasse);
roxo.addEventListener('click', adicionaClasse);
