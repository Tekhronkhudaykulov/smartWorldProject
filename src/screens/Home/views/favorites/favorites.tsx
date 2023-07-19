import React, { useEffect } from "react";
import ContentComp from "../../../../components/ContentComp/contentComp";
import ProductItem from "../../../../components/ProductItem/productItem";
import styles from "./favorites.module.css";
import Title from "../../../../components/Title/title";
import { ASSETS } from "../../../../constants/requireAssets";
import { HeartPrimary, Logout, User } from "../../../../assets/icons";
import { ProductItemData } from "../../../../AllDatas/productItemData";
import useRootStore from "../../../../hook/useRootStore";
import { observer } from "mobx-react-lite";
import Text from "../../../../components/Text/text";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../../store";
import Order from "../../../../components/Order/order";
import Button from "../../../../components/Button/button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../../router/Route";
import Basket from "../../../../components/Basket/basket";
import ConfirmOrder from "../../../../components/ConfirmOrder/confirmOrder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = () => {
  const products = useRootStore().productStore;

  const dispatch = useDispatch<Dispatch>();
  const { show } = useRootStore().visiibleStore;

  useEffect(() => {
    dispatch.basketSlice.getFavourite();
    dispatch.productSlice.getProduct("");
  }, []);

  const navigation = useNavigate();

  const { favouriteList } = useSelector(
    (state: RootState) => state.basketSlice
  );

  const OnBuy = (item: any) => {
    dispatch.basketSlice.addCard({ product_id: item.id });
    // show("basket");
  };

  const removeFavourite = (item: any) => {
    dispatch.basketSlice.addFavorite({ product_id: item.id, shop_id: 1 });
  };

  const success = () => {
    toast.success("Спасибо за покупку!", {
      autoClose: 2000,
    });
  };

  const logout = () => {
    localStorage.clear();
    navigation(APP_ROUTES.WELCOME);
    success();
  };
  return (
    <div className={styles.container}>
      <ContentComp isHas={false} />
      <div className={styles.titleBox}>
        <Title title="Избранное" fontSize="28px" />
      </div>

      <div
        className={styles.filterBox}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Button
          btnSize="large"
          btnType="outline"
          style={{
            width: "200px",
            marginTop: "20px",
            fontSize: "15px",
            height: "50px",
          }}
          title="Перейти в магазин"
          onPress={() => navigation(APP_ROUTES.MARKET)}
        />
        {/* <Button
          btnSize="large"
          btnType="outline"
          style={{
            width: "200px",
            marginTop: "20px",
            fontSize: "15px",
            height: "50px",
          }}
          title="Корзина"
          onPress={() => show("basket")}
        /> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginLeft: "auto",
            border: "1px solid #FF9C20",
            borderRadius: "8px",
            width: "200px",
            cursor: "pointer",
          }}
        >
          <User />
          <Button
            btnSize="large"
            btnType="outline"
            style={{
              border: "none",
              fontSize: "15px",
              height: "50px",
              width: "unset",
            }}
            title="Личный кабинет"
            onPress={() => navigation(APP_ROUTES.MAIN)}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            border: "1px solid #FF9C20",
            borderRadius: "8px",
            width: "200px",
            cursor: "pointer",
          }}
        >
          <Button
            btnSize="large"
            btnType="outline"
            style={{
              border: "none",
              fontSize: "15px",
              height: "50px",
              width: "unset",
            }}
            title="Выйти из системы"
            onPress={() => logout()}
          />
          <Logout />
        </div>
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
                count={e.amount_in_cart}
                onBuyPress={() => OnBuy(e)}
                onBasketPress={() =>
                  dispatch.basketSlice.add({ product_id: e.id })
                }
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
      <Basket />
      <Order />
      <ConfirmOrder />
    </div>
  );
};

export default observer(Favorites);
