Desarrollo basado en pruebas
=========================

##Objetivos

1. Entender el concepto de *DevOps*
2. Usar herramientas para gestión de los ciclos de desarrollo de una aplicación y entender cuales son estos.
3. Aprender a usar integración continua en cualquier aplicación.

## Introducción

Los ciclos de desarrollo de software actuales son ágiles y rápidos, de
forma que continuamente se están arreglando errores y programando
nuevas características y desplegándolas en producción. Para que esto
suceda el ciclo de desarrollo de software debe estar automatizado en
todo lo posible, para que todas las fases se hagan esencialmente si
intervención humana y se minimice la posibilidad de que haya errores
en el proceso que sean costosos de arreglar una vez echado a andar un
sistema. La aparición de la nube ha hecho que en varias, o en todas,
las partes del proceso, aparezca recursos elásticos y disponibles bajo
demanda, algunos de ellos gratuitos.

Por eso, en esta parte del curso, veremos cómo desarrollar según la
metodología basada en pruebas con los
entornos de computación en nube y cómo configurarlos y usarlos para
hacer más rápida y eficiente el trabajo de un equipo de desarrollo,
test, y sistemas.

El desarrollo basado en pruebas entra en relación con la computación nube dentro del concepto de
[*DevOps*](http://en.wikipedia.org/wiki/DevOps), que
abarca tanto sistemas como desarrollo y test y que está a caballo entre los dos primeros. En primer lugar, *DevOps* implica la automatización de las
tareas de creación de un puesto de trabajo para desarrollo, pero
también la sistematización de pruebas, de despliegue y de las tareas
de configuración relacionadas con la misma, todo ello en un entorno de
desarrollo ágil. En concreto, *DevOps* comprende
[los 7 aspectos siguientes, vistos en la página de una herramienta, Rex, usada para ello](http://www.rexify.org/):

1. Automatización de tareas relacionadas con el desarrollo. En
   resumen, que no haya que recordar o tener apuntados en una libreta comandos para hacer todo tipo de
   cosas (instalación de librerías o configuración de una máquina)
   sino que haya *scripts* que lo homogeneicen y automaticen.

2. Virtualización: uso de recursos virtuales para almacenamiento,
   publicación y, en general, todos los pasos del desarrollo y
   despliegue de software.

5. Provisionamiento de los servidores: los servidores virtuales a los
   que se despliegue deben estar preparados con todas las herramientas
   necesarias para publicar la aplicación.

6. Gestión de configuraciones: la gestión de las configuraciones de
   los servidores y las órdenes para provisionamiento deben estar
   controladas por un sistema de gestión de versiones que permita
   pruebas y también controlar en cada momento el entorno en el que
   efectivamente se está ejecutando el software.

3. Despliegue en la nube: publicación de aplicaciones en servidores
   virtuales.

4. [Ciclo de vida del software](http://es.slideshare.net/colmbennett/software-rollout)
   definición de las diferentes fases en la vida de una aplicación,
   desde el diseño hasta el soporte.

7. Despliegue continuo: el ciclo de vida de una aplicación debe ir
   ligado a ciclos de desarrollo ágiles en los que cada nueva
   característica se introduzca tan pronto esté lista y probada; el
   despliegue continuo implica integración continua de las nuevas
   características y arreglos, tanto en el software como el hardware. 


En esta sesión veremos la mayoría; en siguientes sesiones se verá la gestión de configuraciones, provisionamiento de los servidores y la virtualización.

## Entornos virtuales de programación.

