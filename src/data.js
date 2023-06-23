import data from './data/rickandmorty/rickandmorty.js';
//  esta es para obtener, procesar y manipular datos (tus funciones puras).
//console.log(data.results[0].name);
//creo una funcion con el nombre obtenerData que me devuelva solo la propiedad resultados de la data rick and morty osea los personajes
export function obtenerData() {
  return data.results
  //esta funcion me obtiene la data de resultados de la data  rickymorty y con esta se manda a llamar en main
};


//filtrar, ordenar, calcular