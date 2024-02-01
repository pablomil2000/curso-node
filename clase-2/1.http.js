const http = require('node:http')
const pc = require('picocolors')

const desiredPort = process.env.PORT ?? 3000

const procesarRequest = (req, res) => {
  console.log('peticion recibida: ', pc.green(req.url))

  if (req.url === '/') {
    res.statusCode = 200 //* OK
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Charset', 'utf-8')
    res.end('<h1>Bienvenido a mi servidor</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 //* OK
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Charset', 'utf-8')
    res.end('<h1>Contactanos</h1>')
  } else {
    res.statusCode = 404 //* Not Found
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Charset', 'utf-8')
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(procesarRequest)

// Utiliza el primer puerto disponible
server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${server.address().port}`)
})
