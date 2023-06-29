
# Data - Rick & Morty

## Índice

* [1. Objetivo del proyecto](#1-objetivo-del-proyecto)
* [2. Resumen](#2-resumen)
* [3. Criterios del proyecto](#3-criterios-del-proyecto)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Funcionalidad](#5-funcionalidad)

***

## 1. Objetivo del proyecto

Este proyecto consta de página web para fans y conocedores de la serie Rick y Morty, donde mediante el consumo de la api: https://rickandmortyapi.com/
se muestra al usuario 3 pestañas: Inicio, Personajes y Episodios, en los cuales viene información sobre la trama de la serie, los personajes que existen así como su información (nomnbre, estatus, tipo, especie, genero) y los episodios de las primeras 3 temporadas con su respectiva información (nombre y fecha de lanzamiento).
Con esto el usuario puede acceder y buscar a los personajes de su serie favorita de manera dinamica, fácil y agradable para el fan.

Las APIs permiten que las aplicaciones se comuniquen y puedan aprovechar desarrollos ya construidos en lugar de tener que crearlos desde cero. 

![Api]([(https://github.com/GenovevaCastro/DEV008-data-lovers/blob/feature/iniciodata/src/api.jpg?raw=true))

## 2. Resumen

"Rick y Morty" es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. 
Esta página esta creada por fans y para fans de la serie, donde se realiza el consumo de apis, ya que se cuentan con 846 personajes se coloco un filtro de busqueda por palabra para ubicar al personaje con la letra nombre o palabra que lo identifique de manera más sencilla el usuario, mostrando al usuario de 20 en 20 personajes para no abrumarlo y colocando un boton de ver mas personajes conforme el quiera ir avanzando, así mismo cuenta con la funcionalidad de al dar click en cada imagen se despliega la infromación de cada uno.
Esto mismo se repite en la pestaña de episodios el cual cuenta con las primeras 3 temporadas y 51 episodios.

* Lenguajes: Javascript, HTML, CSS

## 3. Criterios del proyecto

**1. Una interfaz que permite al usuari@:**

* Ver de manera dinamica la data de cada personaje y episodio.    
* Buscar el personaje de su preferencia mediante un filtro de busqueda por palabra.
* Interesar al usuario a descubrir más personajes y episodios mediane el boton de ver más. 
* Darle una sorpresa al usuario al descubrir el sonido en la página de inicio.
* Página responsiva.
* Diseño completamente enfocado en la serie amigable con el usuario fan de Rick & Morty

**2. Definición del producto.**  

La página es de la serie de Rick & Morty.  

* Por lo tanto los principales usuarios son personas mayores de 15, fans, conocedores y posibles nuevos fans.
* El objetivo de estos usuarios es adquirir información más profunda sobre los personajes y episodios mediante una página que sea visualmente atractiva y tenga referencias de la serie. 
* Esta página ayudará a que el usuario pueda acceder a esta información de manera fácil y rápida.

## 3. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript. 
En este proyecto NO se usan librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.

### Diseño de la interfaz del usuario

* Prototipo de baja fidelidad: La aplicación web se basa en el desplazamiento de la información que contendrá esta misma, además de los elementos que la componen.

![Prototipo de baja]([(src/prototipobaja.jpeg))

* Prototipo de alta fidelidad:

### Descripción de archivos

* `index.html: Este es el punto de entrada de la aplicación. Estos archivos contienen el _markup_ (HTML), CSS y JavaScript.

* `src/style.css`: Este archivo contiene las reglas de estilo utilizadas para este proyecto.

 * Alineación: al centro y justificada.
 * Tipografías: letrarick.ttf y letraSinopsis.ttf - OCR A Extended  - Get Schwifty Regular
 * Fondo: Negro.
 * Opacidades: 3px 3px 3px rgba(0, 255, 255, 0.73);  rgba(0, 255, 26, 0.098)
 * Paleta:  white -  aqua - black - rgb(0, 255, 26) - blue - rgba(0, 255, 26, 0.098)


![Gráfica paleta de colores](<https://github.com/GenovevaCastro/DEV008-card-validation-veva/blob/main/src/Paleta%20de%20clores.jpg?raw=true>)

* `personajes.js y personajes.html`: En estos archivos se encuentra todo lo relacionado a la data para personajes, sus funciones y el filtro de busqueda.

* `episodios.js y episodios.html`:En estos archivos se encuentra todo lo relacionado a la data para personajes, sus funciones.

