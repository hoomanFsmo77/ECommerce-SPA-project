<template>
  <column col="12" :md="col">
    <div class="pr-1 mb-2 ">
      <h3 class="font-700 mb-2" v-if="topTitle">{{topTitle}}</h3>
      <img v-if="src" v-lazy="src" src="" alt="">
      <h5 class="font-700 mt-2 mb-1" v-if="bottomTitle">{{bottomTitle}}</h5>
      <span class="!text-1" v-if="description">{{description}}</span>
    </div>
  </column>
</template>

<script>
export default {
  name: "PagesRowCard",
  props:['col','topTitle','bottomTitle','src','description']
}
</script>

<style scoped>

</style>