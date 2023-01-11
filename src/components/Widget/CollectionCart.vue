<template>
  <div class="collection-card">
    <div class="collection-card-image" :class="{'h-[400px]':isLoading}">
      <Skeletor v-if="isLoading" class="!absolute" width="100%" :shimmer="true" height="400"/>

      <img
          @load="imageLoad"
          sizes="(max-width: 467px) calc((100vw - 40px) / 2), (max-width: 1280px) calc((100vw - 100px) / 3), 420px"
          :srcset="srcset"
          v-lazy="src"
          :alt="text"
      >
    </div>
    <div class="collection-card-text">
        <a @click="redirect" class="btn-link btn-stretch !font-500 !text-1 capitalize cursor-pointer" >
          {{text}}
        </a>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
let props=defineProps(['link','src','srcset','text'])
const router=useRouter()
const isLoading=ref(true)
const redirect = () => {
  router.push(props.link)
}
const imageLoad = () => {
  isLoading.value=false
}
</script>

<style scoped>

</style>