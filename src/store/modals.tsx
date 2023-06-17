import { Models } from "@rematch/core";
import { productSlice } from "./product/ProductSlice";
import { categorySlice } from "./category/CategorySlice";
import { basketSlice } from "./basket/basketSlice";

export interface RootModel extends Models<RootModel> {
  productSlice: typeof productSlice;
  categorySlice: typeof categorySlice;
  basketSlice: typeof basketSlice;
}

export const models: RootModel = {
  productSlice,
  categorySlice,
  basketSlice,
};
