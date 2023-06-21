import React, { useEffect } from "react";
import styles from "./banner.module.css";
import Carousel from "nuka-carousel";
import { ASSETS } from "../../constants/requireAssets";
import Title from "../Title/title";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { baseUrl } from "../../contants/API";

const Banner = () => {
  const disptach = useDispatch<Dispatch>();

  useEffect(() => {
    disptach.OtherSlice.getSliderLoad();
  }, []);

  const { sliderList } = useSelector((state: RootState) => state.OtherSlice);
  return (
    <div className={styles.container}>
      <Carousel
        className={styles.banner}
        autoplay
        style={{
          height: "250px",
          width: "100%",
        }}
      >
        {sliderList.map((item) => (
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
            <img className={styles.bannerImg} src={`${baseUrl}/${item.path}`} />
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
