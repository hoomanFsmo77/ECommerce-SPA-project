import {defineStore} from "pinia";
import { useToast } from 'vue-toastification'
const toast = useToast()


const storeData = data => {
  localStorage.setItem('_brentos_cart_',JSON.stringify(data))
}

const getData = () => {
  return JSON.parse(localStorage.getItem('_brentos_cart_'))
}

export const useCartStore=defineStore('cart',{
    state:()=>{
        return{
            cart:getData()?.cart ?? [],
            totalPrice:getData()?.totalPrice ?? 0
        }
    },
    getters:{
        cartLength(state){
            return state.cart.length
        },
        getTotalPrice(state){
          return state.totalPrice.toFixed(2)
        },
        getCart(state){
            return state.cart
        },
        getProductPrice:(state)=>(id)=>{
            let target=state.cart.filter(item=>item.productId===id)[0]
            return (target.priceDetail.price * target.quantity).toFixed(2)
        }
    },
    actions:{
        addToUserCart(product){
            let productIsExist=this.cart.some(item=>item.title===product.title)
            let target=this.cart[this.cart.findIndex(item=>item.title===product.title)]
            if(productIsExist){
                if( target.available > target.quantity){
                    target.quantity++
                    toast.success("Product added to your cart!")
                }else{
                    toast.error(`Maximum available quantity is ${target.quantity}!`)
                }

            }else {
                this.cart.push(product)
                toast.success("Product added to your cart!")
            }
            this.calculateTotalPrice()
        },
        calculateTotalPrice(){
            let total=0
            this.cart.forEach(item=>{
                total+=item.priceDetail.price * item.quantity
            })
            this.totalPrice=total
            storeData({
                cart:this.cart,
                totalPrice:this.totalPrice
            })
        },
        increaseProductQuantity(id,value){
            this.cart[this.cart.findIndex(item=>item.productId===id)].quantity=value
            this.calculateTotalPrice()
        },
        decreaseProductQuantity(id,value){
            this.cart[this.cart.findIndex(item=>item.productId===id)].quantity=value
            this.calculateTotalPrice()

        },
        removeProductCart(id){
            this.cart.splice(this.cart.findIndex(item=>item.productId===id),1)
            this.calculateTotalPrice()
        },
        resetCart(){
            this.cart=[]
            this.totalPrice=0
            storeData({
                cart:[],
                totalPrice:0
            })
        }
    }
})