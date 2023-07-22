import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { getAddCard, getFavourite } from "./type";
import { initialState } from "./state";

export const basketSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setFavourite: (state, payload: getFavourite[]) => {
      return {
        ...state,
        favouriteList: payload,
      };
    },
    setAddCard: (state, payload: getAddCard[]) => {
      return {
        ...state,
        cardList: payload,
      };
    },
    setPrice: (state, payload: getAddCard) => {
      return {
        ...state,
        priceList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async addFavorite(payload, state) {
      try {
        await $api
          .post("v1/product/set-favorite?shop_id=1", payload)
          .then(() => {
            dispatch.productSlice.setProduct(
              [...state.productSlice.productList].map((item) =>
                item.id === payload.product_id
                  ? { ...item, isFavorite: !item.isFavorite }
                  : { ...item }
              )
            );
          });

        // const newProd = data.data;
        // const products = state.productSlice.productList.map((item) => {
        //   if (item.id == newProd.id) {
        //     return newProd;
        //   }
        //   return item;
        // });
        // dispatch.productSlice.setProduct(products);
        await payload.callback?.();
        // dispatch.productSlice.getProduct("");
        await dispatch.basketSlice.getFavourite();
      } catch (e) {}
    },
    async getFavourite() {
      try {
        const { data } = await $api.get("v1/product/favorites?shop_id=1");
        dispatch.basketSlice.setFavourite(data.data.data);
      } catch (e) {}
    },
    async addCard(payload) {
      try {
        const { data } = await $api.post("v1/cart/add", payload);
        await dispatch.basketSlice.getAddCard();
        dispatch.productSlice.getProduct("");
        dispatch.basketSlice.getFavourite();
      } catch (e) {
        alert("У пользователя недостаточно лимита");
      }
    },

    async removeCard(payload) {
      try {
        const { data } = await $api.post("v1/cart/remove", payload);
        dispatch.basketSlice.getAddCard();
      } catch (e) {}
    },

    async minus(payload) {
      try {
        const { data } = await $api.post("v1/cart/minus", payload);
        dispatch.basketSlice.getAddCard();
      } catch (e) {}
    },

    async plus(payload) {
      try {
        const { data } = await $api.post("v1/cart/add", payload);
        dispatch.basketSlice.getAddCard();
      } catch (e) {
        alert("У пользователя недостаточно лимита");
      }
    },

    async getAddCard() {
      try {
        const { data } = await $api.get("v1/cart/index");
        dispatch.basketSlice.setAddCard(data.data.data);
        dispatch.basketSlice.setPrice(data.data);
      } catch (e) {}
    },

    async add(payload) {
      try {
        const { data } = await $api.post("v1/cart/add", payload);
        dispatch.productSlice.getProduct("");
        dispatch.basketSlice.getFavourite();
      } catch (e) {
        alert("У пользователя недостаточно лимита");
      }
    },
  }),
});
