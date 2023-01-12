<template>
  <div class="relative mr-1">
    <font-awesome-icon @click="isActive=true" class="absolute top-0 right-0 m-1 text-1.5 !text-dark/70 cursor-pointer z-50" icon="fa-solid fa-magnifying-glass-plus" />
    <img
        class="cursor-grab rounded-8"
        v-lazy="src"
        :srcset="srcset"
        src=""
        alt=""
        sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 50vw, 620px"
    >
    <ImageZoomer @close="close" :is-active="isActive" :src="zoom"/>
  </div>

</template>

<script setup>
import {ref} from "vue";
import ImageZoomer from './ImageZoomer.vue'
let props=defineProps(['src','srcset','zoom'])
const isActive=ref(false)
const close = () => {
  isActive.value=false
}
</script>

<style scoped>

</style>