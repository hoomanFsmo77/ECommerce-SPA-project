import {computed, ref} from "vue";
import {useProductStore} from "../store/Products.js";
import {useCartStore} from "../store/Cart.js";
import {useRoute} from "vue-router";

export default (carousel,props)=>{
    const route=useRoute()
    const productStore=useProductStore()
    const cartStore=useCartStore()
    const productData=computed(()=>productStore.getProductData)
    const productDetailFlag=computed(()=>productStore.getProductDetailDataFlag)
    const productId=ref(props.id)
    const quantity=ref(1)
    const sizeIndex=ref(0)
    const familyIndex=ref(0)
    const whichFrame=ref(0)
    const totalPriceWithFrame=computed(()=>productData.value.option.sizes[sizeIndex.value].frame ? (productData.value.option.sizes[sizeIndex.value].price + productData.value.option.sizes[sizeIndex.value].frame.price).toFixed(2) :  (productData.value.option.sizes[sizeIndex.value].price.toFixed(2) ?? productData.value.price.toFixed(2)));
    const totalPriceWithOutFrame=computed(()=>productData.value?.option?.sizes ? productData.value.option.sizes[sizeIndex.value].price.toFixed(2) : productData.value.price.toFixed(2))


    const changeSize = (target,index) => {
        if(target.available){
            userProductDetail.value.priceDetail.size=target.size
            sizeIndex.value=index
            whichFrame.value=0
        }
    }
    const increment = () => {
        quantity.value++
        if(quantity.value>productData.value.available){
            quantity.value=productData.value.available
        }
    }
    const decrement = () => {
        quantity.value--
        if(quantity.value<1){
            quantity.value=1
        }
    }
    const userProductDetail=computed(()=>{
        return{
            src:productData.value.gallery[0].src,
            srcset:productData.value.gallery[0].srcset,
            available:productData.value.available,
            title:productData.value.title,
            productId:productId.value,
            link:props.link,
            category:props.category ?? route.params.name,
            quantity:quantity.value,
            priceDetail:{
                size:productData.value?.option?.sizes ? productData.value.option.sizes[sizeIndex.value].size : null,
                frame:productData.value.hasFrame ? (whichFrame.value===0 ? 'No frame' : 'Recycled Timber Frame') : null,
                price:whichFrame.value===0 ? totalPriceWithOutFrame.value : totalPriceWithFrame.value,
                family:productData.value.hasFamily ? (productData.value.option.family[familyIndex.value].item) : null
            },
            discount:productData.value.discount || null
        }
    })

    const addToCart = () => {
        cartStore.addToUserCart(userProductDetail.value)
    }

    const changeFrame = index => {
        carousel.value.slideTo(index)
        whichFrame.value=index
    }
    const changeFamily=(imageIndex,itemIndex)=>{
        carousel.value.slideTo(imageIndex)
        familyIndex.value=itemIndex
    }
    const setSelectedSize = computed(() => {
        if(productDetailFlag.value){
            sizeIndex.value=productData.value.option.sizes.findIndex(item=>item.available)
        }
    })


    return {
        productData,productDetailFlag,quantity,sizeIndex,familyIndex,whichFrame,totalPriceWithOutFrame,totalPriceWithFrame,increment,decrement,addToCart,changeFrame,changeFamily,changeSize,setSelectedSize
    }
}