<template>
  <header>
    <container v-if="windowWidth > 960" >
      <DesktopHeader/>
    </container>
    <MobileHeader v-else/>
  </header>
</template>

<script setup>
import DesktopHeader from "./desktop/DesktopHeader.vue";
import MobileHeader from "./mobile/MobileHeader.vue";
const windowWidth=window.innerWidth
</script>

