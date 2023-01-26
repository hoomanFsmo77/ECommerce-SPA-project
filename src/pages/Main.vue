<template>
  <Header/>
  <Navbar/>
  <main>
    <router-view></router-view>
  </main>
  <DiscountAlert/>
  <Footer/>
</template>

<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import Header from '../components/Header/Header.vue'
import Footer from '../components/Home/Footer.vue'
import DiscountAlert from "../components/Home/DiscountAlert.vue";
</script>

<style scoped>

</style>