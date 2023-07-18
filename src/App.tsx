import { useEffect, useRef } from "react";
import "./App.css";
import Router from "./router/router";
import io, { Socket } from "socket.io-client";

function App() {
  return <Router />;
}

export default App;
