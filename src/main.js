
import App from './components/App.js';
import AppCss from './components/AppCss.js';
import AppJs from './components/AppJs.js';

const buttonHtml =document.getElementById("buttonHtml"); 
const startButtonHtml = document.getElementById("startButtonHtml");
const buttonHtmlEnd =document.getElementById("buttonHtmlEnd");
const buttonCss =document.getElementById("buttonCss"); 
const startButtonCss = document.getElementById("startButtonCss");
const buttonCssEnd =document.getElementById("buttonCssEnd");
const buttonJs =document.getElementById("buttonJs"); 
const startButtonJs = document.getElementById("startButtonJs");
const buttonJsEnd =document.getElementById("buttonJsEnd");

const secondPage = () => {                                                    
    document.querySelector('.homePage').style.display = "none";
    document.querySelector('.endPage').style.display="none"
    document.querySelector('.htmlCategory').style.display = "block";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.jsCategory').style.display = "none";
}

buttonHtml.addEventListener("click", secondPage); 
buttonHtmlEnd.addEventListener("click",secondPage);


const thirdPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none"
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "block";
  document.querySelector('.jsCategory').style.display = "none";
}

buttonCss.addEventListener("click", thirdPage); 
buttonCssEnd.addEventListener("click",thirdPage);

const quarterPage = () => {                                                    
  document.querySelector('.homePage').style.display = "none";
  document.querySelector('.endPage').style.display="none"
  document.querySelector('.htmlCategory').style.display = "none";
  document.querySelector('.cssCategory').style.display = "none";
  document.querySelector('.jsCategory').style.display = "block";
}

buttonJs.addEventListener("click", quarterPage); 
buttonJsEnd.addEventListener("click",quarterPage);

const homePage = () => {                                                    
    document.querySelector('.homePage').style.display = "block";
    document.querySelector('.htmlCategory').style.display = "none";
    document.querySelector('.cssCategory').style.display = "none";
    document.querySelector('.jsCategory').style.display = "none";
    document.querySelector('.endPage').style.display="none"
}
startButtonHtml.addEventListener("click", homePage); 
startButtonCss.addEventListener("click", homePage); 
startButtonJs.addEventListener("click", homePage); 





//cronometro
// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   let tiempo=0;     
//    tiempo++
//                   document.getElementById('timer').innerHTML = tiempo;
//                   if (tiempo==6) {
//                     myStopFunction();
//                   }
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }
 window.onload = function() {
            // cargaCartas();
            temporizador();
        };
       
        function temporizador(){
          let tiempo=0;
            temporizador = setInterval(() => {
               
                tiempo++
                document.getElementById('timer').innerHTML = tiempo;
                if (tiempo==6) {
                  myStopFunction();
                }
            }, 1000); 
        }
        function myStopFunction() {
          clearInterval(temporizador);
        }



document.getElementById("root").appendChild(App()); 
document.getElementById("root1").appendChild(AppCss());
document.getElementById("root2").appendChild(AppJs());
