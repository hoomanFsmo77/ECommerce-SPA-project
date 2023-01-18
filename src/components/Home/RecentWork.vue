<template>
  <section id="recent-work">
    <container>
      <row>
        <column>
          <h5 class="font-700 ">What we've been working on</h5>
        </column>
      </row>
      <row v-if="fetchFlag">
        <column class="pr-1" v-for="item in recentWorkData" col="12" md="4">
          <RecentWorkCard :title="item.title" :srcset="item.srcset" :src="item.src" :sub-title="item.subTitle" :link="item.link"/>
        </column>
      </row>
      <row v-else>
        <column class="pr-1 mb-1" v-for="i in 3" col="12" sm="4">
          <Skeletor  class="rounded-4 mr-1" width="100%" :shimmer="true" height="400"/>
        </column>
      </row>
    </container>
  </section>
</template>

<script setup>
import RecentWorkCard from "../Widget/RecentWorkCard.vue";
import {onMounted,ref} from "vue";
import axios from "axios";
const fetchFlag=ref(false)
const recentWorkData=ref([])
onMounted(()=>{
  fetchFlag.value=false
  axios.get('https://ecommerce-199b2-default-rtdb.firebaseio.com/recentWork/recentWork.json').then(response=>{
    recentWorkData.value=response.data
    fetchFlag.value=true
  })
})
</script>

<style scoped>

</style>