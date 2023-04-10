import React from 'react'
import Modal from "react-modal"
import styles from "./order.module.css"
import useRootStore from '../../hook/useRootStore'
import Title from '../Title/title'
import { observer } from 'mobx-react-lite'
import { Backdrop } from '@mui/material'
import InfoComp from '../InfoComp/infoComp'
import ItemComp from '../ItemComp/itemComp'
import { COLORS } from '../../constants/colors'
import { Cash } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import OrderList from '../OrderList/orderList'
import Button from '../Button/button'
import SelectComp from '../SelectComp/selectComp'

const Order = () => {
    const { visiable, show, hide } = useRootStore().visiibleStore
    const BackBasket = () => {
        show("basket")
        hide("order")
    }
    return (
        <div className={styles.container} style={{ display: visiable.order ? "flex" : "none" }}>
            <Backdrop
                open={visiable.order}
            // onClick={() => hide("order")}
            >
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.leftBox}>
                            <Title title='Оформление заказа' fontSize='24px' />
                            <div className={styles.nameBox}>
                                <Title title='Ф.И.О.:' fontSize='16px' style={{ fontFamily: "FuturaPTLight", marginRight: '10px' }} />
                                <Title title='Ройтман Рафаэль Евгеньевич' fontSize='16px' />
                            </div>
                            <ItemComp
                                icon={<Cash />}
                                title='Остаток денежных средств:'
                                text='500.000 сум'
                                textColor={COLORS.orange}
                            />
                        </div>
                        <div className={styles.center}>
                            <Title title='Адрес доставки' fontSize='15px' />
                            <SelectComp />
                        </div>
                        <div className={styles.right}>
                            <img src={ASSETS.bannner} alt="" />
                        </div>
                    </div>
                    <div className={styles.listBox}>
                        <OrderList />
                        <div className={styles.total}>
                            <Title title='Итого:' fontSize='20px' style={{ marginRight: '10px' }} />
                            <Title title="300.000 сум" fontSize='20px' color={COLORS.orange} />
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.btnBox}>
                            <Button
                                style={{ marginRight: "20px", width: "350px" }}
                                btnSize='large'
                                btnType='outline'
                                title='Назад в корзину'
                                onPress={() => BackBasket()}
                            />
                            <Button
                                style={{ width: "350px" }}
                                btnSize='large'
                                btnType='primary'
                                title='Заказать'
                                onPress={() => show("confirmOrder")}
                            />
                        </div>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}

export default observer(Order)
