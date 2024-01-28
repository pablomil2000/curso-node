const os = require('node:os')

console.log('Informacion del Sistema Operativo');
console.log('---------------------------------');
console.log('Plataforma:', os.platform());
console.log('Version:', os.version());
console.log('Arquitectura:', os.arch());
console.log('Procesadores:', os.cpus().length);
console.log('Memoria Total:', os.totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('Memoria Libre:', os.freemem() / 1024 / 1024 / 1024, 'GB');
console.log('---------------------------------');
console.log('Usuario:', os.userInfo().username);
console.log('---------------------------------');
console.log('Carpeta Personal:', os.homedir());
console.log('Directorio Temporal:', os.tmpdir());
console.log('---------------------------------');
console.log('Hostname:', os.hostname());
console.log('---------------------------------');
console.log('tiempo activo', os.uptime() / 60 / 60, 'horas');