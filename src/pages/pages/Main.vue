<template>
  <section>
    <container>
      <row>
        <column col="12">
          <BreadCrumb :pages="
            [{name:'Home',link:{name:'HOME'}},
            {name:name.split('-').join(' ')}]"
          />
          <h1 class="font-600 text-left mb-1 capitalize">{{name.split('-').join(' ')}}</h1>
        </column>
      </row>
      <PreLoader class="!static !items-center !h-[300px]" :show="!fetchFlag"/>
      <template v-if="fetchFlag">
        <row>
          <PagesRowCard
              v-for="item in pageData"
              :col="item.col"
              :top-title="item.topTitle"
              :src="item.src"
              :bottom-title="item.bottomTitle"
              :description="item.description"
          />
        </row>
      </template>
    </container>
  </section>
</template>

<script setup>
import {watch,ref} from "vue";
import {useRoute} from "vue-router";
import PreLoader from '../../components/loader/preLoader.vue'
import axios from "axios";
import BreadCrumb from "../../components/Widget/BreadCrumb.vue";
import PagesRowCard from "../../components/Widget/PagesRowCard.vue";
let props=defineProps(['name'])
let fetchFlag=ref(false)
let pageData=ref([])
const route=useRoute()

watch(
    ()=>route.params,
    ()=>{
      if(route.name==='MAIN_PAGES'){
        fetchFlag.value=false
        axios.get(`https://ecommerce-199b2-default-rtdb.firebaseio.com/pages/pagesData/${route.params.name}.json`).then(response=>{
          pageData.value=response.data
          fetchFlag.value=true
        })
      }
    },{
      immediate:true
    }
)

</script>

<style scoped>

</style>