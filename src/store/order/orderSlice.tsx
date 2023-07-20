import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { GetOrders, getOrderListType } from "./type";

export const orderSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    getOrders: (state, payload: GetOrders[]) => {
      return {
        ...state,
        ordersList: payload,
      };
    },
    getAllOrdersFuntion: (state, payload) => {
      return {
        ...state,
        getAllOrders: payload,
      };
    },
    getOrderListFunction: (state, payload: getOrderListType) => {
      return {
        ...state,
        getOrderList: payload,
      };
    },
    isResultFunction: (state, payload) => {
      return {
        ...state,
        toast: payload,
      };
    },
  },

  effects: (dispatch) => ({
    async orderSend(payload) {
      try {
        const { data } = await $api.post("v1/order/send", payload.data);
        await dispatch.orderSlice.getOrderListFunction(data.data);
        await payload.callback?.();
      } catch (e) {
        alert("У пользователя недостаточно лимита");
      }
    },
    async getOrderLoad() {
      try {
        const { data } = await $api.get("v1/user-transaction/index");
        dispatch.orderSlice.getOrders(data.data.data);
        dispatch.orderSlice.getAllOrdersFuntion(data.data);
      } catch (e) {}
    },
  }),
});
