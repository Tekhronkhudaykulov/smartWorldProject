import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import { useNavigate, useNavigation } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogoutSystem = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigate();
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
  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 15000);
  }, []);
};
