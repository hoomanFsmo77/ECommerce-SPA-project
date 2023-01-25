import {watch,ref,computed,onMounted} from "vue";
import {useRoute,useRouter} from "vue-router";
import {generateRandomNumber, getCookie, setCookie} from "./useHelper.js";
import {useCheckoutStore} from "../store/checkout.js";
import {useCartStore} from "../store/Cart.js";
import axios from "axios";
let cookieId=getCookie('checkout_token').id
let cookieHash=getCookie('checkout_token').hash




export const useCheckoutPageValidation=()=>{
    const route=useRoute()
    const router=useRouter()
    const checkoutStore=useCheckoutStore()
    const cartStore=useCartStore()

    watch(
        ()=>route.params,
        ()=>{
            let cookieId=getCookie('checkout_token').id
            let cookieHash=getCookie('checkout_token').hash
            if(route.params.id!=cookieId || route.params.token!=cookieHash){
                router.push({name:'NOT_FOUND'})
            }
        },{
            immediate:true
        }
    )
    router.beforeEach((to,from,next)=>{
        if(from.name==='ORDER_SUMMARY' && to.name==='PAYMENT'){
            next({
                name:'NOT_FOUND'
            })
            cartStore.resetCart()
            checkoutStore.resetCheckout()
        }else{
            next()
        }
    })

}
export const useCheckoutCollection=()=>{
    //// country
    const country=ref({
        code:'us',
        name:'United State of America'
    })
    const countryData=ref([])
    const countryFlag=ref(false)

    //// state
    const stateFlag=ref(false)
    const state=ref({code:''})
    const stateData=ref([])

    ///// form
    const contactInfo=ref('')
    const news=ref(false)
    const firstname=ref('')
    const lastname=ref('')
    const address=ref('')
    const addressType=ref('')
    const city=ref('')
    const zip=ref('')

    const userInfo=computed(()=>{
        return{
            contactInfo:{
                value:contactInfo.value,
                valid:false
            },
            news:news.value,
            country:{
                value:country.value,
                valid:false
            },
            firstname:{
                value:firstname.value,
                valid:false
            },
            lastname:{
                value:lastname.value,
                valid:false
            },
            address:{
                value:address.value,
                valid:false
            },
            addressType:addressType.value,
            state:{
                value:state.value,
                valid:false
            },
            zip:{
                value:zip.value,
                valid:false
            },
            city:{
                value:city.value,
                valid:false
            }
        }
    })

    watch(
        ()=>country.value,
        ()=>{
            state.value.code=''
            stateData.value=[]
            axios.get(`http://battuta.medunes.net/api/region/${country.value.code}/all/?key=470af792c1181f18e0ec0ec9cf03e091`).then(response=>{
                stateData.value=response.data
                stateFlag.value=true
            })
        },{
            immediate:true
        }
    )
    onMounted(()=>{
        axios.get('http://battuta.medunes.net/api/country/all/?key=470af792c1181f18e0ec0ec9cf03e091').then(response=>{
            countryData.value=response.data
            countryFlag.value=true
        })
    })
    const validation = (condition,target) => {
        if(condition){
            userInfo.value[target].valid=true
            return false;
        }else{
            userInfo.value[target].valid=false
            return true;
        }
    }

    const setUserInformation = info => {
        country.value.code=info.country.value.code
        country.value.name=info.country.value.name
        state.value.code=info.state.value.code
        contactInfo.value=info.contactInfo.value
        news.value=info.news
        firstname.value=info.firstname.value
        lastname.value=info.lastname.value
        address.value=info.address.value
        addressType.value=info.addressType
        city.value=info.city.value
        zip.value=info.zip.value
    }
    return{
        country,countryData,countryFlag,state,stateData,contactInfo,news,firstname,lastname,address,addressType,city,zip,stateFlag,userInfo,validation,setUserInformation
    }
}
export const useCheckout=()=>{


    //// cart
    const cartStore=useCartStore()
    const cartList=computed(()=>cartStore.getCart)
    const totalPrice=computed(()=>cartStore.getTotalPrice)
    const isCollapse=ref(false)

    //// checkout
    const checkoutStore=useCheckoutStore()
    const userInformationShippingStore=computed(()=>checkoutStore.getUserInformationShipping)
    const hasShippingStore=computed(()=>checkoutStore.hasShippingMethod)

    //// modal
    const isOpenModal=ref(false)
    const modalTarget=ref('')
    const policyData=ref([])
    const fetchFlag=ref(false)

    const windowWidth=window.innerWidth

    //////////////
    const openModal = target => {
        isOpenModal.value=!isOpenModal.value
        modalTarget.value=target
        policyData.value=[]
        fetchFlag.value=true
        axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/policy/policyData/${target}.json`).then(response=>{
            fetchFlag.value=false
            policyData.value=response.data
        })

    }
    const closeModal =e => {
        isOpenModal.value=e
    }

    return{
        cartList,totalPrice,isCollapse,isOpenModal,modalTarget,policyData,fetchFlag,openModal,closeModal,windowWidth,hasShippingStore,userInformationShippingStore
    }
}
export const useCheckoutLinks=()=>{
    ///// checkout
    const checkoutStore=useCheckoutStore()
    const userInformationContactStore=computed(()=>checkoutStore.getUserInformationContact)

    const calculateShippingMethodLink=computed(()=>{
        return {
            name:'SHIPPING',
            params:{
                id:cookieId,
                token:cookieHash
            },
            query:{
                'step':'shipping_method'
            }
        }
    })
    const calculateContactInfoLink=computed(()=>{
        return{
            name:'INFORMATION',
            params:{
                id:cookieId,
                token:cookieHash
            },
            query:{
                'current_step':'contact_information'
            }
        }
    })
    const calculateShippingAddress=computed(()=>{
        return `${userInformationContactStore.value.address.value}, ${userInformationContactStore.value.city.value}, ${userInformationContactStore.value.state.value.code} ${userInformationContactStore.value.zip.value}, ${userInformationContactStore.value.country.value.name}`
    })


    return{
        calculateShippingMethodLink,calculateContactInfoLink,calculateShippingAddress
    }
}
export const useInformation=(props,userInfo,setUserInformation)=>{
    //// checkout store
    const checkoutStore=useCheckoutStore()
    const userInformationContactStore=computed(()=>checkoutStore.getUserInformationContact)

    const route=useRoute()
    const router=useRouter()


    const goShipping = () => {
        let result=[]
        Object.entries(userInfo.value).forEach(item=>{
          typeof item[1]?.valid === 'boolean' && result.push(item[1]?.valid)
        })
        if(result.every(item=>item===true)){
            checkoutStore.setUserInformationContact(userInfo.value)
            router.push({
                name:'SHIPPING',
                params:{
                    id:cookieId,
                    token:cookieHash
                },
                query:{
                    'previous_step':'contact_information',
                    'current_step':'shipping_method'
                }
            })
        }
    }



    watch(
        ()=>route.params,
        ()=>{
            if(route.query.current_step==='contact_information'){
                setUserInformation(userInformationContactStore.value)
            }

        },{
            immediate:true
        }
    )


    return{goShipping}
}
export const useShipping=()=>{
    //// route
    const route=useRoute()

    ///// checkout
    const checkoutStore=useCheckoutStore()
    const userInformationContactStore=computed(()=>checkoutStore.getUserInformationContact)
    const userInformationShippingStore=computed(()=>checkoutStore.getUserInformationShipping)
    const hasShippingStore=computed(()=>checkoutStore.hasShippingMethod)
    const shippingMethods=[
        {
            id:1,
            name:'Standard International',
            time:'6 to 27 business days',
            price:30
        }
    ]
    const methodIndex=ref( 0)
    const selectedMethod=index=>{
        methodIndex.value=index
        checkoutStore.setUserInformationShipping(shippingMethods[index])
    }


    onMounted(()=>{
        if(!hasShippingStore.value){
            selectedMethod(0)
        }
    })




    watch(
        ()=>route.query,
        ()=>{
            if(hasShippingStore.value &&  (route.query.step==='shipping_method' || route.query.current_step==='shipping_method')){
                selectedMethod(userInformationShippingStore.value.id-1)
            }
        },{
            immediate:true
        }
    )


    return{
        userInformationContactStore,shippingMethods,selectedMethod,cookieId,cookieHash,methodIndex
    }
}
export const usePayment=(userInfo)=>{

    const isOpenModal=ref(false)

    ///// checkout
    const checkoutStore=useCheckoutStore()
    const userInformationContactStore=computed(()=>checkoutStore.getUserInformationContact)
    const userInformationShippingStore=computed(()=>checkoutStore.getUserInformationShipping)
    const allInformation=computed(()=>checkoutStore.getAllInformation)

    const wantChangeMethod=ref(false)
    const wantRemember=ref(false)
    const phoneNumber=ref('')
    const cardName=ref('')
    const userCardInfo={
        cardNumber:{
            value:'',
            valid:false
        },
        cardName:{
            value:'',
            valid:false
        },
        expireDay:{
            value:'',
            valid:false
        },
        securityCode:{
            value:'',
            valid:false
        }
    }
    const setValue = (e,prop) => {
        userCardInfo[prop].value=e
        userCardInfo[prop].valid=true
    }

    const finishPayment = () => {
        let result=[]
        Object.entries(userCardInfo).forEach(item=>{
            typeof item[1]?.valid === 'boolean' && result.push(item[1]?.valid)
        })
        if(result.every(item=>item===true)){
            checkoutStore.setUserInformationCart(userCardInfo)
            if(wantChangeMethod.value){
                checkoutStore.setUserInformationContact(userInfo.value)
            }
            if(wantRemember.value){
                checkoutStore.setUserInformationRemember(phoneNumber.value)
            }
            isOpenModal.value=!isOpenModal.value
        }
    }

    return{
        userInformationContactStore,userInformationShippingStore,wantChangeMethod,wantRemember,phoneNumber,cardName,finishPayment,setValue,isOpenModal
    }
}