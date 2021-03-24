//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
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
import jsNivelUno from '../data/jsNivelUno/jsNivelUno.js';
 console.log(jsNivelUno);
// console.log(htmlNivelUno.items[0].class);
let cardsInPlay= [];
let board;

// let intentos = 0; //contador de intentos
// let aciertos = 0; //contador de aciertos

let aciertos=0;
const AppJs = () => {

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
  card.setAttribute("src", jsNivelUno.items[board[i]].image);
  console.log(jsNivelUno.items[board[i]].image);
  card.setAttribute("class", "back2");
  // Establecemos un data-atributo "cardIndex" para identificar la carta
  // con el índice del array board
 card.dataset.cardIndex = jsNivelUno.items[board[i]].class;
  card.addEventListener('click', flipCard);
  el.appendChild(card);
  
 }

 return el;
};

function flipCard(e){
  // Recuperamos el índice de la carta pulsada del data-atributo "cardIndex"
  // console.log(e.target);
  var cardIndex = parseInt(e.target.dataset.cardIndex);
  // console.log(cardIndex);
  // Coge la clase a utilizar (imagen a mostrar) del array board
  e.target.className = "";
  // Añade la carta a las actualmente seleccionadas guaradr abietas
  cardsInPlay.push({cardElement: e.target, cardIndex: cardIndex});
  // Comprueba si hay "match"
  // Se llama con setTimeout para dejar que el navegador muestre la carta girada primero
  setTimeout(testMatch, 300);
}

function testMatch(){
  // Si no se han seleccionado dos cartas no hace nada
  if (cardsInPlay.length < 2) return;
  // Comprueba si las cartas seleccionadas son iguales y llama
  // a la función correspondiente


  // aciertos++; //añadimos uno al contador aciertos (contiene los aciertos)
  // //si el número de aciertos multiplicado por 2 es igual al número de fichas
  // //se da por teminado el juego
  // console.log(aciertos);
  // if ( aciertos * 2 == board) {
  //   console.log(board)
  //     //Paramos el cronómetro
  //     detenerse()
  //     //mensaje de final de juego
  //     alert("Bien Jugado ... y solo lo has tenido que intentar "+intentos+" veces\nComo premio un chorizo de cantimpalo!!!" +
  //         "\nHas tardado en completar el juego "+contador_m+":"+(contador_s-1));
  // }




  if (board[cardsInPlay[0].cardIndex] === board[cardsInPlay[1].cardIndex]){
    match();
  }
  else{
    tryAgain();
  }
  // document.getElementById("movimientos").innerHTML = intentos;
    
}



// Hay pareja

function match(e){
  // Eliminamos el controlador del evento click de las cartas
  cardsInPlay[0].cardElement.removeEventListener('click', flipCard);
  cardsInPlay[1].cardElement.removeEventListener('click', flipCard);
  // Inicia una nueva jugada
  cardsInPlay = [];
  // let aciertos= e.target;
  aciertos++;
  document.getElementById("aciertos").innerHTML=aciertos;
if (aciertos==8) {
  aciertos=0;
  document.querySelector(".endPage").style.display="block";
  document.querySelector(".jsCategory").style.display="none";
  document.querySelector('.htmlCategory').style.display = "none";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.homePage').style.display = "none";
  
}


}



// No hay pareja
function tryAgain(){
  // Se da vuelta a cierran las dos cartas
  cardsInPlay[0].cardElement.className = 'back2';
  cardsInPlay[1].cardElement.className = 'back2';
  // Inicia una nueva jugada
  cardsInPlay = [];
}


//Esta función detiene el cronómetro
var cronometro;
function detenerse(){
       clearInterval(cronometro);
}

export default AppJs;
