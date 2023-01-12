<template>
    <div class="my-1">
      <ul class="flex gap-1 flex-wrap items-center">
        <template v-for="(item,index) in pages">
          <li >
            <router-link class="font-600 text-[0.85rem] capitalize" v-if="item.link" :to="item.link">
              {{item.name}}
            </router-link>
            <span class="font-600 text-[0.85rem] capitalize" v-else>
            {{item.name}}
          </span>
          </li>
          <li>
            <span  class="text-[0.85rem] font-600" v-if="index!==pages.length-1">/</span>
          </li>
        </template>

      </ul>
    </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props:['pages']
}
</script>

<style scoped>

</style>