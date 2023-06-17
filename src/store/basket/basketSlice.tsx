import { api } from "../../contants/API";
import { configToken } from "../../contants/API";
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
  },
  effects: (dispatch) => ({
    async addFavorite(payload) {
      try {
        const { data } = await api.post(
          "v1/product/set-favorite?shop_id=1",
          payload,
          configToken
        );
        dispatch.productSlice.getProduct();
        await dispatch.basketSlice.getFavourite();
      } catch (e) {
        alert(e);
      }
    },

    async getFavourite() {
      try {
        const { data } = await api.get(
          "v1/product/favorites?shop_id=1",
          configToken
        );
        dispatch.basketSlice.setFavourite(data.data.data);
      } catch (e) {
        alert(e);
      }
    },
    async addCard(payload) {
      try {
        const { data } = await api.post("v1/cart/add", payload, configToken);
        dispatch.basketSlice.getAddCard();
      } catch (e) {
        alert(e);
      }
    },

    async removeCard(payload) {
      try {
        const { data } = await api.post("v1/cart/remove", payload, configToken);
        dispatch.basketSlice.getAddCard();
      } catch (e) {
        alert(e);
      }
    },

    async minus(payload) {
      try {
        const { data } = await api.post("v1/cart/minus", payload, configToken);
        dispatch.basketSlice.getAddCard();
      } catch (e) {
        alert(e);
      }
    },

    async plus(payload) {
      try {
        const { data } = await api.post("v1/cart/add", payload, configToken);
        dispatch.basketSlice.getAddCard();
      } catch (e) {
        alert(e);
      }
    },

    async getAddCard() {
      try {
        const { data } = await api.get("v1/cart/index", configToken);
        dispatch.basketSlice.setAddCard(data.data.data);
      } catch (e) {
        alert(e);
      }
    },

    async add(payload) {
      try {
        const { data } = await api.post("v1/cart/add", payload, configToken);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
