import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/button";
import Input from "../../../components/Input/input";
import LogoName from "../../../components/LogoName/logoName";
import Title from "../../../components/Title/title";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { $api } from "../../../contants/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-simple-keyboard/build/css/index.css";
import KeyboardWrapper from "../../../components/Keyboard/Keyboard";
import SecondKeyboard from "../../../components/Keyboard/SecondKeyboard";

const Login = () => {
  const navigation = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [secondHide, setSecondHid] = useState(false);

  const error = () => {
    toast.error("Ошибка авторизации", {
      autoClose: 1500,
    });
  };
  const dataSend = async (payload: any) => {
    setLoading(true);
    try {
      const data = await $api.post("v1/user/login", payload);
      navigation(APP_ROUTES.FACE_ID);
    } catch (e) {
      error();
    }
    setLoading(false);
  };

  const keyboard = useRef<any>(null);

  const keyboardValue = useRef<any>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setUserName(input);
    setPassword(input);
    keyboard.current.setUserName(input);
    keyboardValue.current.setPassword(input);
  };

  const secondOnchangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setPassword(input);
    keyboardValue.current.setPassword(input);
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className={styles.container}>
        <div className={styles.topBox}>
          <LogoName />
          <Title title="Регистрация" />
        </div>
        <div className={styles.bottomBox}>
          <Input
            label="Логин"
            placohlder="Логин"
            onchangeInput={(e) => onChangeInput(e)}
            valueInput={username}
            onFocus={() => {
              setHide(true);
              setSecondHid(false);
            }}
            // iconUrl={<SearchIcon />}
          />
          <Input
            label="Пароль"
            placohlder="Пароль"
            type="text"
            onchangeInput={(e) => secondOnchangeInput(e)}
            valueInput={password}
            onFocus={() => {
              setHide(false);
              setSecondHid(true);
            }}
            // iconUrl={<SearchIcon />}
          />

          <Button
            btnSize="large"
            btnType="primary"
            title={loading ? "Загрузка..." : "Регистрация"}
            style={{
              marginTop: "30px",
            }}
            onPress={() => {
              dataSend({ username, password });
            }}
          />
          <Button
            btnSize="large"
            btnType="outline"
            title="Вход"
            style={{
              marginTop: "30px",
            }}
            onPress={() => navigation(APP_ROUTES.WELCOME)}
          />
        </div>
        {hide && (
          <KeyboardWrapper keyboardRef={keyboard} onChange={setUserName} />
        )}
        {secondHide && (
          <SecondKeyboard keyboardRef={keyboardValue} onChange={setPassword} />
        )}
      </div>
    </>
  );
};

export default Login;
