<template>
  <teleport to="body">
    <Transition name="fade">
      <div v-if="isActive" id="zoom-area" class="fixed overflow-scroll z-[9999] top-0 left-0 w-[100vw] bg-light h-[100vh]">
        <img @load="imageLoad($event)" :src="src" class="relative" alt="">

        <div class="w-3 h-3 flex justify-center items-center bg-light rounded-full fixed right-0 top-0 m-2">
          <font-awesome-icon @click="close" class=" text-1.5 !text-dark/70 cursor-pointer" icon="fa-solid fa-magnifying-glass-minus" />
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
let props=defineProps(['src','isActive'])
let emit=defineEmits(['close'])
const close = () => {
  emit('close',false)
  document.body.style.overflow='scroll'
}
const imageLoad = e => {
  let cssProps=getComputedStyle(e.target)
  e.target.style.width=cssProps.width
  e.target.style.height=cssProps.height
  document.body.style.overflow='hidden'
}

</script>

<style lang="scss" scoped>
.fade-enter-active,.fade-leave-active{
  transition: all 300ms linear;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
  visibility: hidden;
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
  visibility: visible;
}

</style>