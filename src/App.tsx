import { useEffect, useRef } from "react";
import "./App.css";
import Router from "./router/router";
import io, { Socket } from "socket.io-client";

function App() {
  // let socket: Socket = io(
  //   "wss://spil-socket.four-seasons.uz/socket.io/?token=7NJuSfpecAOJRoJyIbelHyaXHivmKvUI&EIO=4&transport=websocket",
  //   { autoConnect: false, transports: ["websocket"] }
  // );
  // useEffect(() => {
  //   console.log(socket.connected);
  // });
  // useEffect(() => {
  //   console.log("CONNECTING");
  //   socket.connect();
  //   // socket = socket.connect();
  //   socket.onAny((e) => {
  //     console.log(e);
  //   });
  //   socket.on("connect_error", (e: any) => {
  //     console.log("CONNECTED ERROR");
  //     console.log(JSON.stringify(e));
  //   });
  //   socket.on("connect", () => {
  //     console.log("CONNECTED");
  //   });
  //   socket.on("user_login", (data: any) => {
  //     console.log({ data });
  //   });
  // }, [socket]);

  const socket = useRef<any>();

  useEffect(() => {
    socket.current = new WebSocket(
      "wss://spil-socket.four-seasons.uz?token=7NJuSfpecAOJRoJyIbelHyaXHivmKvUI"
    );
    socket.current.onmessage = (e: any) => {
      let data = e;
      localStorage.setItem("@token", JSON.parse(data.data).data.auth_key);
    };
  }, []);

  return <Router />;
}

export default App;
