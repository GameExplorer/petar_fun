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
    <ul class="grid grid-rows grid-cols-1 xl:grid-cols-3 gap-2 justify-content-center px-4   pt-4 xl:px-32">
      <li class="flex items-center justify-center">
        <RouterLink :to="{ name: 'Thrones' }">
          <img
            src="/Images/PageIcons/thrones_button.png"
            alt="Thrones page"
            class="hover:scale-105 transition-all duration-500"
          />
        </RouterLink>
      </li>
      <li class="flex items-center justify-center">
        <RouterLink :to="{ name: 'Mountains' }">
          <div class="flex items-center justify-center">
            <img
              src="/Images/PageIcons/mountains_button.png"
              alt="Mountains page"
              class="hover:scale-105 transition-all duration-500"
            />
          </div>
        </RouterLink>
      </li>
      <li class="flex items-center justify-center">
        <RouterLink :to="{ name: 'Champions' }">
          <div class="flex items-center justify-center">
            <img
              src="/Images/F1Champions.png"
              alt="Champions page"
              class="hover:scale-105 transition-all duration-500"
            />
          </div>
        </RouterLink>
      </li>
      <div class="hidden">
      <li class="flex items-center justify-center p-4">
        <img
          src="/Images/space.png"
          alt="Champions page"
          class="hover:scale-105 transition-all duration-500"
        />
      </li>
      <li class="flex items-center justify-center p-4">
        <img
          src="/Images/PageIcons/history.png"
          alt="Champions page"
          class="hover:scale-105 transition-all duration-500"
        />
      </li>
      <li class="flex items-center justify-center p-4">
        <img
          src="/Images/PageIcons/life.png"
          alt="Champions page"
          class="hover:scale-105 transition-all duration-500"
        />
      </li>
      </div>
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