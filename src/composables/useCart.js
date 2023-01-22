import {computed,ref} from "vue";
import {useCartStore} from "../store/Cart.js";
import {generateRandomNumber, getCookie, setCookie} from "./useHelper.js";
import {makeRandomHash} from "./HashGenerator.js";
import {useRouter} from "vue-router";
import {useToast} from "vue-toastification";

export const useItemCart= (props)=>{
    const cartStore=useCartStore()
    const productQuantity=ref(props.quantity)
    const productPrice=computed(()=>cartStore.getProductPrice(props.productId))
    let productLink=computed(()=>{
        if(typeof props.link==='string'){
            return props.link
        }else{
            return `/Products/Art/${props.link.params.name}?id=${props.productId}#${props.category}`
        }
    })

    const decrement = () => {
        productQuantity.value--
        if(productQuantity.value<1){
            productQuantity.value=1
        }
        cartStore.decreaseProductQuantity(props.productId,productQuantity.value)
    }

    const increment = () => {
        productQuantity.value++
        if(productQuantity.value>props.available){
            productQuantity.value=props.available
        }
        cartStore.increaseProductQuantity(props.productId,productQuantity.value)
    }

    const removeProduct = () => {
      cartStore.removeProductCart(props.productId)
    }



    return{
        productLink,decrement,increment,productQuantity,removeProduct,productPrice
    }
}


export const useCart=()=>{
    const router=useRouter()
    const cartStore=useCartStore()
    const cartList=computed(()=>cartStore.getCart)
    const cartLen=computed(()=>cartStore.cartLength)
    const totalPrice=computed(()=>cartStore.getTotalPrice)
    const windowWidth=window.innerWidth
    const toast = useToast()

    const goToCheckout = () => {
        if(cartLen.value>0){
            if(document.cookie.includes('secure_session_id')){
                let id=getCookie('checkout_token').id
                let hash=getCookie('checkout_token').hash
                router.push({
                    name:'INFORMATION',
                    params:{
                        id:id,
                        token:hash
                    }
                })

            }else{
                let hash=makeRandomHash(20)
                let id=generateRandomNumber()
                let randomHashUrl=makeRandomHash(15)
                setCookie('secure_session_id',makeRandomHash(10),`/`,30)
                setCookie('checkout_token', JSON.stringify({id:id,hash:randomHashUrl}),`/`,30)
                setCookie('checkout',hash,`/${id}/checkout/${randomHashUrl}`,30)
                setCookie('tracked_start_session',randomHashUrl,`/${id}`,30)
                router.push({
                    name:'INFORMATION',
                    params:{
                        id:id,
                        token:randomHashUrl
                    }
                })
            }
        }else{
            toast.error(`There is no item in your cart!`)
        }
    }

    return{
        cartList,cartLen,cartStore,toast,totalPrice,windowWidth,goToCheckout
    }

}