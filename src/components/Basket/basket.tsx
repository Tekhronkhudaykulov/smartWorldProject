import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import useRootStore from '../../hook/useRootStore'
import styles from "./basket.module.css"
import Backdrop from '@mui/material/Backdrop';
import Title from '../Title/title';
import { observer } from 'mobx-react-lite';
import { CloseIcon } from '../../assets/icons';
import ListItem from '../ListItem/listItem';
import Button from '../Button/button';
import { COLORS } from '../../constants/colors';
import { ProductItemData, ProductItemType } from '../../AllDatas/productItemData';
import Text from '../Text/text';
import GreyText from '../GreyText/greyText';

const Basket = () => {
    const { show, visiable, hide, } = useRootStore().visiibleStore
    const products = useRootStore().productStore
    const Submit = () => {
        show("order")
        hide("basket")
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 4 }}
                open={visiable.basket}
            // onClick={() => hide('basket')}
            >
                <div className={styles.container} style={{ right: visiable.basket ? "0vw" : "-35vw" }}>
                    <div className={styles.header}>
                        <Title fontSize='22px' title='Корзина' />
                        <div style={{ cursor: "pointer" }} onClick={() => hide("basket")}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className={styles.listsBox}>
                        <div className={styles.infoBox}>
                            <GreyText text='Товары' style={{ flex: "1.6" }} />
                            <GreyText text='Кол-во' style={{ flex: "1" }} />
                            <GreyText text='Цена' style={{ flex: "1" }} />
                        </div>
                        {products.chosedProducts.length > 0 ?
                            products.chosedProducts.map((e, index) => {
                                return (
                                    <ListItem
                                        key={index}
                                        img={e.image}
                                        name={e.name}
                                        price={e.price}
                                        onDelate={() => products.removeProducts(e)}
                                    />
                                )
                            })
                            :
                            <Text text='Savatda hechnarsa yoq!' style={{ textAlign: "center", fontSize: "22px", margin: "10px 0" }} />
                        }
                    </div>
                    <div className={styles.bottomBox}>
                        <div className={styles.total}>
                            <Title
                                title='Итого:'
                                fontSize='22px'
                                style={{ marginRight: "10px" }}
                            />
                            <Title
                                title='1.000.000 сум'
                                fontSize='22px'
                                color={COLORS.orange} />
                        </div>
                        <Button
                            btnSize='large'
                            btnType='primary'
                            title='Перейти к оформлению'
                            disabled={products.chosedProducts.length === 0 ? true : false}
                            onPress={() => Submit()}
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
            </Backdrop>
        </>
    )
}

export default observer(Basket)
