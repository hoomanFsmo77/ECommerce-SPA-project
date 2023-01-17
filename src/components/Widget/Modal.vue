<template>
    <teleport to="body">
      <div  @click.self="closeModal" class="modal " v-fade:9999="isActive">
        <PreLoader class="!items-center !h-[100%] z-[999999]" :show="!fetchFlag"/>
        <div class="v-modal-container">
          <div v-bind="$attrs" class="modal-content">
            <row >
             <slot></slot>
            </row>
          </div>
        </div>
      </div>
    </teleport>
  <DarkOverlay :is-fire="isActive" z-index="999"/>
</template>

<script setup>
import {computed} from "vue";
import DarkOverlay from "../Header/DarkOverlay.vue";
import {useProductStore} from "../../store/Products.js";
import PreLoader from '../../components/loader/preLoader.vue'
/////////////////////////////////////
const productStore=useProductStore()
const fetchFlag=computed(()=>productStore.getProductDetailDataFlag)
let props=defineProps(['isActive'])
let emit=defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal',false)
}
</script>

<style scoped>

</style>