<template>
  <section id="collection-list" class="my-2">
    <container>
      <BreadCrumb :pages="[{name:'Home',link:{name:'HOME'}},{name:'Collections'}]"/>
      <h1 class="font-600 text-left mb-1">Collections</h1>
      <div v-if="fetchFlag" class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-1.3"  >
        <CollectionCard v-for="(item,index) in allCollectionList" :key="index" :text="item.text" :src="item.src" :link="item.link" :srcset="item.srcset"/>
      </div>
    </container>
  </section>
</template>

<script setup>
import CollectionCard from '../../components/Widget/CollectionCart.vue'
import BreadCrumb from "../../components/Widget/BreadCrumb.vue";
import {useAllCollection} from "../../composables/useCollection.js";
const {fetchFlag,allCollectionList}=useAllCollection()
</script>
