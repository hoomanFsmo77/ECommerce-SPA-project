<template>
  <form @submit.prevent="submit">
    <div class="w-full flex mt-1.5 ">
      <input required class="input-dark w-full" :value="modelValue" @input="input($event)" :placeholder="placeholder" :type="type">
      <button class="btn btn-dark-outline-light" type="submit">
        submit
      </button>
    </div>
  </form>

</template>

<script setup>
let props=defineProps(['type','placeholder','modelValue'])
let emit=defineEmits(['update:modelValue','action'])
const input = e => {
  emit('update:modelValue',e.target.value)
}
const submit = () => {
  emit('action')
}
</script>

<style scoped>

</style>