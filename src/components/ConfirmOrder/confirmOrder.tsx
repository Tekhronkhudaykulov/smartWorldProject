import {Backdrop} from "@mui/material";
import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {COLORS} from "../../constants/colors";
import useRootStore from "../../hook/useRootStore";
import {APP_ROUTES} from "../../router/Route";
import Title from "../Title/title";
import styles from "./confirmOrder.module.css";
import {useDispatch} from "react-redux";
import {Dispatch} from "../../store";
import "../Check/Check.css";
import Check from "../Check/Check";

const ConfirmOrder = () => {
    const {visiable, hide} = useRootStore().visiibleStore;
    const navigation = useNavigate();
    const dispatch = useDispatch<Dispatch>();

    const Submit = () => {
        dispatch.orderSlice.orderSend({
            data: {shop_id: 1},
            callback: () => {
                handlePrint();
                localStorage.clear();
                dispatch.profileSlice.logout();
                navigation(APP_ROUTES.MAIN);
            },
        });
        hide("order");
        hide("confirmOrder");
    };

    const handlePrint = () => {
        const ipcRenderer = window.require("electron").ipcRenderer;

        function sendCommandToWorker(content: any) {
            ipcRenderer.send("printPDF", content);
        }

        const check = document.getElementById('check');
        sendCommandToWorker(`${check}`);
    };


    const BackOrder = () => {
        hide("confirmOrder");
    };

    useEffect(() => {
        dispatch.profileSlice.getUser();
    }, []);


    return (
        <div className={styles.container}>
            <Backdrop open={visiable.confirmOrder}>
                <div className={styles.content}>
                    <div className={styles.titleBox}>
                        <Title title="Вы подтверждаете заказ?" fontSize="28px"/>
                    </div>
                    <div className={styles.btnBox}>
                        <Title
                            onPress={() => {
                                Submit();
                            }}
                            style={{cursor: "pointer"}}
                            title="Да"
                            color={COLORS.grey}
                            fontSize="28px"
                        />
                        <Title
                            onPress={() => BackOrder()}
                            style={{cursor: "pointer"}}
                            title="Нет"
                            color={COLORS.grey}
                            fontSize="28px"
                        />
                    </div>
                    <Check/>
                </div>
            </Backdrop>
        </div>
    );
};

export default observer(ConfirmOrder);
