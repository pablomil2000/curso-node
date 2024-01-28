const fs = require('node:fs');

const text = fs.readFileSync('./example.txt');

console.log(text);