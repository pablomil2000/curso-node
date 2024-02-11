import { MovieModel } from '../models/mysql/movie.js'
import { validateMovie, validatePartialMovie } from '../schema/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query

    const movies = await MovieModel.getAll({ genre })

    if (!movies.length) {
      return res.status(404).json({ message: 'Movies not found' })
    }

    res.json(movies)
  }

  static async create (req, res) {
    const result = validateMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = await MovieModel.create({ input: result.data })

    res.status(201).json(newMovie)
  }

  static async getById (req, res) {
    const movie = await MovieModel.getById(req.params)

    if (movie) {
      res.json(movie)
    } else {
      res.status(404).json({ error: 'Movie not found' })
    }
  }

  static async delete (req, res) {
    const { id } = req.params

    const deleted = await MovieModel.delete({ id })

    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static async update (req, res) {
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
  }
}
