<template>
  <container>
    <row>
      <column col="12">
        <BreadCrumb :pages="[{name:'Home',link:{name:'HOME'}},{name:'Collections',link:{name:'ALL_COLLECTION'}},{name:name.split('-').join(' ')}]"/>
        <h1 class="font-600 text-left mb-1">{{name.split('-').join(' ')}}</h1>
      </column>
    </row>
    <template v-if="fetchFlag">
      <template  v-if="24 < productListData.length">
        <row>
          <column col="12">
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5">
              <ProductCard class="mb-1" v-for="item in list" :price="item.price" :title="item.title" :link="item.link" :discount="item.discount" :cover-src="item.coverSrc" :cover-srcset="item.coverSrcset" :overlay-src="item.overlaySrc" :overlay-srcset="item.overlaySrcset" :is-period="item.isPeriod" :id="item.id" :is-sold-out="item.isSoldOut"/>
            </div>
          </column>
        </row>
        <row >
          <column col="12">
            <Pagination @update="updatePage($event)"  :source="productListData" :item-in-warp="24"/>
          </column>
        </row>
      </template>
      <template v-else>
        <row >
          <column col="12">
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5">
              <ProductCard class="mb-1" v-for="item in productListData" :price="item.price" :title="item.title" :link="item.link" :discount="item.discount" :cover-src="item.coverSrc" :cover-srcset="item.coverSrcset" :overlay-src="item.overlaySrc" :overlay-srcset="item.overlaySrcset" :is-period="item.isPeriod" :id="item.id" :is-sold-out="item.isSoldOut"/>
            </div>
          </column>
        </row>

      </template>
    </template>


  </container>
</template>

<script setup>
import {computed,watch} from "vue";
import ProductCard from '../../components/Widget/ProductCard.vue'
import {useRoute} from "vue-router";
import BreadCrumb from '../../components/Widget/BreadCrumb.vue'
import {useProductStore} from "../../store/Products.js";
import {usePaginating} from "../../composables/usePagination.js";
import Pagination from "../../components/Widget/Pagination.vue";
let props=defineProps(['name'])
const store=useProductStore()
const route=useRoute()
const productListData=computed(()=>store.getProductList)
const fetchFlag=computed(()=>store.getProductListFetchFlag)
const {updatePage,list}=usePaginating()
watch(
    ()=>route.path,
    ()=>{
      store.fetchProductList(route.params.name)
    },
    {
      immediate:true
    }
)

</script>

<style scoped>

</style>