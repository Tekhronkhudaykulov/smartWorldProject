import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/button";
import LogoName from "../../../components/LogoName/logoName";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./welcome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { baseUrl } from "../../../contants/API";
import {
  LogoutForFirstPage,
  LogoutProject,
  useFaceIdLogin,
} from "../../../hook/useFaceIdLogin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "nuka-carousel/lib/carousel";

const WelcomeScreen = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch.OtherSlice.getSliderNotToken();
  }, []);

  const { toast } = useSelector((state: RootState) => state.orderSlice);

  const { logout } = useSelector((state: RootState) => state.profileSlice);

  useEffect(() => {
    setTimeout(() => {
      dispatch.profileSlice.setLogout(false);
    }, 5000);
  }, []);

  LogoutForFirstPage();

  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  return (
    <>
      {logout && (
        <div
          className={styles.popup}
          onClick={() => dispatch.profileSlice.setLogout(false)}
        >
          <div className={styles.modal}>
            <p>Досвидание !</p>
            <p>Ждем вас снова!</p>
          </div>
        </div>
      )}

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
            <Carousel autoplay={true}>
              {sliderListNotToken.map((item) => (
                <>
                  <img
                    onClick={() => navigation(APP_ROUTES.BANNER)}
                    style={{ height: "100vh" }}
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
