<template>
  <router-view></router-view>
</template>

<script setup>
/////////// main style
import './style/App.scss';
///////////
import useApp from "./composables/useApp.js";
const init=useApp()
</script>

