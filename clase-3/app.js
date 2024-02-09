const express = require('express')
const crypto = require('node:crypto')
const moviesJSON = require('./movies.json')

const app = express()
app.disable('x-powered-by') // Deshabilita la cabecera X-Powered-By

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/movies', (req, res) => {
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
  console.log(req.body)
  const { title, year, director, duration, poster, genre, rate } = req.body

  const newMovie = {
    id: crypto.randomUUID(),
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate: rate ?? 0
  }

  //! Esto no es ApiRest
  moviesJSON.push(newMovie)

  res.status(201).json(newMovie)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})
