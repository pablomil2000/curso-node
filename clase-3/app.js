const express = require('express')

const app = express()
app.disable('x-powered-by') // Deshabilita la cabecera X-Powered-By

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})
