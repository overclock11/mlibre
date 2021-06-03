# MLibre

### Descripción general

#### frontend
En el __frontend__ la aplicación está construida usando React con Typescript guiada por el patrón de componentes inteligentes. 
Está compuesta principalmente por componentes funcionales, hooks e interfaces, su estructura está dividida
en:

* Api: está el archivo encargado de hacer el llamado a los servicios del backend
* Components: contiene los componentes principales de la aplicación 
* Common: Contiene los componentes que están pensados para ser utilizados varias veces en la aplicación o a futuro incluso formar una librería al estilo de material-ui
  
#### Backend
En el __backend__ encontrarán un diseño modular construido con NodeJS y Typescript pensado para levantar uno o varios módulos según se configure permitiendole escalar mas fácilmente.

#### Requerimientos no funcionales
En cuanto los requerimientos no funcionales mencionados en el documento de la prueba para cada uno de ellos se hizo una optimización.

**Escalabilidad**: La estructura del frontend se pensó para generar bajo acoplamiento separando componentes comunes y usando el patró de componentes inteligentes,  el backend tiene una estructura modular que está pensada para escalar de forma horizontal. 

**Performance**: Los componentes son muy ligeros funcionales y se renderizan solo cuando tienen que hacerlo, el estado solo se maneja en el componente inteligente, pre-renderizado del front, cache a los servicios, gzip al servir la página

**Usabilidad**: keypress en el campo de búsqueda, diseño responsive

**SEO**: Se aplicó un pre-renderizado, urls amigables

Puede encontrar la aplicación desplegada en [https://mlilbre.herokuapp.com/](https://mlilbre.herokuapp.com/) :rocket:

-----

 ### Levantar front y back en desarrollo
Para subir el front vaya a la carpeta raíz del proyecto y ejecute los siguientes comandos.
1. `cd front`
2. `npm i`
3. `npm run start`

La aplicación subirá en localhost:3006

Para subir el back sobre la carpeta raíz del proyecto ejecute 
  1. `npm i` 
  2. `npm run start`
  
Esto levantará el back en http://localhost:3007



### Levantar aplicación en modo producción

En la carpeta raíz de la aplicación ejecute los siguientes comandos

1. `cd front && npm i && npm run build`

2. `npm i && npm run prod`

Eso creará un build optimizado que puede verse en http://localhost:3007


### Pruebas unitarias del front
Se agregaron algunas pruebas unitarias sencillas para validar el funcionamiento de algunos componentes.
Para lanzarlas vaya a la carpeta raíz del proyecto y ejecute los siguientes comandos
1. `cd front`
2. `npm run test`
