<template>
  <section id="robot-validation" class="py-2">
    <container>
      <row class="justify-center">
        <column col="5">
          <form @submit.prevent="submit">
            <div class="bg-gray-100/70 border-[1px] border-gray-300 p-2 rounded-8">
              <h6 class="text-center">To continue, let us know you're not a robot. </h6>
              <div class="flex justify-center my-2">
                <VueRecaptcha
                    :sitekey="siteKey"
                    :load-recaptcha-script="true"
                    @verify="handleSuccess"
                    @error="handleError"
                ></VueRecaptcha>

              </div>
              <div class="text-center">
                <button class="btn-dark-fill btn">Submit</button>
              </div>
            </div>
          </form>
        </column>
      </row>
    </container>
  </section>
</template>

<script setup>
import {ref,computed} from "vue";
import { VueRecaptcha } from 'vue-recaptcha';
import {removeCookie} from "../composables/Cookie.js";
import {useRouter} from "vue-router";
///////////////////////////////////
const captchaStatus=ref(false)
const router=useRouter()
const siteKey=computed(()=>'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI')
const handleSuccess = () => {
  captchaStatus.value=true
}
const handleError = () => {
  captchaStatus.value=false
}

const submit = () => {
  if(captchaStatus.value){
    removeCookie('_news_letter_',3)
    router.push({
      name:'HOME',
      query:{
        submit:true
      }
    })
  }
}
</script>

<style scoped>

</style>