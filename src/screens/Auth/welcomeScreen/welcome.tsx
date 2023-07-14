import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../../components/Banner/banner";
import Button from "../../../components/Button/button";
import LogoName from "../../../components/LogoName/logoName";
import Slider from "../../../components/Slider/slider";
import { APP_ROUTES } from "../../../router/Route";
import styles from "./welcome.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { baseUrl } from "../../../contants/API";

const WelcomeScreen = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem("@token");
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.OtherSlice.getSliderNotToken();
  }, []);

  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  useEffect(() => {
    if (token) {
      navigation(APP_ROUTES.MAIN);
      // window.location.reload(true);
      window.location.reload();
    }
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <LogoName fontSize="170px" />
      </div>
      <div className={styles.bannerBox}>
        <Slider />

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
