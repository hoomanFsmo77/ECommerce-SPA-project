import {defineStore} from "pinia";
import axios from "axios";
export const useProductStore=defineStore('products',{
    state:()=>{
        return{
            productListData:[],
            productListFetchFlag:false,
            productListErrorFlag:false,

            popularProduct:[],
            popularFetchFlag:false,

            productDetail:{},
            productDetailFetchFlag:false
        }
    },
    getters:{
        getProductListFetchFlag(state){
          return state.productListFetchFlag
        } ,
        getProductListErrorFlag(state){
          return state.productListErrorFlag
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
        },
        getProductData(state){
            if(state.productDetailFetchFlag){
                return state.productDetail
            }
        },
        getProductDetailDataFlag(state){
            return state.productDetailFetchFlag
        }
    },
    actions:{
        fetchProductList(name){
            this.productListData=[]
            this.productListFetchFlag=false
            this.productListErrorFlag=false
            axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/${name}.json`).then(response=>{
                if(response.data){
                    this.productListData=response.data
                    this.productListFetchFlag=true
                }else {
                    this.productListErrorFlag=true
                }
            }).catch(err=>{
                this.productListErrorFlag=true
            })
        },
        fetchPopularProduct(){
            this.popularFetchFlag=false
            axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json').then(response=>{
                this.popularProduct=response.data
                this.popularFetchFlag=true
            })
        },
        fetchProductDetail(id){
            this.productDetailFetchFlag=false
            this.productDetail={}
            axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/${id}.json`).then(response=>{
                this.productDetail=response.data
                this.productDetailFetchFlag=true
            }).catch(err=>{
                this.productDetailFetchFlag=true
            })
        }

    }
})