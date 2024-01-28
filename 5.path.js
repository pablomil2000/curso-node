const path = require('node:path');
console.log('----------------------------------');
// Separador de carpetas segun SO
console.log('Separador de carpetas segun SO');
console.log(path.sep);
console.log('----------------------------------');

// las rutas siempre se unen con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log('Ruta unida con path.join');
console.log(filePath);
console.log('----------------------------------');

// Sacar nombre del archivo en una ruta
const base = path.basename(filePath);
const base2 = path.basename(filePath, '.txt'); //-> elimina el .txt

console.log('Nombre del archivo en una ruta');
console.log('Con extension', base);
console.log('Sin extension', base2);
console.log('----------------------------------');

const extension = path.extname(filePath);
console.log('Extension del archivo');
console.log(extension);
console.log('----------------------------------');