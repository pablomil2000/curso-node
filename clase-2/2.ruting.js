const http = require('node:http')
const pc = require('picocolors')

// commonJS -> permite importar json a saco

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { url, method } = req
  console.log('peticion recibida: ', pc.green(req.url))

  switch (method) {
    case 'GET':
      console.log('Es un ' + pc.green('GET'))
      switch (url) {
        case '/':
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end('<h1>Pokemon API</h1>')
          break
        case '/pokemon/ditto':
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(dittoJSON))
          break
        default:
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.end('<h1>Not found <b>404</b></h1>')
          break
      }

      break
    case 'POST':
      console.log('Es un ' + pc.red('POST'))
      switch (url) {
        case '/pokemon': {
          let body = ''

          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })

          break
        }
      }
      break
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${server.address().port}`)
})
