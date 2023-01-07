<template>
  <header>
    <container class="lg:block hidden">
      <DesktopHeader/>
    </container>
    <MobileHeader/>
  </header>
</template>

<script setup>
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";
</script>

