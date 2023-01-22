<template>
  <div class="relative my-0.5">
    <input @input="$emit('update:modelValue',$event.target.value)" :value="modelValue" type="text" class="input-float peer"  required>
    <label class="float-placeholder peer-focus:bottom-[75%] peer-focus:px-[8px] peer-focus:bg-white peer-focus:text-0.8 peer-valid:bottom-[75%] peer-valid:px-[8px] peer-valid:bg-white peer-valid:text-0.8 peer-focus:rounded-t-4 peer-valid:rounded-t-4">
      {{placeholder}}
    </label>
  </div>
</template>

<script>
export default {
  name: "FloatInput",
  props:['modelValue','placeholder'],

}
</script>

<style scoped>

</style>