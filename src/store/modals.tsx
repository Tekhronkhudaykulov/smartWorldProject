import { Models } from "@rematch/core";
import { productSlice } from "./product/ProductSlice";
import { categorySlice } from "./category/CategorySlice";
import { basketSlice } from "./basket/basketSlice";
import { profileSlice } from "./profile/ProfileSlice";
import { orderSlice } from "./order/orderSlice";
import { OtherSlice } from "./other/OtherSlice";
import { authSlice } from "./auth/authSlice";

export interface RootModel extends Models<RootModel> {
  productSlice: typeof productSlice;
  categorySlice: typeof categorySlice;
  basketSlice: typeof basketSlice;
  profileSlice: typeof profileSlice;
  orderSlice: typeof orderSlice;
  OtherSlice: typeof OtherSlice;
  authSlice: typeof authSlice;
}

export const models: RootModel = {
  productSlice,
  categorySlice,
  basketSlice,
  profileSlice,
  orderSlice,
  OtherSlice,
  authSlice,
};
