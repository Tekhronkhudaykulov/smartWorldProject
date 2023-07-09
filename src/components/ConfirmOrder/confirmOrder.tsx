import { Backdrop } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import useRootStore from "../../hook/useRootStore";
import { APP_ROUTES } from "../../router/Route";
import Title from "../Title/title";
import styles from "./confirmOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { useReactToPrint } from "react-to-print";
import "../Check/Check.css";
import { $api } from "../../contants/API";

const ConfirmOrder = () => {
  const { visiable, show, hide } = useRootStore().visiibleStore;
  const navigation = useNavigate();
  const dispatch = useDispatch<Dispatch>();

  const componentRef = useRef<any>();
  const { getOrderList } = useSelector((state: RootState) => state.orderSlice);

  const Submit = () => {
    dispatch.orderSlice.orderSend({
      data: { shop_id: 1 },
      callback: () => {
        handlePrint();
      },
    });
    // handlePrint();
    hide("order");
    hide("confirmOrder");

    // navigation(APP_ROUTES.TRANSACTION);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const BackOrder = () => {
    hide("confirmOrder");
  };

  useEffect(() => {
    dispatch.profileSlice.getUser();
  }, []);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  return (
    <div className={styles.container}>
      <Backdrop open={visiable.confirmOrder}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <Title title="Вы подтверждаете заказ?" fontSize="28px" />
          </div>
          <div className={styles.btnBox}>
            <Title
              onPress={() => {
                Submit();
              }}
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
      <div ref={componentRef}>
        <table className="check-box">
          <div className="box-top">
            <div>
              <div>Номер заказа</div>
              <div id="id">#</div>
            </div>
            <div>
              <div>дата время</div>
              <div id="id">{getOrderList.created_at}</div>
            </div>
            <div>
              <div></div>
              <div id="id">13:00:08</div>
            </div>
          </div>
          <div className="username">{userList.username}</div>
          <div className="table-id">
            ID <strong>{userList.id}</strong>
          </div>
          <table>
            <thead>
              <tr>
                <th className="content">№</th>
                <th>Наименование товара</th>
                <th className="rotate content">ед.изм</th>
                <th className="rotate content">кол-во</th>
                <th>Цена</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {getOrderList.orderItems?.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.product.name}</td>
                    <td>шт</td>
                    <td>{item.count}</td>
                    <td>{item.price}</td>
                    <td>{item.total_price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total">
            <div className="check-total">ИТОГО по чеку</div>
            <div className="check-amount">12</div>
            <div className="check-price">
              {getOrderList.price?.toLocaleString("ru-RU")}
            </div>
          </div>
          <div className="block">
            Лимит
            <div className="block-right">
              {userList.limit_summa?.toLocaleString("ru-RU")}
            </div>
          </div>
          <div className="block">
            Выбрано товаров на сумму
            <div className="block-right">
              {getOrderList.price?.toLocaleString("ru-RU")}
            </div>
          </div>
          <div className="block">
            Остаток лимита
            <div className="block-right">90 000</div>
          </div>
        </table>
      </div>
    </div>
  );
};

export default observer(ConfirmOrder);
