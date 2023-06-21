import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { GetProductList } from "./type";

export const productSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setProduct: (state, payload: GetProductList[]) => {
      return {
        ...state,
        productList: payload,
      };
    },

    setPagination: (state, payload: GetProductList[]) => {
      return {
        ...state,
        products: payload,
      };
    },
    setProductById: (state, payload) => {
      return {
        ...state,
        productList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getProduct() {
      try {
        const { data } = await $api.get(`v1/product/index?shop_id=1`);

        dispatch.productSlice.setProduct(data.data.data);
      } catch (e) {}
    },
    async getProductById(id) {
      try {
        const { data } = await $api.get(`v1/product/detail?id=${id}&shop_id=1`);
        dispatch.productSlice.setProductById(data.data);
      } catch (e) {}
    },
  }),
});
