export type getFavourite = {
  id: number;
  name: string;
  icon: string;
  image: string;
  price: number | string;

  discount: number | string;
  amount: number;
};

export type getAddCard = {
  id: number;
  amount: number;
  price: number;
  total_price: number;
  product: {
    id: number;
    name: string;
    image: string;
  };
};
export type InitialState = {
  favouriteList: getFavourite[];
  cardList: getAddCard[];
};
