import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, HomeIcon } from "../../assets/icons";
import { APP_ROUTES } from "../../router/Route";
import Banner from "../Banner/banner";
import IconComp from "../IconComp/iconComp";
import styles from "./contentComp.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  iconPress?: () => void;
  isHas: boolean;
}

const ContentComp: React.FC<Props> = ({ iconPress, isHas }) => {
  const navigation = useNavigate();

  const dispatch = useDispatch<Dispatch>();

  const success = () => {
    toast.success("Спасибо за покупку!", {
      autoClose: 2000,
    });
  };

  const logout = () => {
    localStorage.clear();
    dispatch.profileSlice.logout();
    navigation(APP_ROUTES.WELCOME);
    success();
  };

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
            onPress={() => logout()}
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
