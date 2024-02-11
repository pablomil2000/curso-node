import express from 'express';
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: {},
})

const db = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
})

// await db.execute(
//   `CREATE TABLE IF NOT EXISTS messages (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     content TEXT
//   )
// `)

io.on('connection', async (socket) => {
  console.log('Usuario conectado')

  socket.on('disconnect', () => {
    console.log('Usuario desconectado')
  })

  socket.on('chat message', async (data) => {
    let result

    try {
      result = await db.execute({
        sql: `INSERT INTO messages (content) VALUES (:content)`,
        args: { content: data }
      })
    } catch (error) {
      console.error('Error al insertar el mensaje', error)
    }
    io.emit('chat message', data, result.lastInsertRowid.toString())
  })

  if (!socket.recovered) {
    try {
      const result = await db.execute({
        sql: `SELECT * FROM messages where id > :id`,
        args: { id: socket.handshake.auth.serverOffset ?? 0 }
      })

      result.rows.forEach(row => {
        socket.emit('chat message', row.content, row.id.toString())
      })
    } catch (error) {
      console.error('Error al recuperar los mensajes', error)
    }
  }
})


app.use(logger('dev'))  //logs de morgan

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')  //Cargar vista
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})