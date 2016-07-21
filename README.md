# Ceti-App v1.0.0

Aplicacion movil para uso exclusivo de directivos, estudiantes, padres de familia, aspirantes y personal administrativo del ceti.

## Comenzar

### Requisitos previos

Para poder utilizar correctamente todas las herramientas de desarrollo completar algunos requisitos.

#### Instalar Nodejs y Npm

Con `nodejs` y `npm` haremos la instalacion y configuracion inicial de nuestro proyecto y tambien se usaran para la instalacion de mudulos extras en el proyecto.

Para instalarlos solo necesitamos ir a la pagina oficial de [Nodejs](https://nodejs.org) e instalar la version mas reciente (current) de node la cual tambien contiene npm.

#### Instalar Java JDK v8+

El codigo que generamos en html, css y js sera convertido a java para desarrollo en android por lo cual necesitamos el JDK en su version mas reciente. Para ello iremos a la pagina oficial de [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html?ssSourceSiteId=otnes) justo en la seccion de descargas, y descargaremos el mas reciente.

#### Instalar Android SDK

Como generaremos una app para dispositivos android es necesario que instalemos el JDK de android. Para esto hay dos opciones.

1. Descargar [Android Studio](https://developer.android.com/studio/index.html) (Recomendado):
  * Este nos ayudara a instalar las SDK tools e imagenes del emulador que sean necesarias en el sistema y tambien a proveernos de una interfaz para hacer mas facil la instalacion.

2. Descargar SDK externamente desde [Developers](https://developer.android.com/index.html):
  * Para ahorrar espacio en el disco podemos instalar el SDK externamente sin el uso de Android Studio.

#### Crear un emulador Android (Opcional)

Para visualizar nuestra app en desarrollo podremos usar nuestro equipo fisico pero es mas recomendable el uso de un emulador. Para instalarlo necesitaremos Android Studio o descargar el AVD Manager externamente para crear el emulador.

#### Instalar Webpack

Webpack es una herramienta que nos ayudara a agrupar nuestro codigo, para saber mas sobre lo que es y como se utiliza puedes visitar la pagina oficial de [Webpack](http://webpack.github.io/).

Para instalarlo ejecutaremos el siguiente comando:
```
> npm install -g webpack
```
#### Instalar Apache Cordova

[Apache Cordova](https://cordova.apache.org/) nos ayudara a generar el codigo Java utilizando nuestros codigos html, css y javascript.
Para instalarlo ejecutaremos el siguiente comando:
```
> npm install -g cordova
```

### Instalacion

* Descarga el proyecto desde el repositorio.
* Una vez descargado iremos a nuestro directorio con ayuda de una consola:
```
> cd .../Ceti-App
```
* instalar los modulos necesarios:
```
> npm install
```
Se comenzaran a instalar las dependencias necesarias, tardara un poco en instalar todo.

### Configurar proyecto

Agregar plataforma de desarrollo.

* Android
```
> cordova platform add android
```
* IOS
```
> cordova platform add ios
```

### Previsualizar aplicacion

Podremos ver los cambios realizados en el codigo en el navegador o en un emulador utilizando los siguientes comandos.

#### Vizualizar en navegador

* Ejecutar servidor
```
> npm start
```
* Abrir la ruta en el navegador
```
//:localhost:8080
```

#### Visualizar en emulador

* Android
```
> npm run android
```
* IOS
```
> npm run ios
```
**NOTA: Para esto se necesita un emulador configurado**

### Compilar

* Android
```
> npm run build --android
```
* IOS
```
> npm run build --ios
```
