<template>
  <ul v-collapse="isActive" class="w-full transition-all v-collapse  bg-gray-100">
   <slot/>
  </ul>
</template>

<script setup>
let props=defineProps(['isActive'])


</script>

<style lang="scss">

.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}

</style>