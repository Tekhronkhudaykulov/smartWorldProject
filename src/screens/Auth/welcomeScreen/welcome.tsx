import React from "react";

import Button from "../../../components/Button/button";
import LogoName from "../../../components/LogoName/logoName";
import {APP_ROUTES} from "../../../router/Route";
import styles from "./welcome.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {baseUrl} from "../../../contants/API";
import {useFaceIdLogin} from "../../../hook/useFaceIdLogin";
import {useNavigate} from "react-router-dom";

const WelcomeScreen = () => {
    const navigation = useNavigate();


    useFaceIdLogin();

    const {sliderListNotToken} = useSelector(
        (state: RootState) => state.OtherSlice
    );


    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <LogoName fontSize="170px"/>
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
