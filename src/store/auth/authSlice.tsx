import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";

export const authSlice = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: () => ({
    async sendNewUser(payload) {
      try {
        const { data } = await $api.post("v1/user/login", payload);
      } catch (e) {}
    },
  }),
});
