# Memory Match Game

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)),
también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre otros, es un juego de cartas en el que todas las cartas se ponen cara
abajo sobre una superficie y se le dan la vuelta a dos cartas en cada turno. El
objetivo del juego es destapar parejas de cartas que coincidan.

![Concentration (card game)](https://upload.wikimedia.org/wikipedia/commons/4/4d/WMCZ_Protected_Areas_Card_Game-7_%28cropped%29.jpg)

Ejemplos:

* [Santa Tracker de Google](https://santatracker.google.com/matching.html)
* [Match The Memory](https://matchthememory.com/play)

## 2. Resumen del proyecto

En este proyecto construirás una versión _web_ del juego _Memory Match_, en la
que una jugadora pueda jugar sola, en el navegador.

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web basada en data e interacción con la usuaria.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Dado un set de cartas, barajar las cartas y mostrarlas en la interfaz.
2. Permitir al usuario _destapar_ las cartas de 2 en 2.
3. Dejar destapadas las cartas que coincidan al destaparlas.
4. Indicar al usuario que ganó cuando haya destapado todas las cartas.
5. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
6. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto incluye
[pruebas unitarias (_unit tests_) de un componente como ejemplo](./src/components/App.spec.js).
A medida que vayas agregando componentes tendrás que ir agregando pruebas para
mantener buena _cobertura_.

Tus _pruebas unitarias_ deben tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) de tus componentes.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregar nuevos sets de cartas.
* Calcular puntuación basado en número de turnos.
* Agregar timer y tener cuenta en puntuación.
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript,
HTML y CSS. En este proyecto NO está permitido usar librerías o frameworks, solo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Para iniciar un nuevo juego, siempre tendremos que _barajar_ las cartas antes de
pintarlas en la pantalla. Para eso, te invitamos a que explores algoritmos
existentes para este tipo de operación (llamada _shuffle_ en inglés), como por
ejemplo el [_algoritmo de Fisher-Yates (aka Knuth)_](https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates).

En este proyecto no se espera que _inventes_ o implementes tu propio algoritmo
para barajar las cartas, si no que _googlees_, veas opciones existentes,
consideres opciones y adaptes una a tu proyecto (agregando una función `shuffle`
que se pueda usar en tu aplicación).

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── data
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── README.md
    │   └── webdev
    │       ├── webdev.js
    │       └── webdev.json
    ├── index.html
    ├── main.js
    └── style.css
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` como punto de entrada de tu aplicación. El
_boilerplate_ incluye este archivo para _conectar_ o _montar_ el _componente_
`App` en el DOM. De esta forma podremos hacer pruebas unitarias de nuestros
componentes sin necesidad de que estén conectados a un DOM global.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/components/App.js`

Este archivo contiene un _componente_ de ejemplo que muestra cómo podemos
representar un _componente_ como una función que retorna un `HTMLElement`. A la
hora de construir interfaces es útil pensar en términos de _componentes_ o
_vistas_ que podemos ir anidando unas dentro de otras. Te invitamos a que
pienses qué _componentes_ o _cajitas_ necesitas para construir tu aplicación y
que vayas agregando _componentes_ en el directorio `components` para implementar
cada uno de ellos. Aunque, otra vez, la forma de organizar tu archivos depende
al final de tí y de tu equipo. Hay muchas formas de hacerlo, y el _boilerplate_
es solo una sugerencia 🙊.

### `src/components/App.spec.js`

Este archivo muestra cómo podemos crear archivos con _especificaciones_
(expresadas como pruebas unitarias) de nuestros componentes.

### `src/data`

En esta carpeta hay data con sets de cartas de ejemplo que puedes usar en tu
aplicación, así como información sobre cómo agregar tus propios sets.
Encontrarás una carpeta por cada set, y dentro de cada carpeta dos archivos: uno
con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma data;
la diferencia es que el `.js` lo usaremos a través de un `import`, mientras que
el `.json` está ahí para opcionalmente cargar la data de forma asíncrona con
[`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los componentes principales de la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Memory Match](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra cartas _barajadas_ correctamente.
* [ ] UI: Permite al usuario _destapar_ las cartas de 2 en 2.
* [ ] UI: Deja destapadas las cartas que coincidan al destaparlas.
* [ ] UI: Indica al usuario que ganó cuando sea relevante.
* [ ] UI: Es _responsive_.
* [ ] UI: La interfaz sigue los fundamentos de _visual design_.

# INICIO DEL PROYECTO
-se inicia con la lectura, analisis y comprención del proyecto.

-se clona el proyecto y se crea la rama.

-Nos reunimos para escojer el tema de nuestro proyecto, el nombre del mismo y hacia quien va dirigido.

## TEMA DEL PROYECTO
Este proyecto es un juego de enseñanza, pensado para aquellos usuarios que deseen aprender conceptos básico de programación de una forma entretenida, a través de este juego de memoria.

 ## TIPO DE USUARIO
 Va dirijido a usuarios mayores de 15 años, en particular a esos usuarios que deseen aprender los conceptos basicos de programacion a traves de un juego.

 ## TITULO DEL PROYECTO
MEMORY CODE

## PROTOTIPO DE BAJA FIDELIDAD:
-Realizamos el prototipo de baja fidelidad para hacer un testeo con los posible usuarios.

 <img src="img/prototipoUno.png" alt="prototipoUno" width="200"/>

## TESTEO
-Realizamos una encuesta para verificar que nuestro proyecto era aceptable acontinuacion el link de la encuesta.

<a herf="https://docs.google.com/forms/d/1OMjEv8ONb850h3XaI-IQCkK9ZGAQR_IG3vjP9LZt4as/edit?ts=603e4585&gxids=7628#responses"></a>
 
 y obtuvimos como resultado las siguientes respuesta:
 
 <img src="img/encuestaRespuesta1.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta2.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta3.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta4.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta5.png" alt="prototipoUno" width="1000"/>

 esta ultima respuesta nos llamo mucho la atención ya que no colocamos los items de seleccion de los conceptos basicos a aprender.
 
 ## HISTORIA DE USUARIO
 las historias de usuario tomadas
 para nuestro prototipo fueron las siguientes:
 iniciamos con las siguientes Historias:
 <img src="img/historiaUsuario1.png" alt="prototipoUno" width="1000"/>
 pero al realizar el feedback nos recomendaron hacerlas mejor y obtuvimos de nuestros usuarios las siguientes historias:
 <img src="img/historia1.jpg" alt="prototipoUno" width="1000"/>
 <img src="img/historia2.png" alt="prototipoUno" width="1000"/>
 <img src="img/historia3.png" alt="prototipoUno" width="1000"/>
 <img src="img/historia4.png" alt="prototipoUno" width="1000"/>
  <img src="img/historia5.png" alt="prototipoUno" width="1000"/>


 ## PROTOTIPO DE ALTA FIDELIDAD

 Tomando en concideracion las historias de usuario comenzamos  nuestro prototipo de alta fidelidad.
 - Realizamos dos prototipos para obtener feedback sobre ellos y tomar su opinion para elejir el trototipo a trabajar:

### opción 1

 <img src="img/prototipoopcion1.png" alt="prototipoUno" width="1000"/>

### opción 2

 <img src="img/prototipoopcion2.png" alt="prototipoUno" width="1000"/>

 ## PRIMER SPRINT
-Nuestros usiarios eligieron la opción 2 y comenzamos a trabajar su estructura.

## GIT COLABORATIVO
-Nathaly entro a la carpeta donde se va a clonar el proyecto y con clic derecho le damos a la opción Git Gash  Here que nos abre una terminal donde colocamos "git clone y la url de la carpeta en "gitHub" que esta en el repositorio remoto.
-le envio a Mailys la url de su proyecto (clonado). y esta entró. ya dentro del repositorio remoto de Nathaly forkea el proyecto y crea una Rama.
-crea la rama en la terminal local con:
git remote -v (para ver la rama a las que estas conectados)
git branch _nombre de la rama_
git branch -l (para ver en que rama estoy)
-Nathaly tambien creo una rama para no trabajar directamente en la rama master.
 -luego entra a Visual stude code entre a la terminal e intallamos el " npm install "

 # ESTRUCTURA HTML
 -Primera vista: representada por Inicio donde se selecciona la categoria a jugar.

 -Segunda, tercera y cuarta vista: juego de las opciones HTML, CSS, JS respectivamente con un boton de inicio que te redirige a la primera vista.

-Quinta vista: donde se felicita al usuario por terminar la jugada y pasa al siguiente nivel.

 # CSS
aplicamos flexbox  tanto a padres como a hijos.

### Problema con git colaborativo

En la terminal local realizamos los commit para guardar los cambios y cuando le dimos git push origin Desarrollo nos daba un  error que resolvimos con la ayuda de Ely, creando una nueva rama del proyecto y clonandolo nuevamente.
y trabajamos en partes distintas del proyecto para no generar tantos errores.

## FUNCIONALIDAD
  ### Creamos los componentes del juego

  -Para crear los componentes nos guiamos por los componentes ya existentes.
  -realizamos un componente por cada nivel de las categoria.

  ### Exportar e importar Los componentes

  - tambien nos guiamos por las exportaciones e importaciones existentes.

  ### Extraer los datos de los componentes
   para extraer los datos dentro de los componentes vemos el orden en que esta estructurado el componete y tomamos el dato que necesitamos ejemplo:
   si tenemos este componete y queremos en js obtener su clase:

name: 'cssNivelUno',
    items: [
      { id: 'cssNivel1,1,1', image: 'cartas/CSSNivel1/agua.png', class:0 },
      { id: 'cssNivel1,1,2', image: 'cartas/CSSNivel1/agua1.png', class:0 },
      { id: 'cssNivel1,2,1', image: 'cartas/CSSNivel1/amarillo.png', class:1  },
      { id: 'cssNivel1,2,2', image: 'cartas/CSSNivel1/amarillo1.png', class:1  },
     
    ],
  };


para obtener su clase:
1- el nombre :cssNivelUno
2- el items
3- el array con el numero del items que quieres la clase
4- lo que queremos obtener en este caso la clase pero tambien puede ser el id, el nombre ....

entonces nuestro codigo nos quedaria:

cssNivelUno.items[Array[1]].class


### Implementamos la funcionalidad del juego

-creamos la funcion de pasar de una vista a la otra barajar,
 - funcion del cronometro.

## SEGUNDO SPRINT

mostramos nuestror avances y recibimos buenos comentarios hacia nuestro proyecto.
tambien tuvimos feedback de nuestro squa y Ely nos dieron algunas recomendaciones para no hacer nuestro HTML tan extenso y crear las cartas desde el js,

## Restructuracion del Codigo
Eliminamos todas las cartas del html y buscamos la forma de llamarlas desde el Js. implementamos varios codigos y conseguimos uno pero usaba this en su estructura nos reunimos con Marcia y nos dijo que podiamos utilizar e.target, e investigamos sobre ello y con prueba y error logramos la funcionalidad del juego en la categoria Html.

## TERCER SPRINT
mostramos la reestucturacion de nuestro Html y los avances del CSS.


## continuacion de Funcionalida
trabajamos en la funcion de enviar mensaje de Felicitaciones al usuario al terminar el primer nivel y lo logramos pero al pasar a la seleccion de una nueva categoria nos arrojaba un error y lo solucionamos con la ayuda de Sergio cambiando los input por imagen.

## CUARTO SPRINT
mostramos la funcionalidad del proyecto y obtuvimos buenos comentarios

## zoom cartas

-trabajamos para dar zoom a las cartas y lo hicimos mas responsive utilizando la media
-realizamos test de usabilidad y cronometro daba un error. al surgir el error nos dimos cuenta que la App era de aprendizaje y el usuario para poder aprender necesitaba tiempo para leer las cartas.
 
 ## QUINTO SPRINT
 mostramos nuetro proyecto funcionando y  dos formas de mostrar el contenido de las cartas mas grande, nos dijeron con cual se sentian mas comodas y lo tomamos en cosideracion para implementarlo en nuestro proyecto.
 

 ## TEST UNITARIO

 investigamos sobre los test unitario y existen varias formas de hacerlos