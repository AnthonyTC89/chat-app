/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const SocketIO = require('socket.io');

// const path = require('path');

// eslint-disable-next-line
// const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3001);

// MiddleWares
app.use(morgan('dev'));
app.use(express.json());

// Routes

// Static Files
// const index = path.join(__dirname, '../build');
// app.use(express.static(index));

// Stating Server
const server = app.listen(app.get('port'), () => {
  console.log(`Server on Port ${app.get('port')}`);
});

// Websockets
const io = SocketIO(server);

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('message', { text: message.text, from: message.from });
  });
});
