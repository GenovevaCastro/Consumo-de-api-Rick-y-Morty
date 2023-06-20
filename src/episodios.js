
const div = document.getElementById("cerrar");
    div.addEventListener("click", function() {
      document.getElementById("infoFlotante").style.display="none";
      //para cerrar pantalla flotante
    });

function obtenerListaEpisodios(){
    fetch('https://rickandmortyapi.com/api/episode')
  .then(response => response.json())
  //promete que devuelve algo del json
  .then(data => {
    crearListaEpisodios(data)
  });
}
//esta funcion obtiene la lista de episodios llamando la api de rickymorty con el fetch  y se manda a llamar la 
//funcion de abajo de crear listaEpisodios donde se envia la respuesta del json

function crearListaEpisodios(data){
    console.log(data.results)
    let episodios= ''
    data.results.forEach(element => {
        //va a recorrer el array que viene en results
        episodios += '<tr onclick="clickEpisodio('+'\''+ element.url +'\''+')"><th>' + element.name +'</th></tr>'
    });
    
    document.getElementById('dataEpisodios').innerHTML = episodios
}

obtenerListaEpisodios();
