<template>
  <section class="py-2" id="policy">
    <container>
      <row class="justify-center">
        <column col="12" md="6">
          <h1 class="text-center font-700">{{$route.params.name.split('-').join(' ')}}</h1>
          <PreLoader class="!static !items-center !h-[200px]" :show="!fetchFlag"/>
          <template v-if="fetchFlag">
            <div class="my-1.5" v-for="item in policyData">
              <p v-if="item.title" class="font-600 !text-1">{{item.title}}</p>
              <p class="!text-0.9 !font-500" v-html="item.content"></p>
            </div>
          </template>

        </column>
      </row>
    </container>
  </section>

</template>

<script setup>
import axios from "axios";
import {ref,watch} from "vue";
import {useRoute} from "vue-router";
import PreLoader from '../../components/loader/preLoader.vue'
//////////////////////
const policyData=ref([])
const fetchFlag=ref(false)

const route=useRoute()
let props=defineProps(['name'])
watch(
    ()=>route.params,
    ()=>{
      fetchFlag.value=false
      axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/policy/policyData/${route.params.name}.json`).then(response=>{
          fetchFlag.value=true
          policyData.value=response.data
      })

    },{
      immediate:true
    }
)


</script>

<style scoped>

</style>