<template>
  <div class="insta-feed-card">
    <div>
      <img
          class="insta-feed-img"
          v-lazy="src"
          src=""
          alt=""
      >
    </div>
    <div class="stretch-link transition-all group hover:bg-dark/60 ">
      <font-awesome-icon class="hidden group-hover:block text-light absolute top-[50%] right-[50%]" size="2xl" icon="fa-brands fa-instagram" />
      <button @click="openModal" class="w-full h-full"></button>

    </div>
  </div>

</template>

<script setup>
let emit=defineEmits(['changePost'])
let props=defineProps(['src','date','link','content','index'])
const openModal = () => {
  emit('changePost',{isOpen:true,index:props.index})
}
</script>

<style scoped>

</style>