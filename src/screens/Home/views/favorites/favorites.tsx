import React, { useEffect } from "react";
import ContentComp from "../../../../components/ContentComp/contentComp";
import ProductItem from "../../../../components/ProductItem/productItem";
import styles from "./favorites.module.css";
import Title from "../../../../components/Title/title";
import { ASSETS } from "../../../../constants/requireAssets";
import { HeartPrimary } from "../../../../assets/icons";
import { ProductItemData } from "../../../../AllDatas/productItemData";
import useRootStore from "../../../../hook/useRootStore";
import { observer } from "mobx-react-lite";
import Text from "../../../../components/Text/text";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../../store";
import Order from "../../../../components/Order/order";

const Favorites = () => {
  const products = useRootStore().productStore;

  const dispatch = useDispatch<Dispatch>();
  const { show } = useRootStore().visiibleStore;

  useEffect(() => {
    show("order");
    dispatch.basketSlice.getFavourite();
  }, []);

  const { favouriteList } = useSelector(
    (state: RootState) => state.basketSlice
  );

  const OnBuy = (item: any) => {
    dispatch.basketSlice.addCard({ product_id: item.id });
  };

  const removeFavourite = (item: any) => {
    dispatch.basketSlice.addFavorite({ product_id: item.id, shop_id: 1 });
  };
  return (
    <div className={styles.container}>
      <ContentComp />
      <div className={styles.titleBox}>
        <Title title="Избранное" fontSize="28px" />
      </div>
      <div className={styles.productBox}>
        {favouriteList.length > 0 ? (
          favouriteList.map((e, index) => {
            return (
              <ProductItem
                key={index}
                imgUrl={e.image}
                heart={<HeartPrimary />}
                onHeartPress={() => removeFavourite(e)}
                name={e.name}
                price={`${e.price} сум`}
                count={e.amount}
                onBuyPress={() => OnBuy(e)}
                // discount={`${e.discount} сум`}
              />
            );
          })
        ) : (
          <Text
            text="Sevimli narsalaringiz yoq!"
            style={{ textAlign: "center", fontSize: "18px", margin: "10px 0" }}
          />
        )}
      </div>
    </div>
  );
};

export default observer(Favorites);
