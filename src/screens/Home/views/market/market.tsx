import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductItemData,
  ProductItemType,
} from "../../../../AllDatas/productItemData";
import {
  CaseIcon,
  Cash,
  Exit,
  HeartOutline,
  HeartPrimary,
  Limit,
  Logout,
  SearchIcon,
  User,
} from "../../../../assets/icons";
import Banner from "../../../../components/Banner/banner";
import Basket from "../../../../components/Basket/basket";
import Button from "../../../../components/Button/button";
import Category from "../../../../components/Category/category";
import ConfirmOrder from "../../../../components/ConfirmOrder/confirmOrder";
import ContentComp from "../../../../components/ContentComp/contentComp";
import IconComp from "../../../../components/IconComp/iconComp";
import Input from "../../../../components/Input/input";
import ItemComp from "../../../../components/ItemComp/itemComp";
import Order from "../../../../components/Order/order";
import ProductItem from "../../../../components/ProductItem/productItem";
import { COLORS } from "../../../../constants/colors";
import useRootStore from "../../../../hook/useRootStore";
import { APP_ROUTES } from "../../../../router/Route";
import styles from "./market.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../../store";
import Modal from "../../../../components/Modal/modal";
import Title from "../../../../components/Title/title";
import PaginationBox from "../../../../components/Pagination/pagination";

const Market = () => {
  const navigation = useNavigate();
  const { show } = useRootStore().visiibleStore;
  const productStore = useRootStore().productStore;

  const OnBuy = (item: any) => {
    // show("basket");
    dispatch.basketSlice.addCard({ product_id: item.id });
  };

  const ProductCount = (id: any) => {
    productStore.chosedProducts.filter((e) => e.id);
  };

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.productSlice.getProduct("");
    dispatch.profileSlice.getUser();
    dispatch.basketSlice.getAddCard();
  }, []);

  const { productList } = useSelector((state: RootState) => state.productSlice);

  const { priceList } = useSelector((state: RootState) => state.basketSlice);

  const { userList } = useSelector((state: RootState) => state.profileSlice);

  const isLoading = useSelector(
    (state: RootState) => state.loading.models.profileSlice
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <p style={{ fontSize: "30px" }}>Loading...</p>
        </div>
      ) : (
        <div className={styles.container}>
          <ContentComp isHas={true} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginLeft: "100px",
            }}
          >
            <Title title={userList.full_name || ""} fontSize="28px" />
          </div>

          {/* <div
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
              onPress={() => navigation(APP_ROUTES.MAIN)}
            />
            <Button
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
            />
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
          </div> */}
          <div className={styles.filterBox}>
            <div className={styles.filterLeft}>
              <Button
                btnSize="large"
                btnType="outline"
                style={{
                  width: "200px",
                  marginTop: "20px",
                  fontSize: "15px",
                  height: "50px",
                }}
                title="Избранное"
                onPress={() => navigation(APP_ROUTES.FAVORITES)}
              />
              {/* <Input
                style={{
                  width: "300px",
                  height: "60px",
                }}
                iconUrl={<SearchIcon />}
                placohlder="Поиск"
              /> */}
              <ItemComp
                icon={<Cash />}
                title="Остаток денежных средств:"
                text={`${priceList.balance?.toLocaleString("ru-RU")} сум` || ""}
                textColor={COLORS.orange}
                style={{ marginLeft: "30px" }}
              />
              <ItemComp
                icon={<Limit />}
                title="Остаток по лимиту:"
                text={
                  `${
                    priceList.limit_summa === null
                      ? "0"
                      : priceList.limit_summa?.toLocaleString("ru-RU")
                  } сум` || ""
                }
                textColor={COLORS.crimson}
                style={{ marginLeft: "30px" }}
                iconBack={COLORS.crimson}
              />
            </div>
            <Button
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
            />
            {/* <IconComp
              iconType="primary"
              onPress={() => show("basket")}
              icon={<CaseIcon />}
            /> */}
          </div>
          <div className={styles.content}>
            <div className={styles.category}>
              <Category />
            </div>
            <div className={styles.productBox}>
              {currentPosts.map((e, index) => {
                return (
                  <ProductItem
                    key={index}
                    imgUrl={e.image}
                    heart={e.isFavorite ? <HeartPrimary /> : <HeartOutline />}
                    onHeartPress={() => {
                      dispatch.basketSlice.addFavorite({
                        shop_id: 1,
                        product_id: e.id,
                      });
                    }}
                    name={e.name}
                    price={`${e.price?.toLocaleString("ru-RU")} сум`}
                    // discount={`${e.discount} сум`}
                    count={e.amount_in_cart}
                    onBuyPress={() => OnBuy(e)}
                    onBasketPress={() =>
                      dispatch.basketSlice.add({ product_id: e.id })
                    }
                    // onBasketPress={() => productStore.addProducts(e)}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.pagination}>
            <PaginationBox
              postsPerPage={postsPerPage}
              totalPosts={productList.length}
              paginate={paginate}
            />
          </div>
          <Basket />
          <Order />
          <ConfirmOrder />
        </div>
      )}
    </>
  );
};

export default observer(Market);
