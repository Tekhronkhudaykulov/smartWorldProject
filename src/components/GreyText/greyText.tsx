import React, { CSSProperties } from "react";
import styles from "./greyText.module.css";

interface Props {
  text?: string | number;
  style?: CSSProperties;
  onPress?: (e: any) => void;
  hover?: boolean;
}

const GreyText = ({ text, style, onPress, hover }: Props) => {
  return (
    <p onClick={onPress} style={{ ...style }} className={styles.text}>
      {text}
    </p>
  );
};

export default GreyText;
