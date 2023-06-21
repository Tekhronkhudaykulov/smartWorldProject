import { useNavigate } from "react-router-dom";
import { Exit, HomeIcon } from "../../../../assets/icons";
import HistoryList from "../../../../components/HistoryList/historyList";
import IconComp from "../../../../components/IconComp/iconComp";
import Title from "../../../../components/Title/title";
import { APP_ROUTES } from "../../../../router/Route";
import styles from "./transaction.module.css";
import { Backdrop } from "@mui/material";
import Button from "../../../../components/Button/button";
import Modal from "../../../../components/Modal/modal";
import useRootStore from "../../../../hook/useRootStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const Transaction = () => {
  const navigation = useNavigate();

  const isLoading = useSelector(
    (state: RootState) => state.loading.models.orderSlice
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconComp
          onPress={() => navigation(APP_ROUTES.MAIN)}
          icon={<HomeIcon />}
          iconType={"primary"}
          text="Главная"
        />
      </div>
      <div className={styles.lists}>
        <Title fontSize="22px" title="История транзакций" />
        <HistoryList />
      </div>
    </div>
  );
};

export default Transaction;

{
  /* <div className={styles.container}>
        <Backdrop open={false}>
          <div className={styles.content}>
            <div className={styles.titleBox}>
              <Title title="Спасибо за покупку!" fontSize="28px" />
            </div>
          </div>
        </Backdrop>
      </div> */
}
{
  /* <Modal /> */
}
