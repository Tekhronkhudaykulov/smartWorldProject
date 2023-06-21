import React from "react";
import { CaseSmall } from "../../assets/icons";
import { COLORS } from "../../constants/colors";
import { ASSETS } from "../../constants/requireAssets";
import Button from "../Button/button";
import GreyText from "../GreyText/greyText";
import IconComp from "../IconComp/iconComp";
import Text from "../Text/text";
import Title from "../Title/title";
import styles from "./productItem.module.css";
import { baseUrl } from "../../contants/API";

interface Props {
  imgUrl?: string;
  heart?: any;
  name: string;
  price: number | string;
  discount?: number | string;
  count?: any;
  onHeartPress?: () => void;
  onBasketPress?: () => void;
  onBuyPress?: () => void;
}

const ProductItem = ({
  imgUrl,
  heart,
  name,
  price,
  discount,
  count,
  onHeartPress,
  onBasketPress,
  onBuyPress,
}: Props) => {
  console.log({ count });
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={`${baseUrl}/${imgUrl}`} alt="" />
        <div className={styles.heartBox} onClick={onHeartPress}>
          {heart}
        </div>
      </div>
      <div className={styles.nameBox}>
        <Text text={name} />
      </div>
      <div className={styles.priceBox}>
        <Title color={COLORS.orange} title={price} fontSize="14px" />
        <GreyText
          style={{ fontSize: "13px", textDecoration: "line-through" }}
          text={discount}
        />
      </div>
      <div className={styles.btnBox}>
        <Button
          btnSize="small"
          btnType="primary"
          title="В корзину"
          onPress={onBuyPress}
        />
        <IconComp
          iconType="primary"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            color: COLORS.white,
          }}
          icon={count}
          onPress={onBasketPress}
        />
      </div>
    </div>
  );
};

export default ProductItem;
