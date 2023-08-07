import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";
import { $api } from "../contants/API";
import { APP_ROUTES } from "../router/Route";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIdleTimer } from "react-idle-timer";

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
      console.log({ token });
      localStorage.setItem("@token", token);
      console.log({ token });
      $api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (token) {
        navigation(APP_ROUTES.MAIN);
      }
    };
  }, []);
};

export const LogoutProject = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const success = () => {
    toast.success("Спасибо за покупку!", {
      autoClose: 2000,
    });
  };
  const handleOnUserIdle = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.WELCOME);
    success();
  };
  useIdleTimer({
    timeout: 30000,
    onIdle: handleOnUserIdle,
    debounce: 500,
  });
};
