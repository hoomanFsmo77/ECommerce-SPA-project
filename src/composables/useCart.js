import {computed,ref} from "vue";
import {useCartStore} from "../store/Cart.js";


export default (props)=>{
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