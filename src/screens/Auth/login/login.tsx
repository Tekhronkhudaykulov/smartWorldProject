import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/button";
import Input from "../../../components/Input/input";
import LogoName from "../../../components/LogoName/logoName";
import Title from "../../../components/Title/title";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../../store";
import { $api } from "../../../contants/API";


const Login = () => {
  const navigation = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState();

  const dataSend = async (payload: any) => {
    try {
      const data = await $api.post("v1/user/login", payload);
      navigation(APP_ROUTES.FACE_ID);
    } catch {
      console.log("errpr");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <LogoName />
        <Title title="Регистрация" />
      </div>
      <div className={styles.bottomBox}>
        <Input
          label="Ф.И.О"
          placohlder="Фамилия Имя Отчество"
          onchangeInput={(e) => setUserName(e.target.value)}
          // iconUrl={<SearchIcon />}
        />
        <Input
          label="Пароль"
          placohlder="Пароль"
          type="password"
          onchangeInput={(e) => setPassword(e.target.value)}
          // iconUrl={<SearchIcon />}
        />
        <Button
          btnSize="large"
          btnType="primary"
          title="Регистрация"
          style={{
            marginTop: "30px",
          }}
          onPress={() => {
            dataSend({ username, password });
          }}
        />
      </div>
    </div>
  );
};

export default Login;
