
//-------------------------------variables globales-----------------------------------
let globalPage = 1;
let globalPaginasTotales = 0;
//el valor 0 es para el api de todos los personajes 
//el valor 1 es para el filtro por nombre
let enumeradorVerMas = 0;
let globalNameFiltro = "";

//-----------------------------escuchadores-----------------------------------------
//se ejecutara la funcion validarSiSeOcultaBotonMasPersonajes y obtenerListaPersonajes al dar click en el btnVerMasPersonajes
document.getElementById('btnVerMasPersonajes').addEventListener(
  "click",
  function () {
    if (enumeradorVerMas == 0) {
      validarSiSeOcultaBotonMasPersonajes()
      obtenerListaPersonajes()
    } else if (enumeradorVerMas == 1) {
      validarSiSeOcultaBotonMasPersonajes()
      filtrarPersonaje(globalNameFiltro, globalPage)
    }
  }
);

const botonBuscar = document.getElementById("botonBuscar");
// variable boton es igual al boton que obtenemos del html con id boton
botonBuscar.addEventListener("click", () => {
  globalPage = 1
  enumeradorVerMas = 1
  //agregamos un escuchador al boton para que al hacer click haga lo siguiente
  globalNameFiltro = document.getElementById("nombreDelPersonaje").value;
  //tarjeta es igual al valor del id tarjeta del html 
  var divPadre = document.getElementById("contenedorTodosLosPersonajes");
  var divHijo = document.getElementById("divPersonajeHtml");
  var btnVerMasPersonajes = document.getElementById("btnVerMasPersonajes");
  divPadre.removeChild(divHijo);
  const divPersonajeHtml = document.createElement("div");
  divPersonajeHtml.id = "divPersonajeHtml";
  document.getElementById("contenedorTodosLosPersonajes").insertBefore(divPersonajeHtml, btnVerMasPersonajes);
  filtrarPersonaje(globalNameFiltro, globalPage)

}
);

//-----------------------------funciones--------------------------------------------
//funcion que valida si se debe ocultar el boton de mas personajes por que llego a su limite
function validarSiSeOcultaBotonMasPersonajes() {
  if (globalPage === globalPaginasTotales) {
    document.getElementById("btnVerMasPersonajes").style.display = "none";
  }
}



//funcion que obtiene la lista de personajes desde la url de la api
function obtenerListaPersonajes() {
  fetch('https://rickandmortyapi.com/api/character/?page=' + globalPage)
    .then(response => response.json())
    //promete que devuelve algo del json
    .then(data => {
      if (globalPaginasTotales === 0) {
        globalPaginasTotales = data.info.page
      }
      crearListaPersonajes(data.results)
      globalPage++;
    });
}

function filtrarPersonaje(palabra) {
  return fetch('https://rickandmortyapi.com/api/character/?page=' + globalPage + '&name=' + palabra)
    .then(response => response.json())
    //promete que devuelve algo del json
    .then(data => {
      if (globalPaginasTotales === 0) {
        globalPaginasTotales = data.info.page
      }
      crearListaPersonajes(data.results)
      globalPage++;
    });
}

//filtrar, ordenar, calcular
//esta funcion recorre results elemento por elemento y manda a llamar a la funcion crear contenedor personaje html
//enviandole el elemento que se esta recorriendo en ese momento
function crearListaPersonajes(results) {
  results.forEach(element => {
    crearContenedorPersonajeHtml(element);

  });
}
//esta funcion crea el contenedor de un personaje que recibe en la variable element
function crearContenedorPersonajeHtml(element) {
  //se crean las etiquetas de html "div" en js con createElement
  const divPersonajeJs = document.createElement("div");
  //al divPersonajeJs se le agrega un className para poder dar estilo en css
  divPersonajeJs.className = "divPersonajeJs";
  //al divPersonajesJs se le agrega un evento onclick 
  divPersonajeJs.onclick = function () {
    //una vez que la funcion onclick se ejecuta manda a llamar a la funcion identificacionFlotante enviandole el elemento
    identificacionFlotante(element);
  };
  const imagenPersonajeJs = document.createElement("img");
  imagenPersonajeJs.className = "imagenPersonajeJs";
  imagenPersonajeJs.src = element.image;
  //indico que divPersonajeJs es el padre de imagenPersonajeJs
  divPersonajeJs.appendChild(imagenPersonajeJs);
  const nombrePersonajeJs = document.createElement("h2");
  nombrePersonajeJs.className = "nombrePersonajeJs";
  //nombrePersonajeJs agrega un texto en html que es igual a lo que viene en element.name
  nombrePersonajeJs.innerText = element.name;
  divPersonajeJs.appendChild(nombrePersonajeJs);
  //indico que divPersonajeHtml que existe en el HTML es el padre de divPersonajeJs
  document.getElementById("divPersonajeHtml").appendChild(divPersonajeJs);
}

//crea un div flotante que muestra la informacion del personaje
function identificacionFlotante(element) {
  document.getElementById("idTdDatoName").innerText = element.name;
  document.getElementById("idTdDatoStatus").innerText = element.status;
  document.getElementById("idTdSpecies").innerText = element.species;
  document.getElementById("idTdDatoType").innerText = element.type;
  document.getElementById("idTdDatoGender").innerText = element.gender;
  mostrarInfoFlotante();
}

function crearIdentificacionPersonaje() {
  const infoFlotante = document.createElement("div");
  infoFlotante.id = "infoFlotante";

  const close = document.createElement("div");
  close.id = "divCerrar";
  infoFlotante.appendChild(close);
  const imagenCerrar = document.createElement("img");
  imagenCerrar.id = "imagenCerrar";
  imagenCerrar.src = "imagenes/cerrar.png";
  imagenCerrar.onclick = function () {
    cerrarInfoFlotante();
  };
  close.appendChild(imagenCerrar);

  const tablaInfoPersonajes = document.createElement("table");
  infoFlotante.appendChild(tablaInfoPersonajes);
  tablaInfoPersonajes.id = "tablaInfopersonajes";

  const trNombre = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trNombre);
  const tdName = document.createElement("td");
  trNombre.appendChild(tdName);
  tdName.className = "tdPropiedad";
  tdName.innerText = "Nombre:";
  const tdDatoName = document.createElement("td");
  trNombre.appendChild(tdDatoName);
  tdDatoName.className = "tdValor";
  tdDatoName.id = "idTdDatoName";

  const trStatus = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trStatus);
  const tdStatus = document.createElement("td");
  trStatus.appendChild(tdStatus);
  tdStatus.className = "tdPropiedad";
  tdStatus.innerText = "Estatus:";
  const tdDatoStatus = document.createElement("td");
  trStatus.appendChild(tdDatoStatus);
  tdDatoStatus.className = "tdValor";
  tdDatoStatus.id = "idTdDatoStatus";

  const trSpecies = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trSpecies);
  const tdSpecies = document.createElement("td");
  trSpecies.appendChild(tdSpecies);
  tdSpecies.className = "tdPropiedad";
  tdSpecies.innerText = "Especie:";
  const tdDatoSpecies = document.createElement("td");
  trSpecies.appendChild(tdDatoSpecies);
  tdDatoSpecies.className = "tdValor";
  tdDatoSpecies.id = "idTdSpecies";

  const trType = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trType);
  const tdType = document.createElement("td");
  trType.appendChild(tdType);
  tdType.className = "tdPropiedad";
  tdType.innerText = "Tipo:";
  const tdDatoType = document.createElement("td");
  trType.appendChild(tdDatoType);
  tdDatoType.className = "tdValor";
  tdDatoType.id = "idTdDatoType";

  const trGender = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trGender);
  const tdGender = document.createElement("td");
  trGender.appendChild(tdGender);
  tdGender.className = "tdPropiedad";
  tdGender.innerText = "Genero:";
  const tdDatoGender = document.createElement("td");
  trGender.appendChild(tdDatoGender);
  tdDatoGender.className = "tdValor";
  tdDatoGender.id = "idTdDatoGender";

  document.getElementById("bodyPersonajes").appendChild(infoFlotante);
}

function mostrarInfoFlotante() {
  //en esta linea se encarga de mostrar la pantalla flotante ya que en css esta oculto para que aparezca solo al dar click
  document.getElementById("infoFlotante").style.display = "block";
}
//esta se encarga de ocultarla al dar click en la X
function cerrarInfoFlotante() {
  document.getElementById("infoFlotante").style.display = "none";
}

//---------------------funciones que ejecutan al este JS---------------------------
//esta funcion se ejecuta desde que entramos a la pagina de personajes y es la que manda a llamar a la funcion obtenerListaPersonajes
obtenerListaPersonajes();
crearIdentificacionPersonaje();



