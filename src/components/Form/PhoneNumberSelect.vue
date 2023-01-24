<template>
  <div class="select-wrap px-0.5 border-[1px] bg-white border-gray-400 flex items-center">
    <font-awesome-icon class="!text-1.7 text-gray-600" icon="fa-solid fa-mobile-screen" ></font-awesome-icon>
    <div class="ml-0.8">
      <label class="select-label !ml-0">{{label}}</label>
      <div class="flex">
        <span>{{countryDetail.code}}</span>
        <input @input="$emit('update:modelValue',`${countryDetail.code}${$event.target.value}`)" type="text" class="w-full ml-0.6 reset-input">
      </div>
    </div>
    <div  class="absolute right-[3%] pl-[10px] border-l-[1px] flex border-gray-500 bottom-[26%]">
      <img :src="countryDetail.img" width="40" class="mr-0.3" alt="">
      <font-awesome-icon class="text-gray-500 " icon="fa-solid fa-caret-down" />
      <select v-model="countryDetail" @change="changeCode" class="appearance-none opacity-0  absolute left-0 top-0 w-full h-full">
        <template v-if="fetchFlag">
          <option :value="{
            code:`${item?.idd?.root}${item?.idd?.suffixes?.join('').slice(0,4)}`,
            img:item.flags.png
          }"
                  v-for="item in data">{{item.name.common}}({{item?.idd?.root}}{{item?.idd?.suffixes?.join('').slice(0,4)}})</option>
        </template>
      </select>
    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from "vue";
import axios from "axios";
let fetchFlag=ref(false)
let data=ref([])
let countryDetail=ref({
  code:'+44',
  img:'https://flagcdn.com/w320/gb.png'
})
let props=defineProps(['label','modelValue'])
onMounted(()=>{
  fetchFlag.value=false
  axios.get('https://restcountries.com/v3.1/all').then(response=>{
    console.log(response.data)
    data.value=response.data
    fetchFlag.value=true
  })
})

const changeCode = () => {
  console.log(countryDetail.value)
}

</script>

<style scoped>

</style>