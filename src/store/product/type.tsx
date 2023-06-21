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
};

export type InitialState = {
  productList: GetProductList[];
  productById: GetProductList | {};
  products: {};
};
