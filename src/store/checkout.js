import {defineStore} from "pinia";

const storeData = data => {
    localStorage.setItem('_brentos_checkout_',JSON.stringify(data))
}

const getData = () => {
    return JSON.parse(localStorage.getItem('_brentos_checkout_'))
}


export const useCheckoutStore=defineStore('checkout',{
    state:()=>{
        return {
            userInfo: getData() ?? {}
        }
    },
    getters:{
      getUserInformation(state){
          return state.userInfo
      }
    },
    actions:{
        setUserInformation(data){
            this.userInfo=data
            storeData(data)
        },
        addShippingMethod(data){
            this.userInfo={...this.userInfo,shipping:data}
        }
    }
})