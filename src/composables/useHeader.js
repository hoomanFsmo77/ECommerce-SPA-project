import {computed, ref, watch} from "vue";
import {useCartStore} from "../store/Cart.js";
import {useRoute} from "vue-router";
import {useSearchStore} from "../store/search.js";

let timeout=null;
let delay=1500;
export const useDesktopHeader=()=>{
    const isOn=ref(false)
    const searchText=ref('')
    const store=useCartStore()
    const searchStore=useSearchStore()
    const route=useRoute()
    const cartLength=computed(()=>store.cartLength)
    const totalPrice=computed(()=>store.totalPrice.toFixed(2))
    const showResult=e=>{
        isOn.value=e
    }
    const closeResult = e => {
        isOn.value=e
    }
    const initSearch = () => {
        searchStore.resetFlag(false)
        if(timeout){
            clearTimeout(timeout)
        }
        timeout=setTimeout(()=>{
            searchAction()
        },delay)
    }
    
    const searchAction = () => {
        if(searchText.value.length>0){
            searchStore.triggerNavbarSearch(searchText.value)
        }
    }

    watch(
        ()=>route.fullPath,
        ()=>{
            isOn.value=false
            searchText.value=''
        }
    )
    return {isOn,showResult,searchText,cartLength,totalPrice,closeResult,initSearch}
}


export  const useMobileHeader=()=>{
    const isOpen=ref(false)
    const route=useRoute()

    const closeMenu = e => {
      isOpen.value=e
    }
    watch(
        ()=>route.path,
        ()=>{
            if(route.name!=='HOME'){
                isOpen.value=false
            }
        }
    )
    return{isOpen,closeMenu}
}