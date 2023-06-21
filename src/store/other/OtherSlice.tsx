import { $api } from "../../contants/API";
import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { getSlider } from "./type";

export const OtherSlice = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setSlider: (state, payload: getSlider[]) => {
      return {
        ...state,
        sliderList: payload,
      };
    },
    setSliderNotToken: (state, payload: getSlider[]) => {
      return {
        ...state,
        sliderListNotToken: payload,
      };
    },
  },

  effects: (dispatch) => ({
    async getSliderLoad() {
      try {
        const { data } = await $api.get("v1/slider/index?shop_id=1");
        dispatch.OtherSlice.setSlider(data.data);
      } catch (e) {}
    },
    async getSliderNotToken() {
      try {
        const { data } = await $api.get("v1/main-slider/index");
        dispatch.OtherSlice.setSliderNotToken(data.data);
      } catch (e) {}
    },
  }),
});
