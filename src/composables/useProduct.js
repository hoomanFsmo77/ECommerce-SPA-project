import {useRoute} from "vue-router";
import {computed, onMounted, ref,watch} from "vue";
import {useProductStore} from "../store/Products.js";

export default (carousel)=>{
    const productStore=useProductStore()
    const popularProducts=computed(()=>productStore.getPopularProduct)
    const fetchFlag=computed(()=>productStore.getPopularProductFetchFlag)
    const productData=computed(()=>productStore.getProductData)
    const productDetailFlag=computed(()=>productStore.getProductDetailDataFlag)
    const route=useRoute()
    const productId=ref(route.query.id)
    const quantity=ref(1)
    const sizeIndex=ref(0)
    const familyIndex=ref(0)
    const whichFrame=ref(0)
    const totalPriceWithFrame=computed(()=>productData.value.option.sizes[sizeIndex.value].frame ? (productData.value.option.sizes[sizeIndex.value].price + productData.value.option.sizes[sizeIndex.value].frame.price).toFixed(2) :  (productData.value.option.sizes[sizeIndex.value].price.toFixed(2) ?? productData.value.price));
    const totalPriceWithOutFrame=computed(()=>productData.value.option.sizes[sizeIndex.value].price.toFixed(2))
    /////////////////////////////////////////////

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
            productId:productId.value,
            category:route.hash.slice(1),
            quantity:quantity.value,
            priceDetail:{
                size:productData.value.option.sizes[sizeIndex.value].size,
                frame:productData.value.hasFrame ? (whichFrame.value===0 ? 'No frame' : 'Recycled Timber Frame') : null,
                price:whichFrame.value===0 ? totalPriceWithOutFrame.value : totalPriceWithFrame.value,
                family:productData.value.hasFamily ? (productData.value.option.family[familyIndex.value].item) : null
            },
            discount:productData.value.discount || 0
        }
    })
    const addToCart = () => {
        console.log(userProductDetail.value)
    }

    watch(
        ()=>route.path,
        ()=>{
            if(route.name==='ART' || route.name==='PRODUCT'){
                productStore.fetchPopularProduct()
                productStore.fetchProductDetail(productId.value)
            }
        },
        {
            immediate:true
        }
    )




    const changeFrame = index => {
      carousel.value.slideTo(index)
      whichFrame.value=index
    }
    const changeFamily=(imageIndex,itemIndex)=>{
        carousel.value.slideTo(imageIndex)
        familyIndex.value=itemIndex
    }

    return {
        productData,productId,quantity,changeSize,increment,decrement,addToCart,route,
        popularProducts,fetchFlag,changeFrame,sizeIndex,totalPriceWithFrame,whichFrame,totalPriceWithOutFrame,productDetailFlag,changeFamily,familyIndex
    }
}