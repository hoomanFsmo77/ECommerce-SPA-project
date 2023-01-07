<template>
  <nav v-if="windowWidth > 960" class=" border-t-[1px] border-gray-200 border-b-[1px] ">
    <container>
      <DesktopNav/>
    </container>
  </nav>
</template>

<script setup>
import DesktopNav from "./desktop/DesktopNav.vue";
const windowWidth=window.innerWidth
</script>

<style scoped>

</style>