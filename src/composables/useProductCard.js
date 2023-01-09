import {computed, ref} from "vue";

export default (props)=>{
    let discountPercent=computed(()=>Math.ceil((1-(props.discount / props.price))*100))
    let isActive=ref(false)
    const toggleModal = () => {
        isActive.value=!isActive.value
        document.body.style.overflow=isActive.value ? 'hidden' : 'auto'
    }
    const closeModal = e => {
        isActive.value=e
        document.body.style.overflow=isActive.value ? 'hidden' : 'auto'
    }

    return {discountPercent,toggleModal,closeModal,isActive}
}