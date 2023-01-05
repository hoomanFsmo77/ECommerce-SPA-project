<template>
  <div v-fade:99999="searchText.length>0 && isFire" class="search-result-container">
    <div class="search-result">
      <div class="p-1.5 !pb-1">
        <span class="text-0.9  block">Products</span>

        <!--      <<<<<<<<< render the search result here >>>>>>>>>>>>>>>-->
        <!--          <<<<<<<<< start >>>>>>>>-->
        <div class="search-result-item  ">
          <img
              srcset="//cdn.shopify.com/s/files/1/0272/9548/1943/products/brentos-hat.jpg?crop=center&height=110&v=1669608345&width=100 100w, //cdn.shopify.com/s/files/1/0272/9548/1943/products/brentos-hat.jpg?crop=center&height=220&v=1669608345&width=200 200w, //cdn.shopify.com/s/files/1/0272/9548/1943/products/brentos-hat.jpg?crop=center&height=330&v=1669608345&width=300 300w"
              src="//cdn.shopify.com/s/files/1/0272/9548/1943/products/brentos-hat.jpg?crop=center&height=110&v=1669608345&width=100" height="110"  class="responsive-image rounded-8" alt="">
          <span class="mt-0.5 block font-600">$45.00</span>
          <router-link :to="{name:'HOME'}" class="font-600 btn-stretch btn-link">Gumnut Boardriders Hat</router-link>
        </div>
        <!--          <<<<<<<<< end >>>>>>>>-->
      </div>
      <div class="divider"></div>
      <div class="p-1.5 !pt-1">
        <span class="text-0.9 mb-0.5 block">Collections</span>
        <ul class="ul-col">
          <!--        <<<<<<<<<< render the result of search category here >>>>>>>>>-->
          <!--        <<<<<<<< start >>>>>>>>-->
          <li>
            <router-link class="btn-link font-600" :to="{name:'HOME'}">
              Hats
            </router-link>
          </li>
          <li>
            <router-link class="btn-link font-600" :to="{name:'HOME'}">
              Home Page
            </router-link>
          </li>
          <!--        <<<<<<<<< end >>>>>>>-->
        </ul>
      </div>
      <div class="flex sticky bottom-0 bg-light justify-center mt-1 shadow-[0_0_40px_rgba(0,0,0,0.2)] p-1">
        <router-link class="btn btn-dark-fill w-full text-center" :to="{name:'SEARCH'}">
          Search for "{{searchText}}"
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
let props=defineProps(['searchText','isFire'])


</script>

<style scoped>

</style>