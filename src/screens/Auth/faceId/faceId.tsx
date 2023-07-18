import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FaceIdComp from "../../../components/FaceId/faceId";
import LogoName from "../../../components/LogoName/logoName";
import Slider from "../../../components/Slider/slider";
import Title from "../../../components/Title/title";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./faceId.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const FaceId = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const listener = () => {
      const token = localStorage.getItem("@token");
      if (token) {
        navigation(APP_ROUTES.MAIN);
      }
    };

    window.addEventListener("storage", listener);

    return () => window.removeEventListener("storage", listener);
  }, []);

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

  return (
    <div className={styles.container}>
      <LogoName />
      {/* <Title title="Регистрация" /> */}
      {/* <FaceIdComp /> */}
      {/* <Slider onPress={() => navigation(APP_ROUTES.TOUCH_ID)} /> */}
      <Title fontSize="35px" title="Смотрите в камеру" />
    </div>
  );
};

export default FaceId;
