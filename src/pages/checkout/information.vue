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
                {name:'Information',active:true},
                {name:'Shopping',active:false},
                {name:'Payment',active:false},
            ]"

            />
          </nav>
          <main>
            <h5 class="!font-500 mb-0.5">Contact Information</h5>
            <FloatInput :error-flag="validation(contactInfo.length>0,'contactInfo')" error-message="Enter an email or mobile phone number" v-model="contactInfo" placeholder="Email or mobile phone number"/>
            <template v-if="!isNaN(contactInfo)">
              <div class="flex items-center">
                <input id="news" v-model="news" :value="false" type="checkbox" class="checkbox">
                <label for="news" class="text-0.9 ml-0.5 text-gray-700">Email me with news and offers </label>
              </div>
            </template>
            <template v-else>
              <p class="text-0.8 text-gray-600 font-400 mt-0.5">
                You may receive text messages related to order confirmation and shipping updates. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our
                <button  @click="openModal('privacy-policy')" class="!text-dark">Privacy policy</button> and
                <button  @click="openModal('terms-of-service')" class="!text-dark">Terms of service.</button>
              </p>
            </template>
            <h5 class="!font-500 mt-2.5 mb-1.5">Shipping address </h5>
            <SelectBox  :error-flag="validation(country.code.length>0,'country')" error-message="Select a country" class="!my-1" label="Country/Region" :flag="countryFlag" v-model="country" :option="countryData" />
            <row class="!p-0 !m-0">
              <column class="sm:pr-1" col="12" sm="6">
                <FloatInput error-message="Enter a firstname" :error-flag="validation(firstname.length>0,'firstname')"  v-model="firstname" placeholder="First name"/>
              </column>
              <column col="12" sm="6">
                <FloatInput error-message="Enter a lastname" :error-flag="validation(lastname.length>0,'lastname')" v-model="lastname" placeholder="Last name"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column col="12" >
                <FloatInput error-message="Enter a address" :error-flag="validation(address.length>0,'address')" v-model="address" placeholder="Address"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column col="12" >
                <FloatInput  v-model="addressType" placeholder="Apartment, suite, etc. (optional)"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column  class="sm:pr-0.5"  col="12" sm="4" >
                <FloatInput error-message="Enter a city" :error-flag="validation(city.length>0,'city')" v-model="city" placeholder="City"/>
              </column>
              <column class="sm:pr-0.5" col="12" sm="4" >
                <SelectBox error-message="Select a state" :error-flag="validation(state.code.length>0,'state')" :state="true" :flag="stateFlag" select-class="!pt-1.1" label="State" v-model="state" :option="stateData"/>
              </column>
              <column  col="12" sm="4" >
                <FloatInput error-message="Enter a zip" :error-flag="validation(zip.length>0,'zip')" v-model="zip" placeholder="Zip code"/>
              </column>
            </row>
            <div class="flex justify-between items-center mt-1">
              <router-link :to="{name:'CART'}">
                <font-awesome-icon   class="!text-[0.7rem] font-400" size="l" icon="fa-solid fa-chevron-left" />
                <span class="text-0.9 ml-0.5 font-400">Return to cart</span>
              </router-link>
              <button @click="goShipping" class="btn btn-dark-fill">
                Continue to shipping
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
              <span class="font-400 text-gray-600">Calculated at next step </span>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-1 text-gray-600">Total</span>
              <span class="font-400 text-gray-600 ">AUD <span class="text-1.5 text-gray-600">${{totalPrice}}</span></span>
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
              <span class="font-400 text-gray-600">Calculated at next step </span>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between items-center mb-0.5">
              <span class="font-400 text-1 text-gray-600">Total</span>
              <span class="font-400 text-gray-600 ">AUD <span class="text-1.5 text-gray-600">${{totalPrice}}</span></span>
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
                {name:'Information',active:true},
                {name:'Shopping',active:false},
                {name:'Payment',active:false},
            ]"

            />
          </nav>
          <main>
            <h5 class="!font-500 mb-0.5">Contact Information</h5>
            <FloatInput :error-flag="validation(contactInfo.length>0,'contactInfo')" error-message="Enter an email or mobile phone number" v-model="contactInfo" placeholder="Email or mobile phone number"/>
            <template v-if="!isNaN(contactInfo)">
              <div class="flex items-center">
                <input id="news" v-model="news" :value="false" type="checkbox" class="checkbox">
                <label for="news" class="text-0.9 ml-0.5 text-gray-700">Email me with news and offers </label>
              </div>
            </template>
            <template v-else>
              <p class="text-0.8 text-gray-600 font-400 mt-0.5">
                You may receive text messages related to order confirmation and shipping updates. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our
                <button  @click="openModal('privacy-policy')" class="!text-dark">Privacy policy</button> and
                <button  @click="openModal('terms-of-service')" class="!text-dark">Terms of service.</button>
              </p>
            </template>
            <h5 class="!font-500 mt-2.5 mb-1.5">Shipping address </h5>
            <SelectBox  :error-flag="validation(country.code.length>0,'country')" error-message="Select a country" class="!my-1" label="Country/Region" :flag="countryFlag" v-model="country" :option="countryData" />
            <row class="!p-0 !m-0">
              <column class="sm:pr-1" col="12" sm="6">
                <FloatInput error-message="Enter a firstname" :error-flag="validation(firstname.length>0,'firstname')"  v-model="firstname" placeholder="First name"/>
              </column>
              <column col="12" sm="6">
                <FloatInput error-message="Enter a lastname" :error-flag="validation(lastname.length>0,'lastname')" v-model="lastname" placeholder="Last name"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column col="12" >
                <FloatInput error-message="Enter a address" :error-flag="validation(address.length>0,'address')" v-model="address" placeholder="Address"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column col="12" >
                <FloatInput  v-model="addressType" placeholder="Apartment, suite, etc. (optional)"/>
              </column>
            </row>
            <row class="!p-0 !m-0">
              <column  class="sm:pr-0.5"  col="12" sm="4" >
                <FloatInput error-message="Enter a city" :error-flag="validation(city.length>0,'city')" v-model="city" placeholder="City"/>
              </column>
              <column class="sm:pr-0.5" col="12" sm="4" >
                <SelectBox error-message="Select a state" :error-flag="validation(state.code.length>0,'state')" :state="true" :flag="stateFlag" select-class="!pt-1.1" label="State" v-model="state" :option="stateData"/>
              </column>
              <column  col="12" sm="4" >
                <FloatInput error-message="Enter a zip" :error-flag="validation(zip.length>0,'zip')" v-model="zip" placeholder="Zip code"/>
              </column>
            </row>
            <div class="flex justify-between items-center mt-1">
              <router-link :to="{name:'CART'}">
                <font-awesome-icon   class="!text-[0.7rem] font-400" size="l" icon="fa-solid fa-chevron-left" />
                <span class="text-0.9 ml-0.5 font-400">Return to cart</span>
              </router-link>
              <button @click="goShipping" class="btn btn-dark-fill">
                Continue to shipping
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

<script  setup>
import Modal from '../../components/Widget/Modal.vue'
import BreadCrumb from "../../components/Checkout/BreadCrumb.vue";
import SelectBox from "../../components/Form/SelectBox.vue";
import PolicyModal from "../../components/Checkout/PolicyModal.vue";
import {useInformation,useCheckout} from "../../composables/useCheckout.js";
import FloatInput from "../../components/Form/FloatInput.vue";
let props=defineProps(['id','token'])
const {contactInfo,news,country,lastname,firstname,zip,state,addressType,address,city,goShipping,countryData,userInfo,stateData,countryFlag,stateFlag,validation}=useInformation(props)
const {isCollapse,totalPrice,cartList,closeModal,openModal,fetchFlag,policyData,modalTarget,isOpenModal,windowWidth}=useCheckout(props)
</script>

<style lang="scss">

.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}

</style>