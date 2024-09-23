<template>
    <h1 class="text-center text-8xl lg:text-9xl pt-6 uppercase font-semibold">5200</h1>
    <h2 class="text-center text-5xl lg:text-7xl p-12 uppercase font-bold">
      Your life in Weeks
    </h2>
    <p class="text-center text-2xl p-2">See how many weeks have passed since your birth</p>
    <p class="text-center text-2xl p-2">Life is short, you will probably never reach <span class="text-red-500 font-bold">5200</span> weeks. <span class="font-bold uppercase">Make it count!</span></p>
</template>

<script>
export default {
  name: "LifeInWeeksHeader",
};
</script>

<style scoped>
@font-face {
  font-family: "Maston";
  src: url("@/assets/Fonts/MRKMaston-Bold.ttf") format("truetype");
}

h1 {
    font-family: "Maston", sans-serif;
}
</style>