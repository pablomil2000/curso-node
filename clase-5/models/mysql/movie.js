import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'node-curso'
}

const conect = await mysql.createConnection(config) // Conect to database

export class MovieModel {
  static async getAll ({ genre }) {
    // console.log('genre', genre.length)

    if (genre && genre.length > 0) {
      const [movies] = await conect.query(
        'SELECT * FROM movies join genres join genre_movie on movies.id = genre_movie.movie_id and genres.id = genre_movie.genre_id where genres.nombre = ?', [genre])
      return movies
    }

    const [movies] = await conect.query(
      'SELECT * FROM movies')
    return movies
  }

  static async getById ({ id }) {
    const [movie] = await conect.query(
      'SELECT * FROM movies WHERE id = ?', [id])
    return movie
  }

  static async create ({ input }) {
    console.log(input)
    const {
      id,
      title,
      director,
      year,
      duration,
      rate,
      poster
    } = input

    const insert = await conect.query('INSERT INTO movies (id, title, director, year, duration, rate, poster) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, title, director, year, duration, rate, poster])

    if (insert) {
      return insert
    }

    return false
  }

  static async delete ({ id }) {
    const [movie] = await conect.query(
      'DELETE FROM movies WHERE id = ?', [id])
    return movie
  }

  static update = async ({ id, input }) => {
    // Actualizar solo los campos que se pasan en input

    const [movie] = await conect.query(
      'UPDATE movies SET ? WHERE id = ?', [input, id])
    return movie
  }
}
