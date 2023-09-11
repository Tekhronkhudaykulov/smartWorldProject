import React from "react";
import Carousel from "nuka-carousel";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { baseUrl } from "../../../../contants/API";

const FistPage = () => {
  const { sliderListNotToken } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  return (
    <div>
      <Carousel
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
            <img src={`${baseUrl}/${item.path}`} />
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default FistPage;
