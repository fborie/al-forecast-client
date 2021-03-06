## Introduction
Client app for Acid Labs job application test. 

## Test's Description
Se desea mostrar en pantalla completa la hora y la temperatura y hora de las siguientes ciudades:

Santiago (CL), Zurich (CH), Auckland (NZ), Sydney (AU), Londres (UK), Georgia (USA)

Las latitudes y longitudes de cada ciudad deben ser guardadas en Redis al momento de iniciar la aplicacion.

Cada request de la API debera ir a Redis, sacar las latitudes y longitudes correspondientes, y hacer las consultas necesarias al servicio de Forecast.io.

Cada request a la API tiene un 10% de chances de fallar, al momento de hacer el request debera suceder lo siguiente:

if (Math.rand(0, 1) < 0.1) throw new Error('How unfortunate! The API Request Failed')

Esto nos simulara un fallo del 10%~, la aplicacion debera rehacer el request las veces que sea necesario para tener una respuesta correcta, cada fallo debera guardarse en Redis dentro de un hash llamado "api.errors", la llave debera ser el timestamp y el contenido debe ser relevante al error. El handler de error debera capturar solamente este error y no otro con diferente clase o mensaje.

El frontend deberá actualizarse cada 10 segundos a través de web sockets. El proceso deberá actualizar redis y luego enviar el update al frontend. 

El temas el diseño esta 100% en tus manos, nos interesa mas la funcionalidad y orden más que cuan bonito se ve.

La aplicación debera ser subida a AWS o Heroku (tu eleccion) y a un repositorio de Git, recuerda documentar como se sube!

## Configuration 
Following instructions for Debian/Ubuntu
1. Install node version manager: $`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`
2. Install current node version 10.10.0: $ `nvm install 10.10.0`
3. install yarn
  3.1 $`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
  3.2 $`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
  3.3 $ `sudo apt-get update && sudo apt-get install yarn`
4. Clone repo
5. Install repo dependencies: `cd <repo path> && yarn install`
6. If all dependencies were correctly installed, then proceed to start the app: $`sudo PORT=80 yarn start`
