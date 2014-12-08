---
layout: index
---

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

## Entornos virtuales de desarrollo.

Una de las partes esenciales del *DevOps* es primero la gestión de
configuraciones y luego la automatización. El uso de entornos
virtuales cubre las dos necesidades: te permite independizar la
versión usada de la que proporcione el sistema, instalarla sin
necesidad de tener privilegios de superusuario, compartirla entre
todos los miembros del equipo y también automatizar la tarea 
de instalación del mismo mediante el uso de una sola orden que
seleccione la versión precisa que se va a usar. 

Y estos entornos virtuales vienen del hecho de que los lenguajes de scripting tales como Perl, Python y Ruby tienen
ciclos de desarrollo muy rápidos que hacen que a veces convivan en
producción diferentes versiones de los mismos, incluso *major*
versions. Eso hace complicado desarrollar e incluso probar los
programas que se desarrollan: si el sistema operativo viene con Perl
5.14, puede que haga falta probar o desarrollar para 5.16 o 5.18 o
incluso probar la versión más avanzada.

Por eso desde hacer cierto tiempo se han venido usando *entornos
virtuales de desarrollo* tales como
* [virtualenv para Python](https://virtualenv.pypa.io/en/latest/),
* [nodeenv](https://pypi.python.org/pypi/nodeenv/), [nvm](https://github.com/creationix/nvm), [`n`](https://github.com/tj/n) y [nave](https://github.com/isaacs/nave) para node.js,
* [`phpenv` para, lo adivinaste, PHP](https://github.com/phpenv/phpenv),
* [rbenv](https://github.com/sstephenson/rbenv) y [RVM](http://rvm.io)para Ruby
* y [plenv](https://github.com/tokuhirom/plenv) y [perlbrew para Perl](http://perlbrew.pl).

Generalmente, estos programa funcionan instalando binarios en
directorios del usuario

Una vez instalados, estos programas permiten instalar fácilmente
nuevas versiones de tu lenguaje de programación (con las librerías
asociadas) y probar un programa en todas ellas. Se usan principalmente
para reflejar localmente los entornos que se usan en producción; por
ejemplo, usar en el entorno de desarrollo local la misma versión y
librerías que nos vamos a encontrar en un PaaS tal como los que
veremos a continuación.

>Instalar alguno de los entornos virtuales de node y, con ellos,
>instalar la última versión existente, la versión *minor* más actual
>de la 0.10 y lo mismo para la 0.11.


Generalmente las librerías asociadas a una aplicación determinada
siguen un método similar. En vez de instalar en el sistema todas las
librerías necesarias (o instalar una cada vez que hay algún error),
la mayor parte de los entornos de programación incluyen alguna forma
de definir qué librerías (o módulos) necesitan y qué versiones
mínimas, máximas o exactas deben tener.

>Incidentalmente, el hecho de que todo sea software libre ayuda a que
>en ningún paso de este proceso haya que decidir qué licencia o modelo
>de pago o cosas similares hay que usar.

## Vamos a hacer una aplicación: gestionar porras de fútbol

Una porra de fútbol básicamente tiene un partido, que tendrá un nombre
y si acaso una fecha o descripción (por ejemplo, *Jaén-Osasuna Copa
2014*) y luego los participantes votan por un resultado determinado,
*JJ, 2-1*, por ejemplo. Este sería el *modelo* sobre el que vamos a
basar la aplicación.

El objeto básico, por tanto, será la `Apuesta` que irá asociada a un
`Partido`.

>Diseñar en node.js estas clases con sus funcionalidades básicas:
>crear partido y listar apuestas para cada partido, crear apuesta y añadirla
>(comprobando que la persona no la haya añadido ya), borrar apuesta
>(si no ha pagado o algo) y cerrar porra con el resultado definitivo,
>anunciando el ganador. Crear un repositorio en GitHub para la
>librería y crear un pequeño programa que use algunas de sus
>funcionalidades.

La aplicación tendrá más adelante un interfaz web, pero por lo pronto,
y a efectos de la prueba continua de más adelante, vamos a quedarnos
sólo con un pequeño programa que sirva para ver que funciona.

>Ejecutar el programa en diferentes versiones de node. ¿Funciona en
>todas ellas? 

Podemos almacenar esta información en una base de datos como SQLite
(la clásica). Para instalarla, `npm install sqlite` que es la forma
como se instalan los módulos de node. Además, se instala en
local. Pero el objeto del desarrollo moderno es asegurarse de que todo
lo necesario para programar algo está presente. Por eso, se usan
ficheros que describen qué se usa y, en general, que es necesario
instalar y tener para ejecutarlo. En node se usa un fichero en formato
JSON tal como este:

	{
	  "author": "J. J. Merelo <jjmerelo@gmail.com> (http://github.com/JJ/desarrollo-basado-pruebas)",
	  "name": "porrio",
	  "description": "Apuesta en una porra",
	  "version": "0.0.1",
	  "repository": {
	  "url": "git://github.com/JJ/desarrollo-basado-pruebas.git"
	  },
	  "main": "./Apuesta.js",
	  "scripts": {
	  "test": "make test"
	  },
	  "dependencies": {"sqlite": "~1.0"},
	  "devDependencies": {},
	  "optionalDependencies": {},
	  "engines": {
	  "node": ">=0.8"
	  }
	}


Las partes que más nos interesan están hacia el final: las
dependencias diversas (`dependencies`). Es un *hash* que dice qué
módulo se usan (en este caso, `sqlite` solo) y qué versiones harán
falta. Al desplegarse, el entorno dependerá de muchas cuestiones y hay 
que asegurarse de que donde va a acabar el programa tiene todo lo
necesario. En caso de que no lo tuviera, el programa no se instalará.

A este nivel, la descripción del entorno de trabajo ya constituye en
sí un test: donde se va a desplegar o lo tiene o no lo tiene, en cuyo
caso no se permitirá la ejecución.

Este fichero, además, permite instalar todas las dependencias usando
sólo `npm install .`. Casi todos los lenguajes habituales tienen algún
sistema similar: `bundle` para Ruby o `cpanm` para Perl, por ejemplo. 

> Crear una descripción del módulo usando package.json.






