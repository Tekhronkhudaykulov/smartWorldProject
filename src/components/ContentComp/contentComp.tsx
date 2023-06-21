import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, HomeIcon } from "../../assets/icons";
import { APP_ROUTES } from "../../router/Route";
import Banner from "../Banner/banner";
import IconComp from "../IconComp/iconComp";
import styles from "./contentComp.module.css";

interface Props {
  iconPress?: () => void;
  isHas: boolean;
}

const ContentComp: React.FC<Props> = ({ iconPress, isHas }) => {
  const navigation = useNavigate();
  return (
    <div className={styles.header}>
      <div>
        <IconComp
          iconType="primary"
          onPress={() => navigation(APP_ROUTES.MAIN)}
          icon={<HomeIcon />}
          text="Главная"
        />
        {isHas && (
          <IconComp
            style={{ marginTop: "10px" }}
            iconType="primary"
            onPress={() => navigation(APP_ROUTES.WELCOME)}
            icon={<ArrowRight />}
            text="Выйти из системы"
          />
        )}
      </div>
      <Banner />
    </div>
  );
};

export default ContentComp;
