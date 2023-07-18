import { useEffect, useRef } from "react";
import "./App.css";
import Router from "./router/router";
import io, { Socket } from "socket.io-client";

function App() {
  const socket = useRef<any>();

  useEffect(() => {
    socket.current = new WebSocket(
      "wss://spil-socket.four-seasons.uz?token=3ZaRPOqVebdMtu_MG1vITN1n66Gb2e9O"
    );
    socket.current.onmessage = (e: any) => {
      let data = e;
      localStorage.setItem("@token", JSON.parse(data.data).data.auth_key);
      dispatchEvent(new Event("storage"));
    };
  }, []);

  return <Router />;
}

export default App;
