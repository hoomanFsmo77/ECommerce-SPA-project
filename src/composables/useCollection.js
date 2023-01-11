import {useProductStore} from "../store/Products.js";
import {useRoute} from "vue-router";
import {computed, watch} from "vue";
import {useCollectionStore} from "../store/collection.js";


export const useCollectList=()=>{
    const store=useProductStore()
    const route=useRoute()
    const productListData=computed(()=>store.getProductList)
    const fetchFlag=computed(()=>store.getProductListFetchFlag)
    const errorFlag=computed(()=>store.getProductListErrorFlag)
    watch(
        ()=>route.path,
        ()=>{
            store.fetchProductList(route.params.name)
        },
        {
            immediate:true
        }
    )


    return{
        store,
        route,
        productListData,
        fetchFlag,
        errorFlag
    }
}



export const useAllCollection=()=>{
    const store=useCollectionStore()
    const allCollectionList=computed(()=>store.getAllList)
    const fetchFlag=computed(()=>store.getFetchFlag)
    return{
        allCollectionList,fetchFlag
    }
}