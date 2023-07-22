import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/button";
import LogoName from "../../../components/LogoName/logoName";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./welcome.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { baseUrl } from "../../../contants/API";
import { useFaceIdLogin } from "../../../hook/useFaceIdLogin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WelcomeScreen = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch.OtherSlice.getSliderNotToken();
  }, []);

  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  const { toast } = useSelector((state: RootState) => state.orderSlice);

  return (
    <>
      {toast && <ToastContainer position="top-center" />}
      <div>
        <ToastContainer position="top-center" />
      </div>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <LogoName fontSize="170px" />
        </div>
        <div className={styles.bannerBox}>
          <Button
            btnSize="large"
            btnType="outline"
            title="Вход"
            style={{
              marginTop: "-50px",
            }}
            onPress={() => navigation(APP_ROUTES.FACE_ID)}
          />
          <Button
            btnSize="large"
            btnType="primary"
            title="Регистрация"
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
    </>
  );
};

export default WelcomeScreen;
