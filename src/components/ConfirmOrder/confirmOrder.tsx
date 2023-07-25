import { Backdrop } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import useRootStore from "../../hook/useRootStore";
import { APP_ROUTES } from "../../router/Route";
import Title from "../Title/title";
import styles from "./confirmOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState, store } from "../../store";
import "../Check/Check.css";
import Check from "../Check/Check";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmOrder = () => {
  const { visiable, hide } = useRootStore().visiibleStore;
  const navigation = useNavigate();
  const dispatch = useDispatch<Dispatch>();

  const success = () => {
    toast.success("Спасибо за покупку!", {
      autoClose: 2000,
    });
  };

  const Submit = () => {
    dispatch.orderSlice.orderSend({
      data: { shop_id: 1 },
      callback: () => {
        handlePrint();
        dispatch.profileSlice.logout();
        navigation(APP_ROUTES.MAIN);
      },
    });
    hide("order");
    hide("confirmOrder");
  };

  const handlePrint = async () => {
    const ipcRenderer = window.require("electron").ipcRenderer;

    function sendCommandToWorker(content: any) {
      ipcRenderer.send("printPDF", content);
    }

    const state = store.getState();

    const getOrderList = state.orderSlice?.getOrderList;

    const userList = state.profileSlice?.userList;

    const a = renderToStaticMarkup(
      // <div className="check-box">
      //   <div className="box-top">
      //     <div>
      //       <div>Номер заказа</div>
      //       <div id="id">{getOrderList.id}</div>
      //     </div>
      //     <div>
      //       <div>дата время</div>
      //       <div id="id">{getOrderList.created_at}</div>
      //       <div id="id">{getOrderList.created_time}</div>
      //     </div>
      //   </div>
      //   <div className="username">{getOrderList.user?.full_name}</div>
      //   <div className="table-id">
      //     ID <strong>{getOrderList.user?.id}</strong>
      //   </div>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th className="content">№</th>
      //         <th>Наименование товара</th>
      //         <th className="rotate content">ед.изм</th>
      //         <th className="rotate content">кол-во</th>
      //         <th>Цена</th>
      //         <th>Сумма</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {getOrderList.orderItems?.map((item) => {
      //         return (
      //           <tr>
      //             <td>{item.id}</td>
      //             <td>{item.product.name}</td>
      //             <td>шт</td>
      //             <td>{item.count}</td>
      //             <td>{item.price}</td>
      //             <td>{item.total_price}</td>
      //           </tr>
      //         );
      //       })}
      //     </tbody>
      //   </table>
      //   <div className="total">
      //     <div className="check-total">ИТОГО</div>

      //     <div className="check-price">
      //       {getOrderList.price?.toLocaleString("ru-RU")}
      //     </div>
      //   </div>

      //   <div className="block">
      //     Остаток денежные средств
      //     <div className="block-right">
      //       {userList.balance?.toLocaleString("ru-RU")}
      //     </div>
      //   </div>
      //   <div className="block">
      //     Остаток лимита
      //     <div className="block-right">
      //       {userList.limit_summa?.toLocaleString("ru-RU")}
      //     </div>
      //   </div>
      // </div>
      <div className="check">
        <div>Номер заказа: {getOrderList.id}</div>
        <div>
          Дата/время: {getOrderList.created_at} {getOrderList.created_time}
        </div>
        <div>Клиент: {getOrderList.user?.full_name}</div>
        <hr />

        {getOrderList.orderItems?.map((item) => {
          return (
            <>
              <div> {item.product.name}</div>
              <div className="check-block">
                <div style={{ marginLeft: "1rem" }}>
                  {item.amount} x {item.price?.toLocaleString("ru-RU")}
                </div>
                <div>= {item.total_price?.toLocaleString("ru-RU")} So'm</div>
              </div>
            </>
          );
        })}
        <hr />
        <div className="check-block">
          <div>Лимит:</div>
          <div>{userList.limit_summa?.toLocaleString("ru-RU")}</div>
        </div>
        <div className="check-block">
          <div>Выб.тов.на.сумму:</div>
          <div>{getOrderList.total_price}</div>
        </div>
        <div className="check-block">
          <div>Остаток:</div>
          <div> {userList.balance?.toLocaleString("ru-RU")}</div>
        </div>
        <div style={{ textAlign: "center" }}>Спасибо за покупку!</div>
        <hr />
      </div>
    );

    sendCommandToWorker(a);
  };

  const BackOrder = () => {
    hide("confirmOrder");
  };

  useEffect(() => {
    dispatch.profileSlice.getUser();
  }, []);

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
    </div>
  );
};

export default observer(ConfirmOrder);
