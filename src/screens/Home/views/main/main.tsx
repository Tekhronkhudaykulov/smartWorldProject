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

const MainView = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.profileSlice.getUser();
  }, []);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Title title={userList.full_name || ""} fontSize="28px" />
            <GreyText text="Понедельник, 2 февраля 2023" />
          </div>
          <IconComp
            iconType="primary"
            onPress={() => navigation(APP_ROUTES.WELCOME)}
            icon={<ArrowRight />}
          />
        </div>
        <div className={styles.info}>
          <InfoComp
            title={`${userList.balance?.toLocaleString("ru-RU")} сум`}
            text="Остаток денежных средств"
            titleColor={COLORS.green}
          />
          <InfoComp
            title={`${userList.limit_summa?.toLocaleString("ru-RU")} сум`}
            text="Лимит на месяц"
            titleColor={COLORS.orange}
          />
          <InfoComp
            title={`${userList.limit_summa?.toLocaleString("ru-RU")} сум`}
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
          <Card icon={<Person />} text="Омбудсман" />
          <Card icon={<Warn />} text="Мадад" />
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
      </div>
    </>
  );
};

export default observer(MainView);
