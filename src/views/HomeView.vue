
<style>
ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
<template>
  <!-- add Images to the router links and make it like a grid 3x3 or 2x2-->
  <ul class="grid grid-rows grid-cols-2 gap-4 pt-12">
        <li class=" flex items-center justify-center p-4 border-2"><RouterLink :to="{ name: 'Thrones'}">Throne</RouterLink></li>
        <li class=" flex items-center justify-center p-4 border-2"><RouterLink :to="{ name: 'Mountains'}">Mountains</RouterLink></li>
        <li class=" flex items-center justify-center p-4 border-2"><RouterLink :to="{ name: 'Champions'}">Champions</RouterLink></li>
        <li class=" flex items-center justify-center p-4 border-2">Solar System</li>
  </ul>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeView',
    components: { RouterLink }
}
</script>
