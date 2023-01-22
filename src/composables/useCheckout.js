import {watch,ref,computed} from "vue";
import {useRoute,useRouter} from "vue-router";
import {generateRandomNumber, getCookie, setCookie} from "./useHelper.js";
import {useCartStore} from "../store/Cart.js";

export const useInformation=(props)=>{
    const cartStore=useCartStore()
    const cartList=computed(()=>cartStore.getCart)
    const totalPrice=computed(()=>cartStore.getTotalPrice)
    const isCollapse=ref(false)
    const windowWidth=window.innerWidth
    const route=useRoute()
    const router=useRouter()
    const contactInfo=ref('')
    const news=ref(false)
    const country=ref('United State')
    const firstname=ref('')
    const lastname=ref('')
    const address=ref('')
    const addressType=ref('')
    const city=ref('')
    const state=ref('')
    const zip=ref('')
    watch(
        ()=>route.params,
        ()=>{
            let id=getCookie('checkout_token').id
            let hash=getCookie('checkout_token').hash
            if(props.id!==id && props.token!==hash){
                router.push({name:'NOT_FOUND'})
            }

        },{
            immediate:true
        }
    )

    const userInfo=computed(()=>{
        return{
            contactInfo:contactInfo.value,
            news:news.value,
            country:country.value,
            firstname:firstname.value,
            lastname:lastname.value,
            address:address.value,
            addressType:addressType.value,
            state:state.value,
            zip:state.value
        }
    })

    const goShipping = () => {

    }
    const openModal = target => {

    }

    return{contactInfo,news,userInfo,country,firstname,lastname,address,addressType,state,zip,city,goShipping,openModal,cartList,totalPrice,windowWidth,isCollapse}
}