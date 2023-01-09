<template>
  <container>
    <row>
      <column col="12">
        <BreadCrumb :pages="[{name:'Home',link:{name:'HOME'}},{name:'Collections',link:{name:'ALL_COLLECTION'}},{name:name}]"/>
        <h1 class="font-600 text-left mb-1">{{name}}</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5">
          <ProductCard class="mb-1" v-for="item in collectionList" :price="item.price" :title="item.title" :link="item.link" :discount="item.discount" :cover-src="item.coverSrc" :cover-srcset="item.coverSrcset" :overlay-src="item.overlaySrc" :overlay-srcset="item.overlaySrcset" :is-period="item.isPeriod" :id="item.id" :is-sold-out="item.isSoldOut"/>
        </div>
      </column>
    </row>
  </container>
</template>

<script setup>
import {computed} from "vue";
import ProductCard from '../../components/Widget/ProductCard.vue'
import BreadCrumb from '../../components/Widget/BreadCrumb.vue'
import {useProductStore} from "../../store/Products.js";
let props=defineProps(['name'])
const store=useProductStore()
const collectionList=computed(()=>store.getCollectionData(props.name))
</script>

<style scoped>

</style>