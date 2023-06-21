import React from "react";
import GreyText from "../GreyText/greyText";
import styles from "./selectComp.module.css";

const SelectComp = () => {
  return (
    <div className={styles.container}>
      <select disabled className={styles.selectBox}>
        <option value="">
          <GreyText text="Сезо 1" />
        </option>
        <option value="">Сезо 1</option>
      </select>
    </div>
  );
};

export default SelectComp;
