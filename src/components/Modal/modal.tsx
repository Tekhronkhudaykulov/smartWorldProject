import { Backdrop } from "@mui/material";
import Title from "../Title/title";
import Button from "../Button/button";
import { Exit } from "../../assets/icons";
import styles from "./modal.module.css";

const Modal = () => {
  return (
    <div className={styles.container}>
      <Backdrop open={false}>
        <div className={styles.content} style={{ padding: "2rem 1rem" }}>
          <div className={styles.titleBox}>
            <Title title="Оцените работу продавца" fontSize="28px" />
          </div>
          <Button
            style={{ width: "350px", marginTop: "2rem", minHeight: "55px" }}
            btnSize="large"
            btnType="primary"
            title="Оценить"
          />
          <Button
            style={{ width: "350px", marginTop: "0", minHeight: "55px" }}
            btnSize="large"
            btnType="outline"
            title="Личный кабинет"
          />
          <div
            style={{
              border: "1px solid #A1A1A1",
              width: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "12px",
              borderRadius: "8px",
              marginTop: "5rem",
              cursor: "pointer",
            }}
          >
            <Button
              style={{
                border: "none",
                width: "unset",
                color: "#A1A1A1",
                minHeight: "55px",
              }}
              btnSize="large"
              btnType="outline"
              title="Выйти из системы"
            />
            <Exit />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Modal;
