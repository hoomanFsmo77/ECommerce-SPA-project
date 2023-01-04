<template>
  <teleport to="body">
    <div class="fixed  top-0 left-0 w-[100vw] h-[100vh] bg-dark/50" v-fade="isFocus"></div>
  </teleport>
</template>

<script>
export default {
  name: "DarkOverlay",
  props:['isFocus']
}
</script>

<style scoped>

</style>