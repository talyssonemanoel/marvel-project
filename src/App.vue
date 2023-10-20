<template>
  <div id="app" class="font-main d-flex flex-column">
    <AppNavbar/>
    <div class="content-container px-88-16 flex-grow-1">
      <div class="bc"><AppBreadcrumb/></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppBreadcrumb from './components/AppBreadcrumb.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppBreadcrumb
  }
}
</script>

<style>
.content-container {
  height: calc(100vh - 176px);
}

.px-88-16 {
  padding-left: 88px;
  padding-right: 88px;
}

@media (max-width: 576px) {
  .px-88-16 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .comic-img {
  height: 285px;
  border-radius: 2.8px;
  width: 343px;
  max-width: 100%;
}
}

.font-main {
  font-family: 'Roboto', sans-serif;
}
.content-title {
  text-transform: uppercase;
  text-decoration: underline; 
  font-size: 16px;
  font-weight: 700!important;
  color: black;
}
.bc{
  margin-top: 32px;
  margin-bottom: 32px;
}

</style>
