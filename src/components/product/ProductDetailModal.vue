<template>
  <column  class="order-3 md:order-2 md:pr-0.7" md="6" col="12">
    <div v-if="productDetailFlag">
      <Carousel  ref="carousel" :settings="settings" :wrap-around="true">
        <Slide v-for="(item,index) in productData.gallery" :key="index">
          <GalleryItem :zoom="item.zoom" :src="item.src" :srcset="item.srcset"/>
        </Slide>
        <template #addons>
          <div class="flex gap-1 justify-center items-center my-1">
            <font-awesome-icon size="lg" class="cursor-pointer" icon="fa-solid fa-angle-left" @click="prev" />
            <Pagination />
            <font-awesome-icon size="lg" class="cursor-pointer" icon="fa-solid fa-angle-right" @click="next" />
          </div>

        </template>
      </Carousel>
    </div>
  </column>
  <column class="order-2 md:order-3" md="6" col="12">
    <div class="flex w-full justify-between items-center">
      <span class="text-gray-600 font-600 !text-1 pl-1">Brentos</span>
      <font-awesome-icon size="lg" class="cursor-pointer text-gray-700 " @click="closeModal" icon="fa-solid fa-x" />
    </div>
    <div v-if="productDetailFlag" class="sm:pl-1">
      <div>
        <h1 class="font-600 ">{{productData.title}}</h1>
        <template  v-if="productData.discount">
          <div class="flex gap-2">
            <h3 class="font-600 my-1">${{productData.discount.toFixed(2)}}</h3>
            <h3 class="font-600 my-1 line-through text-gray-500">${{whichFrame===0 ? totalPriceWithOutFrame :totalPriceWithFrame }}</h3>
          </div>

        </template>
        <template v-else>
          <h3 class="font-600 my-1">${{whichFrame===0 ? totalPriceWithOutFrame :totalPriceWithFrame }}</h3>
        </template>
        <p v-html="item.content" class="mb-1 font-500 text-1" v-for="item in productData.description"></p>
      </div>
<!--        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>-->
      <div v-if="productData.hasFamily" class="mt-4">
        <h5 class="font-600 mb-1">Choose Your Family Members</h5>
        <button
            :disabled="!productData.option.family[familyIndex].available"
            :class="{'disabled':!productData.option.family[familyIndex].available,'selected':familyIndex===index}"
            @click="changeFamily(item.index,index)"
            v-for="(item,index) in productData.option.family"
            class="btn  btn-dark-outline mr-1 mb-1">
          {{item.item}}
        </button>
      </div>
<!--        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>-->

<!--            <<<<<<<<<<<<< size part start>>>>>>>>>>>>-->
      <div class="mt-4 " v-if="productData?.option?.sizes">
        <h5 class="font-600 mb-1">Size</h5>
        {{setSelectedSize}}
        <button
            :class="{'disabled':!item.available,'selected':sizeIndex===index }"
            @click="changeSize(item,index)"
            v-for="(item,index) in productData.option.sizes"
            class="btn btn-dark-outline mr-1 mb-1"
        >
          {{item.size}}
        </button>
      </div>
<!--            <<<<<<<<<<<<< size part end>>>>>>>>>>>>-->
<!--            <<<<<<<<<<<<< frame part start>>>>>>>>>>>>-->
      <div class="my-2 " v-if="productData.hasFrame">
        <h5 class="font-600 mb-1">Frame</h5>
        <button
            :disabled="!productData.option.sizes[sizeIndex].available"
            :class="{'disabled':!productData.option.sizes[sizeIndex].available,'selected':whichFrame===0}" @click="changeFrame(0)"
            class="btn  btn-dark-outline mr-1 mb-1">
          No frame
        </button>
        <button :disabled="!productData.option.sizes[sizeIndex].frame.available"
                :class="{'disabled':!productData.option.sizes[sizeIndex].frame.available,'selected':whichFrame===1}"            @click="changeFrame(1)"
                class="btn btn-dark-outline mr-1 mb-1">
          Recycled Timber Frame
        </button>
      </div>
<!--            <<<<<<<<<<<<< frame part end>>>>>>>>>>>>-->
      <div class="mb-1">
        <template v-if="productData.discount">
          <div class="flex items-center gap-1">
            <h1 class="font-600 my-2">${{productData.discount.toFixed(2)}}</h1>
            <div>
              <span class="line-through ">${{whichFrame===0 ? totalPriceWithOutFrame :totalPriceWithFrame }}</span>
              <br>
              <span class="text-gray-500 ">you have saved ${{(productData.price-productData.discount).toFixed(2)}}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <h1 class="font-600 my-2">
            ${{whichFrame===0 ? totalPriceWithOutFrame :totalPriceWithFrame }}
          </h1>
        </template>
      </div>
      <div class="divider"></div>
      <div class="flex gap-1 items-center">
        <div v-if="!productData.isSoldOut">
          <button @click="decrement" class="btn btn-dark-outline !py-1">
            <font-awesome-icon size="lg" icon="fa-solid fa-minus" />
          </button>
          <span class="mx-1 px-0.5 text-1.5">
                      {{quantity}}
                    </span>
          <button @click="increment" class="btn btn-dark-outline !py-1">
            <font-awesome-icon size="lg" icon="fa-solid fa-plus" />
          </button>
        </div>
        <button :disabled="productData.isSoldOut" :class="{'w-[50%] !bg-gray-400':productData.isSoldOut}" @click="addToCart" class="btn btn-dark-fill px-2 text-1.2 font-700">
          {{productData.isSoldOut ? 'Sold Out':'Add to cart'}}
        </button>
      </div>
      <div class="mt-4">
        <h5 class="font-600 mb-1">Share</h5>
        <ul class="flex gap-2 item-center">
          <li>
            <font-awesome-icon size="md" icon="fa-brands fa-facebook-f" />
            <a  class="btn-link ml-0.5 " :href="productData.link.facebook">
              Facebook
            </a>
          </li>
          <li>
            <font-awesome-icon size="md" icon="fa-brands fa-twitter" />
            <a  class="btn-link ml-0.5 " :href="productData.link.twitter">
              Twitter
            </a>
          </li>
          <li>
            <font-awesome-icon size="md" icon="fa-brands fa-pinterest" />
            <a  class="btn-link ml-0.5 " :href="productData.link.pinterest">
              Pinterest
            </a>
          </li>
        </ul>
      </div>
    </div>
  </column>
</template>

<script setup>
import useCarousel from "../../composables/useCarousel.js";
import useProductModal from "../../composables/useProductModal.js";
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import GalleryItem from '../../components/product/GalleryItem.vue'
////////////////////////////////////////////////////////////
let props=defineProps(['id','category','link'])
let emit=defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal',false)
}
const {next,prev,settings,carousel}=useCarousel()
const {productDetailFlag,productData,totalPriceWithFrame,totalPriceWithOutFrame,whichFrame,familyIndex,sizeIndex,quantity,decrement,increment,addToCart,changeFamily,changeFrame,changeSize,setSelectedSize}=useProductModal(carousel,props)

</script>

<style scoped>

</style>