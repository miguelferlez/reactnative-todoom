<p align="center">
  <img align="center" src="https://user-images.githubusercontent.com/92161302/170530978-c93f9bb7-5dca-4ea1-8081-aaabc1d7a3af.png">
</p>
<br clear="right"/>

## Introducción

**Todoom** es una aplicación móvil para gestionar tareas desarrollado con React Native y probado en Android. Este proyecto ha sido desarrollado por Miguel Fernández como, más información en la memoria del proyecto.

## Instalación

#### Programas requeridos para la ejecución del proyecto:

- Visual Studio Code  
- Android Studio
- Node.js
- Java Development Kit

#### Plugins requeridos en Visudal Studio Code:

- React Native Tools
- JavaScript (ES6) Code Snippets
- Extension Pack for Java

***¡Atención!*** Se requiere de una **versión de Java Develpment Kit** igual o superior a la 16.0.2, y del **emulador de Android Studio** debidamente configurado. Las pasos para tener preparado Android Studio son los siguientes:

1. Intalar [JDK](https://www.oracle.com/java/technologies/javase/jdk16-archive-downloads.html) y añadir `C:\Program Files\Java\jdk-16.0.2\bin` a las variables de entorno del sistema (la variable debe estar por encima del resto).
2. Instalar [Android Studio](https://developer.android.com/studio).
3. Dentro del programa de Android Studio, More Actions > SDK Manager > Android SDK > SDK Platforms y habilitar en la esquina inferior derecha la opción *Show Package Details*.
4. Marcar en Android 11.0 (R) las opciones *Android SDK Platform 30*, *Sources for Android 30* y *Google APIs Intel x86 Atom_64 System Image*
5. Comprobar que en SDK Tools habilitar la opción *Show Package Details*, marcar las opciones *31.0.0* y *30.0.2* y aplicar todos los cambios realizados.
6. Añadir `C:\Users\User\AppData\Local\Android\Sdk\platform-tools` o la ruta de *Android SDK Location* que aparece en la parte posterior de SDK Manager a las variables de entorno del sistema.
7. Volver a ventana principal, More Actions > AVD Manager y crear un dispositivo virtual nuevo.
8. Seleccionar el modelo *Nexus 6P*, después *R (API Level 30)* como imagen del sistema y finalizar el proceso.

Una vez configurado el entorno de emulación de Android, **en Visual Studio** se deben seguir los siguientes pasos:

1. Abrir la carpeta del proyecto.
2. Abrir una nueva terminal desde el programa y ejecutar desde la ráiz del proyecto `npx react-native start` para abrir Metro.
3. Abrir otra terminal y ejecutar desdde la raíz del proyecto `npx react-native run-android` para abrir el emulador e instalar la aplicación.

Para más información consultar [cómo crear un entorno de desarrollo en React Native](https://reactnative.dev/docs/next/environment-setup).

Para ejecutar el proyecto desde un dispositivo móvil deben activarse las **opciones de desarrollador** y **depuración por USB** dentro de los ajustes del dispositivo. Posteriormente, tras conectar el dispositivo al ordernador y cambiar el modo de comunicación USB a **transferencia de archivo**, se ejecutará `npx react-native run-android` desde el proyecto abierto en Visual Studio. Para más información consultar [cómo ejecutar una aplicación de React Native desde un dispositivo móvil](https://reactnative.dev/docs/running-on-device).
