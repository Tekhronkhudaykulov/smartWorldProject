import React from "react";
import { useNavigate } from "react-router-dom";
import FaceIdComp from "../../../components/FaceId/faceId";
import LogoName from "../../../components/LogoName/logoName";
import Slider from "../../../components/Slider/slider";
import Title from "../../../components/Title/title";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./faceId.module.css";

const FaceId = () => {
  const navigation = useNavigate();

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
