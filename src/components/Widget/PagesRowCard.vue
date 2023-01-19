<template>
  <column col="12" :md="col">
    <div class="sm:pr-1 mb-2 relative">
      <h3 class="font-700 mb-2" v-if="topTitle">{{topTitle}}</h3>
      <iframe class="w-full h-full aspect-video" v-if="video" :src="video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" __idm_id__="548865" width="560" height="315" frameborder="0"></iframe>
      <img class="w-full" v-if="src" v-lazy="src" src="" alt="">
      <h5 class="font-700 mt-2 mb-1" v-if="bottomTitle">{{bottomTitle}}</h5>
      <p class="!text-0.9" v-if="description" v-html="description"></p>
      <router-link v-if="link" class="stretch-link" :to="{name:'MAIN_PAGES',params:{name:link}}"></router-link>
    </div>
  </column>
</template>

<script>
export default {
  name: "PagesRowCard",
  props:['col','topTitle','bottomTitle','src','description','link','video']
}
</script>

<style scoped>

</style>