import { ASSETS } from "../constants/requireAssets";

export type ProductItemType = {
    id: number;
    name: string;
    price: number | string;
    discount: number | string;
    image: string;
    basket: boolean;
    favourites: boolean;
}

export const ProductItemData: ProductItemType[] = [
    {
        id: 1,
        name: "Лапша Б/п Петра ",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr1,
        basket: false,
        favourites: false
    },
    {
        id: 2,
        name: "Мясо со сладким перцем",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr2,
         basket: false,
        favourites: false
    },
    {
        id: 3,
        name: "Драже M&M",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr3,
         basket: false,
        favourites: false
    },
    {
        id: 4,
        name: "Snikers ( 1 кг )",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr4,
         basket: false,
        favourites: false
    },
    {
        id: 5,
        name: "Шоколад MARS",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr5,
         basket: false,
        favourites: false
    },
    {
        id: 6,
        name: "Sosero оливковый",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr6,
         basket: false,
        favourites: false
    },
    {
        id: 7,
        name: "Творог Kamilka",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr7,
         basket: false,
        favourites: false
    },
    {
        id: 8,
        name: "Extra SHERIN",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr8,
         basket: false,
        favourites: false
    },
     {
        id: 9,
        name: "Шоколад MARS",
        price: "20 000",
        discount: "30 000",
         image: ASSETS.pr5,
         basket: false,
        favourites: false
    },
    {
        id: 10,
        name: "Sosero оливковый",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr6,
         basket: false,
        favourites: false
    },
    {
        id: 11,
        name: "Творог Kamilka",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr7,
         basket: false,
        favourites: false
    },
    {
        id: 12,
        name: "Extra SHERIN",
        price: "20 000",
        discount: "30 000",
        image: ASSETS.pr8,
         basket: false,
        favourites: false
    },
]