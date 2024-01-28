const net = require('node:net')

function findAvaiblePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    // Escuchar el puerto deseado
    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    // Si el puerto esta ocupado, escuchamos otro, hasta encontrar otro
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvaiblePort(0).then((port) => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
module.exports = { findAvaiblePort }
