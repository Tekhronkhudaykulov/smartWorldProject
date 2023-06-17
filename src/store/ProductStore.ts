import { makeAutoObservable, runInAction } from "mobx";
import { ProductItemType } from "../AllDatas/productItemData";

export class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }

  chosedProducts: ProductItemType[] = [];
  favoriteProducts: ProductItemType[] = [];
  productCount: number = 0;

  addProducts = (item: ProductItemType) => {
    if (this.chosedProducts.some((i) => i.id === item.id)) return;
    this.chosedProducts = [...this.chosedProducts, item];
  };

  removeProducts = (item: ProductItemType) => {
    this.chosedProducts = this.chosedProducts.filter((i) => i.id !== item.id);
  };

  addFavorites = (item: ProductItemType) => {
    if (this.favoriteProducts.some((i) => i.id === item.id)) return;
    this.favoriteProducts = [...this.favoriteProducts, item];
  };

  removeFavorites = (item: ProductItemType) => {
    this.favoriteProducts = this.favoriteProducts.filter(
      (i) => i.id !== item.id
    );
  };
  incrementCount = () => {
    this.productCount++;
  };
  decrementCount = () => {
    if (this.productCount > 1) {
      this.productCount = 1;
    } else {
      this.productCount = 1;
    }
  };
}
