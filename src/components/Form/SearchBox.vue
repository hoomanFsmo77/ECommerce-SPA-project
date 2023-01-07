<template>
  <div class="relative z-[9999]">
    <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" @focus="focusHandler" type="text" class="input-light !pl-3 w-full" placeholder="Search for...">
    <font-awesome-icon class="absolute left-0 pl-[16px] top-[33%] text-dark/90" size="lg" icon="fa-solid fa-magnifying-glass" />
  </div>
</template>

<script setup>
import {ref} from "vue";
let props=defineProps(['modelValue'])
let emit=defineEmits(['on'])
////////////
const isOn=ref(false)
///////////
const focusHandler = () => {
  isOn.value=true
  emit('on',isOn.value)
}

</script>

<style scoped>

</style>