import React from "react";
import { CaseLarge } from "../../assets/icons";
import Text from "../Text/text";
import styles from "./card.module.css";
interface Props {
  icon?: any;
  text?: string;
  onPress?: () => void;
  namediv?: boolean;
}

const Card: React.FC<Props> = ({ icon, text, onPress, namediv }) => {
  return (
    <div
      className={`${styles.container} ${namediv && `asad`}`}
      onClick={onPress}
    >
      <div>{icon ? icon : null}</div>
      <Text text={text} />
    </div>
  );
};

export default Card;
