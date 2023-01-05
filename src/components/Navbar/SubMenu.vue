<template>
  <Transition name="show">
    <div :style="{top:endTop}" v-if="isActive" class="bg-light border-b-[1px] border-r-[1px] border-l-[1px] border-gray-200  transition-all w-11 absolute  z-50 shadow-lg"   >
        <slot></slot>
    </div>
  </Transition>

</template>

<script setup>
import {ref} from "vue";
let props=defineProps(['isActive','startTop','endTop'])
const startTop=ref(props.startTop)
const endTop=ref(props.endTop)
</script>

<style lang="scss" >
@import "tailwindcss/components";

@layer components {
  .show-enter-active,.show-leave-active{
    @apply transition-all ease-in-out duration-300;
  }
  .show-enter-from,.show-leave-to{
    top:v-bind(startTop) !important;
    @apply opacity-0 ;
  }
  .show-enter-to,.show-leave-from{
    top:v-bind(endTop) !important;
    @apply opacity-100 ;
  }

}

</style>