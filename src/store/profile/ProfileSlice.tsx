import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { userList } from "./type";

export const profileSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setUser: (state, payload: userList) => {
      return {
        ...state,
        userList: payload,
      };
    },
    setToken: (state, payload) => {
      return {
        ...state,
        token: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getUser() {
      try {
        const { data } = await $api.get("v1/user/info");
        dispatch.profileSlice.setUser(data);
      } catch (e) {}
    },
  }),
});
