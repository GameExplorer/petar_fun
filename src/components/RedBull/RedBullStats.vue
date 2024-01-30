<template>
<div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut: <span class="font-bold">2005, Australia</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-bold">369</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-bold">95</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-bold">264</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-bold">113</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-bold">95</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-bold">7248</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-bold">6</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-bold">7</span></span
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