import {defineStore} from "pinia";
import axios from "axios";
export const useProductStore=defineStore('products',{
    state:()=>{
        return{
            products:null,
            fetchFlag:false
        }
    },
    getters:{
        getFetchFlag(state){
          return state.fetchFlag
        },
        getCollectionData:(state)=>(name)=>{
            if(state.fetchFlag){
                return state.products[name]
            }
        },
        getPopularProducts(state){
            let popular=[]
            if(state.fetchFlag){
                Object.entries(state.products).forEach(product=>{
                    product[1].forEach(item=>{
                        item?.isPopular ? popular.push(item) : null
                    })
                })

                return [...new Set(popular)]
            }
        }
    },
    actions:{
        setProductLists(){
            axios.get('./data/ProductListData.json').then(response=>{
                this.products=response.data[Object.keys(response.data)[0]]
                this.fetchFlag=true
            })
        }

    }
})