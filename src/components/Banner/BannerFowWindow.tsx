import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import Carousel from "nuka-carousel";
import { baseUrl } from "../../contants/API";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

  // const token = localStorage.getItem("@firstToken");

  // useEffect(() => {
  //   if (!token) {
  //     navigation(APP_ROUTES.FIRSTAUTH);
  //   }
  // }, []);

  return (
    <Swiper
      slidesPerView={1}
      loopFillGroupWithBlank={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".main-banner__slider-prevbutton",
        nextEl: ".main-banner__slider-nextbutton",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{
        height: "100vh",
      }}
    >
      {sliderListNotToken.map((item, key) => (
        <>
          <SwiperSlide>
            <div key={key}>
              <img
                onClick={() => navigation(APP_ROUTES.BANNER)}
                style={{
                  height: "100vh",
                  width: "100vw",
                  objectFit: "cover",
                  marginTop: "-100px",
                }}
                src={`${baseUrl}/${item.path}`}
              />
              <div
                style={{
                  // position: absolute;
                  // bottom: 0px;
                  // background: red;
                  // width: 100%;
                  // padding: 0 20px;
                  // min-height: 100px;
                  // display: flex;
                  // align-items: center;
                  // justify-content: center;
                  position: "absolute",
                  bottom: "0px",
                  background: "red",
                  width: "100%",
                  padding: "0 20px",
                  minHeight: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.title === null ? (
                  <p
                    style={{
                      fontSize: "30px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Smart Dunyodan tez kunda yangiliklarni kuting !
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: "30px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {item.title}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
    // <Carousel autoplay={true} autoplayInterval={3000} style={{}}>

    // </Carousel>
  );
};

export default BannerForWindow;
