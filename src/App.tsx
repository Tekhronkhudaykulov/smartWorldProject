import { useEffect, useRef } from "react";
import "./App.css";
import Router from "./router/router";
import {$api} from "./contants/API";

function App() {
  const socket = useRef<any>();

  useEffect(() => {
    socket.current = new WebSocket(
      "wss://spil-socket.four-seasons.uz?token=3ZaRPOqVebdMtu_MG1vITN1n66Gb2e9O"
    );
    socket.current.onmessage = (data: any) => {
      const token = JSON.parse(data.data).data.auth_key;
      localStorage.setItem("@token", token);
      $api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      dispatchEvent(new Event("storage"));
    };
  }, []);

  return <Router />;
}

export default App;
