import {useRoute,useRouter} from "vue-router";
import {watch,computed,ref} from "vue";
import {useSearchStore} from "../store/search.js";


export default ()=>{
    const route=useRoute()
    const router=useRouter()
    const searchStore=useSearchStore()
    const searchResult=computed(()=>searchStore.getMainSearchResult)
    const searchFlag=computed(()=>searchStore.getMainSearchFlag)
    const searchLen=computed(()=>searchStore.searchLength)
    const searchText=ref('')
    const start=ref(0)
    const end=ref(searchLen)
    watch(
        ()=>route.query.search,
        ()=>{
            if(route.name==='SEARCH'){
               searchStore.triggerMainSearch(route.query.search)
            }
        },
        {
            immediate:true
        }
    )
    const triggerSearch = () => {
      router.push({
          name:'SEARCH',
          query:{
              search:searchText.value
          }
      })
    }
    const updatePaginationPeriod = e => {
        start.value=e.start
        end.value=e.end
    }
    

    return{
        route,searchFlag,searchResult,searchLen,triggerSearch,searchText,updatePaginationPeriod,start,end
    }
}