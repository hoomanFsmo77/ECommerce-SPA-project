<template>
  <div v-fade:99999="searchText.length>0 && isFire" class="search-result-container">
    <div  class="search-result">
      <skeletor-loader v-if="!searchFlag"/>
      <div v-else>
        <div class="p-1.5 !pb-1">
          <span class="text-0.9  block">Products</span>

          <!--      <<<<<<<<< render the search result here >>>>>>>>>>>>>>>-->
          <!--          <<<<<<<<< start >>>>>>>>-->
          <template v-if="searchResult.product.length>0">
            <div class="search-result-item  " v-for="item in searchResult.product">
              <img
                  v-lazy="item.coverSrc"
                  :srcset="item.coverSrcset"
                  src="" height="110"  class="responsive-image rounded-8" alt="">
              <span class="mt-0.5 block font-600">$45.00</span>
              <router-link :to="{name:item.link.name,params:{name:item.link.params.name},query:{id:item.id},hash:`#${item.category}`}" class="font-600 btn-stretch btn-link">{{item.title}}</router-link>
            </div>
          </template>
          <template v-else>
            <p class="font-600 text-0.9">
              No Search Result Found!
            </p>
          </template>
          <!--          <<<<<<<<< end >>>>>>>>-->
        </div>
        <div class="divider"></div>
        <div class="p-1.5 !pt-1">
          <span class="text-0.9 mb-0.5 block">Collections</span>
          <ul class="ul-col">
            <!--        <<<<<<<<<< render the result of search category here >>>>>>>>>-->
            <!--        <<<<<<<< start >>>>>>>>-->
            <template v-if="searchResult.collection.length>0">
              <li v-for="item in searchResult.collection">
                <router-link class="btn-link font-600" :to="item.link">
                  {{item.text}}
                </router-link>
              </li>
            </template>
            <template v-else>
              <li class="font-600 text-0.9">
                No Search Result Found!
              </li>
            </template>

            <!--        <<<<<<<<< end >>>>>>>-->
          </ul>
        </div>
        <div class="flex sticky bottom-0 bg-light justify-center mt-1 shadow-[0_0_40px_rgba(0,0,0,0.2)] p-1">
          <router-link class="btn btn-dark-fill w-full text-center" :to="{name:'SEARCH',query:{search:searchText}}">
            Search for "{{searchText}}"
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,watch,computed} from "vue";
import SkeletorLoader from "../loader/skeletorLoader.vue";
import {useSearchStore} from "../../store/search.js";
let props=defineProps(['searchText','isFire'])
const store=useSearchStore()
const searchFlag=computed(()=>store.getNavbarSearchFlag)
const searchResult=computed(()=>store.getNavbarSearchResult)




</script>

<style scoped>

</style>