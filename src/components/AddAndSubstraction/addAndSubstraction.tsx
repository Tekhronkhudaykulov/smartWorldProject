import { observer } from "mobx-react-lite";
import React, { CSSProperties, useEffect, useState } from "react";
import useRootStore from "../../hook/useRootStore";
import styles from "./addAbdSubstraction.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
interface Props {
  addBtn?: () => void;
  subtractionBtn?: () => void;
  count?: string | number;
  style?: CSSProperties;
}

const AddAndSubstraction: React.FC<Props> = ({
  addBtn,
  subtractionBtn,
  count,
  style,
}) => {
  const { productCount, incrementCount, decrementCount } =
    useRootStore().productStore;
  const [counts, setCounts] = useState(1);
  const Counter = () => {
    if (counts > 1) {
      setCounts(counts - 1);
    } else {
      setCounts(1);
    }
  };

  return (
    <div className={styles.container} style={{ ...style }}>
      <button className={styles.minus} onClick={subtractionBtn}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.plus} onClick={addBtn}>
        +
      </button>
    </div>
  );
};

export default observer(AddAndSubstraction);
