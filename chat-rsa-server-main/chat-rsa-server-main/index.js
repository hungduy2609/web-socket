const io = require('socket.io')(3000);

const getClientRoom = () => {
    let index = 0;
    while (true) {
      if(!io.sockets.adapter.rooms[index] || io.sockets.adapter.rooms[index].length < 15) {
        return index;
      }
      index ++;
    }
}

io.on('connect', socket => {
    const clientRoom = getClientRoom();

    socket.join(clientRoom);


    socket.on('sendMessage', function (message) {
      socket.to(clientRoom).emit('receiveMessage', message);
      console.log(message)
    })
});
