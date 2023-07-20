import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "../store";
import { $api } from "../contants/API";
import { APP_ROUTES } from "../router/Route";
import { useNavigate } from "react-router-dom";

export const useFaceIdLogin = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch<Dispatch>();

  const socket = useRef<WebSocket>(
    new WebSocket(
      "wss://spil-socket.four-seasons.uz?token=3ZaRPOqVebdMtu_MG1vITN1n66Gb2e9O"
    )
  );

  useEffect(() => {
    socket.current.onmessage = (data: any) => {
      const token = JSON.parse(data.data).data.auth_key;
      localStorage.setItem("@token", token);
      $api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (token) {
        navigation(APP_ROUTES.MAIN);
      }
    };
  }, []);
};
