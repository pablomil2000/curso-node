const express = require('express')
const app = express()

app.disable('x-powered-by')

const port = process.env.PORT || 3000

// Middleware 1
app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.post('/pokemon', (req, res) => {
  console.log(req.body)
  res.status(201).json(req.body)
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${port}`)
})
