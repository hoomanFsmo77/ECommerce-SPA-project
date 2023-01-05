<template>
<!--  desktop header-->
  <row  class="lg:flex items-center hidden !py-1">
    <column col="6">
      <div>
        <router-link  :to="{name:'HOME'}">
          <img src="https://cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?v=1663235427" width="110" alt="">
        </router-link>
      </div>
    </column>
    <column col="6" class="flex gap-1 items-center justify-end">
      <div class="w-[65%]">
        <SearchBox @isFocus="focusHandler($event)"/>
        <DarkOverlay :is-focus="focusFlag"/>
      </div>
      <router-link :to="{name:'CART'}" class="btn btn-dark-fill">
        <font-awesome-icon size="lg" icon="fa-solid fa-cart-shopping" />
        <span>${{totalPrice}} ({{cartLength}})</span>
      </router-link>
    </column>
  </row>

</template>

<script setup>
import SearchBox from "../Form/SearchBox.vue";
import DarkOverlay from "./DarkOverlay.vue";
import {computed,ref} from "vue";
import {useCartStore} from "../../store/Cart.js";
/////////////////////////////////////
const focusFlag=ref(false)
const store=useCartStore()
const cartLength=computed(()=>store.cartLength)
const totalPrice=computed(()=>store.totalPrice.toFixed(2))
const focusHandler=e=>{
  focusFlag.value=e
}
</script>

