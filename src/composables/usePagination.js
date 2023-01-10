import { ref,onMounted} from "vue";


export const corePagination= (props,emit)=>{
    let pages=ref(Math.ceil(props.source.length / props.itemInWarp))
    let target=ref(props.source)
    let currentPage=ref(1)

    const updateSource = currentPage => {
        let start=(currentPage*props.itemInWarp)-props.itemInWarp
        let end=currentPage*props.itemInWarp> props.source.length ? props.source.length : currentPage*props.itemInWarp;
        let currentPageItem=[...target.value].slice(start,end)
        emit('update',currentPageItem)
    }

    onMounted(()=>{
        updateSource(currentPage.value)
    })
    const paginating = index => {
      currentPage.value=index
        updateSource(currentPage.value)
    }
    const next = () => {
      currentPage.value++
        if(currentPage.value>pages.value){
            currentPage.value=1
        }
        updateSource(currentPage.value)
    }
    const prev = () => {
      currentPage.value--
        if(currentPage.value<1){
            currentPage.value=pages.value
        }
        updateSource(currentPage.value)
    }



    return{
        pages,paginating,currentPage,next,prev
    }
}



export const usePaginating=()=>{
    let list=ref([])

    const updatePage = e => {
        list.value=e
    }


    return {
        updatePage,list
    }
}