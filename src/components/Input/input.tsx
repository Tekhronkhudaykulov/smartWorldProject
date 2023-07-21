import React, { CSSProperties } from "react";
import Title from "../Title/title";
import styles from "./input.module.css";
interface Props {
  label?: string;
  placohlder?: string;
  iconUrl?: any;
  style?: CSSProperties;
  type?: any;
  onchangeInput?: (e: any) => void;
  valueInput?: any;
}

const Input: React.FC<Props> = ({
  label,
  placohlder,
  iconUrl,
  style,
  type = "text",
  valueInput,
  onchangeInput,
}) => {
  return (
    <div className={styles.container}>
      {label ? <h4 className={styles.label}>{label}</h4> : null}
      <div className={styles.inputBox} style={{ ...style }}>
        {iconUrl ? <div className={styles.icon}>{iconUrl}</div> : null}
        <input
          className={styles.input}
          type={type}
          placeholder={placohlder}
          onChange={onchangeInput}
          value={valueInput}
        />
      </div>
    </div>
  );
};

export default Input;
