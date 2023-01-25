import {createRouter,createWebHashHistory} from "vue-router";
import {getCookie} from "./composables/Cookie.js";

const MAIN_PAGE=()=>import('./pages/Main.vue')

//// 404 page
const NOT_FOUND=()=>import('./pages/404.vue')

//// Cart page
const CART=()=>import('./pages/Cart.vue')

//// Home pages
const HOME=()=>import('./pages/Home.vue')

//// collection page
const COLLECTION_INDEX=()=>import('./pages/Collection/index.vue')
const COLLECTION_LIST=()=>import('./pages/Collection/CollectionList.vue')
const ALL_COLLECTION=()=>import('./pages/Collection/AllCollections.vue')

//// pages
const PAGES_INDEX=()=>import('./pages/pages/index.vue')
const CONTACT_BRENTOS=()=>import('./pages/pages/contact brentos.vue')
const OUR_STORY=()=>import('./pages/pages/our story.vue')
const MAIN_PAGES=()=>import('./pages/pages/Main.vue')

//// policy pages
const POLICY_MAIN=()=>import('./pages/policy/Main.vue')
const POLICY_INDEX=()=>import('./pages/policy/index.vue')


//// product pages
const PRODUCT_INDEX=()=>import('./pages/product/index.vue')
const PRODUCT=()=>import('./pages/product/Product.vue')
const ART=()=>import('./pages/product/Art.vue')

//// checkout page
const CHECKOUT_INDEX=()=>import('./pages/checkout/index.vue')
const INFORMATION=()=>import('./pages/checkout/information.vue')
const PAYMENT=()=>import('./pages/checkout/payment.vue')
const SHIPPING=()=>import('./pages/checkout/shipping.vue')
const ORDER_SUMMARY=()=>import('./pages/checkout/OrderSummary.vue')


//// search page
const SEARCH=()=>import('./pages/Search.vue')

//// challenge page
const CHALLENGE_PAGE=()=>import('./pages/Challenge.vue')

const routes=[
    {
      name:'MAIN_PAGE'  ,
      component:MAIN_PAGE,
      path:'',
      children: [
            {
                name:'HOME',
                path:'',
                component:HOME
            },
            {
                name:'COLLECTION_INDEX',
                path:'/Collections',
                component:COLLECTION_INDEX,
                children:[
                    {
                        name:'ALL_COLLECTION',
                        path:'',
                        component:ALL_COLLECTION
                    },
                    {
                        name:'COLLECTION_LIST',
                        path:':name',
                        component:COLLECTION_LIST,
                        props:true
                    },
                ]
            },
            {
                name:'CART',
                path:'/cart',
                component:CART
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'NOT_FOUND',
                component:NOT_FOUND
            },
            {
                name:'POLICY_INDEX',
                path:'/Policy',
                component:POLICY_INDEX,
                children: [
                    {
                        name:'POLICY_MAIN',
                        path:':name',
                        component:POLICY_MAIN,
                        props:true
                    },

                ]
            },
            {
                name:'PAGES_INDEX',
                path:'/Pages',
                component:PAGES_INDEX,
                children: [
                    {
                        name:'CONTACT_BRENTOS',
                        path:'contact-brentos',
                        component:CONTACT_BRENTOS
                    },{
                        name:'OUR_STORY',
                        path:'our-story',
                        component:OUR_STORY
                    },
                    {
                        name:'MAIN_PAGES',
                        path:':name',
                        component:MAIN_PAGES,
                        props:true
                    }
                ]
            },
            {
                name:'PRODUCT_INDEX',
                path:'/Products',
                component:PRODUCT_INDEX,
                children: [
                    {
                        name:'PRODUCT',
                        path:':name',
                        component:PRODUCT,
                        props: true
                    },
                    {
                        name:'ART',
                        path:'Art/:name',
                        component:ART,
                        props: true
                    },

                ]
            },
          {
              name:'SEARCH',
              path:'/search',
              component:SEARCH,
          },
          {
              name:'CHALLENGE_PAGE',
              component:CHALLENGE_PAGE,
              path: '/challenge'
          }
      ]
    },
    {
        name:'',
        component:CHECKOUT_INDEX,
        path: '',
        children: [
            {
                name:'INFORMATION',
                component:INFORMATION,
                path: ':id/checkout/information/:token',
                props:true
            },{
                name:'PAYMENT',
                component:PAYMENT,
                path: ':id/checkout/payment/:token',
                props:true
            },{
                name:'SHIPPING',
                component:SHIPPING,
                path: ':id/checkout/shipping/:token',
                props:true
            },
        ]
    },{
        name:'ORDER_SUMMARY',
        component:ORDER_SUMMARY,
        path: '/:id/order_summary/:token'
    }




]


const router=createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior(to,from,position){
        if(position){
            return position
        }else{
            return {top:0}
        }

    }
})

router.beforeEach((to,from,next)=>{
    if(to.name==="CHALLENGE_PAGE"){
        if(getCookie('_news_letter_')){
            next()
        }else{
            next({
                name:'NOT_FOUND'
            })
        }
    }else {
        next()
    }
})


export default router