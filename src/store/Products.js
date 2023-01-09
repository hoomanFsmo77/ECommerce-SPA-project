import {defineStore} from "pinia";
import axios from "axios";
export const useProductStore=defineStore('products',{
    state:()=>{
        return{
            products:null
        }
    },
    getters:{
        getCollectionData:(state)=>(name)=>{
            if(state.products){
                return state.products[name]
            }
        },
        getPopularProducts(state){
            let popular=[]
            if(state.products){
                Object.entries(state.products).forEach(product=>{
                    product[1].forEach(item=>{
                        item?.isPopular ? popular.push(item) : null
                    })
                })
            }
            if(popular.length>0){
                return popular
            }
        }
    },
    actions:{
        setProductLists(){
            axios.get('./data/ProductsData.json').then(response=>{
                this.products=response.data[Object.keys(response.data)[0]]
            })
        }

    }
})