import {watch,ref,computed,onMounted} from "vue";
import {useRoute,useRouter} from "vue-router";
import {generateRandomNumber, getCookie, setCookie} from "./useHelper.js";
import {useCheckoutStore} from "../store/checkout.js";
import {useCartStore} from "../store/Cart.js";
import axios from "axios";

export const useCheckout=(props)=>{
    //// cart
    const cartStore=useCartStore()
    const cartList=computed(()=>cartStore.getCart)
    const totalPrice=computed(()=>cartStore.getTotalPrice)
    const isCollapse=ref(false)

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
        cartList,totalPrice,isCollapse,isOpenModal,modalTarget,policyData,fetchFlag,openModal,closeModal,windowWidth
    }
}


export const useInformation=(props)=>{
    //// checkout store
    const checkoutStore=useCheckoutStore()
    const userInformationStore=computed(()=>checkoutStore.getUserInformation)

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


    const route=useRoute()
    const router=useRouter()

    ///// form
    const contactInfo=ref('')
    const news=ref(false)
    const firstname=ref('')
    const lastname=ref('')
    const address=ref('')
    const addressType=ref('')
    const city=ref('')
    const zip=ref('')

    let cookieId=getCookie('checkout_token').id
    let cookieHash=getCookie('checkout_token').hash
    /////////////////////////////////////////////////////////////


    watch(
        ()=>country.value,
        ()=>{
            state.value.code=''
            stateData.value=[]
            axios.get(`http://battuta.medunes.net/api/region/${country.value.code}/all/?key=429cde78b78143d632027ccc2adde41b`).then(response=>{
                stateData.value=response.data
                stateFlag.value=true
            })
        },{
            immediate:true
        }
    )

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

    const goShipping = () => {
        let result=[]
        Object.entries(userInfo.value).forEach(item=>{
          typeof item[1]?.valid === 'boolean' && result.push(item[1]?.valid)
        })
        if(result.every(item=>item===true)){
            checkoutStore.setUserInformation(userInfo.value)
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

    onMounted(()=>{
        axios.get('http://battuta.medunes.net/api/country/all/?key=429cde78b78143d632027ccc2adde41b').then(response=>{
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


    watch(
        ()=>route.params,
        ()=>{

            if(props.id!==cookieId && props.token!==cookieHash){
                router.push({name:'NOT_FOUND'})
            }
            if(route.query.current_step==='contact_information'){
                setUserInformation(userInformationStore.value)

            }

        },{
            immediate:true
        }
    )


    return{contactInfo,news,userInfo,country,firstname,lastname,address,addressType,state,zip,city,goShipping,countryData,stateData,countryFlag,stateFlag,validation}
}

export const useShipping=()=>{
    const checkoutStore=useCheckoutStore()
    const userInformationStore=computed(()=>checkoutStore.getUserInformation)

    const calculatePreviousLink=computed(()=>{
        let id=getCookie('checkout_token').id
        let hash=getCookie('checkout_token').hash
        return{
            name:'INFORMATION',
            params:{
                id:id,
                token:hash
            },
            query:{
                'current_step':'contact_information'
            }
        }
    })
    const calculateShippingAddress=computed(()=>{
        return `${userInformationStore.value.address.value}, ${userInformationStore.value.city.value}, ${userInformationStore.value.state.value.code} ${userInformationStore.value.zip.value}, ${userInformationStore.value.country.value.name}`
    })

    const goPayment = () => {
        checkoutStore.addShippingMethod({
            name:'Standard International',
            time:'6 to 27 business days',
            price:30
        })
    }



    return{
        calculatePreviousLink,userInformationStore,calculateShippingAddress,goPayment
    }
}