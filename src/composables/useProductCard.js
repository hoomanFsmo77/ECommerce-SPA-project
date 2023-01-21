import {computed, ref} from "vue";
import {useProductStore} from "../store/Products.js";
import {useRoute} from "vue-router";
import axios from "axios";
import {useCartStore} from "../store/Cart.js";

export default (props)=>{
    const route=useRoute()
    const productStore=useProductStore()
    const cartStore=useCartStore()
    const addToCartFlag=ref(false)
    const fetchFlag=computed(()=>productStore.getProductDetailDataFlag)
    let isLoading=ref(true)
    let discountPercent=computed(()=>Math.ceil((1-(props.discount / props.price))*100))
    let isActive=ref(false)
    const productLink=computed(()=>{
        if(props.link.name==='PRODUCT'){
            return `/Products/${props.link.params.name}?id=${props.id}#${route.params.name ?? props.category}`
        }else{
            return `/Products/Art/${props.link.params.name}?id=${props.id}#${route.params.name ?? props.category}`
        }
    })


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

    const addToCart = () => {
        addToCartFlag.value=true
        axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/${props.id}.json`).then(response=>{
            cartStore.addToUserCart({
                src:response.data.gallery[0].src,
                available:response.data.available,
                link:productLink.value,
                srcset:response.data.gallery[0].srcset,
                title:response.data.title,
                productId:props.id,
                quantity:1,
                priceDetail:{
                    size: null,
                    frame: null,
                    price:response.data.price,
                    family: null
                },
                discount:response.data.discount || null
            })
            addToCartFlag.value=false

        })
    }

    return {discountPercent,toggleModal,closeModal,isActive,isLoading,imageLoad,fetchFlag,addToCart,productLink,addToCartFlag}
}