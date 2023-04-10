import { makeAutoObservable } from "mobx";

type modal = {
    basket: boolean;
    order: boolean;
    confirmOrder: boolean;
}

export class VisibleStore {
    constructor() {
        makeAutoObservable(this)
    }

    visiable: modal = {
        basket: false,
        order: false,
        confirmOrder: false
    }

    show = (key: keyof modal) => {
        this.visiable[key] = true
    }

    hide = (key: keyof modal) => {
        this.visiable[key] = false
    }

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key]
    }
}