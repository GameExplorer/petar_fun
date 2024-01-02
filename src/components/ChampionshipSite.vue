<template>
  <div
    class="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center pt-10 text-white uppercase titleStroke"
    :class="currentTeamClass"
  >
    How many days has passed since teams' last F1 Championship
  </div>
  <div
    class="bg-[#00192D] text-white outline-8 grid grid-cols-3 gap-8"
    :class="currentTeamClass"
  >
    <!-- Stats -->
    <div class="col-span-1 cursor-default">
      <div
        id="stats"
        class="left mt-28 mx-8 px-6 pl-4 pt-2 pb-4 pr-8 text-xl float-left position-absolute"
      >
        <div v-if="buttonClickedRB" class="p-4 uppercase animated-border-box">
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
        </div>
        <div
          v-else-if="buttonClickedFr"
          class="p-4 uppercase animated-border-boxfr"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race debut: <span class="font-bold">1950, Monaco</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race starts: <span class="font-bold">1074</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Poles: <span class="font-bold">249</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Podiums: <span class="font-bold">807</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Wins: <span class="font-bold">243</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Fastest laps: <span class="font-bold">259</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Points: <span class="font-bold">9672</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Constructor's Championship:
              <span class="font-bold">16</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Driver's Championship: <span class="font-bold">15</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedMe"
          class="p-4 uppercase animated-border-boxme text-black"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race debut: <span class="font-bold">1954, France</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race starts: <span class="font-bold">293</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Poles: <span class="font-bold">137</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Podiums: <span class="font-bold">289</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Wins: <span class="font-bold">125</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Fastest laps: <span class="font-bold">105</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Points: <span class="font-bold">7222.5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Constructor's Championship:
              <span class="font-bold">8</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Driver's Championship: <span class="font-bold">9</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedMc"
          class="p-4 uppercase animated-border-boxmc text-black"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race debut: <span class="font-bold">1966, Monaco</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race starts: <span class="font-bold">946</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Poles: <span class="font-bold">156</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Podiums: <span class="font-bold">503</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Wins: <span class="font-bold">183</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Fastest laps: <span class="font-bold">165</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Points: <span class="font-bold">6291.5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Constructor's Championship:
              <span class="font-bold">8</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Driver's Championship: <span class="font-bold">12</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedAm"
          class="p-4 uppercase animated-border-boxam"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race debut:
              <span class="font-semibold">1959, Netherlands</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race starts: <span class="font-semibold">71</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Poles: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Podiums: <span class="font-semibold">9</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Wins: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Fastest laps: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Points: <span class="font-semibold">412</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Driver's Championship: <span class="font-semibold">0</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedAl"
          class="p-4 uppercase animated-border-boxal"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race debut:
              <span class="font-semibold">1977, United Kingdom</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race starts: <span class="font-semibold">466</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Poles: <span class="font-semibold">51</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Podiums: <span class="font-semibold">197</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Wins: <span class="font-semibold">36</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Fastest laps: <span class="font-semibold">33</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Points: <span class="font-semibold">2225</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Constructor's Championship:
              <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Driver's Championship: <span class="font-semibold">2</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedWi"
          class="p-4 uppercase animated-border-boxwi"
        >
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
        <div
          v-else-if="buttonClickedAt"
          class="p-4 uppercase animated-border-boxat"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race debut:
              <span class="font-semibold">2006, Bahrain</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race starts: <span class="font-semibold">351</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Poles: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Podiums: <span class="font-semibold">5</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Wins: <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Fastest laps: <span class="font-semibold">3</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Points: <span class="font-semibold">809</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Driver's Championship: <span class="font-semibold">0</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedAr"
          class="p-4 uppercase animated-border-boxar"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race debut:
              <span class="font-semibold">1950, United Kingdom</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Race starts: <span class="font-semibold">214</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Poles: <span class="font-semibold">12</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Podiums: <span class="font-semibold">26</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Wins: <span class="font-semibold">10</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Fastest laps: <span class="font-semibold">16</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Points: <span class="font-semibold">199</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-white pr-2"
              >Driver's Championship: <span class="font-semibold">2</span></span
            >
          </div>
        </div>
        <div
          v-else-if="buttonClickedHa"
          class="p-4 uppercase animated-border-boxha text-black"
        >
          <div class="mt-2 mb-2 font-bold text-center text-3xl">STATS</div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race debut:
              <span class="font-semibold">2016, Australia</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Race starts: <span class="font-semibold">166</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Poles: <span class="font-semibold">1</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Podiums: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Wins: <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Fastest laps: <span class="font-semibold">2</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Points: <span class="font-semibold">249</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
              >Constructor's Championship:
              <span class="font-semibold">0</span></span
            >
          </div>
          <div class="p-2">
            <span class="hover:border-b-2 hover:border-black pr-2"
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
          <div
            class="pt-2 pb-8 uppercase font-bold"
            v-else-if="buttonClickedFr"
          >
            Days elapsed since<br />
            Ferrari's previous<br />
            championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span class="">{{ ferrariDate }}</span>
            </div>
            <div class="pt-4 pb-10">08-11-2023 - Brazilian GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Kimi Raikkonen</span>
          </div>
          <div
            class="pt-2 pb-8 uppercase font-bold text-black"
            v-else-if="buttonClickedMe"
          >
            Days elapsed since<br />
            Mercedes's previous<br />
            championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span class="text-black">{{ mercedesDate }}</span>
            </div>
            <div class="pt-4 pb-10">12-12-2021 - Abu Dhabi GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Lewis Hamilton</span>
          </div>
          <div
            class="pt-2 pb-8 uppercase font-bold text-black"
            v-else-if="buttonClickedMc"
          >
            Days elapsed since<br />
            Mclaren's previous<br />
            championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span class="text-black">{{ mclarenDate }}</span>
            </div>
            <div class="pt-4 pb-10">11-01-1998 - Japanese GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Mika Hakkinen</span>
          </div>
          <div
            class="pt-2 pb-32 uppercase font-bold"
            v-else-if="buttonClickedAm"
          >
            Aston Martin<br />
            has never won<br />
            Constructor's Championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2"></div>
            <div class="pt-4 pb-10">CURRENT DRIVERS:</div>
            <span class="text-3xl"
              >Fernando Alonso<br />
              Lance Stroll</span
            >
          </div>
          <div
            class="pt-2 pb-8 uppercase font-bold"
            v-else-if="buttonClickedAl"
          >
            Days elapsed since<br />
            Alpine's previous<br />
            championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span>{{ alpineDate }}</span>
            </div>
            <div class="pt-4 pb-10">22-10-2005 - Brazilian GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Fernando Alonso</span>
          </div>
          <div
            class="pt-2 pb-8 uppercase font-bold"
            v-else-if="buttonClickedWi"
          >
            Days elapsed since<br />
            Williams's previous<br />
            championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2">
              <span>{{ williamsDate }}</span>
            </div>
            <div class="pt-4 pb-10">12-10-1997 - Japanese GP</div>
            <span class="text-2xl">LAST CHAMPION:<br /></span>
            <span class="text-5xl pt-4">Jacques Villeneuve</span>
          </div>
          <div
            class="pt-2 pb-32 uppercase font-bold"
            v-else-if="buttonClickedAt"
          >
            Alpha Tauri<br />
            has never won<br />
            Constructor's Championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2"></div>
            <div class="pt-4 pb-10">CURRENT DRIVERS:</div>
            <span class="text-3xl"
              >Daniel Ricciardo<br />
              Yuki Tsunoda</span
            >
          </div>
          <div
            class="pt-2 pb-32 uppercase font-bold"
            v-else-if="buttonClickedAr"
          >
            Alfa Romeo<br />
            has never won<br />
            Constructor's Championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2"></div>
            <div class="pt-4 pb-10">CURRENT DRIVERS:</div>
            <span class="text-3xl"
              >Valtteri Bottas<br />
              Zhou Guanyu</span
            >
          </div>
          <div
            class="pt-2 pb-32 uppercase font-bold text-black"
            v-else-if="buttonClickedHa"
          >
            Haas<br />
            has never won<br />
            Constructor's Championship: <br />
            <div class="text-9xl text-white font-bold pt-8 pb-2"></div>
            <div class="pt-4 pb-10">CURRENT DRIVERS:</div>
            <span class="text-3xl"
              >Kevin Magnussen<br />
              Nico Hulkenberg</span
            >
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
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2010)"
          >
            2010<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2011)"
          >
            2011<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2012)"
            >2012<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2013)"
            >2013<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2022)"
            >2022<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(2023)"
            >2023<br
          /></span>
        </div>
        <div v-if="buttonClickedFr" class="text-xl animated-border-boxfr p-4">
          <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1961)"
          >
            1961<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1964)"
          >
            1964<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1975)"
            >1975<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1976)"
            >1976<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1977)"
            >1977<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1979)"
            >1979<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1982)"
            >1982<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1983)"
            >1983<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(1999)"
            >1999<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2000)"
            >2000<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2001)"
            >2001<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2002)"
            >2002<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2003)"
            >2003<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2004)"
            >2004<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2007)"
            >2007<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-2xl cursor-pointer"
            @click="scrollToYear(2008)"
            >2008<br
          /></span>
        </div>
        <div
          v-if="buttonClickedMe"
          class="text-3xl animated-border-boxme p-4 text-black"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2014)"
          >
            2014<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2015)"
          >
            2015<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2016)"
            >2016<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2017)"
            >2017<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-blac hover:text-4xl cursor-pointer"
            @click="scrollToYear(2018)"
            >2018<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2019)"
            >2019<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2020)"
            >2020<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(2021)"
            >2021<br
          /></span>
        </div>
        <div
          v-if="buttonClickedMc"
          class="text-3xl animated-border-boxmc p-4 text-black"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1974)"
          >
            1974<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1984)"
          >
            1984<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1985)"
            >1985<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1988)"
            >1988<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1989)"
            >1989<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1990)"
            >1990<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1991)"
            >1991<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-black hover:text-4xl cursor-pointer"
            @click="scrollToYear(1998)"
            >1998<br
          /></span>
        </div>
        <div v-if="buttonClickedAl" class="text-3xl animated-border-boxal p-4">
          <div class="mt-2 pb-4 font-bold">WINNING YEARS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-4xl cursor-pointer"
            @click="scrollToYear(2005)"
          >
            2005<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white hover:text-4xl cursor-pointer"
            @click="scrollToYear(2006)"
          >
            2006<br />
          </span>
        </div>
        <div v-if="buttonClickedWi" class="text-3xl animated-border-boxwi p-4">
          <div class="mt-2 text-3xl pb-4 font-bold">WINNING YEARS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1980)"
          >
            1980<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1981)"
          >
            1981<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1986)"
            >1986<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1987)"
            >1987<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1992)"
            >1992<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1993)"
            >1993<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1994)"
            >1994<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1996)"
            >1996<br
          /></span>
          <span
            class="px-2 hover:border-b-2 hover:border-red-400 hover:text-4xl cursor-pointer"
            @click="scrollToYear(1997)"
            >1997<br
          /></span>
        </div>
        <!-- non champion winning teams -->
        <div
          v-if="buttonClickedAm"
          class="text-2xl uppercase animated-border-boxam p-4"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">PODIUMS</div>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2021)"
          >
            Azerbaijan, 2021<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Bahrain, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Saudi Arabia, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Australia, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Miami, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Monaco, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Canada, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Netherlands, 2023<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2023)"
          >
            Brazil, 2023<br />
          </span>
        </div>
        <div
          v-if="buttonClickedAt"
          class="text-2xl uppercase animated-border-boxat p-4"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">
            NOTABLE<br />
            ACHIEVEMENTS
          </div>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2008)"
          >
            2008, First Victory<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2019)"
          >
            2019, Double podiums<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2020)"
          >
            2020, Monza win<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2021)"
          >
            2021, Podium in AZE<br />
          </span>
        </div>
        <div
          v-if="buttonClickedAr"
          class="text-2xl uppercase animated-border-boxar p-4"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">
            NOTABLE<br />
            ACHIEVEMENTS
          </div>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(1950)"
          >
            1950, First Win in F1<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(1951)"
          >
            1951, Last Win in F1<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(1981)"
          >
            1981, 100th Start<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(1984)"
          >
            1984, Last Podium in F1<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2019)"
          >
            2019, Return to F1<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-white cursor-pointer"
            @click="scrollToYear(2022)"
          >
            2022, 400th Start<br />
          </span>
        </div>
        <div
          v-if="buttonClickedHa"
          class="text-2xl uppercase animated-border-boxha p-4 text-black"
        >
          <div class="mt-2 text-3xl pb-4 font-bold">
            NOTABLE<br />
            ACHIEVEMENTS
          </div>
          <span
            class="px-2 hover:border-b-2 hover:border-black cursor-pointer"
            @click="scrollToYear(2016)"
          >
            2016, FIRST RACE<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black cursor-pointer"
            @click="scrollToYear(2018)"
          >
            2018, P5 IN WCC<br />
          </span>
          <span
            class="px-2 hover:border-b-2 hover:border-black cursor-pointer"
            @click="scrollToYear(2022)"
          >
            2022, MAIDEN POLE<br />
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
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleRedBull"
        >
          RedBull
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleFerrari"
        >
          Ferrari
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleMercedes"
        >
          Mercedes
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleMclaren"
        >
          Mclaren
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleAstonMartin"
        >
          Aston Martin
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleAlpine"
        >
          Alpine
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleWilliams"
        >
          Williams
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleAlphaTauri"
        >
          Alpha Tauri
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleAlfaRomeo"
        >
          Alfa Romeo
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-black border-2 btn-shadow"
          @click="toggleHaas"
        >
          Haas
        </button>
      </ul>
    </div>
  </div>
  <!-- chequred flag border WORKING-->
  <div></div>
  <!-- Winning Years for each team -- WORKING -->
  <div>
    <div v-if="buttonClickedRB" class="redbull text-white grid ">
      <div id="2010" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold py-10">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl"
            >REDBULL WINS MAIDEN TITLES IN 2010</span
          >
        </div>
        <div class="text-xl">
          <img
            src="/Images/vettel2010.png"
            alt="VettelWinsFirstTitle"
            class="h-1/5 w-1/4 ml-2 mr-12 float-left border-2 rounded-xl shadow-white shadow-lg
            hover:scale-110 hover:ease-in duration-300 "
          />
          <div class="pb-4">
            2010 season was one of the more memorable seasons in F1. New points
            system was introduced and Mercedes re-entered Formula 1. This was
            also Bridgestone's final season in the formula 1 as the company
            decided to leave the sport after 14 years. Pirelli was then chosen
            as the new tyre supplier for the sport. The season also was the
            return of the seven time world champion Michael Schumacher. New
            teams were also introduced to the sport, Hispania, Lotus and Virgin
            Racing.
          </div>
          <div>
            Red Bull secured its maiden constructor in Brazil, finishing 1-2 to
            secure the title. The season saw Vettel, Alonso, Webber and Hamilton
            battling until the very end for the Driver's title. Vettel's victory
            came after a dramatic season finale at Abu Dhabi. He became the
            youngest formula 1 champion at the age of 23 years and 134 days.<br>
            <i>Source: es.motorsport </i>
          </div>
        </div>
      </div>
      <div id="2011" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold pb-16">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl"
            >BACK TO BACK TITLE WINS</span
          >
        </div>
        <div class="text-xl">
          <img
            src="/Images/vettel2011.png"
            alt="VettelWinsFirstTitle"
            class="h-1/5 w-1/4 mr-2 ml-12 rotate-12 hover:scale-110 hover:ease-in duration-300 float-right border-2 rounded-xl shadow-white shadow-lg"
          />
          <div class="pb-4">
            Pirelli returned as the tyre supplier for the 2011 season and also
            the inaugural running of the Indian Grand Prix. Vettel and Red Bull
            defended their titles in 2011. Vettel won the title with 392 points,
            122 points ahead of Jenson Button. While Red Bull won the
            constructor's title with 650 points, 153 points ahead of McLaren.<br>
            <i>Image source: The Telegraph</i>
          </div>
        </div>
      </div>
      <div id="2012" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold py-10">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl">
            HAT TRICK IN 2012</span>
        </div>
        <div class="text-xl">
          <img
            src="/Images/vettel2012.png"
            alt="VettelWinsFirstTitle"
            class="h-1/5 w-1/4 ml-2 mr-12 float-left border-2 rounded-xl shadow-white shadow-lg"
          />
          <div class="pb-4">
            Regarded as one of the best seasons in Formula 1. The 2012 season
            saw 7 different winners in the first 7 races. The season also saw
            the return of the United States Grand Prix at the Circuit of the
            Americas. Alonso led the championship for the most part of the
            season, his luck ran out at the end of the season allowing Vettel to
            catch. At the last race Vettel had 13 point lead over Alonso.
          </div>

          <div>
            Alonso had to finish on the podium to have a chance of winning a
            title. After the first lap chaos Vettel was at the back of the grid.
            His climb through the field at the end allowed him to finish 6th and
            win the title by 3 points. Red Bull secured the Constructor's title
            with 460 points, 60 points ahead of Ferrari in the United States.<br />
            The season had the most races ever in a season with twenty and also
            six World Driver's Champions on the grid. This was Schumacher's last
            season in Formula.<br>
            <i>Image source: Drive.com.au</i>
          </div>
        </div>
      </div>
      <div id="2013" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold py-10">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl">
            FOUR IN A ROW</span>
        </div>
        <div class="text-xl">
          <img
            src="/Images/vettel2013.png"
            alt="VettelWinsFirstTitle"
            class="xl:h-2/5 xl:w-2/4 lg:h-2/5 lg:w-2/4 md:h-2/5 md:w-2/4 sm:h-1/4 sm:w-1/4 mr-2 ml-12 float-right rbimg "
          />
          <div class="pt-8 pb-4">
            The 2013 season was the final year the series used 2.4 litre V8
            engine configuration which was introduced in 2006, a new 1.6 litre
            turbocharged V6 engine came into force for 2014.
          </div>
          <div>
            Vettel dominated the 2013 season. He became the third driver to win
            the four titles in a row. It was one of the most dominated
            championship victories in a history of the sport and it wasn't until
            Max Verstappen in 2021 broke that record. Vettel won the title with
            397 points, 155 points ahead of Fernando Alonso which was a new
            record that was broken by Max Verstappen in RedBull in 2023. Red
            Bull won the constructor's title in India with 596 points, 236
            points ahead of Mercedes. It remains the last for a Renault powered
            driver to win a title. The 2013 marked the end of the Vettel and Red
            Bull run, Vettel never won a championship after that.<br>
            <p class="text-right text-gray-500 italic">Image source: Sportskeeda</p>
          </div>
        </div>
      </div>
      <div id="2022" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold py-10">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl"
            >THE START OF DOMINATION</span>
        </div>
        <div class="text-xl">
          <img
            src="/Images/verstappen2022.png"
            alt="VettelWinsFirstTitle"
            class="xl:h-2/5 xl:w-2/4 lg:h-2/5 lg:w-2/4 md:h-2/5 md:w-2/4 sm:h-1/4 sm:w-1/4 mr-12 ml-2 float-left rbimg"
          />
          <div class="pt-8 pb-4">
            New regulations were introduced in 2022, the new regulations were
            introduced to make the sport more competitive and to reduce the gap
            between the teams.
          </div>
          <div>
            While at the beginning of the season Ferrari was competitive their
            strategy and performance fell off. Meanwhile RedBull started one of
            the most dominating winning streak in Formula 1 history. Max won 15
            grand prix in a season surpassing the Michael Schumacher and the
            retiring Sebastian Vettel. Despite having poor strategy Leclerc
            finished 2nd 146 Points behind Max. RedBull won the constructor's
            title in Mexico with 700 points, 300 points ahead of Ferrari.<br>
            <p class="text-right text-gray-500 italic">Image source: WWLP</p>
          </div>
        </div>
      </div>
      <div id="2023" class="p-12 mb-6">
        <div class="text-4xl md:text-3xl text-left font-bold py-10">
          <span class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-4 hover:text-4xl cursor-default">
            SUPER MAX!</span>
        </div>
        <div class="text-xl">
          <img
            src="/Images/verstappen2023.png"
            alt="VettelWinsFirstTitle"
            class="xl:h-2/5 xl:w-2/4 lg:h-2/5 lg:w-2/4 md:h-2/5 md:w-2/4 sm:h-1/4 sm:w-1/4 mr-2 ml-12 float-right rounded-xl 
            rbimg"
          />
          <div class="pt-8 pb-4">
            The 2023 season was dominated by one single driver. MAX VERSTAPPEN. After Checo
            beat Max in Baku, Max said to his father he will never lose to him again. He went on to
            win 19 out of 22 Grand Prixs, failing to win in Singapore where he struggled the most and in
            Saudia Arabia and Azerbaijan where Perez was better. Max won the title with whopping 500 points, 300 points
            ahead of Perez. RedBull won the constructor's title in Mexico with 800 points, 400 points ahead of Ferrari.
            Max had more points than any 2nd place Ferrari. He could have won Constructor's title all by himself.
            RedBull won 21 out of 22 Grand Prix beating Mclaren record from 1988.

          </div>
          <div>
            Max broke numerous records including most wins, most podiums, most consecutive wins, most wins from pole,
            most points, most hat tricks (pole, win, fastest lap), biggest championship winning margin, most laps led,
            highest percentage of laps led, most sprint wins and only driver to win three times in one country during 
            a single season<br>
            <p class="text-right text-gray-500 italic">Image source: F1.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div v-if="buttonClickedFr">
      <div id="2010" class="p-10 backgroundRB">
        <div class="text-4xl md:text-3xl text-left py-10">
          REDBULL WINS FIRST TITLE IN 2010
        </div>
      </div>
      <div id="2011" class="p-32 backgroundRB">RED BULL WINS SECOND TITLE</div>
      <div id="2012" class="p-32">RED BULL WINS THIRD TITLE</div>
      <div id="2013" class="p-32">RED BULL WINS FOURTH TITLE</div>
      <div id="2022" class="p-32">RED BULL WINS FIFTH TITLE</div>
      <div id="2023" class="p-32">RED BULL WINS SIXTH TITLE</div>
    </div>
  </div>
  <div>
    Footer
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

.rbimg {
  --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
  --m:
    left   var(--_i,0%) top    var(--_g),
    bottom var(--_i,0%) left   var(--_g),
    top    var(--_i,0%) right  var(--_g),
    right  var(--_i,0%) bottom var(--_g);
  -webkit-mask: var(--m);
          mask: var(--m);
  filter: grayscale();
  transition: .4s linear;
  cursor: pointer;
}
.rbimg:hover {
  --_i: 10%;
  filter: grayscale(0);
  border: 2px solid blue;
}

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

.btn-shadow:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  transform: translateY(-5px);
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
  background-color: #00293f;
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
    #00352f,
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
    #e12319,
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
    #00a0de,
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
    #f1f3f4,
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
  background: #00293f;
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
    #004e37,
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
    #b20626,
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
