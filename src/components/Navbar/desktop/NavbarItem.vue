<template>
  <li @click="isActive=false" @mouseenter="isActive=true" @mouseleave="isActive=false" class="py-0.5 relative py-1 ">
    <router-link  class="navbar-link" :to="data.link">
      <span class="navbar-link-content btn-link btn-stretch ">{{data.name}}</span>
      <font-awesome-icon v-if="data.subMenu>0" icon="fa-solid fa-chevron-down" />
    </router-link>
    <SubMenu v-if="data.subMenu>0" :is-active="isActive" start-top="60px" end-top="70px">
        <ul class=" [&_*]:font-500 [&_*]:text-0.9 [&_*]:text-dark">
          <li v-on="sub1.subMenu>0 && subActiveEvent" class="my-0.5 relative px-1 hover:bg-gray-100/70" v-for="sub1 in data.children">
            <router-link  class="navbar-link !justify-start" :to="sub1.link">
              <span class="navbar-link-content  btn-link btn-stretch ">{{sub1.name}}</span>
              <font-awesome-icon v-if="sub1.subMenu>0" class="!text-0.8" icon="fa-solid fa-chevron-right" />
            </router-link>
            <SubMenu v-if="sub1.subMenu>0" class="left-[100%] border-t-[1px]" :is-active="subActive" start-top="-15px" end-top="-8px">
              <ul class="[&_*]:font-500 [&_*]:text-0.9 [&_*]:text-dark">
                <li class="my-0.5 hover:bg-gray-100/70 px-1" v-for="sub2 in sub1.children">
                  <router-link  class="navbar-link !justify-start" :to="sub2.link">
                    <span class="navbar-link-content  btn-link btn-stretch ">{{sub2.name}}</span>
                  </router-link>
                </li>
              </ul>
            </SubMenu>
          </li>
        </ul>
    </SubMenu>
  </li>
</template>

<script setup>
import {ref} from "vue";
import SubMenu from "./SubMenu.vue";
let props=defineProps(['data'])
let isActive=ref(false)
let subActive=ref(false)
const openSubMenu = () => {
  subActive.value=true
}
const closeSubMenu = () => {
  subActive.value=false
}
let subActiveEvent={
  'mouseenter':openSubMenu,
  'mouseleave':closeSubMenu,
  'click':closeSubMenu
}
</script>

