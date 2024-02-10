import { Router } from 'express'
import { validateMovie, validatePartialMovie } from '../schema/movies.js'
import { MovieModel } from '../models/movie.js'

export const moviesRouter = Router()

moviesRouter.get('/', async (req, res) => {
  const movies = await MovieModel.getAll(req.query)
  res.json(movies)
})
moviesRouter.post('/', async (req, res) => {
  // const { title, year, director, duration, poster, genre, rate } = req.body

  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  const newMovie = await MovieModel.create(result.data)

  res.status(201).json(newMovie)
})

moviesRouter.get('/:id', async (req, res) => {
  const movie = await MovieModel.getById(req.params)

  if (movie) {
    res.json(movie)
  } else {
    res.status(404).json({ error: 'Movie not found' })
  }
})
moviesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deleted = await MovieModel.delete({ id })

  if (!deleted) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  return res.json({ message: 'Movie deleted' })
})
moviesRouter.patch('/:id', async (req, res) => {
  // -- Validamos lo que llega en el body
  const result = validatePartialMovie(req.body)

  if (result.error) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  // ? Existe la pelicula que queremos actualziar?
  const { id } = req.params

  const movie = await MovieModel.update({ id, input: result.data })

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  return res.json(movie)
})
