const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Nueva conexión')
  res.end('Hola mundo')
})

// Utiliza el primer puerto disponible
server.listen(0, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${server.address().port}`)
})
