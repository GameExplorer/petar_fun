<script>
import "@/assets/Space/solarSystem.css"
import "@/assets/Space/info_card.css"
import "@/assets/Space/scroll_reveal.css"
import "@/assets/Space/scrollbar.css";
import aumeter from "./AUMeter.vue"
import TimeInSpace from "./TimeInSpace.vue"
import Footer from "../Footer/Footer.vue";
import OortCloud from "./SolarObjects/OortCloud.vue"
import innerPlanets from "./SolarObjects/InnerPlanets.vue";
import asteroidBelt from "./SolarObjects/AsteroidBelt.vue";
import outerPlanets from "./SolarObjects/OuterPlanets.vue";
import transNeptunian from "./SolarObjects/TNP.vue";
import mainTitle from "./MainTitle.vue";
import { planetData } from "./Data/PlanetData.js";

export default {
  data() {
    return {
      hoveredPlanet: null,
      isMuted: true,
      planetData: planetData,
      methods: {
        showInfo(planet) {
          this.$emit('update:hoveredPlanet', planet);
        },
        hideInfo() {
          this.$emit('update:hoveredPlanet', null);
        }
      }
    }
  },
  components: {
    aumeter,
    mainTitle,
    innerPlanets,
    asteroidBelt,
    outerPlanets,
    transNeptunian,
    OortCloud,
    TimeInSpace,
    Footer,
  },
  mounted() {
    if (this.$refs.audioElement) {
      this.$refs.audioElement.volume = 0.4;
      this.$refs.audioElement.muted = true;
      this.isMuted = true;

      this.$refs.audioElement.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });

      document.addEventListener("click", this.enableAudio, { once: true });
    }
  },
  methods: {
    showInfo(planet) {
      this.hoveredPlanet = planet;
    },
    hideInfo() {
      this.hoveredPlanet = null;
    },
    enableAudio() {
      if (this.$refs.audioElement) {
        this.$refs.audioElement.muted = false;
        this.$refs.audioElement.play()
          .then(() => {
            this.isMuted = false;
          })
          .catch(error => console.log("Playback failed:", error));
      }
    },

    toggleAudio() {
      if (this.$refs.audioElement) {
        this.$refs.audioElement.muted = !this.$refs.audioElement.muted;
        this.isMuted = this.$refs.audioElement.muted;
      }
    }
  }
}
</script>


<template>
  <div class="container">
    <aumeter />
    <div class="relative">
      <audio ref="audioElement" loop autoplay muted class="hidden">
        <source src="@/assets/music/dead-space-style-ambient-music.mp3" type=" audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <img :src="isMuted ? '/Images/Space/volume-silent-icon.png' : '/Images/Space/volume-icon.png'" alt="Volume Icon"
        class="bg-transparent p-2 mt-4 rounded cursor-pointer hover:bg-gray-900 fixed z-50" @click="toggleAudio">
    </div>
    <div class="mainTitle">
      <mainTitle />
    </div>
    <section class="screen">
      <div class="body-info-wrapper">
        <div class="relative" @mouseenter="showInfo('sun')" @mouseleave="hideInfo">
          <div class="sun"></div>
          <div v-if="hoveredPlanet === 'sun'" class="info-card">
            <h3 class="info-card-title">{{ planetData.sun.name }}</h3>
            <ul class="info-card-list">
              <li v-for="(fact, index) in planetData.sun.facts" :key="index">
                {{ fact }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="inner-planets">
      <innerPlanets :planetData="planetData" :hoveredPlanet="hoveredPlanet"
        @update:hoveredPlanet="hoveredPlanet = $event" />
    </div>
    <div class="asteroid-belt-region">
      <asteroidBelt :planetData="planetData" :hoveredPlanet="hoveredPlanet"
        @update:hoveredPlanet="hoveredPlanet = $event" />
    </div>
    <div class="outer-planets">
      <outerPlanets :planetData="planetData" :hoveredPlanet="hoveredPlanet"
        @update:hoveredPlanet="hoveredPlanet = $event" />
    </div>
    <div class="trans-neptune">
      <transNeptunian :planetData="planetData" :hoveredPlanet="hoveredPlanet"
        @update:hoveredPlanet="hoveredPlanet = $event" />
    </div>
    <section class="screen mt-[300rem] heliosphere heliosphere-container">
      <div class="info-box">
        <h2 class="info-title">Heliosphere</h2>
        <p class="info-text">Its the region in space that surrounds the Sun.
          It is continuously inflated by solar wind and protects the solar system from cosmic rays.
          Heliopause is the boundary between our solar system and interstellar space.
        </p>
      </div>
      <div class="bow-shock"></div>
      <div class="pulse-wave"></div>
      <div class="pulse-wave"></div>
      <div class="pulse-wave"></div>
      <div class="pulse-wave"></div>
    </section>
    <section class="screen voyager1">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div class="title text-5xl order-1 md:order-1">Voyager 1</div>
        <div class="body-info-wrapper order-2 md:order-2">
          <div class="relative" @mouseenter="showInfo('voyager1')" @mouseleave="hideInfo">
            <div class="voyager1"></div>
            <img src="/Images/Space/voyager1.png" alt="Voyager 1" class="w-full max-w-xs mx-auto" />
            <div v-if="hoveredPlanet === 'voyager1'" class="info-card">
              <h3 class="info-card-title">{{ planetData.voyager1.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.voyager1.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="screen mt-[400rem]">
      <OortCloud class="oortCloud" />
    </section>
    <section class="mt-96">
      <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
        <span>This is just a tiny tiny fraction of the universe. There is so much more to explore.</span>
      </div>
      <div class="title mt-48">
        <span class="text-5xl">THE END</span>
      </div>
    </section>
    <div class="time my-96">
      <TimeInSpace />
    </div>
    <Footer class="mt-64" />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  scroll-snap-type: y proximity;
}

.screen {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.title {
  color: #fff;
  text-align: center;
  font-family: "Equinox", sans-serif;
  padding: 0 1rem;
}

.main-title {
  text-shadow: #fff 2px 2px 35px;
}

.body-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media screen and (max-width: 1200px) {
  .container {
    overflow: hidden;
  }

}
</style>
