export type GetProductList = {
  id: string | number;
  name: string;
  image?: string;
  price?: number | string;
  discount: string;
  onHeartPress?: () => void;
  onBasketPress?: () => void;
  amount: number;
  isFavorite: boolean;
  amount_in_cart: string;
};

export type MetaType = {
  currentPage: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
};
export type InitialState = {
  productList: GetProductList[];
  productById: GetProductList | {};
  products: {};
  meta: Partial<MetaType>;
};
