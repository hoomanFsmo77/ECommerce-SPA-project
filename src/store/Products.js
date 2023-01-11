import {defineStore} from "pinia";
import axios from "axios";
export const useProductStore=defineStore('products',{
    state:()=>{
        return{
            productListData:[],
            productListFetchFlag:false,



            popularProduct:[],
            popularFetchFlag:false
        }
    },
    getters:{
        getProductListFetchFlag(state){
          return state.productListFetchFlag
        } ,
        getProductList(state){
            if(state.productListFetchFlag){
                return state.productListData
            }
        },

        getPopularProductFetchFlag(state){
            return state.popularFetchFlag
        },
        getPopularProduct(state){
            if(state.popularFetchFlag){
                return state.popularProduct
            }
        }
    },
    actions:{
        fetchProductList(name){
            this.productListData=[]
            this.productListFetchFlag=false
            axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/${name}.json`).then(response=>{
                this.productListData=response.data
                this.productListFetchFlag=true
            })
        },
        fetchPopularProduct(){
            this.popularFetchFlag=false
            axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json').then(response=>{
                this.popularProduct=response.data
                this.popularFetchFlag=true
            })
        }

    }
})