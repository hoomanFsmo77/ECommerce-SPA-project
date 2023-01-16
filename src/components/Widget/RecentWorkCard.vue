<template>
  <div class="collection-card">
    <div class="collection-card-image"  :class="{'h-[400px]':isLoading}">
      <Skeletor v-if="isLoading" class="!absolute" width="100%" :shimmer="true" height="400"/>

      <img v-lazy="src"
           :srcset="srcset"
           src=""
           sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 33vw, 420px"
           @load="imageLoad"
           alt="">
    </div>
    <div class="collection-card-text">
      <h6 class="">{{subTitle}}</h6>
      <h3 class="font-700 my-0.5">{{title}}</h3>
      <router-link class="btn btn-dark-outline block my-1 w-full !py-0.6"
      :to="link"
      >
        Show more
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentWorkCard",
  props:['src','srcset','subTitle','title','link'],
  data(){
    return{
      isLoading:true
    }
  },
  methods:{
    imageLoad(){
      this.isLoading=false
    }
  }
}
</script>

<style scoped>

</style>