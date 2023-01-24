<template>
  <div class="w-full relative">
    <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" type="text" class="input-light input-sm !rounded-6 placeholder:!font-400 !border-gray-400 w-full" :placeholder="placeholder">
    <div  class="absolute cursor-pointer  right-[3%] top-[22%] z-10">
      <button @mouseenter="openTooltip" @mouseleave="closeTooltip">
        <font-awesome-icon class="  text-gray-600" :icon="icon" />
      </button>
      <Transition name="tooltip">
        <div v-if="isOpen" class="tooltip">
          <p class="tooltip-content">{{toolTip}}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
let props=defineProps(['icon','placeholder','modelValue','toolTip'])
const isOpen=ref(false)
const openTooltip = () => {
  isOpen.value=true
}
const closeTooltip = () => {
  isOpen.value=false
}

</script>

<style lang="scss" scoped>
@tailwind components;
@layer components {
  .tooltip-enter-active,.tooltip-leave-active{
    @apply transition-all duration-500 ease-in-out
  }
  .tooltip-enter-from,.tooltip-leave-to{
    @apply scale-90 opacity-0
  }
  .tooltip-enter-to,.tooltip-leave-from{
    @apply scale-100 opacity-100
  }

}

</style>