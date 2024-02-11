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
    console.log('genre', genre.length)

    if (genre.length > 0) {
      const [movies] = await conect.query(
        'SELECT * FROM movies join genres join genre_movie on movies.id = genre_movie.movie_id and genres.id = genre_movie.genre_id where genres.nombre = ?', [genre])
      return movies
    }

    const [movies] = await conect.query(
      'SELECT * FROM movies')
    return movies
  }

  static async getById ({ id }) {

  }

  static async create ({ input }) {

  }

  static async delete ({ id }) {

  }

  static update = async ({ id, input }) => {

  }
}
