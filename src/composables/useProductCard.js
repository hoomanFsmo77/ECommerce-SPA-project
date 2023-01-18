import {computed, ref} from "vue";
import {useProductStore} from "../store/Products.js";

export default (props)=>{
    const productStore=useProductStore()
    const fetchFlag=computed(()=>productStore.getProductDetailDataFlag)
    let isLoading=ref(true)
    let discountPercent=computed(()=>Math.ceil((1-(props.discount / props.price))*100))
    let isActive=ref(false)
    const toggleModal = () => {
        isActive.value=!isActive.value
        document.body.style.overflow=isActive.value ? 'hidden' : 'auto'
        if(isActive.value){
            productStore.fetchProductDetail(props.id)
        }
    }
    const closeModal = e => {
        isActive.value=e
        document.body.style.overflow=isActive.value ? 'hidden' : 'auto'
    }
    const imageLoad = () => {
        isLoading.value=false
    }

    return {discountPercent,toggleModal,closeModal,isActive,isLoading,imageLoad,fetchFlag}
}