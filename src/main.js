import App from "./components/App.js";





















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
