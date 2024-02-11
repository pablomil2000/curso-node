import express from 'express';
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('Usuario conectado')

  socket.on('disconnect', () => {
    console.log('Usuario desconectado')
  })
})


app.use(logger('dev'))  //logs de morgan

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')  //Cargar vista
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})