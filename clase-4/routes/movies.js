import { Router } from 'express'
import { createRequire } from 'node:module'
import { randomUUID } from 'node:crypto'
import { validateMovie, validatePartialMovie } from '../schema/movies.js'

export const moviesRouter = Router()

// Leer JSON en ESmodules
const require = createRequire(import.meta.url)
const moviesJSON = require('../movies.json')

moviesRouter.get('/', (req, res) => {
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

moviesRouter.get('/:id', (req, res) => {
  const { id } = req.params

  const movie = moviesJSON.find((movie) => movie.id === id)
  if (movie) {
    res.json(movie)
  } else {
    res.status(404).json({ error: 'Movie not found' })
  }
})

moviesRouter.post('/', (req, res) => {
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

moviesRouter.patch('/:id', (req, res) => {
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
