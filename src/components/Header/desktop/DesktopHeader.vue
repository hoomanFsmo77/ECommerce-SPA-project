<template>
<!--  desktop header-->
  <row  class="items-center !py-1">
    <column col="6">
      <div>
        <router-link  :to="{name:'HOME'}">
          <img src="https://cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?v=1663235427" width="110" alt="">
        </router-link>
      </div>
    </column>
    <column col="6" class="flex gap-1 items-center justify-end">
      <div class="w-[65%] relative">
        <SearchBox v-model="searchText" @on="showResult($event)"/>
        <DarkOverlay z-index="999" @outside="closeResult($event)" :is-fire="isOn"/>
        <SearchResult :is-fire="isOn" :search-text="searchText"/>
      </div>
      <router-link :to="{name:'CART'}" class="btn btn-dark-fill">
        <font-awesome-icon size="lg" icon="fa-solid fa-cart-shopping" />
        <span>${{totalPrice}} ({{cartLength}})</span>
      </router-link>
    </column>
  </row>

</template>

<script setup>
import SearchBox from "../../Form/SearchBox.vue";
import DarkOverlay from "../DarkOverlay.vue";
import {useDesktopHeader} from "../../../composables/useHeader.js";
import SearchResult from "../SearchResult.vue";
/////////////////////////////////////
const {closeResult,totalPrice,cartLength,searchText,showResult,isOn}=useDesktopHeader()
</script>

