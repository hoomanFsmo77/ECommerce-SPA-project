import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useProductStore} from "../store/Products.js";

export default (carousel)=>{
    const productData={
        gallery:[
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-wave-brentos-poster.png?v=1599308423&width=840 840w"
            },
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-poster.jpg?v=1600927715&width=2100 2100w"
            },
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-tourism-poster-brentos.jpg?v=1600927715&width=2100 2100w"
            },
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/retro-australian-poster.jpg?v=1600927715&width=2100 2100w"
            },
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/australia-kangaroo-beach-poster-brentos.jpg?v=1600927715&width=2100 2100w"
            },
            {
                "zoom": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704",
                "src": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=480",
                "srcset": "//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/products/vintage-australiana-poster-brentos.jpg?v=1600927704&width=2100 2100w"
            }

        ],
        title:'Australia Kangaroos Poster',
        available:5,
        description:[
            {
                content:'I believe in creating beautiful Australian Made products using the highest quality materials, and in doing so giving a voice to our native wildlife and supporting local businesses.'
            },
            {
                content: 'This poster print features a beach scene with two Kangaroos looking out towards a perfect barrelling wave with vintage typography underneath with the text \'Australia - Somewhere in The Southern Hemisphere.'
            },{
                content: 'Each poster print is printed on thick 250gsm slightly matte paper that make the pastel colours really pop.'
            },
            {
                content: '<img src="https://cdn.shopify.com/s/files/1/0272/9548/1943/files/australian-made-bar3.png?v=1599223146""/>'
            }
        ],
        hasFrame:true,
        option:{
            sizes:[
                {
                    size:'A3',
                    price:40,
                    available:true,
                    frame:{
                        price:80,
                        available:true
                    }
                },{
                    size:'A2',
                    price:80,
                    available:true,
                    frame:{
                        price:100,
                        available:true
                    }

                },{
                    size:'A1',
                    price:120,
                    available:true,
                    frame:{
                        price:120,
                        available:true
                    }

                }
            ]
        },
        price:40,
        link:{
            facebook:'#',
            twitter:'#',
            pinterest:'#'
        },
        isSoldOut:false,
        discount:null
    }

    const productStore=useProductStore()
    const popularProducts=computed(()=>productStore.getPopularProduct)
    const fetchFlag=computed(()=>productStore.getPopularProductFetchFlag)
    const route=useRoute()
    const productId=ref(route.query.id)
    const quantity=ref(1)
    const sizeIndex=ref(0)
    const whichFrame=ref(0)
    const totalPriceWithFrame=computed(()=>productData.option.sizes[sizeIndex.value].frame ? (productData.option.sizes[sizeIndex.value].price + productData.option.sizes[sizeIndex.value].frame.price).toFixed(2) :  (productData.option.sizes[sizeIndex.value].price.toFixed(2) ?? productData.price));
    const totalPriceWithOutFrame=computed(()=>productData.option.sizes[sizeIndex.value].price.toFixed(2))
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
        if(quantity.value>productData.available){
            quantity.value=productData.available
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
                size:productData.option.sizes[sizeIndex.value].size,
                frame:whichFrame.value===0 ? 'No frame' : 'Recycled Timber Frame',
                price:whichFrame.value===0 ? totalPriceWithOutFrame.value : totalPriceWithFrame.value
            },
            discount:productData.discount || 0
        }
    })
    const addToCart = () => {
        console.log(userProductDetail.value)
    }
    onMounted(()=>{
        productStore.fetchPopularProduct()
    })
    const changeFrame = index => {
      carousel.value.slideTo(index)
      whichFrame.value=index
    }

    return {
        productData,productId,quantity,changeSize,increment,decrement,addToCart,route,
        popularProducts,fetchFlag,changeFrame,sizeIndex,totalPriceWithFrame,whichFrame,totalPriceWithOutFrame
    }
}