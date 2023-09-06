const socketController = (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("send-msg", (payload, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("send-msg", payload);
  });
};

module.exports = {
  socketController,
};
