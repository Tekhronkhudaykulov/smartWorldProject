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
    setLogout: (state, payload) => {
      return {
        ...state,
        logout: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getUser() {
      try {
        const token = localStorage.getItem("@token");
        $api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await $api.get("v1/user/info");
        dispatch.profileSlice.setUser(data);
      } catch (e) {}
    },

    async logout() {
      try {
        const { data } = await $api.get("v1/user/log-out");
        await dispatch.profileSlice.setLogout(true);
      } catch (e) {}
    },
  }),
});
