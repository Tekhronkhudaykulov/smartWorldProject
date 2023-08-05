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
// import Check from "../../../../components/Check/Check";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogoutProject } from "../../../../hook/useFaceIdLogin";

const MainView = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.profileSlice.getUser();
    dispatch.basketSlice.getAddCard();
    dispatch.OtherSlice.getShops();
  }, []);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  const { priceList } = useSelector((state: RootState) => state.basketSlice);

  const isLoading = useSelector(
    (state: RootState) => state.loading.models.profileSlice
  );

  // const success = () => {
  //   toast.success("Спасибо за покупку!", {
  //     autoClose: 2000,
  //   });
  // };

  const logout = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.WELCOME);
    // success();
  };

  let date = new Date();

  const { toast } = useSelector((state: RootState) => state.orderSlice);

  LogoutProject();

  const { shopList } = useSelector((state: RootState) => state.OtherSlice);

  return (
    <>
      {toast && (
        <div
          className={styles.popup}
          onClick={() => dispatch.orderSlice.isResultFunction(false)}
        >
          <div className={styles.modal}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="200px"
              height="200px"
              viewBox="0 0 14 14"
              role="img"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="green"
                d="M13 4.1974q0 .3097-.21677.5265L7.17806 10.329l-1.0529 1.0529q-.21677.2168-.52645.2168-.30968 0-.52645-.2168L4.01935 10.329 1.21677 7.5264Q1 7.3097 1 7t.21677-.5265l1.05291-1.0529q.21677-.2167.52645-.2167.30968 0 .52645.2167l2.27613 2.2839 5.07871-5.0864q.21677-.2168.52645-.2168.30968 0 .52645.2168l1.05291 1.0529Q13 3.8877 13 4.1974z"
              />
            </svg> */}
            <p>Спасибо за покупку !</p>
            <p>Ждем вас снова!</p>
          </div>
        </div>
      )}
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
            {shopList.map((item) => (
              <Card
                icon={<CaseLarge />}
                text={item.name}
                onPress={() => navigation("/market/" + item.id)}
              />
            ))}
            <Card icon={<Mobile />} namediv={true} text="Аудиозвонки" />
            <Card icon={<VideoCall />} namediv={true} text="Видеозвонки" />
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
