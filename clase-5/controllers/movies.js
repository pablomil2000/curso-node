import { log } from 'node:console'
import { MovieModel } from '../models/mysql/movie.js'
import { validateMovie, validatePartialMovie } from '../schema/movies.js'
import { randomUUID } from 'node:crypto'

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

    console.log(result)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    result.data.id = randomUUID()

    const newMovie = await MovieModel.create({ input: result.data })

    if (!newMovie) {
      return res.status(500).json({ message: 'Error creating movie' })
    }
    res.status(201).json(result.data)
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
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
      const updated = await MovieModel.update({ id: req.params.id, input: result.data })
      if (!updated) {
        return res.status(400).json({ message: 'Error updating movie' })
      }
    } catch (error) {
      return res.status(400).json({ message: 'Error updating movie' })
    }

    return res.json({ message: 'update' })
  }
}
