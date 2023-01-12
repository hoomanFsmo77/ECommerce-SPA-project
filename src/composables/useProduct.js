import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useProductStore} from "../store/Products.js";

export default ()=>{
    const productStore=useProductStore()
    const popularProducts=computed(()=>productStore.getPopularProduct)
    const fetchFlag=computed(()=>productStore.getPopularProductFetchFlag)
    const route=useRoute()
    const productId=ref(route.query.id)
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
        description:[
            {
                content:'I believe in creating beautiful Australian Made products using the highest quality materials, and in doing so giving a voice to our native wildlife and supporting local businesses.'
            },
            {
                content: 'This poster print features a beach scene with two Kangaroos looking out towards a perfect barrelling wave with vintage typography underneath with the text \'Australia - Somewhere in The Southern Hemisphere.'
            },{
                content: 'Each poster print is printed on thick 250gsm slightly matte paper that make the pastel colours really pop.'
            }
        ],
        option:{
            sizes:[
                {
                    size:'A3',
                    price:40
                },{
                    size:'A2',
                    price:80
                },{
                    size:'A1',
                    price:120
                }
            ],
        },
        price:35,
        link:{
            facebook:'#',
            twitter:'#',
            pinterest:'#'
        },
        isSoldOut:false,
        discount:null
    }
    const price=ref(productData.price)
    const quantity=ref(1)
    const changeSize = (newPrice,size) => {
        price.value=newPrice
        userProductDetail.priceDetail=size
    }
    const increment = () => {
        quantity.value++
        userProductDetail.quantity++
    }
    const decrement = () => {
        quantity.value--
        userProductDetail.quantity--
        if(quantity.value<1){
            quantity.value=1
        }
    }
    const setInitialSize = item => {
        if(item){
            userProductDetail.priceDetail.size=item.size
        }
    }
    const userProductDetail={
        productId:productId.value,
        category:route.hash.slice(1),
        quantity:1,
        priceDetail:{
            size:'',
            price:price.value
        },
        discount:productData.discount || 0
    }
    const addToCart = () => {
        console.log(userProductDetail)
    }
    onMounted(()=>{
        productStore.fetchPopularProduct()
    })

    return {
        productData,productId,price,quantity,changeSize,increment,decrement,setInitialSize,addToCart,route,
        popularProducts,fetchFlag
    }
}