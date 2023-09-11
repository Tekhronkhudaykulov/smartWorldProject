import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";
import { $api } from "../contants/API";
import { APP_ROUTES } from "../router/Route";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIdleTimer } from "react-idle-timer";

export const useFaceIdLogin = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch<Dispatch>();

  const tokenForSocet = localStorage.getItem("@firstToken");

  const socket = useRef<WebSocket>(
    new WebSocket(`wss://spil-socket.four-seasons.uz?token=${tokenForSocet}`)
  );

  useEffect(() => {
    socket.current.onmessage = (data: any) => {
      const token = JSON.parse(data.data).data.auth_key;
      localStorage.setItem("@token", token);
      $api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (token) {
        navigation(APP_ROUTES.MAIN);
      }
      socket.current.close();
    };
  }, []);
};

export const LogoutProject = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleOnUserIdle = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.WELCOME);
  };
  useIdleTimer({
    timeout: 10000,
    onIdle: handleOnUserIdle,
    debounce: 500,
  });
};

export const LogoutForFirstPage = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleOnUserIdle = () => {
    navigation(APP_ROUTES.WELCOME);
  };
  useIdleTimer({
    timeout: 10000,
    onIdle: handleOnUserIdle,
    debounce: 500,
  });
};

export const LogoutForMainAndMarketPage = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleOnUserIdle = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.BANNER);
  };
  useIdleTimer({
    timeout: 10000,
    onIdle: handleOnUserIdle,
    debounce: 500,
  });
};
