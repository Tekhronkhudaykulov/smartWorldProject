import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductItemData, ProductItemType } from '../../../../AllDatas/productItemData'
import { CaseIcon, Cash, HeartOutline, Limit, SearchIcon } from '../../../../assets/icons'
import Banner from '../../../../components/Banner/banner'
import Basket from '../../../../components/Basket/basket'
import Button from '../../../../components/Button/button'
import Category from '../../../../components/Category/category'
import ConfirmOrder from '../../../../components/ConfirmOrder/confirmOrder'
import ContentComp from '../../../../components/ContentComp/contentComp'
import IconComp from '../../../../components/IconComp/iconComp'
import Input from '../../../../components/Input/input'
import ItemComp from '../../../../components/ItemComp/itemComp'
import Order from '../../../../components/Order/order'
import ProductItem from '../../../../components/ProductItem/productItem'
import { COLORS } from '../../../../constants/colors'
import useRootStore from '../../../../hook/useRootStore'
import { APP_ROUTES } from '../../../../router/Route'
import styles from "./market.module.css"

const Market = () => {
    const navigation = useNavigate()
    const { show } = useRootStore().visiibleStore
    const productStore = useRootStore().productStore

    const OnBuy = (item: any) => {
        show("order")
        productStore.addProducts(item)
    }

    return (
        <>
            <div className={styles.container}>
                <ContentComp />
                <div className={styles.filterBox}>
                    <div className={styles.filterLeft}>
                        <Input
                            style={{
                                width: "300px",
                                height: "60px"
                            }}
                            iconUrl={<SearchIcon />}
                            placohlder='Поиск'
                        />
                        <ItemComp
                            icon={<Cash />}
                            title='Остаток денежных средств:'
                            text='500.000 сум'
                            textColor={COLORS.orange}
                            style={{ marginLeft: "30px" }}
                        />
                        <ItemComp
                            icon={<Limit />}
                            title='Остаток по лимиту:'
                            text='500.000 сум'
                            textColor={COLORS.crimson}
                            style={{ marginLeft: "30px" }}
                            iconBack={COLORS.crimson}
                        />
                    </div>
                    <IconComp iconType='primary' onPress={() => show("basket")} icon={<CaseIcon />} />
                </div>
                <div className={styles.content}>
                    <div className={styles.category}>
                        <Category />
                        <Button
                            btnSize='large'
                            btnType='outline'
                            style={{ width: "200px", marginTop: "20px", fontSize: "15px", height: "50px" }}
                            title="Избранное"
                            onPress={() => navigation(APP_ROUTES.FAVORITES)}
                        />
                    </div>
                    <div className={styles.productBox}>
                        {ProductItemData.map((e, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    imgUrl={e.image}
                                    heart={<HeartOutline />}
                                    onHeartPress={() => productStore.addFavorites(e)}
                                    name={e.name}
                                    price={`${e.price} сум`}
                                    discount={`${e.discount} сум`}
                                    onBuyPress={() => OnBuy(e)}
                                    onBasketPress={() => productStore.addProducts(e)}
                                />
                            )
                        })}
                    </div>
                </div>
                <Basket />
                <Order />
                <ConfirmOrder />
            </div>
        </>
    )
}

export default observer(Market)
