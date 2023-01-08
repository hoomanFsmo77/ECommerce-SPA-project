import {defineStore} from "pinia";
import axios from "axios";

export const useCollectionData=defineStore('collection',{
    state:()=>{
        return{
            collections:[]
        }
    },
    getters:{
        getAllList(state){
            return state.collections
        },
        getRandomCollection:(state)=>(len)=>{
            if(state.collections.length>0){
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
            axios.get('./data/AllCollectionLists.json').then(response=>{
                this.collections=response.data[Object.keys(response.data)[0]]
            })
        }
    }
})