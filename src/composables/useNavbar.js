import axios from "axios";
import {ref} from "vue";


export default ()=>{
    let fetchFlag=ref(false)
    let navbarData=ref([])
    axios.get('./data/NavbarData.json').then(response=>{
        navbarData.value=response.data.navbarItems
        fetchFlag.value=true
    })

    return {fetchFlag,navbarData}

}