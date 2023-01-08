import {useCollectionData} from "../store/collection.js";
import {onMounted} from "vue";

export default ()=>{
    const store=useCollectionData()
    onMounted(()=>{
        store.setCollectionData()
    })

}