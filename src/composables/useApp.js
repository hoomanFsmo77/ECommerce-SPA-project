import {useCollectionData} from "../store/collection.js";
import {useProductStore} from "../store/Products.js";
import {onMounted} from "vue";

export default ()=>{
    const collectionStore=useCollectionData()
    const productStore=useProductStore()
    onMounted(()=>{
        collectionStore.setCollectionData()
        productStore.setProductLists()
    })

}