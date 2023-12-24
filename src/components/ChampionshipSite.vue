<template>
  <div class="text-5xl font-bold text-center pt-10 text-white uppercase titleStroke" :class="currentTeamClass">
    How many days has passed since teams' last F1 Championship
  </div>
  <div
    class="bg-[#00192D] text-white outline-8 grid grid-cols-3 gap-8"
    :class="currentTeamClass"
  >
    <!-- Stats -->
    <div class="col-span-1">
      <div
        id="stats"
        class="left mt-28 mx-8 px-6 pl-4 pt-2 pb-4 pr-8 text-xl float-left position-absolute"
      >
        <div v-if="buttonClickedRB" class="p-4 animated-border-box">
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">2005, Australia</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">369</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">95</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">264</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">113</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">95</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">7248</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">6</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">7</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedFr" class="p-4 animated-border-boxfr">
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1950, Monaco</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">1074</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">249</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">807</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">243</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">259</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">9672</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">16</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">15</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedMe" class="p-4 animated-border-boxme text-black">
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1954, France</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">293</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">137</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">289</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">125</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">105</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">7222.5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">8</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">9</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedMc" class="p-4 animated-border-boxmc text-black">
            <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1966, Monaco</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">946</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">156</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">503</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">183</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">165</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">6291.5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">8</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">12</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedAm" class="p-4 animated-border-boxam">
            <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1959, Netherlands</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">71</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">9</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">412</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">0</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedAl" class="p-4 animated-border-boxal">
            <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1977, United Kingdom</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">466</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">51</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">197</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">36</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">33</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">2225</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">2</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedWi" class="p-4 animated-border-boxwi">
            <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1975, Argentina</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">827</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">128</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">313</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">114</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">133</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">3620</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">9</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">7</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedAt" class="p-4 animated-border-boxat">
            <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">2006, Bahrain</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">351</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">3</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">809</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">0</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedAr" class="p-4 animated-border-boxar">
             <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">1950, United Kingdom</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">214</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">12</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">26</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">10</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">16</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">199</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">2</span></span
            >
          </div>
        </div>
        <div v-else-if="buttonClickedHa" class="p-4 animated-border-boxha text-black">
               <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race debut:
              <span class="font-semibold">2016, Australia</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Race starts: <span class="font-semibold">166</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Poles: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Podiums: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Wins: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Fastest laps: <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Points: <span class="font-semibold">249</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-red-400 pr-2"
              >Driver's Championship: <span class="font-semibold">0</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Days since and last champion-->
    <div class="col-span-1">
      <div class="text-4xl text-center pt-24">
        <div class="text-center mt-8 text-4xl">
          <div class="pt-2 pb-8 shiny" v-if="buttonClickedRB">
            Days elapsed since RedBull's previous championship: <br />
            <div class="text-9xl gold-text font-bold pt-8 pb-2 silver">
              <span class="shine">{{ redBullDate }}</span>
            </div>
            <div class="pt-4 pb-10">24-10-2023 - Japanese GP</div>
            <span class="text-2xl">Last champion:<br /></span>
            <span class="shiny gold-text text-5xl pt-4">
              <span class="inner-shiny">Max Verstappen</span>
            </span>
          </div>
          <div class="pt-2 pb-8 uppercase font-bold" v-else-if="buttonClickedFr">
            Days elapsed since<br> Ferrari's previous<br> championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span>{{ ferrariDate }}</span>
            </div>
            <div class="pt-4 pb-10">08-11-2023 - Brazilian GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Kimi Raikkonen</span>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedMe">
            Days since Mercedes last championship: <br />
            <div class="text-8xl font-bold pt-4 pb-2">
              {{ mercedesDate }}
            </div>
            <div class="pt-2 pb-8">Date: 12/12/2022 - Abu Dhabi GP</div>
          </div>
          <div class="pt-2 pb-8 text-black" v-else-if="buttonClickedMc">
            Days since Mclaren last won championship:<br />
            <div class="text-8xl font-bold pt-4 pb-2">
              {{ mclarenDate }}
            </div>
            <div class="pt-2 pb-8">Date: 11/01/1998 - Japanese GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAm">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAl">
            Days since Alpine last won championship:<br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ alpineDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/22/2005 - Brazilian GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedWi">
            Days since Williams last won championship:<br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ williamsDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/12/1997 - Japanese GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAt">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAr">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedHa">
            Has Never Won Constructor
          </div>
        </div>
      </div>
    </div>
    <!-- Winning Years-->
    <div class="col-span-1">
      <div
        id="champions"
        class="mx-8 mt-28 px-6 pl-4 pt-2 pb-4 pr-8 ml-64 text-xl text-center grid position-absolute"
      >
        <div v-if="buttonClickedRB" class="text-3xl animated-border-box p-4">
            <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(2010)"
          >
            2010<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2011)">
            2011<br />
          </span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2012)"
            >2012<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2013)"
            >2013<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2022)"
            >2022<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2023)"
            >2023<br
          /></span>
        </div>
        <div v-if="buttonClickedFr" class="text-xl animated-border-boxfr p-4">
            <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(1961)"
          >
            1961<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1964)">
            1964<br />
          </span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1975)"
            >1975<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1976)"
            >1976<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1977)"
            >1977<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1979)"
            >1979<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1982)"
            >1982<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1983)"
            >1983<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1999)"
            >1999<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2000)"
            >2000<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2001)"
            >2001<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2002)"
            >2002<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2003)"
            >2003<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2004)"
            >2004<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2007)"
            >2007<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2008)"
            >2008<br
          /></span>
        </div>
        <div v-if="buttonClickedMe" class="text-2xl animated-border-boxme p-4 text-black">
            <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(2014)"
          >
            2014<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2015)">
            2015<br />
          </span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2016)"
            >2016<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2017)"
            >2017<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2018)"
            >2018<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2019)"
            >2019<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2020)"
            >2020<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2021)"
            >2021<br
          /></span>
        </div>
        <div v-if="buttonClickedMc" class="text-2xl animated-border-boxmc p-4 text-black">
            <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(1974)"
          >
            1974<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1984)">
            1984<br />
          </span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1985)"
            >1985<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1988)"
            >1988<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1989)"
            >1989<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1990)"
            >1990<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1991)"
            >1991<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1998)"
            >1998<br
          /></span>
        </div>
        <div v-if="buttonClickedAl" class="text-3xl animated-border-boxal p-2">
            <div class="mt-2 pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(2005)"
          >
            2005<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(2006)">
            2006<br />
          </span>
        </div>
        <div v-if="buttonClickedWi" class="text-2xl animated-border-boxwi p-4">
            <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(1980)"
          >
            1980<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1981)">
            1981<br />
          </span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1986)"
            >1986<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1987)"
            >1987<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1992)"
            >1992<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1993)"
            >1993<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1994)"
            >1994<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1996)"
            >1996<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1997)"
            >1997<br
          /></span>
        </div>
        <!-- non champion winning teams -->
        <div v-if="buttonClickedAm" class="text-2xl animated-border-boxam p-4">
            <div class="mt-2 text-3xl pb-4 font-bold">Notable Podiums</div>
          <span
            class="hover:border-b-2 hover:border-red-400 cursor-pointer"
            @click="scrollToYear(1980)"
          >
            1980<br />
          </span>
          <span class="hover:border-b-2 hover:border-red-400 cursor-pointer"
          @click="scrollToYear(1981)">
            1981<br />
          </span>
        </div>
      </div>
    </div>

    <!-- buttons -->
    <div
      class="grid object-none object-bottom place-items-center pb-32 pt-24 col-span-4 position-absolute"
    >
      <ul class="inline mx-2">
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleRedBull"
        >
          RedBull
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleFerrari"
        >
          Ferrari
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleMercedes"
        >
          Mercedes
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleMclaren"
        >
          Mclaren
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAstonMartin"
        >
          Aston Martin
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlpine"
        >
          Alpine
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleWilliams"
        >
          Williams
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlphaTauri"
        >
          Alpha Tauri
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlfaRomeo"
        >
          Alfa Romeo
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleHaas"
        >
          Haas
        </button>
      </ul>
    </div>
  </div>
  <!-- chequred flag border-->
  <div>
  </div>
  <!-- Winning Years for each team -- WORKING -->
  <div>
    <div v-if="buttonClickedRB">
      <div id="2010" class="p-10 backgroundRB">
        <div class="text-4xl md:text-3xl text-left py-10">REDBULL WINS FIRST TITLE IN 2010</div></div>
        <div id="2011" class="p-32 backgroundRB">RED BULL WINS SECOND TITLE</div>
        <div id="2012" class="p-32">RED BULL WINS THIRD TITLE</div>
        <div id="2013" class="p-32">RED BULL WINS FOURTH TITLE</div>
        <div id="2022" class="p-32">RED BULL WINS FIFTH TITLE</div>
        <div id="2023" class="p-32">RED BULL WINS SIXTH TITLE</div>
    </div>
  </div>
  <div>
    <div v-if="buttonClickedFr">
      <div id="2010" class="p-10 backgroundRB">
        <div class="text-4xl md:text-3xl text-left py-10">REDBULL WINS FIRST TITLE IN 2010</div></div>
        <div id="2011" class="p-32 backgroundRB">RED BULL WINS SECOND TITLE</div>
        <div id="2012" class="p-32">RED BULL WINS THIRD TITLE</div>
        <div id="2013" class="p-32">RED BULL WINS FOURTH TITLE</div>
        <div id="2022" class="p-32">RED BULL WINS FIFTH TITLE</div>
        <div id="2023" class="p-32">RED BULL WINS SIXTH TITLE</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonClickedRB: true,
      buttonClickedFr: false,
      buttonClickedMe: false,
      buttonClickedMc: false,
      buttonClickedAm: false,
      buttonClickedAl: false,
      buttonClickedWi: false,
      buttonClickedAt: false,
      buttonClickedAr: false,
      buttonClickedHa: false,
    };
  },
  computed: {
    redBullDate() {
      const days = new Date("10/24/2023");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    ferrariDate() {
      const days = new Date("11/08/2008");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mercedesDate() {
      const days = new Date("12/12/2021");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mclarenDate() {
      const days = new Date("11/01/1998");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    astonMartinDate() {
      return `Has never won constructor`;
    },
    alpineDate() {
      const days = new Date("10/22/2006");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    williamsDate() {
      const days = new Date("10/12/1997");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    alphaTauriDate() {
      return `Has never won constructor`;
    },
    alfaRomeoDate() {
      return `Has never won constructor`;
    },
    haasDate() {
      return `Has never won constructor`;
    },
    currentTeamClass() {
      if (this.buttonClickedRB) {
        this.currentTeam = "RedBull"; // Set current team to RedBull when buttonClickedRB is true
        return "redbull"; // Apply 'redbull' class when buttonClickedRB is true
      } else if (this.buttonClickedFr) {
        this.currentTeam = "Ferrari";
        return "ferrari";
      } else if (this.buttonClickedMe) {
        this.currentTeam = "Mercedes";
        return "mercedes";
      } else if (this.buttonClickedMc) {
        this.currentTeam = "Mclaren";
        return "mclaren";
      } else if (this.buttonClickedAm) {
        this.currentTeam = "Aston Martin";
        return "astonmartin";
      } else if (this.buttonClickedAl) {
        this.currentTeam = "Alpine";
        return "alpine";
      } else if (this.buttonClickedWi) {
        this.currentTeam = "Williams";
        return "williams";
      } else if (this.buttonClickedAt) {
        this.currentTeam = "Alpha Tauri";
        return "alphatauri";
      } else if (this.buttonClickedAr) {
        this.currentTeam = "Alfa Romeo";
        return "alfaromeo";
      } else if (this.buttonClickedHa) {
        this.currentTeam = "Haas";
        return "haas";
      }
      return "redbull"; // Default class if no button is clicked
    },
  },
  methods: {
    scrollToYear(year) {
      const element = document.getElementById(`${year}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleRedBull() {
      this.buttonClickedRB = !this.buttonClickedRB;
      this.currentTeam = "RedBull";
      if (this.buttonClickedRB) {
        this.buttonClickedFr = false; // Close Ferrari information if Red Bull is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleFerrari() {
      this.buttonClickedFr = !this.buttonClickedFr;
      this.currentTeam = "Ferrari";
      if (this.buttonClickedFr) {
        this.buttonClickedRB = false; // Close Red Bull information if Ferrari is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMercedes() {
      this.buttonClickedMe = !this.buttonClickedMe;
      this.currentTeam = "Mercedes";
      if (this.buttonClickedMe) {
        this.buttonClickedRB = false; // Close Red Bull information if Mercedes is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mercedes is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMclaren() {
      this.buttonClickedMc = !this.buttonClickedMc;
      this.currentTeam = "Mclaren";
      if (this.buttonClickedMc) {
        this.buttonClickedRB = false; // Close Red Bull information if Mclaren is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mclaren is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAstonMartin() {
      this.buttonClickedAm = !this.buttonClickedAm;
      this.currentTeam = "Aston Martin";
      if (this.buttonClickedAm) {
        this.buttonClickedRB = false; // Close Red Bull information if Aston Martin is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Aston Martin is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlpine() {
      this.buttonClickedAl = !this.buttonClickedAl;
      this.currentTeam = "Alpine";
      if (this.buttonClickedAl) {
        this.buttonClickedRB = false; // Close Red Bull information if Alpine is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Alpine is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleWilliams() {
      this.buttonClickedWi = !this.buttonClickedWi;
      this.currentTeam = "Williams";
      if (this.buttonClickedWi) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlphaTauri() {
      this.buttonClickedAt = !this.buttonClickedAt;
      this.currentTeam = "Alpha Tauri";
      if (this.buttonClickedAt) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlfaRomeo() {
      this.buttonClickedAr = !this.buttonClickedAr;
      this.currentTeam = "Alfa Romeo";
      if (this.buttonClickedAr) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleHaas() {
      this.buttonClickedHa = !this.buttonClickedHa;
      this.currentTeam = "Haas";
      if (this.buttonClickedHa) {
        this.buttonClickedRB = false; // Close Red Bull information if Haas is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Haas is clicked
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Haas information if Red Bull is clicked
      }
    },
  },
};
</script>

<style>
.animated-border-box,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-box-glow {
  overflow: hidden;
}

.animated-border-box:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #0a2aef,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-box:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #00192d;
  /*box border radius*/
  border-radius: 5px;
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}

.silver {
  text-decoration: none;
  text-transform: uppercase;
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: shine 2s linear infinite;
}

@keyframes shine {
  from {
    mask-position: 150%;
  }
  to {
    mask-position: -50%;
  }
}

.shiny {
  color: #f5c21b;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f5c21b),
    to(#d17000)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
}

.inner-shiny::after,
.inner-shiny::before {
  animation: sparkle 3.5s infinite;
  animation-timing-function: linear;
  background: #fff;
  border-radius: 100%;
  box-shadow: 0 0 15px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
    0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff;
  content: "";
  display: block;
  height: 15px;
  opacity: 0.7;
  position: absolute;
  width: 15px;
}

.inner-shiny::before {
  animation-delay: 0.2s;
  height: 12px;
  left: 0.12em;
  top: 0.95em;
  width: 0.25em;
}

.inner-shiny::after {
  top: 0.52em;
  right: -2px;
}

@keyframes sparkle {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0.8;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.gold-text {
  background: linear-gradient(
    to bottom,
    #cfc09f 22%,
    #634f2c 24%,
    #cfc09f 26%,
    #cfc09f 27%,
    #ffecb3 40%,
    #3a2c0f 78%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
}

.gold-text:after {
  z-index: -1;
  position: absolute;
  text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f,
    5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
}

.titleStroke {
    -webkit-text-stroke-color: #000;
    -webkit-text-stroke-width: 1px;
}

.redbull {
  background-color: #00192d;
}
.ferrari {
  background-color: #a7121f;
}
.mercedes {
  background-color: #6cd3bf;
}

.mclaren {
  background-color: #ff8700;
}

.astonmartin {
  background-color: #006f62;
}

.alpine {
  background-color: #0090ff;
}

.williams {
  background-color: #005aff;
}

.alphatauri {
  background-color: #00293F;
}

.alfaromeo {
  background-color: #900000;
}

.haas {
  background-color: #b6babd;
}

.backgroundRB {
  background-color: #0a2aef;
}


/* Ferrari styles*/
.animated-border-boxfr,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxfr:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #e80c18,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxfr:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #a7121f;
  /*box border radius*/
  border-radius: 5px;
}


/* Mercedes style*/
.animated-border-boxme,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxme:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #16948f,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxme:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #6cd3bf;
  /*box border radius*/
  border-radius: 5px;
}

/* Mclaren style*/
.animated-border-boxmc,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxmc:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #000000,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxmc:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #ff8700;
  /*box border radius*/
  border-radius: 5px;
}

/* Aston Martin */
.animated-border-boxam,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxam:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #00352F,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxam:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #006f62;
  /*box border radius*/
  border-radius: 5px;
}


/* ALpine styles */
.animated-border-boxal,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxal:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #E12319,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxal:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #0090ff;
  /*box border radius*/
  border-radius: 5px;
}

/* Williams */
.animated-border-boxwi,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxwi:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #00A0DE,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxwi:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #005aff;
  /*box border radius*/
  border-radius: 5px;
}

/* Alpha Tauri */

.animated-border-boxat,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxat:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #F1F3F4,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxat:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #00293F;
  /*box border radius*/
  border-radius: 5px;
}

/* ALfa Romeo */

.animated-border-boxar,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxar:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #004E37,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxar:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #900000;
  /*box border radius*/
  border-radius: 5px;
}

/* Haas */

.animated-border-boxha,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxha:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #E6002B,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxha:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #b6babd;
  /*box border radius*/
  border-radius: 5px;
}

</style>
