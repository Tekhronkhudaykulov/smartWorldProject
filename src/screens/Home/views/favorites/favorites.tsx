import React from 'react'
import ContentComp from '../../../../components/ContentComp/contentComp'
import ProductItem from '../../../../components/ProductItem/productItem'
import styles from "./favorites.module.css"
import Title from '../../../../components/Title/title'
import { ASSETS } from '../../../../constants/requireAssets'
import { HeartPrimary } from '../../../../assets/icons'
import { ProductItemData } from '../../../../AllDatas/productItemData'
import useRootStore from '../../../../hook/useRootStore'
import { observer } from 'mobx-react-lite'
import Text from '../../../../components/Text/text'

const Favorites = () => {
    const products = useRootStore().productStore
    return (
        <div className={styles.container}>
            <ContentComp />
            <div className={styles.titleBox}>
                <Title title='Избранное' fontSize='28px' />
            </div>
            <div className={styles.productBox}>
                {products.favoriteProducts.length > 0 ?
                    products.favoriteProducts.map((e, index) => {
                        return (
                            <ProductItem
                                key={index}
                                imgUrl={e.image}
                                heart={<HeartPrimary />}
                                onHeartPress={() => products.removeFavorites(e)}
                                name={e.name}
                                price={`${e.price} сум`}
                                discount={`${e.discount} сум`}
                            />
                        )
                    }) :
                    <Text text='Sevimli narsalaringiz yoq!' style={{ textAlign: "center", fontSize: "18px", margin: "10px 0" }} />
                }
            </div>
        </div>
    )
}

export default observer(Favorites)
