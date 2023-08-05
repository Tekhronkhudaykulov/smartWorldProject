import React from "react";
import LogoName from "../../../components/LogoName/logoName";
import Title from "../../../components/Title/title";
import styles from "./faceId.module.css";

import { useFaceIdLogin } from "../../../hook/useFaceIdLogin";
import Button from "../../../components/Button/button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router/Route";

const FaceId = () => {
  const navigation = useNavigate();
  useFaceIdLogin();
  return (
    <div className={styles.container}>
      <LogoName />
      {/* <Title title="Регистрация" /> */}
      {/* <FaceIdComp /> */}
      {/* <Slider onPress={() => navigation(APP_ROUTES.TOUCH_ID)} /> */}
      <Title fontSize="35px" title="Смотрите в камеру" />
      <Button
        btnSize="large"
        btnType="outline"
        title="Назад"
        style={{
          marginTop: "30px",
        }}
        onPress={() => navigation(APP_ROUTES.WELCOME)}
      />
    </div>
  );
};

export default FaceId;
