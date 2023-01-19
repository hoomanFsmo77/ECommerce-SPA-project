<template>
  <section class="py-2" id="not-found-page">
    <container>
      <row>
        <column col="12">
            <h1 class="font-700 ">Page not found</h1>
          <p class="mt-1 mb-3">The page you are looking for cannot be found</p>
          <router-link class="btn btn-lg btn-dark-fill " :to="{name:'HOME'}">
            Continue Browsing
          </router-link>
        </column>
      </row>
    </container>
  </section>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>