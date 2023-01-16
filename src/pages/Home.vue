<template>
  <Preloader :show="isLoading"/>
  <Brand/>
  <Intro/>
  <Shop/>
  <Popular/>
  <Story/>
  <Service/>
  <NewsLetter/>
  <RecentWork/>
</template>
<script setup>
import Brand from "../components/Home/Brand.vue";
import Intro from "../components/Home/Intro.vue";
import Shop from "../components/Home/Shop.vue";
import Popular from '../components/Home/Popular.vue';
import Story from "../components/Home/Story.vue";
import Service from "../components/Home/Service.vue";
import NewsLetter from "../components/Home/NewsLetter.vue";
import Preloader from '../components/Home/Preloader.vue'
import RecentWork from "../components/Home/RecentWork.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
/////////////////////////
const isLoading=ref(false)
const router=useRouter()
router.beforeEach((to,from,next)=>{
  isLoading.value=true
  next()
})

router.beforeResolve((to,from,next)=>{
  isLoading.value=false
  next()
})

</script>
