import { api } from "../../contants/API";
import { configToken } from "../../contants/API";
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
        const { data } = await api.post("v1/order/send", payload, configToken);
      } catch (e) {
        alert(e);
      }
    },
    async getOrders() {
      try {
        const { data } = await api.get("v1/order/index", configToken);
        dispatch.orderSlice.getOrders(data.data.data);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
