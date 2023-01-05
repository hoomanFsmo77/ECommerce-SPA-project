import {createRouter,createWebHashHistory} from "vue-router";

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
const PAINTINGS=()=>import('./pages/pages/Paintings.vue')
const COMICS=()=>import('./pages/pages/Comics.vue')
const MURALS_AND_PUBLIC_ART=()=>import('./pages/pages/Murals and Public Art.vue')
const CONTACT_BRENTOS=()=>import('./pages/pages/contact brentos.vue')
const BRAND_COLLABORATIONS=()=>import('./pages/pages/Brand Collaborations.vue')
const OUR_STORY=()=>import('./pages/pages/our story.vue')

//// policy pages
const POLICY_INDEX=()=>import('./pages/policy/index.vue')
const REFUND_POLICY=()=>import('./pages/policy/refund policy.vue')
const PRIVACY_POLICY=()=>import('./pages/policy/privacy policy.vue')
const TERMS_OF_SERVICE=()=>import('./pages/policy/terms of service.vue')

//// product pages
const PRODUCT_INDEX=()=>import('./pages/product/index.vue')
const PRODUCT=()=>import('./pages/product/Product.vue')
const ART=()=>import('./pages/product/Art.vue')

//// checkout page
const CHECKOUT_INDEX=()=>import('./pages/checkout/index.vue')
const INFORMATION=()=>import('./pages/checkout/information.vue')
const PAYMENT=()=>import('./pages/checkout/payment.vue')
const SHIPPING=()=>import('./pages/checkout/shipping.vue')

//// search page
const SEARCH=()=>import('./pages/Search.vue')

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
                        name:'REFUND_POLICY',
                        path:'/refund-policy',
                        component:REFUND_POLICY
                    },
                    {
                        name:'TERMS_OF_SERVICE',
                        path:'/terms-of-service',
                        component:TERMS_OF_SERVICE
                    },
                    {
                        name:'PRIVACY_POLICY',
                        path:'/privacy-policy',
                        component:PRIVACY_POLICY
                    },

                ]
            },
            {
                name:'PAGES_INDEX',
                path:'/Pages',
                component:PAGES_INDEX,
                children: [
                    {
                        name:'PAINTINGS',
                        path:'/Paintings',
                        component:PAINTINGS
                    },
                    {
                        name:'COMICS',
                        path:'/Comics',
                        component:COMICS
                    },{
                        name:'MURALS_AND_PUBLIC_ART',
                        path:'/Murals-and-Public-Art',
                        component:MURALS_AND_PUBLIC_ART
                    },{
                        name:'CONTACT_BRENTOS',
                        path:'/contact-brentos',
                        component:CONTACT_BRENTOS
                    },{
                        name:'BRAND_COLLABORATIONS',
                        path:'/Brand-Collaborations',
                        component:BRAND_COLLABORATIONS
                    },{
                        name:'OUR_STORY',
                        path:'/our-story',
                        component:OUR_STORY
                    },


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
                        path:':name',
                        component:ART,
                        props: true
                    },

                ]
            },
          {
              name:'SEARCH',
              path:'/search',
              component:SEARCH
          },
      ]
    },
    {
        name:'',
        component:CHECKOUT_INDEX,
        path: '/checkout',
        children: [
            {
                name:'INFORMATION',
                component:INFORMATION,
                path: 'information'
            },{
                name:'PAYMENT',
                component:PAYMENT,
                path: 'payment'
            },{
                name:'SHIPPING',
                component:SHIPPING,
                path: 'shipping'
            },
        ]
    }




]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router