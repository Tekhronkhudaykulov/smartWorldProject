import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./order.module.css";
import useRootStore from "../../hook/useRootStore";
import Title from "../Title/title";
import { observer } from "mobx-react-lite";
import { Backdrop } from "@mui/material";
import InfoComp from "../InfoComp/infoComp";
import ItemComp from "../ItemComp/itemComp";
import { COLORS } from "../../constants/colors";
import { ArrowRight, Cash, Exit, Logout } from "../../assets/icons";
import { ASSETS } from "../../constants/requireAssets";
import OrderList from "../OrderList/orderList";
import Button from "../Button/button";
import SelectComp from "../SelectComp/selectComp";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import IconComp from "../IconComp/iconComp";
import { useNavigate, useNavigation } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";

const Order = () => {
  const { visiable, show, hide } = useRootStore().visiibleStore;
  const BackBasket = () => {
    show("basket");
    hide("order");
  };

  const { priceList } = useSelector((state: RootState) => state.basketSlice);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  const navigation = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigation(APP_ROUTES.WELCOME);
  };
  return (
    <div
      className={styles.container}
      style={{ display: visiable.order ? "flex" : "none" }}
    >
      <Backdrop
        open={visiable.order}
        // onClick={() => hide("order")}
      >
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.leftBox}>
              <Title title="Оформление заказа" fontSize="24px" />
              <div className={styles.nameBox}>
                <Title
                  title="Ф.И.О.:"
                  fontSize="16px"
                  style={{ fontFamily: "FuturaPTLight", marginRight: "10px" }}
                />
                <Title title={userList.full_name || ""} fontSize="16px" />
              </div>
              <div className={styles.center}>
                <Title title="Адрес доставки" fontSize="15px" />
                <SelectComp />
              </div>
            </div>

            <div className={styles.right} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  color: "#fff",
                  fontSize: "32px",
                }}
              >
                Реклама
              </div>
              <img src={ASSETS.bannner} alt="" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "15px 30px",
            }}
          >
            <ItemComp
              icon={<Cash />}
              title="Остаток денежных средств:"
              text={`${userList.balance?.toLocaleString("ru-RU")} сум` || ""}
              textColor={COLORS.orange}
            />
            <ItemComp
              icon={<Cash />}
              title="Остаток по лимиту:"
              text={
                `${userList.limit_summa?.toLocaleString("ru-RU")} сум` || ""
              }
              textColor={COLORS.orange}
            />
          </div>
          <div className={styles.listBox}>
            <OrderList />
            <div className={styles.total}>
              <Title
                title="Итого:"
                fontSize="20px"
                style={{ marginRight: "10px" }}
              />
              <Title
                title={`${priceList.total_price?.toLocaleString("ru-RU")} сум`}
                fontSize="20px"
                color={COLORS.orange}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.btnBox}>
              {/* <IconComp
                iconType="primary"
                icon={<ArrowRight />}
                text="Выйти из системы"
              /> */}

              <Button
                btnSize="large"
                btnType="outline"
                style={{
                  marginRight: "20px",
                  width: "350px",
                  marginLeft: "auto",
                }}
                title="Выйти из системы"
                onPress={() => logout()}
              />
              <Button
                style={{
                  marginRight: "20px",
                  width: "350px",
                  marginLeft: "auto",
                }}
                btnSize="large"
                btnType="outline"
                title="В общий магазин"
                onPress={() => hide("order")}
              />
              <Button
                style={{ marginRight: "20px", width: "350px" }}
                btnSize="large"
                btnType="outline"
                title="Назад в корзину"
                onPress={() => BackBasket()}
              />
              <Button
                style={{ width: "350px" }}
                btnSize="large"
                btnType="primary"
                title="Заказать"
                onPress={() => show("confirmOrder")}
              />
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default observer(Order);
