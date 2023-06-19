import { api } from "../../contants/API";
import { configToken } from "../../contants/API";
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
  },

  effects: (dispatch) => ({
    async getSliderLoad() {
      try {
        const { data } = await api.get(
          "v1/slider/index?shop_id=1",
          configToken
        );
        dispatch.OtherSlice.setSlider(data.data);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
