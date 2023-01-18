<template>
  <Header/>
  <Navbar/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script setup>
import Navbar from '../components/Navbar/Navbar.vue'
import Header from '../components/Header/Header.vue'
import Footer from '../components/Home/Footer.vue'
</script>

<style scoped>

</style>