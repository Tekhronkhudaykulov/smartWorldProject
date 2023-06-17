import React, { useEffect, useState } from "react";
import { DelateIcon } from "../../assets/icons";
import { ASSETS } from "../../constants/requireAssets";
import useRootStore from "../../hook/useRootStore";
import AddAndSubstraction from "../AddAndSubstraction/addAndSubstraction";
import GreyText from "../GreyText/greyText";
import IconComp from "../IconComp/iconComp";
import Text from "../Text/text";
import Title from "../Title/title";
import styles from "./orderList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";

const OrderList = () => {
  const products = useRootStore().productStore;
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.basketSlice.getAddCard();
  }, []);

  const { cardList } = useSelector((state: RootState) => state.basketSlice);

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <GreyText text="Товары" style={{ flex: 4 }} />
        <GreyText text="Кол-во" style={{ flex: 1 }} />
        <GreyText text="Цена" style={{ flex: 1 }} />
        {/* <GreyText text="Цена" style={{ flex: 1 }} /> */}
      </div>
      {cardList.map((e, index) => {
        return (
          <div className={styles.listBox}>
            <div className={styles.nameBox}>
              <Text text={e.product.name} />
            </div>
            <div className={styles.same}>
              <Text text={e.amount} style={{ marginLeft: "15px" }} />
            </div>
            <div className={styles.same}>
              <Title title={`${e.price} sum`} fontSize="15px" />
            </div>
            {/* <div className={styles.same}>
              <Title title={`${e.discount} sum`} fontSize="15px" />
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
