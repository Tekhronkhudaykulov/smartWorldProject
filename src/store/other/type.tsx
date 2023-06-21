export type getSlider = {
  id: number;
  path: string;
  alt: string;
};

export type InitialState = {
  sliderList: getSlider[];
  sliderListNotToken: getSlider[];
};
