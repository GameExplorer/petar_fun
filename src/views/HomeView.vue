<template>
  <div class="fontsMain">
    <div class="flex items-center justify-center pt-16">
      <h1 class="text-5xl font-bold uppercase">PETAR.FUN</h1>
    </div>
    <ul class="grid grid-rows grid-cols-1 xl:grid-cols-3 gap-2 justify-content-center px-4 pt-4 xl:px-32">
      <li v-for="link in links" :key="link.name" class="flex items-center justify-center">
        <RouterLink :to="link.to">
          <img
            :src="link.image"
            alt="{{ link.name }} page"
            class="hover:scale-105 transition-all duration-500"
          />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: { RouterLink },
  data() {
    return {
      links: [
        { name: "Thrones", to: { name: "Thrones" }, image: "/Images/PageIcons/thrones_button.png" },
        { name: "Mountains", to: { name: "Mountains" }, image: "/Images/PageIcons/mountains_button.png" },
        { name: "Champions", to: { name: "Champions" }, image: "/Images/PageIcons/F1Champions.png" },
        { name: "Life", to: { name: "Life" }, image: "/Images/PageIcons/LifeInWeeks.webp" },
      ],
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Archia";
  src: url("@/assets/Fonts/archia-regular.woff") format("truetype");
}

.fontsMain {
  font-family: "Archia", sans-serif;
}
</style>