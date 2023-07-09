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
    async addFavorite(payload) {
      try {
        const { data } = await $api.post(
          "v1/product/set-favorite?shop_id=1",
          payload
        );
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
      } catch (e) {}
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
      } catch (e) {}
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
      } catch (e) {}
    },
  }),
});
