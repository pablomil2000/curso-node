const http = require('node:http')
const { findAvaiblePort } = require('./10.free-port.js')
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Nueva conexión')
  res.end('Hola mundo')
})

findAvaiblePort(desiredPort).then((port) => {
  // Utiliza el primer puerto disponible
  server.listen(0, () => {
    console.log(`Servidor escuchando en el puerto  http://localhost:${server.address().port}`)
  })
})
