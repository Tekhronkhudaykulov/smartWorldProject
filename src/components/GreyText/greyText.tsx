import React, { CSSProperties } from 'react'
import styles from "./greyText.module.css"
interface Props {
  text?: string | number;
  style?: CSSProperties;
  onPress?: () => void;
  hover?: boolean;
}

const GreyText: React.FC<Props> = ({
  text,
  style,
  onPress,
  hover
}) => {
  return (
    <p
      onClick={onPress}
      style={{ ...style }}
      className={styles.text}
    >{text}</p>
  )
}

export default GreyText
