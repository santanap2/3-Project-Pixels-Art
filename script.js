/* eslint-disable prefer-destructuring */
// REQUISITO 1 (TITULO)
const body = document.body;
const titulo = document.createElement('h1');
titulo.id = 'title';
titulo.innerText = 'Paleta de Cores';
body.appendChild(titulo);

// REQUISITO 2 E 3 (PALETA DE CORES)
const paletaDeCores = document.createElement('section');
paletaDeCores.id = 'color-palette';
body.appendChild(paletaDeCores);

const cor1 = document.createElement('div');
cor1.className = 'color';
cor1.style.backgroundColor = 'black';
paletaDeCores.appendChild(cor1);

const cor2 = document.createElement('div');
cor2.className = 'color';
cor2.style.backgroundColor = 'rgb(113, 200, 240)';
paletaDeCores.appendChild(cor2);

const cor3 = document.createElement('div');
cor3.className = 'color';
cor3.style.backgroundColor = 'rgb(247, 159, 59)';
paletaDeCores.appendChild(cor3);

const cor4 = document.createElement('div');
cor4.className = 'color';
cor4.style.backgroundColor = 'rgb(131, 82, 160)';
paletaDeCores.appendChild(cor4);

// REQUISITO 4 (QUADRO 5X5)
const quadro = document.createElement('section');
quadro.id = 'pixel-board';
body.appendChild(quadro);

const pixel1 = document.createElement('div');
pixel1.className = 'pixel';
pixel1.style.backgroundColor = 'white';
quadro.appendChild(pixel1);

const pixel2 = document.createElement('div');
pixel2.className = 'pixel';
pixel2.style.backgroundColor = 'white';
quadro.appendChild(pixel2);

const pixel3 = document.createElement('div');
pixel3.className = 'pixel';
pixel3.style.backgroundColor = 'white';
quadro.appendChild(pixel3);

const pixel4 = document.createElement('div');
pixel4.className = 'pixel';
pixel4.style.backgroundColor = 'white';
quadro.appendChild(pixel4);

const pixel5 = document.createElement('div');
pixel5.className = 'pixel';
pixel5.style.backgroundColor = 'white';
quadro.appendChild(pixel5);

// linha 2

const pixel6 = document.createElement('div');
pixel6.className = 'pixel';
pixel6.style.backgroundColor = 'white';
quadro.appendChild(pixel6);

const pixel7 = document.createElement('div');
pixel7.className = 'pixel';
pixel7.style.backgroundColor = 'white';
quadro.appendChild(pixel7);

const pixel8 = document.createElement('div');
pixel8.className = 'pixel';
pixel8.style.backgroundColor = 'white';
quadro.appendChild(pixel8);

const pixel9 = document.createElement('div');
pixel9.className = 'pixel';
pixel9.style.backgroundColor = 'white';
quadro.appendChild(pixel9);

const pixel10 = document.createElement('div');
pixel10.className = 'pixel';
pixel10.style.backgroundColor = 'white';
quadro.appendChild(pixel10);

// linha 3

const pixel11 = document.createElement('div');
pixel11.className = 'pixel';
pixel11.style.backgroundColor = 'white';
quadro.appendChild(pixel11);

const pixel12 = document.createElement('div');
pixel12.className = 'pixel';
pixel12.style.backgroundColor = 'white';
quadro.appendChild(pixel12);

const pixel13 = document.createElement('div');
pixel13.className = 'pixel';
pixel13.style.backgroundColor = 'white';
quadro.appendChild(pixel13);

const pixel14 = document.createElement('div');
pixel14.className = 'pixel';
pixel14.style.backgroundColor = 'white';
quadro.appendChild(pixel14);

const pixel15 = document.createElement('div');
pixel15.className = 'pixel';
pixel15.style.backgroundColor = 'white';
quadro.appendChild(pixel15);

// linha 4

const pixel16 = document.createElement('div');
pixel16.className = 'pixel';
pixel16.style.backgroundColor = 'white';
quadro.appendChild(pixel16);

const pixel17 = document.createElement('div');
pixel17.className = 'pixel';
pixel17.style.backgroundColor = 'white';
quadro.appendChild(pixel17);

const pixel18 = document.createElement('div');
pixel18.className = 'pixel';
pixel18.style.backgroundColor = 'white';
quadro.appendChild(pixel18);

const pixel19 = document.createElement('div');
pixel19.className = 'pixel';
pixel19.style.backgroundColor = 'white';
quadro.appendChild(pixel19);

const pixel20 = document.createElement('div');
pixel20.className = 'pixel';
pixel20.style.backgroundColor = 'white';
quadro.appendChild(pixel20);

// linha 5

const pixel21 = document.createElement('div');
pixel21.className = 'pixel';
pixel21.style.backgroundColor = 'white';
quadro.appendChild(pixel21);

const pixel22 = document.createElement('div');
pixel22.className = 'pixel';
pixel22.style.backgroundColor = 'white';
quadro.appendChild(pixel22);

const pixel23 = document.createElement('div');
pixel23.className = 'pixel';
pixel23.style.backgroundColor = 'white';
quadro.appendChild(pixel23);

const pixel24 = document.createElement('div');
pixel24.className = 'pixel';
pixel24.style.backgroundColor = 'white';
quadro.appendChild(pixel24);

const pixel25 = document.createElement('div');
pixel25.className = 'pixel';
pixel25.style.backgroundColor = 'white';
quadro.appendChild(pixel25);
