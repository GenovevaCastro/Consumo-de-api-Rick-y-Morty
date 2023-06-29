
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

![Api]([https://github.com/GenovevaCastro/DEV008-card-validation-veva/blob/main/src/Imagen%20algoritmo.jpg?raw=true](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_950/https://blog.finerioconnect.com/wp-content/uploads/2020/04/como-funciona-una-api.jpg))

## 2. Resumen

"Rick y Morty" es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. 
Esta página esta creada por fans y para fans de la serie, donde se realiza el consumo de apis, ya que se cuentan con 846 personajes se coloco un filtro de busqueda por palabra para ubicar al personaje con la letra nombre o palabra que lo identifique de manera más sencilla el usuario, mostrando al usuario de 20 en 20 personajes para no abrumarlo y colocando un boton de ver mas personajes conforme el quiera ir avanzando, así mismo cuenta con la funcionalidad de al dar click en cada imagen se despliega la infromación de cada uno.
Esto mismo se repite en la pestaña de episodios el cual cuenta con las primeras 3 temporadas y 51 episodios.

* Lenguajes: Javascript, HTML, CSS

## 3. Criterios del proyecto

**1. Una interfaz que permite al usuari@:**

* Ver de manera dinamica la información de cada personaje y episodio.    
* Buscar el personaje de su preferencia mediante un filtro de busqueda por palabra.
* Interesar al usuario a descubrir más personajes y episodios mediane el boton de ver más. 
* Darle una sorpresa al usuario al descubrir el sonido en la página de inicio.   
* Diseño completamente enfocado en la serie amigable con el usuario fan de Rick & Morty. 

**2. Definición del producto.**  

La página es de la serie de Rick & Morty.  

* Por lo tanto los principales usuarios son personas mayores de 15, fans, conocedores y posibles nuevos fans.
* El objetivo de estos usuarios es adquirir información más profunda sobre los personajes y episodios mediante una página que sea visualmente atractiva y tenga referencias de la serie. 
* Esta página ayudará a que el usuario pueda acceder a esta información de manera fácil y rápida.

## 3. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript. 
En este proyecto NO se usan librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.
El documento ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como _code coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

### Descripción de scripts / archivos

* `src/index.html`: Este es el punto de entrada de la aplicación. Este archivo contiene el _markup_ (HTML), CSS y JavaScript.

* `src/style.css`: Este archivo contiene las reglas de estilo utilizadas para este proyecto.

```js
 * Alineación: al centro.
 * Tipografías: fantasy  &  geneva.
 * Fondo: de identidad corporativa de la empresa "Impresión y diseño Veva".
 * Imagen: representativa de los productos seleccionados al carrito de compras.
 * Opacidades: rgba(0, 0, 0, 0.359).
 * Paleta: rgb(0, 0, 0) - rgb(64, 44, 25) - rgb(142, 108, 58) - rgb(126, 93, 48) - rgb(255, 255, 255) - rgb(194, 12, 14)
 ```

![Gráfica paleta de colores](<https://github.com/GenovevaCastro/DEV008-card-validation-veva/blob/main/src/Paleta%20de%20clores.jpg?raw=true>)

* `src/validator.js`: En este archivo se implementa el objeto `validator`, el cual ya está _exportado_ en el _boilerplate_. 
Este objeto (`validator`) conitiene dos métodos:
  - `validator.isValid(tarjeta)`: `tarjeta` es un `string`
     con el número de tarjeta que se va a verificar. Esta función retorna
     un `boolean` dependiendo si la tarjeta es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

  - `validator.maskify(tarjeta)`: `tarjeta` es un `string` con
    el número de tarjeta y esta función retorna un `string` donde todos menos
    los últimos cuatro caracteres son reemplazados por (`#`).
    Esta función siempre mantiene los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.
    Simplemente enmascara el número de tarjeta, ejemplo:

    ```js
    maskify('4556364607935616') === '############5616'
    
    ```

* `src/index.js`: En este archivo se escuchan los eventos del DOM, invocando al
  `validator.isValid()` y `validator.maskify()` según sea necesario y se
  actualiza el resultado en la UI (interfaz de usuario).

* `test/validator.spec.js`: Este archivo contiene algunos tests de ejemplo para
  implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí, se usan las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 5. Funcionalidad

**Descripción validator.js:**

* Function voltearTarjeta(tarjeta): 

Esta función se encarga de voltear los numeros de la tarjeta que el usuario ingresa la cuál retorna en tarjetaInvertida.

* Function doblarCadaSegundoDigito(tarjetaInvertida): 

Esta función multiplicara por 2 cada segundo digito de la tarjetaInvertida y la retornara en un arrayConNumerosYaMultiplicados.

* Function sumaDeDigitosMayoresDeDiez(arrayConNumerosYaMultiplicados):

En esta función inicializamos un arrayTarjetaConSumaDeNumerosMayoresDeDiez, en la cual  realizamos un foreach en el arrayConNumerosYaMultiplicados, de cada elemento hacemos la   condicional de si el elemento es mayor a 9: 
Hacemos un nuevo array que es igual a elementoArray el cual es igual a el elemento convertido a un string y hacemos una division de este. Se crea una constante donde se guardara el resultado de las suma de los digitos del elemento mayor a 9.
Esta constante resultadoDeSuma sera = a la funcion sumaElementosDelArray del (elementoArray) y coloca el resultadoDeSuma en la ultima posición del arrayTarjetaConSumaDeNumerosMayoresDeDiez, de lo contrario si no es mayor a 10 coloca el elemento en la ultima posición del arrayTarjetaConSumaDeNumerosMayoresDeDiez. Y retorna a arrayTarjetaConSumaDeNumerosMayoresDeDiez.

* Function sumaElementosDelArray(arrayDeNumeros):

Esta función se encarga de sumasr los digitos del elemento mayor a 9, esta funcion se utiliza en la funcion de sumaDeDigitosmayoresDeDiez, cuando se manda a llamar esta función tiene una variable llamada sumaDeDigitos la cual de inicio vale 0, pero despues del arrayDeNumeros realizamos un foreach de los digitos del elemento y tenemos que entonces sumaDeDigitos = sumaDeDigitos + parseInt(digito); 
Por ejemplo: si el elemento mayor a 9 es 13, se hace el for each del primer digito que es 1, asi que sumaDeDigitos = sumaDeDigitos + parseInt(1), entonces suma de digitos + 1 es + a 1 y lo returna a suma de digitos, por tanto ahora sumaDeDigitos = 1.
Se realiza el for each del segundo digito que es 3, asi que sumaDeDigitos = sumaDeDigitos + parseInt(3), entonces suma de digitos que ahora vale 1 + 3 = 4 y lo returna a suma de digitos, por tanto ahora sumaDeDigitos = 4.
y hace esta funcion en cada elemento mayor a 9 retornando estos a suma de digitos. 
 
* Function verificarSiEsMultiploDeDiez(numeroQueVerificara):

En la cual siel númeroQueVerificara % 10 es = a 0 retornara un true, de lo contrario un false. 

* Function mascara(tarjeta):

Retornara la tarjeta remplazando todos los elementos por un # menos los ultimos 4.

* isValid(tarjeta): 

Por ultimo retornamos verificarSiEsMultiploDeDiez(
      sumaElementosDelArray(
        sumaDeDigitosMayoresDeDiez(
          doblarCadaSegundoDigito(
            voltearTarjeta(tarjeta))))) todas las funciones en una.

  Así mismo en maskify(tarjeta) retornamos la funcion mascara(tarjeta) para que se ejecute todo esto en la validacion de la tarjeta.

  **Descripción index.js:**

* Function mostrarAlerta(validacion):

Si validación es true manda una alerta con Tarjeta vlida, si es false manda alerta de tarjeta invalida.
Esta funcion de mostrar alerta es llamada en la parte superior del archivo como: mostrarAlerta(validator.isValid(tarjeta)); es decir, mostrar alerta del validator, en isValid de la tarjeta, en el cual retorna un true o false que activa las alertas. 
Así mismo document.getElementById("tarjeta").value = validator.maskify(tarjeta) que es donde se manda a llamar la función que enmascara la tarjeta.

Todo esto sucede al ingresar el usuario sus datos y dar click en el boton. 

***
