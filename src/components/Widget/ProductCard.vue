<template>
  <div :id="`product-${id}`" class="product-card">
    <div class="product-card-image">
      <div class="product-card-image-cover ">
        <img
            sizes="(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px"
            v-lazy="coverSrc"
            :srcset="coverSrcset"
            src=""
            :alt="title"
        >
      </div>
      <router-link
          class="stretch-link peer"
          :to="link"
      ></router-link>
      <div v-if="overlaySrc" class="product-card-image-overlay peer-hover:opacity-100 peer-hover:visible">
        <img
            sizes="(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px"
            v-lazy="overlaySrc"
            :srcset="overlaySrcset"
            src=""
            :alt="title">
      </div>
<!--      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>-->
      <template v-if="isSoldOut && !discount">
           <span class="product-card-badge" >
             Sold out
          </span>
      </template>
      <template v-if="isSoldOut && discount">
        <span class="product-card-badge" >
             Sold out
        </span>
        <span class="product-card-badge !text-0.8 !bg-red-500 !mt-3.5" >
              -{{discountPercent}}%
        </span>
      </template>
      <template v-if="!isSoldOut && discount">
        <span class="product-card-badge !text-0.8 !bg-red-500 " >
              -{{discountPercent}}%
        </span>
      </template>
<!--      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>-->
    </div>
    <div class="product-card-text">
<!--      <<<<<<<<<<<< price start >>>>>>>>>>>>>>>>-->
      <template v-if="discount">
        <span class="[&_*]:capitalize [&_*]:!text-1.2 block leading-2">
          <template v-if="isPeriod">from</template>
          <span class="mx-0.5">${{price.toFixed(2)}}</span>
          <span class="line-through !text-gray-400">${{discount.toFixed(2)}}</span>
        </span>
      </template>
      <template v-else>
        <span class="capitalize !text-1.2 block leading-2"><template v-if="isPeriod">from</template> ${{price.toFixed(2)}}</span>
      </template>
<!--      <<<<<<<<<<<< price end >>>>>>>>>>>>>>>>-->

<!--      <<<<<<<<<<< title start >>>>>>>>>>>>>-->
      <router-link
          class="btn-link !text-1.4 !font-700  "
          :to="link"
      >
        {{title}}
      </router-link>
<!--      <<<<<<<<<<< title end >>>>>>>>>>>>>-->
<!--        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>-->
      <template v-if="!isSoldOut">
        <template v-if="isPeriod">
          <button @click="toggleModal" class="btn w-full mt-1 btn-dark-outline">Buy now</button>
          <Modal class="w-full sm:h-[calc(100vh-7rem)] h-[100vh]" @closeModal="closeModal($event)" :is-active="isActive">
            <template v-slot:left>
              left content here
            </template>
            <template v-slot:right>
              right content here
            </template>
          </Modal>
        </template>
        <template v-else>
          <router-link class="btn w-full mt-1 btn-dark-outline block" :to="{name:'CART'}">
            Buy now
          </router-link>
        </template>
      </template>
<!--        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>-->

    </div>
  </div>
</template>

<script setup>
import useProductCard from "../../composables/useProductCard.js";
import Modal from '../Widget/Modal.vue'
let props=defineProps(['link','coverSrc','overlaySrc','coverSrcset','overlaySrcset','isSoldOut','isPeriod','price','title','discount','id'])
const {isActive,closeModal,toggleModal,discountPercent}=useProductCard(props)
</script>

<style scoped>

</style>