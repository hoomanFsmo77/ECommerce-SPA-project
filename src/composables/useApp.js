import {useCollectionData} from "../store/collection.js";
import {onMounted} from "vue";

export default ()=>{
    const collectionStore=useCollectionData()
    onMounted(()=>{
        collectionStore.setCollectionData()
    })
}