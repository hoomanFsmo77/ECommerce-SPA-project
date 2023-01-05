<template>
  <teleport to="body">
    <div @click="clickOutside" class="fixed  top-0 left-0 w-[100vw] h-[100vh] bg-dark/50" v-fade:999="isFire"></div>
  </teleport>
</template>

<script>
export default {
  name: "DarkOverlay",
  props:['isFire'],
  data(){
    return{
      isOn:true
    }
  },
  methods:{
    clickOutside(){
      this.isOn=false
      this.$emit('outside',this.isOn)
    }
  }
}
</script>

<style scoped>

</style>