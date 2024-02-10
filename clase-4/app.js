import express, { json } from 'express'
import { randomUUID } from 'node:crypto'

import { validateMovie, validatePartialMovie } from './schema/movies.js'

// Leer JSON en ESmodules
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const moviesJSON = require('./movies.json')

const app = express()
app.disable('x-powered-by') // Deshabilita la cabecera X-Powered-By

app.use(json())

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  const { genre } = req.query

  if (genre) {
    console.log(genre)
    const filteredMovies = moviesJSON.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  return res.json(moviesJSON)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params

  const movie = moviesJSON.find((movie) => movie.id === id)
  if (movie) {
    res.json(movie)
  } else {
    res.status(404).json({ error: 'Movie not found' })
  }
})

app.post('/movies', (req, res) => {
  // const { title, year, director, duration, poster, genre, rate } = req.body

  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  const newMovie = {
    id: randomUUID(),
    ...result.data
  }

  //! Esto no es ApiRest
  moviesJSON.push(newMovie)

  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  // -- Validamos lo que llega en el body
  const result = validatePartialMovie(req.body)

  if (result.error) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  // ? Existe la pelicula que queremos actualziar?
  const { id } = req.params
  const movieIndex = moviesJSON.findIndex((movie) => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ error: 'Movie not found' })
  }

  //* Actualizacion de la pelicula
  const updatedMovie = {
    ...moviesJSON[movieIndex],
    ...result.data
  }
  console.log(movieIndex)
  moviesJSON[movieIndex] = updatedMovie

  return res.json(updatedMovie)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})
