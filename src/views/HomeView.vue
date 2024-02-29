<style></style>
<template>
  <!-- add Images to the router links and make it like a grid 3x3 or 2x2-->
  <ul class="grid grid-rows grid-cols-2 gap-1 pt-12 px-32 m-12">
    <li class="flex items-center justify-center rounded-lg">
      <RouterLink :to="{ name: 'Thrones' }">Thrones </RouterLink>
    </li>
    <li class="flex items-center justify-center p-4 border-2">
      <RouterLink :to="{ name: 'Mountains' }">Mountains</RouterLink>
    </li>
    <li class="flex items-center justify-center p-4 border-2">
      <RouterLink :to="{ name: 'Champions' }">Champions</RouterLink>
    </li>
    <li class="flex items-center justify-center p-4 border-2">Solar System</li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: { RouterLink },
};
</script>
