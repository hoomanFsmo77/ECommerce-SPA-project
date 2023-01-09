<template>
    <teleport to="body">
      <div  @click.self="closeModal" class="modal " v-fade:9999="isActive">
        <div class="v-modal-container">

          <div v-bind="$attrs" class="modal-content">
            <row >
              <column  class="order-3 md:order-2" md="6" col="12">
                <slot name="left"></slot>
              </column>
              <column class="order-2 md:order-3" md="6" col="12">
                <div class="flex w-full justify-between items-center">
                  <span class="text-gray-600 font-600 !text-1">Brentos</span>
                  <font-awesome-icon size="lg" class="cursor-pointer text-gray-700 " @click="closeModal" icon="fa-solid fa-x" />
                </div>
                <slot name="right"></slot>
              </column>
            </row>
          </div>
        </div>

      </div>
    </teleport>
  <DarkOverlay :is-fire="isActive" z-index="999"/>
</template>

<script setup>
import DarkOverlay from "../Header/DarkOverlay.vue";
let props=defineProps(['isActive'])
let emit=defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal',false)
}
</script>

<style scoped>

</style>