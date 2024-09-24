<template>
  <h1 class="text-center text-8xl lg:text-9xl pt-6 uppercase font-semibold">
    5200
  </h1>
  <h2 class="text-center text-5xl lg:text-7xl p-12 uppercase font-bold">
    Your life in <span class="underline underline-offset-4 decoration-4 decoration-double decoration-red-500">Weeks</span>
  </h2>
  <p class="text-center text-2xl p-2">
    See how many weeks have passed since your birth
  </p>
  <p class="text-center text-2xl p-2">
    Life is short, you will probably never reach
    <span class="text-red-500 font-bold">5200</span> weeks.
    <span class="font-bold uppercase">Make it count!</span>
  </p>
  <div class="container mx-auto text-center pt-4">
    <div class="flex flex-col items-center w-full max-w-4xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full">
        <div class="flex items-center justify-center sm:justify-end">
          <div class="circle-base babyCircle"></div>
          <div class="ml-2">- Baby Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
          <div class="circle-base toddlerCircle"></div>
          <div class="ml-2">- Toddler Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-end">
          <div class="circle-base kidCircle"></div>
          <div class="ml-2">- Kid Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
          <div class="circle-base teenCircle"></div>
          <div class="ml-2">- Teen Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-end">
          <div class="circle-base youngAdultCircle"></div>
          <div class="ml-2">- Young Adult Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
          <div class="circle-base adultCircle"></div>
          <div class="ml-2">- Adult Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-end">
          <div class="circle-base seniorCircle"></div>
          <div class="ml-2">- Senior Years</div>
        </div>
        <div class="flex items-center justify-center sm:justify-start">
          <div class="circle-base elderlyCircle"></div>
          <div class="ml-2">- Elderly Years</div>
        </div>
      </div>
    </div>
  </div>
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
