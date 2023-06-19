import { Backdrop } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import useRootStore from "../../hook/useRootStore";
import { APP_ROUTES } from "../../router/Route";
import Title from "../Title/title";
import styles from "./confirmOrder.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";

const ConfirmOrder = () => {
  const { visiable, show, hide } = useRootStore().visiibleStore;
  const navigation = useNavigate();
  const dispatch = useDispatch<Dispatch>();

  const Submit = () => {
    // dispatch.orderSlice.orderSend({ shop_id: 1 });
    navigation(APP_ROUTES.TRANSACTION);
    hide("order");
    hide("confirmOrder");
  };
  const BackOrder = () => {
    hide("confirmOrder");
  };
  return (
    <div className={styles.container}>
      <Backdrop open={visiable.confirmOrder}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <Title title="Вы подтверждаете заказ?" fontSize="28px" />
          </div>
          <div className={styles.btnBox}>
            <Title
              onPress={() => Submit()}
              style={{ cursor: "pointer" }}
              title="Да"
              color={COLORS.grey}
              fontSize="28px"
            />
            <Title
              onPress={() => BackOrder()}
              style={{ cursor: "pointer" }}
              title="Нет"
              color={COLORS.grey}
              fontSize="28px"
            />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default observer(ConfirmOrder);
