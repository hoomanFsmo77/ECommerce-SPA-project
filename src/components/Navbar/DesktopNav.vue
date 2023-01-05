<template>
  <row class="items-center flex-wrap !my-0 !py-0">
    <column col="9" >
      <ul class="flex gap-1.6 items-center flex-wrap">
        <NavbarItem v-for="item in navbarData" :key="item.id" :data="item"/>
      </ul>
    </column>
    <column col="3">
      <div class="flex justify-end gap-1 items-center">
        <font-awesome-icon icon="fa-solid fa-truck-fast" size="2xl" class="text-dark"/>
        <div>
          <span class="text-0.7 ">Free Shipping in Australia</span>
          <br>
          <span class="font-600 text-dark">Orders Over $70</span>
        </div>
      </div>
    </column>
  </row>
</template>

<script setup>
import NavbarItem from "./NavbarItem.vue";
let navbarData=[
  {
    id:1,
    name:'Art',
    link:{name:'HOME'},
    subMenu:2,
    children:[
      {
        id:11,
        name:'art prints',
        link:{name:'HOME'},
        subMenu:1,
        children:[
          {
            id:111,
            name:'naturescapes',
            link:{name:'HOME'},
          },{
            id:112,
            name:'surfing koalas',
            link:{name:'HOME'},
          },{
            id:113,
            name:'families',
            link:{name:'HOME'},
          },{
            id:114,
            name:'up late',
            link:{name:'HOME'},
          },{
            id:115,
            name:'wildlife portraits',
            link:{name:'HOME'},
          },{
            id:116,
            name:'view all',
            link:{name:'HOME'},
          },
        ]
      },
      {
        id:12,
        name:'travel posters',
        link:{name:'HOME'},
        subMenu:0
      },{
        id:13,
        name:'postcard booklets',
        link:{name:'HOME'},
        subMenu:0
      },{
        id:14,
        name:'stickers',
        link:{name:'HOME'},
        subMenu:0
      },
    ]
  },
  {
    id:2,
    name:'Books',
    link:{name:'HOME'},
    subMenu: 0
  },
  {
    id:3,
    name:'clothing',
    link:{name:'HOME'},
    subMenu: 1,
    children: [
      {
        id:31,
        name:'T-shirts',
        link:{name:'HOME'},
        subMenu: 0,
      }
    ]
  },
  {
    id:4,
    name:'accessories',
    link:{name:'HOME'},
    subMenu: 1,
    children: [
      {
        id:41,
        name:'beach towels',
        link:{name:'HOME'},
        subMenu: 0,
      },{
        id:42,
        name:'hats',
        link:{name:'HOME'},
        subMenu: 0,
      },{
        id:43,
        name:'tote bags',
        link:{name:'HOME'},
        subMenu: 0,
      },

    ]
  },
  {
    id:5,
    name:'surfboards',
    link:{name:'HOME'},
    subMenu: 0
  },
  {
    id:6,
    name:'gallery',
    link:{name:'HOME'},
    subMenu:1,
    children: [
      {
        id:61,
        name:'paintings',
        link:{name:'HOME'},
        subMenu: 0,
      },
      {
        id:62,
        name:'comics',
        link:{name:'HOME'},
        subMenu: 0,
      },


    ]
  },
  {
    id:7,
    name:'murals',
    link:{name:'HOME'},
    subMenu:1,
    children: [
      {
        id:71,
        name:'mural gallery',
        link:{name:'HOME'},
        subMenu: 0,
      },
      {
        id:61,
        name:'get a mural painted',
        link:{name:'HOME'},
        subMenu: 0,
      },
    ]
  },
  {
    id:7,
    name:'collabs',
    link:{name:'HOME'},
    subMenu:1,
    children: [
      {
        id:71,
        name:'Brand collabs',
        link:{name:'HOME'},
        subMenu: 0,
      },
      {
        id:72,
        name:'collab with us',
        link:{name:'HOME'},
        subMenu: 0,
      },
    ]
  },
  {
    id:8,
    name:'our story',
    link:{name:'HOME'},
    subMenu:0
  },
]


</script>

<style scoped>

</style>