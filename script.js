/* eslint-disable max-len */
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

const borracha = document.createElement('div');
borracha.className = 'color';
borracha.style.backgroundColor = 'white';
paletaDeCores.appendChild(borracha);

// REQUISITO 9 (BOTÃO LIMPAR CORES)
const newSection = document.createElement('section');
newSection.id = 'sec-button';
body.appendChild(newSection);

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.innerText = 'Limpar';
newSection.appendChild(clearButton);

function resetColors() {
  for (let n = 0; n < pixels.length; n += 1) {
    const pixels = document.querySelectorAll('#pixel-board div')[n];
    pixels.style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', resetColors);

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
}

criarQuadroPixels(5);

// REQUISITO 7 (ADICIONAR CLASSE SELECTED)
// eslint-disable-next-line complexity
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
  if (borracha.classList.contains('selected')) {
    borracha.classList.remove('selected');
  }
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

function adicionaClasse5() {
  removeClasses();
  borracha.classList.add('selected');
}

cor1.addEventListener('click', adicionaClasse1);
cor2.addEventListener('click', adicionaClasse2);
cor3.addEventListener('click', adicionaClasse3);
cor4.addEventListener('click', adicionaClasse4);
borracha.addEventListener('click', adicionaClasse5);

// REQUISITO 8 (PINTAR PIXELS)
function pintarPixel(eventoDeOrigem) {
  const pixel = eventoDeOrigem.target;
  console.log(eventoDeOrigem.target);
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
input.min = '5';
input.max = '50';
newSection.appendChild(input);

const buttonVQV = document.createElement('button');
buttonVQV.id = 'generate-board';
buttonVQV.innerText = 'VQV';
newSection.appendChild(buttonVQV);

function botaoVQV() {
  quadro.innerHTML = '';
  criarQuadroPixels(input.value);
  console.log(input.value);
}

buttonVQV.addEventListener('click', botaoVQV);

// REQUISITO 11 [INCOMPLETO]
// function sizeLimit() {
//   const number = input.value;
//   if (number < 1) {
//     alert('Board Inválido!');
//   }
//   if (number < 5) {
//     return 5;
//   }
//   if (number > 50) {
//     return 50;
//   }
// }

// sizeLimit();

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
  for (let i = 1; i < colors.length - 1; i += 1) {
    colors[i].style.backgroundColor = numeroAleatorio();
  }
}

coresAleatorias();

// // RODAPE
// const rodape = document.createElement('footer');
// rodape.id = 'rodape';
// body.appendChild(rodape);

// const section = document.createElement('section');
// section.innerHTML = '<section><strong> Projeto Pixels Art - Bloco 05: JavaScript: DOM, Eventos e Web Storage</strong><br>Pedro Henrique Santana de Menezes @ Maio 2022</section>';
// rodape.appendChild(section);

// const images = document.createElement('section');
// images.style.margin = '20px 0 0 0';
// images.innerHTML = '<strong>Links Pessoais</strong> <br><a href="https://github.com/santanap2" target="_blank"><img src="./rsz_github.png" alt="Logo Github" class="logos"></a> <a class="logos" href="https://www.instagram.com/santanap2/" target="_blank"><img src="rsz_1instagram.png" alt="Logo Instagram" class="logos"></a> <a class="button" href="https://www.linkedin.com/in/pedro-santana-895445238/" target="_blank"><img src="./rsz_linkedin.png" alt="Lobo LinkedIn" class="logos"></a>';
// rodape.appendChild(images);
