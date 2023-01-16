import {defineStore} from "pinia";
import axios from "axios";

const filterCollection = (data,searchText) => {
    return data.filter(item=>item.text.toLowerCase().startsWith(searchText.toLowerCase()))
}
const filterProducts = (data,searchText) => {
    let result=[]
    Object.entries(data).forEach(item=>{
        item[1].forEach(product=>{
            if(product.title.toLowerCase().startsWith(searchText.toLowerCase())){
                result.push({...product,category:item[0]})
            }
        })
    })
    return result.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
}



export const useSearchStore=defineStore('search',{
    state:()=>{
        return{
            navbarSearchResult:{collection:''},
            navbarSearchFlag:false,


            mainSearchResult:[],
            mainSearchFlag:false
        }
    },
    getters:{
      getNavbarSearchFlag(state){
          return state.navbarSearchFlag
      },
      getNavbarSearchResult(state){
          return state.navbarSearchResult
      },
      getMainSearchFlag(state){
          return state.mainSearchFlag
      },
      getMainSearchResult(state){
          return state.mainSearchResult
      },
      searchLength(state){
          return state.mainSearchResult.length
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
                this.navbarSearchResult.product=filterProducts(response[1].data,value).slice(0,4)
                this.navbarSearchFlag=true
            })
        },
        resetFlag(value){
            this.navbarSearchFlag=value
        },
         triggerMainSearch(value){
            this.mainSearchResult=[]
            this.mainSearchFlag=false
            axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData.json').then(response=>{
                this.mainSearchResult=filterProducts(response.data,value)
                this.mainSearchFlag=true
            })
        }

    }
})