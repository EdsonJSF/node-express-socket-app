const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    // Middlewares
    this.middlewares();

    // Endpoints Paths (Routes)
    this.paths = {};

    // Routes
    this.routes();

    // Sockets
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {}

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("Client connected");

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });

      socket.on("send-msg", (payload, callback) => {
        const id = 123456;
        callback(id);
        this.io.emit("send-msg", payload);
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`App listening at:`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
