//* Con process podemos:

const { log } = require("console");

// argumentos de entrada
console.log(process.argv);

// cerrar ejecucion
// process.exit(0);

// Escuchar eventos
process.on('exit', () => {
    console.log('El proceso terminó');
});

// Ver desde donde ejecuto el proceso
console.log(process.cwd());

// Plataforma
console.log(process.platform);

// Variables de entorno
// console.log(process.env.PEPITO);