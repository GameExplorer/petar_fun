
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
    <ul>
        <li><RouterLink :to="{ name: 'Thrones'}">Throne</RouterLink></li>
        <li><RouterLink :to="{ name: 'Mountains'}">Mountains</RouterLink></li>
        <li><RouterLink :to="{ name: 'Champions'}">Champions</RouterLink></li>
  </ul>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeView',
    components: { RouterLink }
}
</script>
