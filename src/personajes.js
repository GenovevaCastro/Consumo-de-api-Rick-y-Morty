
function obtenerListaPersonajes(){
  fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
//promete que devuelve algo del json
.then(data => {
  crearListaPersonajes(data.results)
});
}

function crearListaPersonajes(results){
  results.forEach(element => {
    crearContenedorPersonajeHtml(element);
  });
}

function crearContenedorPersonajeHtml(element){
  console.log(element);
  const divPersonajeJs = document.createElement("div");
  divPersonajeJs.className = "divPersonajeJs";
  divPersonajeJs.onclick = function () {
    identificacionFlotante(element);
  };
  const imagenPersonajeJs = document.createElement("img");
  imagenPersonajeJs.className = "imagenPersonajeJs";
  imagenPersonajeJs.src = element.image;
  const nombrePersonajeJs = document.createElement("h2");
  nombrePersonajeJs.className = "nombrePersonajeJs";
  nombrePersonajeJs.innerText = element.name;
  divPersonajeJs.appendChild(imagenPersonajeJs);
  //pongo el padre y con .apenchild le digo quien es su hijo y entre parentesis se pone quien es el hijo
  divPersonajeJs.appendChild(nombrePersonajeJs);

  document.getElementById("divPersonajeHtml").appendChild(divPersonajeJs);
}

function identificacionFlotante(element){
console.log("esta es la respuesta del identificador flotante"+element.name);
const infoFlotante = document.createElement("div");
infoFlotante.id = "infoFlotante";
document.getElementById("cuerpoPersonajes").appendChild(infoFlotante);
document.getElementById("infoFlotante").style.display="block";
}


obtenerListaPersonajes();

