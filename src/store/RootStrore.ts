import * as mobx from "mobx"
import {makeAutoObservable} from "mobx"
import { createContext } from "react"
import { ProductStore } from "./ProductStore"
import { VisibleStore } from "./VisibleStore"


export class AppRootStore {
    visiibleStore = new VisibleStore()
    productStore = new ProductStore()

    constructor() {
        makeAutoObservable(this)
    }
}

const rootStore = new AppRootStore()
export default createContext(rootStore)