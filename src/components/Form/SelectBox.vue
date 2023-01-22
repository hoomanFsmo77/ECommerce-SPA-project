<template>
  <div class=" select-wrap ">
    <label class="select-label  absolute">{{label}}</label>
    <select :class="selectClass" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" class="w-full select" name="country" id="country">
      <option v-for="item in option" :value="item">{{item}}</option>
    </select>
    <div  class="absolute right-[3%] pl-[10px] border-l-[1px] border-gray-500 bottom-[26%]">
      <font-awesome-icon class="text-gray-500 " icon="fa-solid fa-caret-down" />

    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props:['modelValue','option','label','selectClass']
}
</script>

<style scoped>

</style>