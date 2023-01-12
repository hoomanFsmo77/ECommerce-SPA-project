<template>
  <section id="newsletter" class="my-2">
    <container-full >
      <row class="sm:!mx-2 !mx-1">
        <column col="12"  class="py-4 bg-dark rounded-6 ">
          <row class="justify-center">
            <column col="12" sm="5" class="px-1">
              <h2 class="text-light font-600 text-center">
                Get 10% Off When You Join the Brentos Newsletter
              </h2>
              <IGroup v-model="userEmail" @action="submit" type="email" placeholder="Enter your email"/>
              <h6 class="text-center text-light my-1" v-if="$route.query.submit">Thank you for submitting!</h6>
            </column>
          </row>
        </column>
      </row>
    </container-full>
  </section>
</template>

<script setup>
import '../../composables/HashGenerator.js'
import {ref} from "vue";
import IGroup from "../Form/IGroup.vue";
import {useRouter} from "vue-router";
import {setCookie} from "../../composables/Cookie.js";
//////////////////////////////////////////
let userEmail=ref('')
const router=useRouter()
const submit = () => {
  let userHashCode=userEmail.value.hashCode()
  setCookie('_news_letter_',userHashCode,3)
  router.push({
    name:'CHALLENGE_PAGE',
    query:{
      email:userEmail.value
    },
    hash:`#${userHashCode}`
  })
}
</script>

<style scoped>

</style>