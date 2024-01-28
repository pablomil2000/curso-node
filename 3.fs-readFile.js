const fs = require('node:fs');

fs.readFile('./example.txt', 'utf-8', (err, data) => {   // <--- ejecuta este callback
    console.log(data)
});

console.log('Haces mas cosas...'); // <--- antes que el callback

// const text = fs.readFileSync('./example.txt', 'utf-8');

// console.log(text);