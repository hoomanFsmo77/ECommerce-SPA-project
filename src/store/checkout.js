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
                shipping:null,
                card:null,
                rememberMe:null
            }
        }
    },
    getters:{
        getAllInformation(state){
          return state.userInfo
        },
      getUserInformationContact(state){
          return state.userInfo.contact
      },
        getUserInformationShipping(state){
          return state.userInfo.shipping
      },
        getUserInformationCart(state){
          return state.userInfo.card
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
        },
        setUserInformationCart(data){
            this.userInfo.card=data
            storeData(this.userInfo)
        },setUserInformationRemember(data){
            this.userInfo.rememberMe=data
            storeData(this.userInfo)
        },
        resetCheckout(){
            this.userInfo.contact=null
            this.userInfo.shipping=null
            this.userInfo.card=null
            this.userInfo.rememberMe=null
            storeData(this.userInfo)
        }
    }
})