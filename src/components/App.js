//
// Para incluir los diferentes sets de cartas podemos importar el archivo
// JavasSript que contenga el `export` correspondiente...
//
 //import pokemon from 'data\Data memoria\memoria.js';
// console.log(pokemon);

// import htmlNivelDos from '../data/htmlNivelDos/htmlNivelDos.js';
// console.log(htmlNivelDos);

//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import htmlNivelUno from '../data/htmlNivelUno/htmlNivelUno.js';
 console.log(htmlNivelUno);
// console.log(htmlNivelUno.items[0].class);
let cardsInPlay= [];
let board;
const App = () => {

  const el = document.createElement('div');
  el.className = 'App';
  
  let cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  
  board = [];
//para barajar las cartas o hacer que las cartas aleatoria al recargar la pagina
  while(cards.length){
    board.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);

  }
//realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
for (let i = 0; i < board.length; i++) {
  
  const card= document.createElement("img");
  card.setAttribute("src", htmlNivelUno.items[board[i]].image);
  console.log(htmlNivelUno.items[board[i]].image);
  card.setAttribute("class", "back");
  // Establecemos un data-atributo "cardIndex" para identificar la carta
  // con el índice del array board
  card.dataset.cardIndex = htmlNivelUno.items[board[i]].class;
  card.addEventListener('click', flipCard);
  el.appendChild(card);
  
 }
 
 




 return el;
};

function flipCard(){
  // Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  var cardIndex = parseInt(this.dataset.cardIndex);
  console.log(this);
  // Coge la clase a utilizar (imagen a mostrar) del array board
  this.className = "";
  // Añade la carta a las actualmente seleccionadas
  cardsInPlay.push({cardElement: this, cardIndex: cardIndex});
  // Comprueba si hay "match"
  // Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
  setTimeout(testMatch, 100);
}

function testMatch(){
  // Si no se han seleccionado dos cartas no hace nada
  if (cardsInPlay.length < 2) return;
  // Comprueba si las cartas seleccionadas son iguales y llama
  // a la función correspondiente

  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]){
    match();
  }
  else{
    tryAgain();
  }
}

// Hay pareja
function match(){
  // Eliminamos el controlador del evento click de las cartas
  cardsInPlay[0].cardElement.removeEventListener('click', flipCard);
  cardsInPlay[1].cardElement.removeEventListener('click', flipCard);
  // Inicia una nueva jugada
  cardsInPlay = [];
}

// No hay pareja
function tryAgain(){
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = 'back';
  cardsInPlay[1].cardElement.className = 'back';
  // Inicia una nueva jugada
  cardsInPlay = [];
}

export default App;