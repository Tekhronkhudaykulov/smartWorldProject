import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/button";
import Input from "../../../components/Input/input";
import LogoName from "../../../components/LogoName/logoName";
import Title from "../../../components/Title/title";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../../store";

const Login = () => {
  const navigation = useNavigate();

  const token = localStorage.getItem("@token");

  useEffect(() => {
    if (token) {
      navigation(APP_ROUTES.MARKET);
      // window.location.reload(true);
      window.location.reload();
    }
  }, [token]);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState();

  const dispatch = useDispatch<Dispatch>();

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <LogoName />
        <Title title="Авторизация" />
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
          title="Войти"
          style={{
            marginTop: "30px",
          }}
          onPress={() => navigation(APP_ROUTES.FACE_ID)}
        />
      </div>
    </div>
  );
};

export default Login;
