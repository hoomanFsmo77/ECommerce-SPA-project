<template>
  <section v-if="windowWidth>960" id="information">
    <container-full>
      <row class="!m-0 !p-0">
        <column class="lg:!pt-3 lg:!px-4 pt-1 px-1 !m-0" lg="7" col="12">
          <header>
            <router-link :to="{name:'HOME'}">
              <img alt="Brentos" class="h-4" src="//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?1979">
            </router-link>
          </header>
          <nav>
            <BreadCrumb
                :pages="[
                {name:'Cart',link:{name:'CART'},active:true},
                {name:'Information',link:calculatePreviousLink,active:true},
                {name:'Shopping',active:false},
                {name:'Payment',active:false},
            ]"
            />
          </nav>
          <main class="mt-1.5">
            <div class="p-0.7 border-[1px] border-gray-200 rounded-6">
              <div class="flex justify-between items-center">
                <p>
                  <span class="text-gray-500 font-400">Contact</span>
                  <span class="text-dark font-400 ml-3">{{userInformationStore.contactInfo.value}}</span>
                </p>
                <router-link :to="calculatePreviousLink" class="text-gray-700 text-0.8 font-400">change</router-link>

              </div>
              <div class="divider !my-0.7"></div>
              <div class="flex justify-between items-center">
                <p>
                  <span class="text-gray-500 font-400">Ship to</span>
                  <span class="text-dark font-400 ml-3">{{calculateShippingAddress}}</span>
                </p>
                <router-link :to="calculatePreviousLink" class="text-gray-700 text-0.8 font-400">change</router-link>
              </div>
            </div>
            <h5  class="font-500 mt-3 mb-2">Shipping method </h5>
            <div class="p-1 border-[1px] border-gray-200 rounded-6 flex items-center justify-between">
              <div class="flex items-start">
                <input type="radio" class="radio mr-1" :checked="true">
                <div>
                  <p class="leading-1.1 text-gray-700 font-400">Standard International </p>
                  <p class="text-gray-500 font-400 text-0.8">6 to 27 business days</p>
                </div>
              </div>
              <p class="text-gray-700 font-400">$30.00</p>
            </div>
            <div class="flex justify-between items-center mt-1">
              <router-link :to="calculatePreviousLink">
                <font-awesome-icon   class="!text-[0.7rem] font-400" size="l" icon="fa-solid fa-chevron-left" />
                <span class="text-0.9 ml-0.5 font-400">Return to information</span>
              </router-link>
              <button @click="goPayment" class="btn btn-dark-fill">
                Continue to payment
              </button>
            </div>
          </main>
          <footer class="mt-3 border-t-[1px] border-gray-200 py-1">
            <ul class="flex items-center">
              <li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
                <button @click="openModal('refund-policy')">Refund Policy</button>
              </li><li class="mr-1.5  md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('shipping-policy')">Shipping Policy</button>
            </li><li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('privacy-policy')">Privacy Policy</button>
            </li><li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('terms-of-service')">Terms of service</button>
            </li>
            </ul>
          </footer>
        </column>

        <column class="!px-2 !py-3 bg-gray-100/50 border-l-[1px] border-gray-300 !m-0 ml-auto" lg="5" col="12" >
          <div class="flex flex-col">
            <div v-for="item in cartList" class="product-checkout-item">
              <div class="flex items-center">
                <div class="product-checkout-image ">
                  <img class="object-cover w-full h-full" :srcset="item.srcset" :src="item.src" alt="">
                  <span class="product-checkout-quantity">
                  {{item.quantity}}
                </span>
                </div>
                <div class="product-checkout-content">
                  <p>
                    {{item.title}}
                  </p>
                  <p class="text-gray-500  "  v-if="item.priceDetail.family">
                    Choose Your Family Members: {{item.priceDetail.family}}
                  </p>
                  <p class="text-gray-500 " v-if="item.priceDetail.size">
                    Size: {{item.priceDetail.size}}
                  </p>
                  <p class="text-gray-500 " v-if="item.priceDetail.frame">
                    Frame: {{item.priceDetail.frame}}
                  </p>
                  <p class="text-gray-500 " v-if="item.discount">
                    Discount: {{item.discount}}
                  </p>

                </div>
              </div>
              <div>
                <p class="font-400 ">
                  ${{item.priceDetail.price * item.quantity}}
                </p>
              </div>
            </div>
            <div class="divider"></div>
            <div class="flex items-center">
              <FloatInput placeholder="Discount code"/>
              <button class="btn btn-dark-fill ml-0.5">
                Apply
              </button>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-gray-600">Subtotal</span>
              <span class="font-400 text-gray-600">${{totalPrice}}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-400 text-gray-600 flex items-center">
                Shipping
                <span @click="openModal('shipping-policy')" class=" question-mark">
                      <font-awesome-icon size="sm" icon="fa-solid fa-question" />
                </span>
              </span>
              <span class="font-400 text-gray-600">$30.00 </span>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-1 text-gray-600">Total</span>
              <span class="font-400 text-gray-600 ">AUD <span class="text-1.5 text-gray-600">${{Number(totalPrice)+30.00}}</span></span>
            </div>

          </div>
        </column>
      </row>
    </container-full>
  </section>
  <section v-else id="information">
    <container-full>
      <row class="!m-0 !p-0 ">
        <column  class="!p-1 !m-0"  col="12">
          <header>
            <router-link :to="{name:'HOME'}">
              <img alt="Brentos" class="h-4" src="//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?1979">
            </router-link>
          </header>
        </column>
      </row>
      <row class="!m-0 !p-0 bg-gray-100/70 border-y-[1px] border-gray-300">
        <column class="p-0.5" col="12">
          <button @click="isCollapse=!isCollapse" class="flex justify-between items-center p-0.5 w-full h-full">
              <span>
                <font-awesome-icon size="lg" icon="fa-solid fa-cart-shopping"></font-awesome-icon>
                <span class="font-400 mx-0.5">Show order summary</span>
                <font-awesome-icon :icon="isCollapse ? 'fa-chevron-up' : 'fa-chevron-down'" size="sm" icon=" fa-solid"></font-awesome-icon>
              </span>
            <span class="font-400 text-1.3">
              ${{totalPrice}}
            </span>
          </button>
        </column>
      </row>

      <row v-collapse="isCollapse" class="!p-0 !m-0 v-collapse">
        <column class="!px-2 !py-3 bg-gray-100/50 border-l-[1px] border-gray-300 !m-0 ml-auto" lg="5" col="12" >
          <div class="flex flex-col">
            <div v-for="item in cartList" class="product-checkout-item">
              <div class="flex items-center">
                <div class="product-checkout-image ">
                  <img class="object-cover w-full h-full" :srcset="item.srcset" :src="item.src" alt="">
                  <span class="product-checkout-quantity">
                  {{item.quantity}}
                </span>
                </div>
                <div class="product-checkout-content">
                  <p>
                    {{item.title}}
                  </p>
                  <p class="text-gray-500  "  v-if="item.priceDetail.family">
                    Choose Your Family Members: {{item.priceDetail.family}}
                  </p>
                  <p class="text-gray-500 " v-if="item.priceDetail.size">
                    Size: {{item.priceDetail.size}}
                  </p>
                  <p class="text-gray-500 " v-if="item.priceDetail.frame">
                    Frame: {{item.priceDetail.frame}}
                  </p>
                  <p class="text-gray-500 " v-if="item.discount">
                    Discount: {{item.discount}}
                  </p>

                </div>
              </div>
              <div>
                <p class="font-400 ">
                  ${{item.priceDetail.price * item.quantity}}
                </p>
              </div>
            </div>
            <div class="divider"></div>
            <div class="flex items-center">
              <FloatInput class="w-full"  placeholder="Discount code"/>
              <button class="btn btn-dark-fill ml-0.5">
                Apply
              </button>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-gray-600">Subtotal</span>
              <span class="font-400 text-gray-600">${{totalPrice}}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-400 text-gray-600 flex items-center">
                Shipping
                <span @click="openModal('shipping-policy')"  class=" question-mark">
                      <font-awesome-icon size="sm" icon="fa-solid fa-question" />
                </span>
              </span>
              <span class="font-400 text-gray-600">$30 </span>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-1 text-gray-600">Total</span>
              <span class="font-400 text-gray-600 ">AUD <span class="text-1.5 text-gray-600">${{Number(totalPrice)+30.00}}</span></span>
            </div>

          </div>
        </column>
      </row>

      <row class="!m-0 !p-0">
        <column class="!p-1 !m-0"  col="12">
          <nav>
            <BreadCrumb
                :pages="[
                {name:'Cart',link:{name:'CART'},active:true},
                {name:'Information',link:calculatePreviousLink,active:true},
                {name:'Shopping',active:false},
                {name:'Payment',active:false},
            ]"

            />
          </nav>
          <main class="mt-1.5">
            <div class="p-0.7 border-[1px] border-gray-200 rounded-6">
              <div class="flex justify-between items-center">
                <p>
                  <span class="text-gray-500 font-400">Contact</span>
                  <span class="text-dark font-400 ml-3">{{userInformationStore.contactInfo.value}}</span>
                </p>
                <router-link :to="calculatePreviousLink" class="text-gray-700 text-0.8 font-400">change</router-link>

              </div>
              <div class="divider !my-0.7"></div>
              <div class="flex justify-between items-center">
                <p>
                  <span class="text-gray-500 font-400">Ship to</span>
                  <span class="text-dark font-400 ml-3">{{calculateShippingAddress}}</span>
                </p>
                <router-link :to="calculatePreviousLink" class="text-gray-700 text-0.8 font-400">change</router-link>
              </div>
            </div>
            <h5  class="font-500 mt-3 mb-2">Shipping method </h5>
            <div class="p-1 border-[1px] border-gray-200 rounded-6 flex items-center justify-between">
              <div class="flex items-start">
                <input type="radio" class="radio mr-1" :checked="true">
                <div>
                  <p class="leading-1.1 text-gray-700 font-400">Standard International </p>
                  <p class="text-gray-500 font-400 text-0.8">6 to 27 business days</p>
                </div>
              </div>
              <p class="text-gray-700 font-400">$30.00</p>
            </div>
            <div class="flex justify-between items-center mt-1">
              <router-link :to="calculatePreviousLink">
                <font-awesome-icon   class="!text-[0.7rem] font-400" size="l" icon="fa-solid fa-chevron-left" />
                <span class="text-0.9 ml-0.5 font-400">Return to information</span>
              </router-link>
              <button @click="goPayment" class="btn btn-dark-fill">
                Continue to payment
              </button>
            </div>
          </main>

          <footer class="mt-3 border-t-[1px] border-gray-200 py-1">
            <ul class="flex items-center">
              <li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
                <button @click="openModal('refund-policy')">Refund Policy</button>
              </li><li class="mr-1.5  md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('shipping-policy')">Shipping Policy</button>
            </li><li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('privacy-policy')">Privacy Policy</button>
            </li><li class="mr-1.5 md:text-0.8 text-0.7 font-400 text-gray-600">
              <button @click="openModal('terms-of-service')">Terms of service</button>
            </li>
            </ul>
          </footer>
        </column>
      </row>
    </container-full>
  </section>
  <Modal row-class="!p-0 !m-0" class="w-full sm:h-[calc(100vh-7rem)] rounded-6 h-[100vh]" @closeModal="closeModal($event)" :is-active="isOpenModal" :preloader="!fetchFlag">
    <PolicyModal @closeModal="closeModal($event)" v-if="isOpenModal" :title="modalTarget" :data="policyData"/>
  </Modal>
</template>

<script setup>
import Modal from '../../components/Widget/Modal.vue'
import BreadCrumb from "../../components/Checkout/BreadCrumb.vue";
import PolicyModal from "../../components/Checkout/PolicyModal.vue";
import FloatInput from "../../components/Form/FloatInput.vue";
import {useCheckout,useShipping} from "../../composables/useCheckout.js";
const {isCollapse,totalPrice,cartList,closeModal,openModal,fetchFlag,policyData,modalTarget,isOpenModal,windowWidth}=useCheckout()
const {calculatePreviousLink,userInformationStore,calculateShippingAddress,goPayment}=useShipping()
</script>

<style lang="scss">

.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}

</style>