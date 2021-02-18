Firebase
--------
1- Instalar Firebase desde consola:
npm install -g firebase-tools

2- Para iniciar la Aplicación ejecutar el sig. comando:
firebase init
  2.1- Si arroja error porque no se encuentra logueado en Firebase, ejecute el sig. comando:
  firebase login
  2.2- Firebase va a solicitar una cuenta para el login

3- Se debe elegir un proyecto de Base de Datos
4- Se elige proyecto existente (porque ya tengo creada la BD). Si no esta creada la base de datos se crea una nueva.
5- 


GitHub
------
a- Crear un proyecto desde la web de GitHub
Creamos un nuevo repositorio en https://github.com. Le damos nombre, descripción, seleccionamos si va a ser un proyecto publico o privado si es el caso, y dejamos el check de crear README sin marcar. 
Le damos a crear repositorio y con esto ya tenemos el repositorio donde alojaremos nuestro proyecto.

b- Desde la terminal del equipo donde está el proyecto que queremos subir a GitHub
Nos vamos a la carpeta del proyecto y ejecutamos los sig. comandos:
git init //para iniciar GitHub hacia un repositorio en la nube de GitHub

git add . //para agregar 'toda' la carpeta en la cual estamos posicionados en la terminal
git add <nombre del archivo> (para que agregue un archivo en particular)

git commit -m "mi primer commit" //escribimos una descripcion de lo que vamos a subir a la nube de GitHub

git push -u origin master //master va a ser la 'rama' sobre la cual vamos a trabajar (pueden existir mas de una rama)

Nota: Antes de subir a la nube de GitHub verificar que ya nos encontramos logueados, en caso de que esto no suceda, se nos va a pedir el login a GitHub.

Comandos basicos GIT
--------------------
pwd (cual es el directorio actual donde estamos trabajando, donde estamos parados ahora)
mkdir <nombre de la carpeta> (crea una nueva carpeta en el path donde estamos parados ahora)
cd (para cambiar de directorio)
man <nombre del comando> (para ver el manual de cada comando, ej: man pwd)
ls (lista los contenidos del directorio donde estamos parados ahora)

mv <nombre del archivo> <nuevo lugar para mover> (para mover archivos de un lugar a otro) Ej:
mv claudio.jpg ~/Escritorio/claudio-lolich.jpg
(no solo mueve el archivo de donde estoy ahora al Escritorio, sino que le cambia el nombre)

cp <nombre del archivo> <nombre del archivo copia> (para copiar un archivo sin mover el archivo original)
rm <nombre del archivo> (para remover o eliminar un archivo - No va a la papelera de reciclaje)

cowsay "hola" (muestra una vaca con el mensaje) - cowsay -eOO "muuu" (cambia los ojos por OO)
cowthink -p 'tengo sueño' (muestra una vaca con el pensamiento del mensaje)


git status (para ver el estado actual de la copia local o repositorio)

git diff (para ver qué cambió en cada archivo linea por linea desde la ultima revision del proyecto)
//para calcular las diferencias entre archivos o entre dos ramas distintas

git checkout . (se deshacen todos los cambios que se hicieron en TODOS los archivos)
git checkout --<nombre del archivo> (para deshacer todos los cambios del archivo indicado)
EJ: git checkout --index.html

Ejemplo:
¿Cómo persistirías cambios en el repositorio a README.md, conservando los cambios de mis_notas.txt pero sin persistirlos, y descartando los cambios en index.html?
git add README.md 
git checkout index.html 
git commit -m “Cualquier mensaje”


BUSCAR EN LA HISTORIA DE cambios
--------------------------------
git log (muestra en orden cronologico TODOS los commit que se hicieron desde el principio)
git log --oneline (para ver el resumen de todos los commit, sin detalles)
git log -p (se pueden ver TODOS los cambios de los archivos dentro de cada commit)
git log -- <nombre del archivo> (se pueden ver todos los commit que modificaron al archivo indicado)
Ej: git log -- index.html

Aclaracion: cada vez que ejecutamos git log se obtiene un nro. de revision (que es el ID del commit para hacer referencias)
Nota: para ver los cambios de los archivos (por ej. del git log -p) se puede utilizar la herramienta Git GUI

HISTORIAL - Volver a un estado anterior de un Commit
---------
git checkout <numero de revision> (vuelve al estado en el cual se encontraba ese codigo de ese momento)
Ej: git checkout c7f510d212c545s545a898
Nota: no hay que tener cambios en la carpeta local, porque sino no se puede hacer
Aclaracion:  El comando checkout reescribe los archivos de nuestra carpeta local (OJO)

git checkout master (es la ultima revision que estamos haciendo)
Al ejecutar este comando, volvemos a la ultima version mas nueva del proyecto :)

RAMAS
-----
git branch <nombre de la rama>  (para crear una nueva rama diferente a la master)

git checkout <nombre de la rama> (para situarnos a trabajar en la rama con ese nombre)
En ese momento Git nos da una nueva area de stagin para trabajar

Para unir la rama hija con la rama master se procede de la sig. manera:
1- Situarse en la rama 'master':
  git checkout master

2- Se unifican la rama 'master' con su rama hija (por ej. la rama hija se llama 'proyecto1')
  git merge <nombre de la rama a unificar>
  Ej: git merge proyecto1
  (esto unifica en la rama 'master' los cambios que se hicieron desde la rama 'proyecto1' en una sola rama, la 'master')
  //es para unir RAMAS


3- Una vez unificadas las ramas, se acostumbra borrar
  git branch -d <nombre de la rama que se unifico a la master>
  Ej: git branch -d proyecto1

La rama por defecto es 'master'.


CLONAR un repositorio en GIT a nuestra computadora (exactamente igual al repositorio remoto)
------
git clone <url del repositorio>

El repositorio por defecto es 'origin'.


git pull (para bajar cambios desde el repositorio remoto)
git push (para subir cambios al repositorio remoto)


Git Distribuido (para compartir repositorios con equipo de trabajo)
---------------
Cuando se crea un repositorio en GitHub, con git clone y la url podemos clonarlo.

Otra manera de hacerlo, si el repositorio ya existe y no queremos clonarlo (porque ya existe), sino que quermos conectarlo, utilizamos el sig. comando:
git remote add origin <url>  
//El repositorio queda como si lo hubieran clonado de Internet en vez de inicializado en su propia computadora y luego en ese momento se puede empezar a hacer git push o git pull.

Luego se puede hacer 'git pull origin' (obtenemos todos los cambios que se hicieron en el repositorio de Git)
Si ponemos 'git push origin' (cargamos en el repositorio remoto, todos los cambios locales)

Se pueden agregar tantos remotos como se quieran!
Nota: recordar que origin es el nombre del repositorio principal (puede tener otro nombre).


Bajar y subir cambios a distintos repositorios
----------------------------------------------
Teniendo un commit de la rama de nombre 'inyde' y lo queremos unir a otra rama llamada 'master', como las unificamos?
Parados en nuestro 'master' podemos hacer:
git checkout master //para verificar que estamos en 'master'
Hacermos:
git merge inyde/master
(de esa manera tenemos TODOS los commit que estan en 'inyde' y que no estan en master, en la rama principal)
Despues cuando escribamos 'git push' se publicaran los cambios de master y de inyde tambien!
De esta manera podemos compartir trabajos entre nosotros.


BUENAS PRACTICAS Generales de GIT
----------------
* Hacer commit frecuentemente en el proyecto (uno por dia seria lo ideal)
(es mas facil de revertir, de seguir y de organizar el trabajo de una manera mas entendible para el grupo de trabajo)
* Escribir buenas descripciones del commit (cuando pasa el tiempo nos olvidamos de que hacia)
* Hacer commit de cosas relacionadas - un commit atomico
* Si el cambio que hacemos es muy grande, dividir los cambios por commit


Esta es la lista de comandos básicos para la consola de windows:
---------------------------------------------------------------
Cambiamos de directorio
cd [destino]

Regresamos un directorio atrás
cd  …/

Regresamos al inicio de nuestra ruta, al disco duro (normalmente c:)
cd \

Muestra los directorios que hay en nuestra posición actual
dir

Limpiamos pantalla
cls

Creamos un directorio o Carpeta
mkdir Nombre_Carpeta

Eliminamos un directorio (solo si esta vacío)
rmdir Nombre_Carpeta

Eliminamos un archivo
del Nombre_Archiva



Conceptos Generales de Git
--------------------------
Un repositorio es el directorio del proyecto donde estan todos los archivos y la historia del primer dia.
Una revision es una version determinada de nuestro proyecto (puede ser un nro.) Podemos compartir ese nro y determinar si estamos en la ultima revision o no.
Un commit es una accion por la que se percisten los cambios que hicimos en nuestra computadora que se puede aplicar a un repositorio (guarda todo el historial de todos los archivos que se cambiaron)
La copia local es la copia de nuestra computadora que tenemos de un repositorio.
El area de staging es un area de carga donde se decide que va a guardarse en el proximo commit (y ademas ignorar copias que solo queremos manterner en nuestra pc)

Como versionamos nuestro proyecto?
git init (inicializamos Git en nuestro proyecto - se crea la carpeta .git en el path)
git status (podemos ver el estado de la COPIA LOCAL)
git add . (notificamos que agregamos al area de staging los archivos que hemos agregado o hechos cambios)
git commit -m 'mensaje de la descripcion del cambio'
(al presionar ENTER git guardo esa version de nuestro repositorio)
Si escribimos: git log (podemos ver ese cambio realizado)



RECURSOS
--------
Instalar GitHub:
http://git-scm.com/download/win


Herramientas de Maquetado:
https://mockflow.com/
https://www.figma.com/

Galeria de Iconos:
https://fontawesome.com/icons?d=gallery


Framework CSS Materialize
-------------------------
https://materializecss.com/getting-started.html

