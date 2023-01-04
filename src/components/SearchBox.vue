<template>
  <div class="relative z-[9999]">
    <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" @focus="focusHandler" @blur="blurHandler"  type="text" class="input-light !pl-3 w-full" placeholder="Search for...">
    <font-awesome-icon class="absolute left-[5%] top-[33%] text-dark/90" size="lg" icon="fa-solid fa-magnifying-glass" />
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props:['modelValue'],
  data(){
    return{
      focusFlag:false
    }
  },
  methods:{
    focusHandler(){
      this.focusFlag=true
      this.$emit('isFocus',this.focusFlag)
    },
    blurHandler(){
      this.focusFlag=false
      this.$emit('isFocus',this.focusFlag)
    }
  }
}
</script>

<style scoped>

</style>