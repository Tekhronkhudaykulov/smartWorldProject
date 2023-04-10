import { makeAutoObservable, runInAction } from "mobx";
import { ProductItemType } from "../AllDatas/productItemData";

export class ProductStore  {
    chosedProducts:ProductItemType[] = []
    favoriteProducts:ProductItemType[] = []
    constructor() {
        makeAutoObservable(this)
    }

    addProducts = (item: ProductItemType) => {
        if (this.chosedProducts.some(i => i.id === item.id)) return;
        this.chosedProducts = [...this.chosedProducts, item]
    }

    removeProducts = (item: ProductItemType) => {
        this.chosedProducts = this.chosedProducts.filter(i => i.id !== item.id)
    } 

    addFavorites = (item: ProductItemType) => {
        if (this.favoriteProducts.some(i => i.id === item.id)) return;
        this.favoriteProducts = [...this.favoriteProducts, item]
    }

    removeFavorites = (item: ProductItemType) => {
        this.favoriteProducts = this.favoriteProducts.filter(i => i.id !== item.id)
    } 
}