<template>
  <div class="mt-2 mb-2 font-bold text-center text-4xl lg:text-5xl">STATS</div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Race debut: <span class="font-bold">2005, Australia</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Race starts: <span class="font-bold">393</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Wins: <span class="font-bold">122</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Poles: <span class="font-bold">103</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Podiums: <span class="font-bold">282</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Fastest laps: <span class="font-bold">99</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Points: <span class="font-bold">7837</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Constructor's Championship: <span class="font-bold">6</span></span
    >
  </div>
  <div class="p-2 lg:text-3xl text-2xl">
    <span
      class="lg:px-2 py-1 hover:rounded-lg hover:bg-[#f5c21b] hover:text-black"
      >Driver's Championship: <span class="font-bold">8</span></span
    >
  </div>
</template>

<style>
.rbimg {
  --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
  --m: left var(--_i, 0%) top var(--_g), bottom var(--_i, 0%) left var(--_g),
    top var(--_i, 0%) right var(--_g), right var(--_i, 0%) bottom var(--_g);
  -webkit-mask: var(--m);
  mask: var(--m);
  filter: grayscale();
  transition: 0.4s linear;
  cursor: pointer;
}
.rbimg:hover {
  --_i: 10%;
  filter: grayscale(0);
  border: 2px solid blue;
}
</style>
