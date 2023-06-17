export type getCategoryList = {
  id: number;
  name: string;
  icon: string;
};

export type InitialState = {
  categoryList: getCategoryList[];
};
