<template>
  <section id="popular">
    <container>
      <row>
        <column col="12">
          <h4 class="text-left font-600 mb-1 md:pl-1 pl-0">Popular Now</h4>
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3">
            <ProductCard class="mb-1" v-for="item in popularProducts" :price="item.price" :title="item.title" :link="item.link" :discount="item.discount" :cover-src="item.coverSrc" :cover-srcset="item.coverSrcset" :overlay-src="item.overlaySrc" :overlay-srcset="item.overlaySrcset" :is-period="item.isPeriod" :id="item.id" :is-sold-out="item.isSoldOut"/>
          </div>
        </column>
      </row>
    </container>
  </section>
</template>

<script setup>
import {computed} from "vue";
import ProductCard from "../Widget/ProductCard.vue";
import {useProductStore} from "../../store/Products.js";
const store=useProductStore()
const popularProducts=computed(()=>store.getPopularProducts)
</script>

