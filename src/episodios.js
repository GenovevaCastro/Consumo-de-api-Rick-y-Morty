//-------------------------------variables globales-----------------------------------
let globalPage = 1;
let globalPaginasTotales = 0;
//-----------------------------escuchadores-----------------------------------------
//se ejecutara la funcion validarSiSeOcultaBotonMasPersonajes y obtenerListaPersonajes al dar click en el btnVerMasPersonajes
document.getElementById('btnVerMasEpisodios').addEventListener(
  "click",
  function () {
    validarSiSeOcultaBotonMasPersonajes()
    obtenerListaEpisodios()
  }
);
//-----------------------------funciones--------------------------------------------
//funcion que valida si se debe ocultar el boton de mas personajes por que llego a su limite
function validarSiSeOcultaBotonMasPersonajes() {
  if (globalPage === globalPaginasTotales) {
    document.getElementById("btnVerMasEpisodios").style.display = "none";
  }
};


function obtenerListaEpisodios() {
  fetch('https://rickandmortyapi.com/api/episode?page=' + globalPage)
    .then(response => response.json())
    //promete que devuelve algo del json
    .then(data => {

      if (globalPaginasTotales === 0) {
        globalPaginasTotales = data.info.page
      }
      crearListaEpisodios(data.results)
      globalPage++;
      console.log(data.results);
    });
};

function crearListaEpisodios(data) {
  data.forEach(element => {
    crearContenedorEpisodiosHtml(element)
  });
};
function crearContenedorEpisodiosHtml(element) {
  //se crean las etiquetas de html "div" en js con createElement
  const divEpisodiosJs = document.createElement("div");
  //al divPersonajeJs se le agrega un className para poder dar estilo en css
  divEpisodiosJs.className = "divEpisodiosJs";
  //al divPersonajesJs se le agrega un evento onclick 
  divEpisodiosJs.onclick = function () {
    //una vez que la funcion onclick se ejecuta manda a llamar a la funcion informacionFlotante enviandole el elemento
    informacionFlotante(element);
  };
  const episodiosJs = document.createElement("p");
  episodiosJs.className = "episodiosJs";
  episodiosJs.innerText = element.name;
  //indico que divPersonajeJs es el padre de imagenPersonajeJs
  divEpisodiosJs.appendChild(episodiosJs);
  document.getElementById("divEpisodiosHtml").appendChild(divEpisodiosJs);
};

function informacionFlotante(element) {
  document.getElementById("idTdDatoNameE").innerText = element.name;
  document.getElementById("idTdDatoAirDate").innerText = element.air_date;
  mostrarInfoFlotanteEpisodios();
};

function crearInfoEpisodios() {
  const infoFlotanteEpisodios = document.createElement("div");
  infoFlotanteEpisodios.id = "infoFlotanteEpisodios";
  const cerrar = document.createElement("div");
  cerrar.id = "divCerrarInfoEpisodios";
  infoFlotanteEpisodios.appendChild(cerrar);
  const imagenCerrarEpisodios = document.createElement("img");
  imagenCerrarEpisodios.id = "imagenCerrarEpisodios";
  imagenCerrarEpisodios.src = "imagenes/cerrar.png";
  imagenCerrarEpisodios.onclick = function () {
    cerrarInfoFlotanteEpisodios();
  };
  cerrar.appendChild(imagenCerrarEpisodios);

  const tablaInfoEpisodios = document.createElement("table");
  infoFlotanteEpisodios.appendChild(tablaInfoEpisodios);
  tablaInfoEpisodios.id = "tablaInfoEpisodios";

  const trNombreE = document.createElement("tr");
  tablaInfoEpisodios.appendChild(trNombreE);
  const tdNameE = document.createElement("td");
  trNombreE.appendChild(tdNameE);
  tdNameE.className = "tdPropiedadE";
  tdNameE.innerText = "Nombre:";
  const tdDatoNameE = document.createElement("td");
  trNombreE.appendChild(tdDatoNameE);
  tdDatoNameE.className = "tdValorE";
  tdDatoNameE.id = "idTdDatoNameE";

  const trAir_Date = document.createElement("tr");
  tablaInfoEpisodios.appendChild(trAir_Date);
  const tdAir_Date = document.createElement("td");
  trAir_Date.appendChild(tdAir_Date);
  tdAir_Date.className = "tdPropiedadE";
  tdAir_Date.innerText = "Fecha de lanzamiento:";
  const tdDatoAirDate = document.createElement("td");
  trAir_Date.appendChild(tdDatoAirDate);
  tdDatoAirDate.className = "tdValor";
  tdDatoAirDate.id = "idTdDatoAirDate";

  document.getElementById("bodyEpisodios").appendChild(infoFlotanteEpisodios);
};

function mostrarInfoFlotanteEpisodios() {
  //en esta linea se encarga de mostrar la pantalla flotante ya que en css esta oculto para que aparezca solo al dar click
  document.getElementById("infoFlotanteEpisodios").style.display = "block";
};
//esta se encarga de ocultarla al dar click en la X
function cerrarInfoFlotanteEpisodios() {
  document.getElementById("infoFlotanteEpisodios").style.display = "none";
};

obtenerListaEpisodios();
crearInfoEpisodios();
