import {onMounted, ref} from "vue";
import axios from "axios";


export default ()=>{
    const isOpen=ref(false)
    const postIndex=ref(0)
    let fetchFlag=ref(false)
    let instaFeedData=ref([])
    onMounted(()=>{
        fetchFlag.value=false
        axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/instagramFeed/instagramFeedList.json').then(response=>{
            instaFeedData.value=response.data
            fetchFlag.value=true
        })
    })
    const closeModal = e => {
        isOpen.value=e
    }

    const changePost =e => {
        isOpen.value=e.isOpen
        postIndex.value=e.index
    }

    const next = () => {
        postIndex.value++
        if(postIndex.value>instaFeedData.value.length-1){
            postIndex.value=0
        }
    }

    const prev = () => {
        postIndex.value--
        if(postIndex.value<0){
            postIndex.value=instaFeedData.value.length-1
        }
    }

    return{
        isOpen,closeModal,next,prev,changePost,postIndex,fetchFlag,instaFeedData
    }
}