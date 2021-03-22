//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 //import pokemon from 'data\Data memoria\memoria.js';
// console.log(pokemon);
import htmlNivelUno from '../data/htmlNivelUno/htmlNivelUno.js';
console.log(htmlNivelUno);
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

// for (const items of htmlNivelUno.items){
//   categoriaHtml1.push(items.id,items.id);
// }
// const cartasHTML1=[];
// let turnos;
// turnos=10;

const App = () => {
  // const grid= document.querySelector(".root");
  // // let cardsChosen=[]
  // // cardsChosenId=[]
  // function createBoard(){
  // for (let i = 0; i < array.length; i++) {
  //   let card= document.createElement("img");
  //   card= document.createAttribute("scr", "img/HTML.png");
  //   card.setAttribute("data-id", i);
  //   // card.addEventListener("click", flipCards);
  //   grid.appendChild(card);
  // }

  //  }
  //  createBoard()
  //  function flipCards(){
  //    var cardId=

  //  }
  const el = document.createElement('div');

  el.className = 'App';
  let cardsInPlay= [];

  let cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let board;
  board = [];

  while(cards.length){
    board.push(cards.splice(Math.floor(Math.random() *cards.length), 1)[0]);
  }
for (let i = 0; i < board.length; i++) {
  const cardReverso =  document.createElement("img");
  cardReverso.setAttribute("src", "img/HTML.png");
  // cardReverso.setAttribute('data-id', i)
  el.appendChild(cardReverso);
  //  cardReverso.addEventListener('click', flipCard)

  const card= document.createElement("img");
  card.setAttribute("src", htmlNivelUno.items[board[i]].image);


  el.appendChild(card);

 }

 




 return el;
};

export default App;