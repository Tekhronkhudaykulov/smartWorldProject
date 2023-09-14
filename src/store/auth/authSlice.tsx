import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";

export const authSlice = createModel<RootModel>()({
  state: {
    token: "",
  },
  reducers: {
    getToken: (state, payload) => {
      return {
        ...state,
        token: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async clickFirstMoment(payload) {
      try {
        const { data } = await $api.post("/dahua/get-token", payload);
        localStorage.setItem("@firstToken", data.token);
        dispatch.authSlice.getToken(data.token);
      } catch (e) {}
    },
    async clickForLogin() {
      try {
        const { data } = await $api.get("dahua/login-start");
      } catch (e) {}
    },
    async clickForRegister() {
      try {
        const { data } = await $api.get("dahua/register-start");
      } catch (e) {}
    },
  }),
});
