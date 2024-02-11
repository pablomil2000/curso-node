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
    const result = await conect.query(
      'SELECT * FROM movies')

    console.log(result)
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
