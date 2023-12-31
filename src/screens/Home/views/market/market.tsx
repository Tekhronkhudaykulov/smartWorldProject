import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

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
import {
  LogoutForMainAndMarketPage,
  LogoutProject,
} from "../../../../hook/useFaceIdLogin";
import ReactPaginate from "react-paginate";

const Market = () => {
  const navigation = useNavigate();
  const { show } = useRootStore().visiibleStore;
  const productStore = useRootStore().productStore;

  const { id } = useParams<any>();

  const OnBuy = (item: any) => {
    // show("basket");
    dispatch.basketSlice.addCard({ product_id: item.id, shop_id: id });
  };

  const ProductCount = (id: any) => {
    productStore.chosedProducts.filter((e) => e.id);
  };

  const dispatch = useDispatch<Dispatch>();

  const { categoryIdValue } = useSelector(
    (state: RootState) => state.OtherSlice
  );

  useEffect(() => {
    dispatch.productSlice.getProduct({
      shop_id: id,
      category_id: categoryIdValue,
      page: 1,
    });
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
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const { meta } = useSelector((state: RootState) => state.productSlice);

  console.log(meta);

  // LogoutProject();
  LogoutForMainAndMarketPage();

  const handlePagination = (page: any) => {
    dispatch.productSlice.getProduct({
      shop_id: id,
      category_id: categoryIdValue,
      page,
    });
  };

  return (
    <>
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
                  heart={
                    e.isFavorite === true ? <HeartPrimary /> : <HeartOutline />
                  }
                  onHeartPress={() => {
                    dispatch.basketSlice.addFavorite({
                      product_id: e.id,
                    });
                  }}
                  name={e.name}
                  price={`${e.price?.toLocaleString("ru-RU")} сум`}
                  // discount={`${e.discount} сум`}
                  count={e.amount_in_cart}
                  onBuyPress={() => OnBuy(e)}
                  onBasketPress={() =>
                    dispatch.basketSlice.addCard({
                      product_id: e.id,
                      shop_id: id,
                    })
                  }
                  // onBasketPress={() => productStore.addProducts(e)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.paginate}>
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            previousLinkClassName="exit"
            onClick={(event) =>
              handlePagination((event.nextSelectedPage ?? 0) + 1)
            }
            pageRangeDisplayed={3}
            pageCount={Number(meta.pageCount)}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </div>
        <Basket />
        <Order />
        <ConfirmOrder />
      </div>
    </>
  );
};

export default observer(Market);
