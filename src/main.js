
import App from './components/App.js';
const buttonHtml =document.getElementById("buttonHtml"); 
const startButton = document.getElementById("startButton");
const buttonHtmlEnd =document.getElementById("buttonHtmlEnd");

const secondPage = () => {                                                    
    document.querySelector('.homePage').style.display = "none";
    document.querySelector('.endPage').style.display="none"
    document.querySelector('.htmlCategory').style.display = "block";
}

buttonHtml.addEventListener("click", secondPage); 
buttonHtmlEnd.addEventListener("click",secondPage);

const homePage = () => {                                                    
    document.querySelector('.homePage').style.display = "block";
    document.querySelector('.htmlCategory').style.display = "none";
    document.querySelector('.endPage').style.display="none"
}
startButton.addEventListener("click", homePage);  


//cronometro
 window.onload = function() {
            // cargaCartas();
            temporizador();
        };
        // function desordenarArrays(arrayX){
        //     let arrayReacomodado = arrayX.sort(function(){return Math.random() -0.5});
        //     return arrayReacomodado;
        // }
        function temporizador(){
          let tiempo=0;
            temporizador = setInterval(() => {
               
                tiempo++
                document.getElementById('temporizador').innerHTML = tiempo;
                if (tiempo==6) {
                  myStopFunction();
                }
            }, 1000);

            
        }
        function myStopFunction() {
          clearInterval(temporizador);
        }



document.getElementById("root").appendChild(App());
