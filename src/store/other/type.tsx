export type getSlider = {
  id: number;
  path: string;
  alt: string;
  title: string;
};

export type ShopListType = {
  id: number;
  name: string;
};
export type InitialState = {
  sliderList: getSlider[];
  sliderListNotToken: getSlider[];
  shopList: ShopListType[];
};
