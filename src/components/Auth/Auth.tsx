import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import LogoName from "../LogoName/logoName";
import styles from "./auth.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../Input/input";
import Button from "../Button/button";
import { APP_ROUTES } from "../../router/Route";
import KeyboardWrapper from "../Keyboard/Keyboard";
import SecondKeyboard from "../Keyboard/SecondKeyboard";
import FirstKeyboard from "../Keyboard/FisrtKeyboard";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";

const Auth = () => {
  const keyboard = useRef<any>(null);
  const keyboardFisrtValue = useRef<any>(null);
  const navigation = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ip, setIp] = useState("");

  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [firstHide, setFirstHide] = useState(false);

  const [secondHide, setSecondHid] = useState(false);

  const keyboardValue = useRef<any>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setUserName(input);
    setPassword(input);
    setIp(input);

    keyboard.current.setUserName(input);
    keyboardValue.current.setPassword(input);
  };

  const secondOnchangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setPassword(input);
    keyboardValue.current.setPassword(input);
  };

  const dispatch = useDispatch<Dispatch>();

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <LogoName />
      </div>
      <div className={styles.bottomBox}>
        <Input
          label="IP-Adress"
          placohlder="IP-Adress"
          onchangeInput={(e) => onChangeInput(e)}
          valueInput={ip}
          onFocus={() => {
            setFirstHide(true);
            setSecondHid(false);
            setHide(false);
          }}
          // iconUrl={<SearchIcon />}
        />
        <Input
          label="Логин"
          placohlder="Логин"
          onchangeInput={(e) => onChangeInput(e)}
          valueInput={username}
          onFocus={() => {
            setHide(true);
            setSecondHid(false);
            setFirstHide(false);
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
            setFirstHide(false);
          }}
          // iconUrl={<SearchIcon />}
        />

        <Button
          btnSize="large"
          btnType="outline"
          title="Вход"
          style={{
            marginTop: "30px",
          }}
          onPress={() => {
            dispatch.authSlice.clickFirstMoment({
              ip,
              username,
              password,
            });
            navigation(APP_ROUTES.LOGIN);
          }}
        />
      </div>
      {firstHide && (
        <FirstKeyboard keyboardRef={keyboardFisrtValue} onChange={setIp} />
      )}
      {hide && (
        <KeyboardWrapper keyboardRef={keyboard} onChange={setUserName} />
      )}
      {secondHide && (
        <SecondKeyboard keyboardRef={keyboardValue} onChange={setPassword} />
      )}
    </div>
  );
};

export default Auth;
