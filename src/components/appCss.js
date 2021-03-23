
import cssNivelUno from '../data/cssNivelUno/cssNivelUno.js';
console.log(cssNivelUno);
console.log(cssNivelUno.items[0].class);
let cardsInPlay= [];
let board;
const AppCss = () => {

  const el = document.createElement('div');
  el.className = 'AppCss';
  
  let cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  
  board = [];

  while(cards.length){
    board.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);
  }

for (let i = 0; i < board.length; i++) {
  
  const card= document.createElement("img");
  card.setAttribute("src", cssNivelUno.items[board[i]].image);
  card.setAttribute("class", "back1");
  // Establecemos un data-atributo "cardIndex" para identificar la carta
  // con el índice del array board
  card.dataset.cardIndex = cssNivelUno.items[board[i]].class;
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

export default AppCss;