<template>
  <container class="relative">
    <row>
      <column col="12">
        <BreadCrumb :pages="[{name:'Home',link:{name:'HOME'}},{name:'Collections',link:{name:'ALL_COLLECTION'}},{name:name.split('-').join(' ')}]"/>
        <h1 class="font-600 text-left mb-1">{{name.split('-').join(' ')}}</h1>
      </column>
    </row>
    <PreLoader class="!static !items-center !h-[300px]" :show="!fetchFlag && !errorFlag"/>
    <template v-if="fetchFlag && productListData">
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
    <template v-if="errorFlag">
      <span class="font-500 my-1">There are currently no products in this collection. </span>
    </template>
  </container>
</template>

<script setup>
import ProductCard from '../../components/product/ProductCard.vue'
import BreadCrumb from '../../components/Widget/BreadCrumb.vue'
import {usePaginating} from "../../composables/usePagination.js";
import Pagination from "../../components/Widget/Pagination.vue";
import {useCollectList} from "../../composables/useCollection.js";
import PreLoader from '../../components/loader/preLoader.vue'
/////////////////////////////////////////////////////////////////////////
let props=defineProps(['name'])
const {updatePage,list}=usePaginating()
const {errorFlag,fetchFlag,productListData}=useCollectList()
</script>
