import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { GetOrders } from "./type";

export const orderSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    getOrders: (state, payload: GetOrders[]) => {
      return {
        ...state,
        ordersList: payload,
      };
    },
  },

  effects: (dispatch) => ({
    async orderSend(payload) {
      try {
        const { data } = await $api.post("v1/order/send", payload);
        alert("Спасибо за покупку !");
      } catch (e) {
        alert("У пользователя недостаточно лимита");
      }
    },
    async getOrderLoad() {
      try {
        const { data } = await $api.get("v1/user-transaction/index");
        dispatch.orderSlice.getOrders(data.data.data);
      } catch (e) {}
    },
  }),
});
