import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'

const app = express()
app.disable('x-powered-by') // Deshabilita la cabecera X-Powered-By

app.use(json())

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})
