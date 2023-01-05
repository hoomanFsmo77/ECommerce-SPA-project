import {computed, ref, watch} from "vue";
import {useCartStore} from "../store/Cart.js";
import {useRoute} from "vue-router";


export const useDesktopHeader=()=>{
    const isOn=ref(false)
    const searchText=ref('')
    const store=useCartStore()
    const route=useRoute()
    const cartLength=computed(()=>store.cartLength)
    const totalPrice=computed(()=>store.totalPrice.toFixed(2))
    const showResult=e=>{
        isOn.value=e
    }
    const closeResult = e => {
        isOn.value=e
    }
    watch(
        ()=>route.path,
        ()=>{
            isOn.value=false
            searchText.value=''
        }
    )
    return {isOn,showResult,searchText,cartLength,totalPrice,closeResult}
}