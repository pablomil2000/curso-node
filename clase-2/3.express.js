const express = require('express')
const app = express()
app.disable('x-powered-by')
const port = process.env.PORT || 3000

const dittoJson = require('./pokemon/ditto.json')

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJson)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    res.json(data)
  })
})

// 404
app.use((req, res) => {
  res.status(404).send('<h1><b>404</b> Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${port}`)
})
