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
cor1.className = 'color selected';
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

// REQUISITO 6 (COR INICIAL PRETA)



