import { observer } from "mobx-react-lite";
import React, { Dispatch, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CaseLarge,
  HomeIcon,
  Mobile,
  Person,
  VideoCall,
  Warn,
} from "../../../../assets/icons";
import Basket from "../../../../components/Basket/basket";
import Button from "../../../../components/Button/button";
import Card from "../../../../components/Card/card";
import GreyText from "../../../../components/GreyText/greyText";
import IconComp from "../../../../components/IconComp/iconComp";
import InfoComp from "../../../../components/InfoComp/infoComp";
import Text from "../../../../components/Text/text";
import Title from "../../../../components/Title/title";
import { COLORS } from "../../../../constants/colors";
import { APP_ROUTES } from "../../../../router/Route";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Check from "../../../../components/Check/Check";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogoutProject } from "../../../../hook/useFaceIdLogin";

const MainView = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.profileSlice.getUser();
    dispatch.basketSlice.getAddCard();
  }, []);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  const { priceList } = useSelector((state: RootState) => state.basketSlice);

  const isLoading = useSelector(
    (state: RootState) => state.loading.models.profileSlice
  );

  const success = () => {
    toast.success("Спасибо за покупку!", {
      autoClose: 2000,
    });
  };

  const logout = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.WELCOME);
    success();
  };

  let date = new Date();

  LogoutProject();
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <p style={{ fontSize: "30px" }}>Loading...</p>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <Title title={userList.full_name || ""} fontSize="28px" />

              <GreyText text={date.toString()} style={{ marginTop: "10px" }} />
            </div>
            <IconComp
              iconType="primary"
              onPress={() => logout()}
              icon={<ArrowRight />}
            />
          </div>
          <div className={styles.info}>
            <InfoComp
              title={`${priceList.balance?.toLocaleString("ru-RU")} сум`}
              text="Остаток денежных средств"
              titleColor={COLORS.green}
            />
            <InfoComp
              title={`${priceList.limit_summa?.toLocaleString("ru-RU")}` || ""}
              text="Лимит на месяц"
              titleColor={COLORS.orange}
            />
            <InfoComp
              title={`${priceList.limit_summa?.toLocaleString("ru-RU")}` || ""}
              text="Остаток по лимиту"
              titleColor={COLORS.crimson}
            />
            <InfoComp
              title="10 минут"
              text="Остаток по видеозвонкам"
              titleColor={COLORS.blue}
            />
            <InfoComp
              title="10 минут"
              text="Остаток по звонкам"
              titleColor={COLORS.darkBlue}
            />
          </div>
          <div className={styles.category}>
            <Card
              icon={<CaseLarge />}
              text="Магазин"
              onPress={() => navigation(APP_ROUTES.MARKET)}
            />

            <Card icon={<Mobile />} text="Аудиозвонки" />

            <Card icon={<VideoCall />} text="Видеозвонки" />
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://ombudsman.uz/uz"
              target="_blank"
            >
              <Card icon={<Person />} text="Омбудсман" />
            </a>
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://advice.uz/uz"
              target="_blank"
            >
              <Card icon={<Warn />} text="Мадад" />
            </a>
          </div>
          <div className={styles.footer}>
            <Button
              style={{ width: "350px" }}
              onPress={() => navigation(APP_ROUTES.TRANSACTION)}
              btnSize="large"
              btnType="primary"
              title="История транзакций"
            />
          </div>
          {/* <Check /> */}
        </div>
      )}
    </>
  );
};

export default observer(MainView);
