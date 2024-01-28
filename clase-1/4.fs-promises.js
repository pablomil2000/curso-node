const fs = require('node:fs') //* fs por defecto no tienes promesas, solo callbacks
// const fs = require('node:fs/promises')

// const { promisify } = require('node:util'); //* <--- importa promisify
// const readFile = promisify(fs.readFile); //* <--- fs.readFile era callback, ahora tenemos readFile que es promesa

fs.readFile('./example.txt', 'utf-8')
  .then(text => { console.log(text) })

console.log('Haces mas cosas...') // <--- antes que el callback

// const text = fs.readFileSync('./example.txt', 'utf-8');

// console.log(text);
