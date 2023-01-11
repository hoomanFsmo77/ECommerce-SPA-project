import {useCollectionStore} from "../store/collection.js";
import {onMounted} from "vue";

export default ()=>{
    const collectionStore=useCollectionStore()
    onMounted(()=>{
        collectionStore.setCollectionData()
    })
}