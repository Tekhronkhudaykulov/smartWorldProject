import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { getCategoryList } from "./type";
import { initialState } from "./state";

export const categorySlice = createModel<RootModel>()({
  state: initialState,

  reducers: {
    setCategory: (state, payload: getCategoryList[]) => {
      return {
        ...state,
        categoryList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getCategory() {
      try {
        const { data } = await $api.get("v1/category/index");
        dispatch.categorySlice.setCategory(data.data.data);
      } catch (e) {}
    },
  }),
});
