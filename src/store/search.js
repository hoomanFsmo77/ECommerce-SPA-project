import {defineStore} from "pinia";
import axios from "axios";

const filterCollection = (data,searchText) => {
    return data.filter(item=>item.text.toLowerCase().startsWith(searchText.toLowerCase()))
}
const filterProducts = (data,searchText,limit) => {
    let result=[]
    Object.entries(data).forEach(item=>{
        item[1].forEach(product=>{
            if(product.title.toLowerCase().startsWith(searchText.toLowerCase())){
                result.push({...product,category:item[0]})
            }
        })
    })
    return result.slice(0,limit);
}



export const useSearchStore=defineStore('search',{
    state:()=>{
        return{
            navbarSearchResult:{collection:''},
            navbarSearchFlag:false
        }
    },
    getters:{
      getNavbarSearchFlag(state){
          return state.navbarSearchFlag
      },
      getNavbarSearchResult(state){
          return state.navbarSearchResult
      }
    },
    actions:{
        async triggerNavbarSearch(value){
            this.navbarSearchFlag=false
            this.navbarSearchResult={}
            let collectionReq=await axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/collection/AllCollectionLists.json')
            let productReq=await axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData.json')
            Promise.all([collectionReq,productReq]).then(response=>{
                this.navbarSearchResult.collection=filterCollection(response[0].data,value)
                this.navbarSearchResult.product=filterProducts(response[1].data,value,4)
                this.navbarSearchFlag=true
            })
        },
        resetFlag(value){
            this.navbarSearchFlag=value
        }

    }
})