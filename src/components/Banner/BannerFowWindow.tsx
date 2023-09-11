import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import Carousel from "nuka-carousel";
import { baseUrl } from "../../contants/API";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import img from "../../assets/images/banner.png";

const BannerForWindow = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.OtherSlice.getSliderNotToken();
  }, []);

  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  const navigation = useNavigate();

  const token = localStorage.getItem("@firstToken");

  useEffect(() => {
    if (!token) {
      navigation(APP_ROUTES.FIRSTAUTH);
    }
  }, []);

  return (
    <Carousel autoplay={true} style={{}}>
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
  );
};

export default BannerForWindow;
