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
            userInfo: getData() ?? {
                contact:null,
                shipping:null
            }
        }
    },
    getters:{
      getUserInformationContact(state){
          return state.userInfo.contact
      },
        getUserInformationShipping(state){
          return state.userInfo.shipping
      },
      hasShippingMethod(state){
          return !!state.userInfo.shipping
      }
    },
    actions:{
        setUserInformationContact(data){
            this.userInfo.contact=data
            storeData(this.userInfo)
        },
        setUserInformationShipping(data){
            this.userInfo.shipping=data
            storeData(this.userInfo)
        }
    }
})