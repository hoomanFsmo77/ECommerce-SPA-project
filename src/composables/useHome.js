import {useCollectionStore} from "../store/collection.js";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

export default ()=>{
    const collectionStore=useCollectionStore()
    const isLoading=ref(false)
    const router=useRouter()


    onMounted(()=>{
        collectionStore.setCollectionData()
    })

    router.beforeEach((to,from,next)=>{
        isLoading.value=true
        next()
    })

    router.beforeResolve((to,from,next)=>{
        isLoading.value=false
        next()
    })
    return {isLoading}

}