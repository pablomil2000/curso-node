const fs = require('node:fs')

const stats = fs.statSync('./readme.md')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)
