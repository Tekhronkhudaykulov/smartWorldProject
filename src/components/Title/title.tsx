import React, { CSSProperties } from "react";
import styles from "./title.module.css";
interface Props {
  title: string | number;
  fontSize?: string;
  color?: string;
  style?: CSSProperties;
  onPress?: () => void;
}

const Title: React.FC<Props> = ({ title, fontSize, color, style, onPress }) => {
  return (
    <h1
      onClick={onPress}
      style={{ fontSize: fontSize, color: color, ...style }}
      className={styles.title}
    >
      {title}
    </h1>
  );
};

export default Title;
