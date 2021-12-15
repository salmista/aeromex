# Getting Started with Harry Potter app

Este proyecto esta guardado en [GitHub](https://github.com/salmista/aeromex).

## Script disponibles

En el directorio /backend ejecuta el comando:

### `npx json-serve --watch db.json p 3001`

Ejecuta el servicio del servidor Json.\
Open [http://localhost:3001](http://localhost:3001).

The server will load inmediatly, run this first.

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhost:3001](http://localhost:3000) en el navegador

La página se recargará si se hacen ediciones. No se ejecuta antes del script api.

### `yarn build`

Construye la aplicación para producción en la carpeta `build`.
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.\N
Tu aplicación está lista para ser desplegada.

Consulta la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

### `¿Qué es lo que más te gustó de tu desarrollo?`
Que pude poner en práctica y demostrar mis conocimientos de React, así como construir una app interesante
### `Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?`
De tener más tiempo habría hecho un CRUD completo y una sección con todos los detalles de cada personaje al dar click en cada card

### `Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste`

Me encontré con que cada objeto del json no tenia id, por lo que corrí un script para hacerle un push y que intrujera un id a cada elemento.

Por otro lado tuve un problema con redux en la parte de los favoritos que no alcancé a solucionar.