<template>
    <div class="my-1">
      <ul class="flex gap-1 items-center">
        <template v-for="(item,index) in pages">
          <li >
            <router-link class="font-600 text-0.9" v-if="item.link" :to="item.link">
              {{item.name}}
            </router-link>
            <span class="font-600 text-0.9" v-else>
            {{item.name}}
          </span>
          </li>
          <li>
            <span  class="text-0.9 font-600" v-if="index!==pages.length-1">/</span>
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