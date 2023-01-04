import {defineStore} from "pinia";

export const useCartStore=defineStore('cart',{
    state:()=>{
        return{
            cart:[],
            totalPrice:0.00
        }
    },
    getters:{
        cartLength(state){
            return state.cart.length
        }
    }
})