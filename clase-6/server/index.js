import express from 'express';
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app)
const io = new Server(server)

app.use(logger('dev'))  //logs de morgan

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')  //Cargar vista
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})