import {defineStore} from "pinia";
import axios from "axios";

export const useCollectionStore=defineStore('collection',{
    state:()=>{
        return{
            collections:[],
            fetchFlag:false,
        }
    },
    getters:{
        getFetchFlag(state){
            return state.fetchFlag
        },
        getAllList(state){
            if(state.fetchFlag){
                return state.collections
            }
        },
        getRandomCollection:(state)=>(len)=>{
            if(state.fetchFlag){
                let randomNumber=[0,1,2,3,4,5,6,7,8,9,10,11]
                let randomCollection=[]
                for(let i=0;i<len;i++){
                    let randomIndex=Math.floor(Math.random()*randomNumber.length)
                    randomCollection.push(state.collections[randomNumber[randomIndex]])
                    randomNumber.splice(randomIndex,1)
                }
                return randomCollection
            }

        }
    },
    actions:{
        setCollectionData(){
            this.fetchFlag=false
            axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/collection/AllCollectionLists.json').then(response=>{
                this.collections=response.data
                this.fetchFlag=true
            })
        }
    }
})