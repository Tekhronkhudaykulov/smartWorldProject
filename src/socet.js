import { Server } from "socket.io";

const io = new Server(3001);

io.on("connection", (socket) => {
  socket.emit("Welcome", "Welcome to the chanel");

  socket.on("msg", (data) => {
    console.log("Msg from client", data);
  });
});
