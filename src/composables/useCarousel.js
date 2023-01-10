import {useCollectionData} from "../store/collection.js";
import {computed,ref} from "vue";

export default ()=>{
    const store=useCollectionData()
    const randomCollection=computed(()=>store.getRandomCollection(8))
    const fetchFlag=computed(()=>store.getFetchFlag)
    const settings=ref({
        itemsToShow: 1,
        snapAlign: 'center'
    })
    const carousel=ref(null)
    const next = () => {
        carousel.value.next()
        carousel.value.updateSlideWidth()
    }
    const prev = () => {
        carousel.value.prev()
        carousel.value.updateSlideWidth()
    }
    const breakpoints={
        768: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
        500: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
    }
    return {
        randomCollection,settings,carousel,next,prev,breakpoints,fetchFlag
    }
}