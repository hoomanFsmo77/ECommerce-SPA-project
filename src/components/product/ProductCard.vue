<template>
  <div :id="`product-${id}`" class="product-card">
    <div class="product-card-image " :class="{'h-[400px]':isLoading}" >
<!--      <<<<<<<<<<<<< skeleton loader  start>>>>>>>>>>>>>>-->
      <Skeletor v-if="isLoading" class="!absolute top-0 left-0" width="100%" :shimmer="true" height="400"/>
<!--      <<<<<<<<<<<<< skeleton loader end>>>>>>>>>>>>>>-->

      <div class="product-card-image-cover ">
        <img
            @load="imageLoad"
            sizes="(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px"
            v-lazy="coverSrc"
            :srcset="coverSrcset"
            src=""
            :alt="title"
        >
      </div>
      <router-link
          :class="{'peer':!isLoading}"
          class="stretch-link"
          :to="productLink"
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
          :to="productLink"
      >
        {{title}}
      </router-link>
<!--      <<<<<<<<<<< title end >>>>>>>>>>>>>-->
<!--        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>-->
      <template v-if="!isSoldOut">
        <template v-if="isPeriod">
          <button @click="toggleModal" class="btn w-full mt-1 btn-dark-outline">Buy now</button>
          <Modal class="w-full sm:h-[calc(100vh-7rem)] h-[100vh]" @closeModal="closeModal($event)" :is-active="isActive" :preloader="fetchFlag">
            <ProductDetailModal v-if="isActive" :category="category" :link="props.link" :id="id" @closeModal="closeModal($event)"/>
          </Modal>
        </template>
        <template v-else>
          <button @click="addToCart" class="btn w-full mt-1 btn-dark-outline block ">
            Buy now
            <hollow-dots-spinner
                v-if="addToCartFlag"
                class="z-50 !static !m-auto"
                                 :animation-duration="1000"
                                 :dot-size="10"
                                 :dots-num="3"
                                 color="#333"
            />
          </button>
        </template>
      </template>
<!--        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>-->

    </div>
  </div>
</template>

<script setup>
import { HollowDotsSpinner } from 'epic-spinners'
import useProductCard from "../../composables/useProductCard.js";
import Modal from '../Widget/Modal.vue'
import ProductDetailModal from '../../components/product/ProductDetailModal.vue'
let props=defineProps(['link','coverSrc','overlaySrc','coverSrcset','overlaySrcset','isSoldOut','isPeriod','price','title','discount','id','category'])
const {isActive,closeModal,toggleModal,discountPercent,isLoading,imageLoad,fetchFlag,addToCart,productLink,addToCartFlag}=useProductCard(props)





</script>

<style scoped>
.vue-skeletor.vue-skeletor--rect.\!absolute.top-0.left-0{
  background-color: #ccc!important;
}
</style>