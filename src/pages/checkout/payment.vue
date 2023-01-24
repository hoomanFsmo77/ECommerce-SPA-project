<template>
  <nav>
    <BreadCrumb
        :pages="[
                {name:'Cart',link:{name:'CART'},active:true},
                {name:'Information',link:calculateContactInfoLink,active:true},
                {name:'Shopping',link:calculateShippingMethodLink,active:true},
                {name:'Payment',active:false},
            ]"
    />
  </nav>
  <main class="mt-1.5">
    <div class="p-0.7 border-[1px] border-gray-200 rounded-6">
      <div class="flex justify-between items-center">
        <p class="flex flex-col lg:block">
          <span class="text-gray-500 font-400 mb-0.5 lg:mb-0">Contact</span>
          <span class="text-dark font-400 lg:ml-3">{{userInformationContactStore.contactInfo.value}}</span>
        </p>
        <router-link :to="calculateContactInfoLink" class="text-gray-700 text-0.8 font-400">change</router-link>

      </div>
      <div class="divider !my-0.7"></div>
      <div class="flex justify-between items-center">
        <p class="flex flex-col lg:block">
          <span class="text-gray-500 mb-0.5 lg:mb-0 font-400">Ship to</span>
          <span class="text-dark font-400 lg:ml-3">{{calculateShippingAddress}}</span>
        </p>
        <router-link :to="calculateContactInfoLink" class="text-gray-700 text-0.8 font-400">change</router-link>
      </div>
      <div class="divider !my-0.7"></div>
      <div class="flex justify-between items-center">
        <p class="flex flex-col lg:block">
          <span class="text-gray-500 mb-0.5 lg:mb-0 font-400">Method</span>
          <span class="text-dark font-400 lg:ml-3">{{userInformationShippingStore.name}} · ${{userInformationShippingStore.price.toFixed(2)}}</span>
        </p>
        <router-link :to="calculateShippingMethodLink" class="text-gray-700 text-0.8 font-400">change</router-link>
      </div>
    </div>
    <div class=" mb-1.5">
      <h5 class="!font-500 mt-2.5">Payment</h5>
      <p class="text-gray-600 font-400">All transactions are secure and encrypted. </p>
    </div>
    <div class="payment-card">
      <div class="payment-card-header">
        <p class="font-400">Credit card </p>
        <div class="flex items-center">
          <img src="../../assets/visa.svg" width="30" alt="">
          <img src="../../assets/master.svg" class="mx-1" width="30" alt="">
          <img src="../../assets/express.svg"  width="30" alt="">
        </div>
      </div>
      <div class="payment-card-body">
        <row class="!py-0">
          <column col="12">
            <InputTooltip v-model="cardNumber" icon="fa-solid fa-lock" placeholder="Card number" toolTip="All transactions are secure and encrypted."/>
          </column>
        </row>
        <row class="!py-0">
          <column col="12">
            <input v-model="cardName" type="text" placeholder="Name on card" class="input-light  input-sm !rounded-6 placeholder:!font-400 !border-gray-400 w-full">
          </column>
        </row>
        <row>
          <column col="12" md="6" class="md:pr-0.5">
            <input v-model="expDay" type="text" placeholder="Expiration day (MM / YY)" class="input-light  input-sm !rounded-6 placeholder:!font-400 !border-gray-400 w-full">
          </column>
          <column col="12" md="6">
            <InputTooltip v-model="secCode" icon="fa-solid fa-circle-question" placeholder="Security code" toolTip="3-digit security code on the back of your card"/>
          </column>

        </row>
      </div>
    </div>
    <div class=" my-1.5">
      <h5 class="!font-500 mt-2.5">Billing address</h5>
      <p class="text-gray-600 font-400">Select the address that matches your card or payment method.  </p>
    </div>
    <div class="payment-card">
      <div class="payment-card-header">
        <div class="flex items-center">
          <input  @click="wantChangeMethod=false" checked id="same" name="method" type="radio" class="radio">
          <label for="same" class="!font-400 !text-0.9 ml-0.5 cursor-pointer">Same as shipping address  </label>
        </div>

      </div>
      <div class="payment-card-header">
        <div class="flex items-center">
          <input @click="wantChangeMethod=true" id="different" name="method" type="radio" class="radio">
          <label for="different" class="!font-400 !text-0.9 ml-0.5 cursor-pointer">Use a different billing address   </label>
        </div>

      </div>
      <div class="payment-card-body" v-show="wantChangeMethod">
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
      </div>
    </div>
    <div class=" my-1.5">
      <h5 class="!font-500 mt-2.5">Remember me</h5>
    </div>
    <div class="payment-card">
      <div class="payment-card-header">
        <div class="flex items-center">
          <input  @click="wantRemember=!wantRemember"  id="remember" name="remember" type="checkbox" class="checkbox">
          <label for="remember" class="!font-400 !text-0.9 ml-0.5 cursor-pointer">
            Save my information for a faster checkout   </label>
        </div>
      </div>
      <div v-show="wantRemember" class="payment-card-body">
        <row class="!py-0">
          <column col="12" md="6">
            <PhoneNumberSelect v-model="phoneNumber" label="Mobile phone number"/>
          </column>
        </row>
        <p class="font-400 text-gray-600 ">Next time you check out here or on other stores powered by Shopify, you’ll receive a code by text message to securely purchase with Shop Pay. </p>
      </div>
    </div>
    <div class="flex justify-between items-center mt-1.5">
      <router-link :to="calculateShippingMethodLink">
        <font-awesome-icon   class="!text-[0.7rem] font-400" size="l" icon="fa-solid fa-chevron-left" />
        <span class="text-0.9 ml-0.5 font-400">Return to shipping</span>
      </router-link>
      <button @click="finishPayment" class="btn btn-dark-fill">
        Pay now
      </button>
    </div>

  </main>

</template>

<script setup>
import SelectBox from "../../components/Form/SelectBox.vue";
import FloatInput from "../../components/Form/FloatInput.vue";
import BreadCrumb from "../../components/Checkout/BreadCrumb.vue";
import InputTooltip from '../../components/Form/InputTooltip.vue';
import PhoneNumberSelect from "../../components/Form/PhoneNumberSelect.vue";
import {usePayment,useCheckoutLinks,useCheckoutCollection} from "../../composables/useCheckout.js";
let props=defineProps(['id','token'])
const {stateData,zip,state,contactInfo,stateFlag,country,firstname,lastname,address,validation,countryFlag,city,addressType,countryData,userInfo}=useCheckoutCollection()
const {userInformationContactStore,userInformationShippingStore,wantChangeMethod,wantRemember,phoneNumber,secCode,expDay,cardName,cardNumber,finishPayment}=usePayment(userInfo)
const {calculateContactInfoLink,calculateShippingMethodLink,calculateShippingAddress}=useCheckoutLinks()
</script>

<style scoped>

</style>