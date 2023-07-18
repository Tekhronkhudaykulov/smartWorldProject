import React from "react";
import LogoName from "../../../components/LogoName/logoName";
import Title from "../../../components/Title/title";
import styles from "./faceId.module.css";

import {useFaceIdLogin} from "../../../hook/useFaceIdLogin";

const FaceId = () => {

  useFaceIdLogin()

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
