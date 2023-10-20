<template>
  <nav aria-label="breadcrumb d-flex align-items-center">
    <ol class="breadcrumb font-bc mb-0">
      <li class="custom-icon d-flex align-items-center">
        <ion-icon name="home"></ion-icon>
      </li>
      <li class="breadcrumb-item active" v-for="(route, i) in routes" :key="i">
        <router-link :to="route.path" v-if="i !== routes.length - 1">{{ route.name }}</router-link>
        <span v-else>{{ route.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  computed: {
    routes() {
      return this.$route.matched;
    },
  },
};
</script>

<style>
.custom-icon {
    padding-right: 8px;
    color: #767676;
}

.font-bc {
    font-weight: 400;
    font-size: 14px;
}

.breadcrumb-item a {
  color: inherit; /* herda a cor do texto do elemento pai */
  text-decoration: none; /* remove o sublinhado */
}

.breadcrumb-item a:hover {
  color: inherit; /* mantém a cor do texto ao passar o mouse */
}

</style>
