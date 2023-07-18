import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button/button";
import LogoName from "../../../components/LogoName/logoName";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./welcome.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { baseUrl } from "../../../contants/API";

const WelcomeScreen = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.OtherSlice.getSliderNotToken();

    const listener = () => {
      const token = localStorage.getItem("@token");
      if (token) {
        navigation(APP_ROUTES.MAIN);
      }
    };

    window.addEventListener("storage", listener);

    return () => window.removeEventListener("storage", listener);
  }, []);

  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

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
      <div className={styles.logoBox}>
        <LogoName fontSize="170px" />
      </div>
      <div className={styles.bannerBox}>
        <Button
          btnSize="large"
          btnType="primary"
          title="Регистрация"
          style={{
            marginTop: "30px",
          }}
          onPress={() => navigation(APP_ROUTES.LOGIN)}
        />

        <div className={styles.containerSlider}>
          <Carousel
            className={styles.banner}
            autoplay
            style={{
              height: "250px",
              width: "100%",
            }}
          >
            {sliderListNotToken.map((item) => (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "32px",
                    color: "#fff",
                  }}
                ></div>
                <img
                  className={styles.bannerImg}
                  src={`${baseUrl}/${item.path}`}
                />
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
