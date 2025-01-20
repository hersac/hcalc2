# HCALC

Este proyecto es una practica para crear proyectos multiplataforma con Javascript Nativo.

Este proyecto cuenta con las librerias:

- CapacitorJS
- ElectronJS

## Entorno de desarrollo

Para el entorno de desarrollo se usa Nodemon, solo se debe ejecutar el comando :

`npm run dev`

El entorno se ejecuta en el puerto 3000 del host local.

## Plataformas Moviles

### Android

Capacitor permite la creacion de la capa Android. Para ello se debe instalar la capa:

`npm i @capacitor/android`

Se debe generar el proyecto android:

`npx cap add android`

Para cada cambio se debe ejecutar el comando

`npx cap sync`

### IOS

## Plataformas Desktop

Para la ejecucion de la aplicacion en un entorno de esccritorio se implementa la libreria ElctronJs. Para ejecutar el proyecto se debe ejecutar el comando:

`npm run desktop`
