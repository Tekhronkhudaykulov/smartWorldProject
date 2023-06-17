import { api } from "../../contants/API";
import { configToken } from "../../contants/API";
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
        const { data } = await api.get(
          "v1/product/index?shop_id=1",
          configToken
        );
        dispatch.productSlice.setProduct(data.data.data);
      } catch (e) {
        alert(e);
      }
    },
    async getProductById(id) {
      try {
        const { data } = await api.get(
          `v1/product/detail?id=${id}&shop_id=1`,
          configToken
        );
        dispatch.productSlice.setProductById(data.data.data);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
