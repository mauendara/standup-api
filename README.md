Ejercicio Coding Dojo - Idukay - 2019/04/27
===

### Start server

``` 
$ npm run start
```

### Consideraciones

Herramientas:

- VS Code
- Node 11
- GitKraken para git-flow

Se han utilizado las siguientes librerías:

- dotenv para la carga de propiedades desde un archivo .env
- hapi para la construcción del backed REST
- hapi-auth-jwt2 como middleware de autenticación con JWT
- Boom para la construcción de respuestas estándar para servicios REST
- bluebird como librería de promesas (async/await)
- bcrypt y jsonwebtoken para el hasheo de contraseñas y generación de tokens de autenticación
- mailgun-js para consumir el servicio de mailgun para el envío de correos electrónicos
- mongoose para la conexión y manejo de datos contra MongoDB

En cuanto a entorno de desarrollo:

- nodemon para hot reload del proyecto
- lab y code para ejecutar tests y code coverage

### Alcance Completado

- Registro de usuario y envío de correo de confirmación
- Confirmación de correo y activación de la cuenta
- Inicio de Sesión y control de acceso a recursos
- Creación de Salas para reuniones Standup

### Roadmap

- Invitar usuarios a salas
- Iniciar reunión en salas
- Compartir mensajes en salas
