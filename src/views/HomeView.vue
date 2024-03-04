<style>
@font-face {
  font-family: "Archia";
  src: url("@/assets/Fonts/archia-regular.woff") format("truetype");
}

.fontsMain {
  font-family: "Rubik";
}
</style>
<template>
  <div class="fontsMain">
    <div class="flex items-center justify-center pt-16">
      <h1 class="text-4xl font-bold uppercase">PETAR.FUN</h1>
    </div>
    <!-- add Images to the router links and make it like a grid 3x3 or 2x2-->
    <ul class="grid grid-rows grid-cols-3 pt-12 gap-1 px-64 mx-12">
      <li class="flex items-center justify-center rounded-lg border-2">
        <RouterLink :to="{ name: 'Thrones' }"> Thrones </RouterLink>
      </li>
      <li class="flex items-center justify-center">
        <RouterLink :to="{ name: 'Mountains' }">
          <div class="flex items-center justify-center">
            Mountains
          </div>
        </RouterLink>
      </li>
      <li class="flex items-center justify-center">
        <RouterLink :to="{ name: 'Champions' }">
          <div class="flex items-center justify-center">F1 Champions</div>
        </RouterLink>
      </li>
      <li class="flex items-center justify-center p-4 border-2">
        Solar System
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: { RouterLink },
};
</script>
