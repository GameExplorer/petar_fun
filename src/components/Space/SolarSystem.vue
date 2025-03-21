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

export default {
  data() {
    return {
      hoveredPlanet: null,
      planetData: {
        sun: {
          name: "Sun",
          facts: [
            "333,000x Earth's mass (99.8% Solar System mass)",
            "Surface Temperature: 5,500°C",
            "4.6 billion years old",
            "Yellow Dwarf Star",
            "Will explode in 6 billion years",
          ]
        },
        mercury: {
          name: "Mercury",
          facts: [
            "Closest planet to the Sun",
            "Smallest planet in the Solar System",
            "Named after Roman god Mercurius",
            "Temperature range: -180°C to 430°C",
            "One solar day lasts 176 Earth days",
            "Year length: 88 Earth days",
            "Visibility: Naked Eye",
            "Light time: 3.2 minutes"
          ]
        },
        venus: {
          name: "Venus",
          facts: [
            "Similar size to Earth",
            "Hottest planet (462°C)",
            "Toxic and very dense atmosphere",
            "Spins backwards",
            "225 Earth days to orbit Sun",
            "Visibility: Naked Eye",
            "Light time: 6 minutes"
          ]
        },
        earth: {
          name: "Earth",
          facts: [
            "Only known planet with life",
            "One natural satellite (Moon)",
            "70% covered in water",
            "Has magnetic field",
            "Densest planet in the Solar System",
            "Visibility: Very visible",
            "Light time: 8.3 minutes"
          ]
        },
        mars: {
          name: "Mars",
          facts: [
            "Known as the Red Planet",
            "Has two moons",
            "Contains largest volcano",
            "Evidence of ancient water",
            "Day length is similar to Earth",
            "Year length is 687 Earth days",
            "Visibility: Naked Eye",
            "Light time: 12.6 minutes"
          ]
        },
        ceres: {
          name: 'Ceres',
          facts: [
            "Dwarf planet in asteroid belt",
            "Discovered in 1801 by Giuseppe Piazzi",
            "Named after Roman goddess of agriculture",
            "First dwarf planet discovered and only not beyond Neptune",
            "Visibility: Telescope",
            "Light time: 40 minutes"
          ]
        },
        jupiter: {
          name: "Jupiter",
          facts: [
            "Largest planet in the Solar System",
            "Great Red Spot Storm observed since 1831 ",
            "95 known moons",
            "Strongest magnetic field",
            "Its diameter is eleven times that of Earth",
            "Visibility: Naked Eye",
            "Light time: 43.2 minutes"
          ]
        },
        saturn: {
          name: "Saturn",
          facts: [
            "Famous for its rings",
            "146 confirmed moons",
            "Least dense planet",
            "Visible from Earth",
            "Orbital period is 29 Earth years",
            "Titan is the Saturn's largest moon and second largest in the Solar System",
            "Visibility: Naked Eye",
            "Light time: 1 hour 19 minutes"
          ]
        },
        uranus: {
          name: "Uranus",
          facts: [
            "Ice giant planet",
            "Rotates on its side",
            "28 known moons",
            "Coldest atmosphere, lowest temperature is -224°C",
            "It was discovered in 1781",
            "Its poles have 42 years of sunlight and darkness",
            "Orbits the Sun on its side with an axial tilt >90°",
            "Visibility: Telescope",
            "Light time: 2 hours 40 minutes"
          ]
        },
        neptune: {
          name: "Neptune",
          facts: [
            "Most distant planet in the Solar System",
            "Strongest winds",
            "16 moons",
            "Takes 165 years to orbit Sun",
            "Densest giant planet",
            "It is not visible to unaided eye",
            "First discovered in 1849",
            "Visibility: Telescope",
            "Light time: 4 hours 10 minutes"
          ]
        },
        pluto: {
          name: "Pluto",
          facts: [
            "Dwarf planet",
            "Orbits in Kuiper Belt",
            "5 known moons, Charon is the largest",
            "Discovered in 1930",
            "It has eccentric and inclined orbit",
            "Oribtal resonance prevents collision with Neptune",
            "Visibility: Telescope",
            "Light time: 4 hours 58 minutes"
          ]
        },
        eris: {
          name: "Eris",
          facts: [
            "Most massive and second largest dwarf planet",
            "It takes Eris 550 years to orbit Sun",
            "Discovered in 2005",
            "Larger than Pluto",
            "A day on Eris is 25.9 hours",
            "Named for the ancient Greek goddess of discord and strife",
            "Visibility: Telescope",
            "Light time: 13 hours 21 minutes", ,
          ]
        },
        haumea: {
          name: "Haumea",
          facts: [
            "Dwarf planet in Kuiper Belt",
            "Named after Hawaiian goddess",
            "Discovered in 2004",
            "Elongated shape",
            "It has a ring system",
            "Visibility: Telescope",
            "Light time: 6 hours 49 minutes",
          ]
        },
        makemake: {
          name: "Makemake",
          facts: [
            "Dwarf planet in Kuiper Belt",
            "305 years to orbit Sun",
            "Discovered in 2005",
            "Named after Rapa Nui god of fertility",
            "Surface is extremely cold",
            "Visibility: Telescope",
            "Light time: 7 hours 11 minutes"
          ]
        },
        sedna: {
          name: "Sedna",
          facts: [
            "It takes 11,400 years to orbit Sun",
            "Orbits in Scattered Disc",
            "Discovered in 2003",
            "One of the reddest known among Solar System bodies",
            "Named after Inuit goddess",
            "Farthest known object in Solar System",
            "Light time: 11 hours 34 minutes",
            "Visibility: Telescope",
          ]
        },
        voyager1: {
          name: "Voyager 1",
          facts: [
            "Launched in 1977",
            "The most distant human object from Earth",
            "Carries a golden record",
            "Now is travelling through the heliosheath",
            "In 1990 it took the Pale Blue Dot photo",
          ]
        },
        titan: {
          name: "Titan",
          facts: [
            "Largest moon of Saturn and second largest in the Solar System",
            "Only moon with dense atmosphere",
            "Lakes of liquid methane and ethane",
            "Primarily composed of ice and rocky material",
            "Visibility: Telescope",
            "Light time: 1 hour 20 minutes"
          ]
        },
        io: {
          name: "Io",
          facts: [
            "Most volcan active body in the Solar System",
            "Over 400 active volcanoes",
            "Surface is covered with sulfur",
            "Named after a Greek mythological figure",
            "Visibility: Telescope",
            "Light time: 42 minutes"
          ],
        },
        europa: {
          name: "Europa",
          facts: [
            "Smallest of the Galilean moons",
            "Named after Phoenician princess",
            "Smoothest surface of any known solid object in Solar System",
            "Orbits Jupiter in roughly 3.55 days",
            "Visibility: Telescope",
            "Light time: 43 minutes"
          ]
        },
        callisto: {
          name: "Callisto",
          facts: [
            "Second largest moon of Jupiter",
            "Named after Zeus' lover",
            "Surface is the oldest and most heavily cratered in the Solar System",
            "Visibility: Telescope",
            "Light time: 43 minutes"
          ]
        },
        ganymede: {
          name: "Ganymede",
          facts: [
            "Largest moon in the Solar System",
            "Larger than Mercury",
            "Orbits the Jupiter in 7 days",
            "Visibility: Telescope",
            "Light time: 44 minutes"
          ]
        }
      },
      isMuted: true,
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
