<template>
  <Header/>
  <Navbar/>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer/>
</template>

<script setup>
/////////// main style
import './style/App.scss';
////////// components
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

