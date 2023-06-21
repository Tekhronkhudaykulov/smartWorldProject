import React, { useEffect } from "react";
import { COLORS } from "../../constants/colors";
import Text from "../Text/text";
import Title from "../Title/title";
import styles from "./historyList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";

const HistoryList = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.orderSlice.getOrderLoad();
  }, []);

  const { ordersList } = useSelector((state: RootState) => state.orderSlice);
  console.log(ordersList);

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={styles.top}>
          <Title fontSize="17px" title="Остаток на начало месяца:" />
        </div>
        <div className={styles.top}>
          <Title fontSize="17px" title="500.000 сум" color={COLORS.orange} />
        </div>
      </div>
      <div
        className={styles.listBox}
        style={{ backgroundColor: COLORS.orange }}
      >
        <div className={styles.list}>
          <Text text="Дата" style={{ color: COLORS.white }} />
        </div>
        <div className={styles.list}>
          <Text text="Операция" style={{ color: COLORS.white }} />
        </div>
        <div className={styles.list}>
          <Text text="Приход" style={{ color: COLORS.white }} />
        </div>
        <div className={styles.list}>
          <Text text="Расход" style={{ color: COLORS.white }} />
        </div>
      </div>
      {ordersList.map((item) => (
        <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
          <div className={styles.list}>
            <Text text={item.created_at} />
          </div>
          <div className={styles.list}>
            <Text text={item?.payment_type} />
          </div>
          <div className={styles.list}>
            <Text text={`${item.income} сум`} />
          </div>
          <div className={styles.list}>
            <Text text={`${item.outcome} сум`} />
          </div>
        </div>
      ))}
      <div
        className={styles.listBox}
        style={{ backgroundColor: COLORS.orange }}
      >
        <div className={styles.list}>
          <Text text="Всего:" style={{ color: COLORS.white }} />
        </div>
        <div className={styles.list}>
          {/* <Text text='Операция' style={{ color: COLORS.white }} /> */}
        </div>
        <div className={styles.list}>
          <Text text="60.000 сум" style={{ color: COLORS.white }} />
        </div>
        <div className={styles.list}>
          <Text text="14.000 сум" style={{ color: COLORS.white }} />
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.top}>
          <Title fontSize="17px" title="Остаток на начало месяца:" />
        </div>
        <div className={styles.top}>
          <Title fontSize="17px" title="500.000 сум" color={COLORS.orange} />
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
