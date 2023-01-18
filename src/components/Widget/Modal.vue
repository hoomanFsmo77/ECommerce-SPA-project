<template>
    <teleport to="body">
      <div  @click.self="closeModal" class="modal " v-fade:9999="isActive">
        <PreLoader class="!items-center !h-[100%] z-[999999]" :show="!preloader"/>
        <div class="v-modal-container">
          <div v-bind="$attrs" class="modal-content">
            <row :class="rowClass">
             <slot></slot>
            </row>
          </div>
        </div>
      </div>
    </teleport>
  <DarkOverlay :is-fire="isActive" z-index="999"/>
</template>

<script setup>
import DarkOverlay from "../Header/DarkOverlay.vue";
import PreLoader from '../../components/loader/preLoader.vue'
/////////////////////////////////////
let props=defineProps(['isActive','preloader','rowClass'])
let emit=defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal',false)
}
</script>

<style scoped>

</style>