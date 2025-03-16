<script>
import "@/assets/Space/planets.css"
import "@/assets/Space/info_card.css"
import "@/assets/Space/scroll_reveal.css"
import "@/assets/Space/scrollbar.css";
import aumeter from "./AUMeter.vue"
import TimeInSpace from "./TimeInSpace.vue"
import Footer from "../Footer/Footer.vue";
import OortCloud from "./OortCloud.vue"

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
    TimeInSpace,
    Footer,
    OortCloud,
  },
  mounted() {
    if (this.$refs.audioElement) {
      this.$refs.audioElement.volume = 0.4;
      this.$refs.audioElement.muted = true; // Ensure it starts muted
      this.isMuted = true;

      this.$refs.audioElement.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });

      // Add a click event listener to start the audio when user interacts
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
    <section class="screen">
      <div class="title text-8xl">Solar System</div>
    </section>
    <section class="screen">
      <div class="scroll-reveal">
        <span>Our solar journey will take us
          through the planets, moons, and other celestial bodies all the way to the very edge of the solar system. Let's
          start our
          journey from the center of the solar system, the Sun.
          <i class="text-sm">Hover over planets for more info</i></span>
      </div>
    </section>
    <section class="screen mb-32">
      <div class="title text-5xl">Journey begins...</div>
    </section>
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
      <section class="screen mt-[47rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('mercury')" @mouseleave="hideInfo">
            <div class="mercury"></div>
            <div v-if="hoveredPlanet === 'mercury'" class="info-card">
              <h3 class="info-card-title">{{ planetData.mercury.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.mercury.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="scroll-reveal">
          <span>Inner Planets are mostly composed of silicates and metals. The
            whole region
            is less than the distance between Jupiter and Saturn.
            Three out of the four planets have atmospheres.
          </span>
        </div>
      </section>
      <section class="screen mt-[26rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('venus')" @mouseleave="hideInfo">
            <div class="venus"></div>
            <div v-if="hoveredPlanet === 'venus'" class="info-card">
              <h3 class="info-card-title">{{ planetData.venus.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.venus.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="screen mt-[27rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('earth')" @mouseleave="hideInfo">
            <div class="earth"></div>
            <div class="moon"></div>
            <div v-if="hoveredPlanet === 'earth'" class="info-card">
              <h3 class="info-card-title">{{ planetData.earth.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.earth.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="scroll-reveal">
          <span>Earth is the only planet known to support life.
          </span>
        </div>
      </section>
      <section class="screen mt-[52rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('mars')" @mouseleave="hideInfo">
            <div class="mars"></div>
            <div class="phobos"></div>
            <div class="deimos"></div>
            <div v-if="hoveredPlanet === 'mars'" class="info-card">
              <h3 class="info-card-title">{{ planetData.mars.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.mars.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="screen mt-[80rem]">
      <div class="body-info-wrapper">
        <div class="asteroid-belt belt-wobble">
          <div class="asteroid-layer layer-1"></div>
          <div class="asteroid-layer layer-2"></div>
          <div class="asteroid-layer layer-3"></div>
          <div class="asteroid-layer layer-dust"></div>
          <div class="kirkwood-gap" style="width:2%; left:30%; opacity:0.5;"></div>
          <div class="kirkwood-gap" style="width:1.5%; left:44%; opacity:0.4;"></div>
          <div class="kirkwood-gap" style="width:2.5%; left:62%; opacity:0.6;"></div>

          <div class="concentration-zone" style="width:15%; height:25%; top:20%; left:25%;"></div>
          <div class="concentration-zone" style="width:20%; height:30%; top:60%; left:55%;"></div>
          <div class="concentration-zone" style="width:22%; height:20%; top:40%; left:70%;"></div>

          <div class="asteroid-individual asteroid-large asteroid-silicate"
            style="top:25%; left:22%; animation-delay: 0s;"></div>
          <div class="asteroid-individual asteroid-large asteroid-metallic"
            style="top:67%; left:78%; animation-delay: -3s;"></div>
          <div class="asteroid-individual asteroid-large asteroid-carbonaceous"
            style="top:42%; left:33%; animation-delay: -6s;"></div>

          <div class="asteroid-individual asteroid-medium asteroid-metallic"
            style="top:55%; left:45%; animation-delay: -2s;"></div>
          <div class="asteroid-individual asteroid-medium asteroid-silicate"
            style="top:28%; left:68%; animation-delay: -5s;"></div>
          <div class="asteroid-individual asteroid-medium asteroid-carbonaceous"
            style="top:73%; left:12%; animation-delay: -8s;"></div>
          <div class="asteroid-individual asteroid-medium asteroid-silicate"
            style="top:33%; left:88%; animation-delay: -4s;"></div>

          <div class="asteroid-individual asteroid-small asteroid-silicate"
            style="top:62%; left:54%; animation-delay: -1s;"></div>
          <div class="asteroid-individual asteroid-small asteroid-metallic"
            style="top:22%; left:76%; animation-delay: -3.5s;"></div>
          <div class="asteroid-individual asteroid-small asteroid-carbonaceous"
            style="top:51%; left:33%; animation-delay: -7s;"></div>
          <div class="asteroid-individual asteroid-small asteroid-silicate"
            style="top:38%; left:65%; animation-delay: -9s;"></div>
          <div class="asteroid-individual asteroid-small asteroid-metallic"
            style="top:75%; left:43%; animation-delay: -2.5s;"></div>
          <div class="asteroid-individual asteroid-small asteroid-carbonaceous"
            style="top:18%; left:51%; animation-delay: -5.5s;"></div>

          <div class="info-box">
            <h2 class="info-title">Asteroid Belt</h2>
            <p class="info-text">Torus shaped region between Mars and Jupiter. There are over millions of objects the
              largest object being the dwarf planet Ceres. Jupiter's gravity prevented these rocks
              from forming into a planet. What could have been maybe another planet?</p>
          </div>
        </div>
      </div>
    </section>
    <section class="screen">
      <div class="body-info-wrapper">
        <div class="relative" @mouseenter="showInfo('ceres')" @mouseleave="hideInfo">
          <div class="ceres"></div>
          <div v-if="hoveredPlanet === 'ceres'" class="info-card">
            <h3 class="info-card-title">{{ planetData.ceres.name }}</h3>
            <ul class="info-card-list">
              <li v-for="(fact, index) in planetData.ceres.facts" :key="index">
                {{ fact }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="screen mt-[365rem]">
      <div class="scroll-reveal">
        <span>The asteroid belt marks the boundary between the inner rocky planets and the outer gas giants. It contains
          millions of asteroids, from tiny pebbles to dwarf planets like Ceres. Jupiter's gravity prevented these rocks
          from forming into a planet.</span>
      </div>
    </section>

    <div class="outer-planets">
      <section class="mt-[120rem]">
        <div class="title">
          <span class="text-7xl">Gas Giants</span>
        </div>
      </section>
      <section class="screen mt-[70rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('jupiter')" @mouseleave="hideInfo">
            <div class="jupiter"></div>
            <div v-if="hoveredPlanet === 'jupiter'" class="info-card">
              <h3 class="info-card-title">{{ planetData.jupiter.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.jupiter.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('io')" @mouseleave="hideInfo">
            <div class="moon io"></div>
            <div v-if="hoveredPlanet === 'io'" class="info-card">
              <h3 class="info-card-title">{{ planetData.io.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.io.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('europa')" @mouseleave="hideInfo">
            <div class="moon europa"></div>
            <div v-if="hoveredPlanet === 'europa'" class="info-card">
              <h3 class="info-card-title">{{ planetData.europa.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.europa.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('ganymede')" @mouseleave="hideInfo">
            <div class="moon ganymede"></div>
            <div v-if="hoveredPlanet === 'ganymede'" class="info-card">
              <h3 class="info-card-title">{{ planetData.ganymede.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.ganymede.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('callisto')" @mouseleave="hideInfo">
            <div class="moon callisto"></div>
            <div v-if="hoveredPlanet === 'callisto'" class="info-card">
              <h3 class="info-card-title">{{ planetData.callisto.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.callisto.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[150rem]">
        <div class="scroll-reveal ">
          <span>Gas Giant planet is manily composed of hydrogen and helium.
            Jupiter and Saturn are the only Gas Giants in the solar system.</span>
        </div>
      </section>
      <section class="screen mt-[292rem]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('saturn')" @mouseleave="hideInfo">
            <div class="saturn"></div>
            <div v-if="hoveredPlanet === 'saturn'" class="info-card">
              <h3 class="info-card-title">{{ planetData.saturn.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.saturn.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('titan')" @mouseleave="hideInfo">
            <div class="moons titan"></div>
            <div v-if="hoveredPlanet === 'titan'" class="info-card">
              <h3 class="info-card-title">{{ planetData.titan.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.titan.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[100rem]">
        <div class="scroll-reveal ">
          <span>Saturn's moon Titan is larger than Mercury</span>
        </div>
      </section>
      <section class="mt-[800rem]">
        <div class="title">
          <span class="text-7xl">Ice Giants</span>
        </div>
      </section>
      <section class="screen mt-[92em]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('uranus')" @mouseleave="hideInfo">
            <div class="uranus"></div>
            <div v-if="hoveredPlanet === 'uranus'" class="info-card">
              <h3 class="info-card-title">{{ planetData.uranus.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.uranus.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[100rem]">
        <div class="scroll-reveal">
          <span>Uranus and Neptune are the Ice Giants in the solar system.
            They are mainly composed of water, ammonia, and methane.</span>
        </div>
      </section>
      <section class="mt-[300rem]">
        <div class="scroll-reveal">
          <span>Lacking well defined solid surfaces they are primarily composed of gases and liquids.
          </span>
        </div>
      </section>
      <section class="mt-[200rem]">
        <div class="scroll-reveal">
          <span>Uranus most famous moons are Titania, Oberon, Umbriel, Ariel and Miranda</span>
        </div>
      </section>
      <section class="screen mt-[435em]">
        <div class="body-info-wrapper">
          <div class="relative" @mouseenter="showInfo('neptune')" @mouseleave="hideInfo">
            <div class="neptune"></div>
            <div v-if="hoveredPlanet === 'neptune'" class="info-card">
              <h3 class="info-card-title">{{ planetData.neptune.name }}</h3>
              <ul class="info-card-list">
                <li v-for="(fact, index) in planetData.neptune.facts" :key="index">
                  {{ fact }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[100rem]">
        <div class="scroll-reveal">
          <span>Neptune's moon Triton is the only large moon in the solar system that orbits in the opposite direction
            of its planet's rotation.</span>
        </div>
      </section>
      <section class="mt-[250rem]">
        <div class="scroll-reveal">
          <span>Neptune was mathematically predicted by Alexis Bouvard, the planet was discovered after his death</span>
        </div>
      </section>
    </div>
    <div class="trans-neptune">
      <div class="kuiper-belt">
        <section class=" mt-[100rem]">
          <div class="title">
            <span class="text-6xl">The solar system does not end here...</span>
          </div>
        </section>
        <section class="screen mt-[100rem]">
          <div class="title">
            <span class="md:text-5xl text-[2.5rem]">Planets Beyond Neptune - Trans Neptunian Region</span>
          </div>
        </section>
        <section class="screen">
          <div class="halleys-comet"></div>
          <div class="halleys-dust-tail"></div>
          <div class="title text-4xl">Halley's commet</div>
        </section>
        <section class="screen mt-[82rem]">
          <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('pluto')" @mouseleave="hideInfo">
              <div class="pluto"></div>
              <div v-if="hoveredPlanet === 'pluto'" class="info-card">
                <h3 class="info-card-title">{{ planetData.pluto.name }}</h3>
                <ul class="info-card-list">
                  <li v-for="(fact, index) in planetData.pluto.facts" :key="index">
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="mt-[250rem]">
          <div class="title text-5xl">
            Space is empty
          </div>
        </section>
        <section class="mt-[500rem]">
          <div class="title text-5xl">
            <span>99% of Solar System is empty</span>
          </div>
        </section>
        <section class="mt-[500rem]">
          <div class="title text-5xl">
            <span>Haumea is the fastest rotating body in the solar system, spinning once every 3.9 hours.</span>
          </div>
        </section>
        <section class="screen mt-[250rem]">
          <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('haumea')" @mouseleave="hideInfo">
              <div class="haumea"></div>
              <div v-if="hoveredPlanet === 'haumea'" class="info-card">
                <h3 class="info-card-title">{{ planetData.haumea.name }}</h3>
                <ul class="info-card-list">
                  <li v-for="(fact, index) in planetData.haumea.facts" :key="index">
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="screen">
          <div class="hale-bopp">
            <div class="hale-bopp-dust"></div>
            <div class="comet-particle" v-for="i in 6" :key="i"
              :style="{ top: (40 + i * 10) + '%', right: (20 + i * 25) + 'px' }"></div>
          </div>
          <div class="title text-4xl">Hale-Bopp Comet</div>
        </section>
        <section class="screen mt-[200rem]">
          <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('makemake')" @mouseleave="hideInfo">
              <div class="makemake"></div>
              <div v-if="hoveredPlanet === 'makemake'" class="info-card">
                <h3 class="info-card-title">{{ planetData.makemake.name }}</h3>
                <ul class="info-card-list">
                  <li v-for="(fact, index) in planetData.makemake.facts" :key="index">
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="extreme-trans-neptune">
        <section class="mt-[300rem]">
          <div class="title text-5xl">Extreme Trans Neptunian Region</div>
        </section>
        <section class="mt-[600rem]">
          <div class="title text-4xl">There truly isn't anything there. Vast emptiness</div>
        </section>
        <section class="mt-[1000rem]">
          <div class="title text-5xl">Sedna is orbit is over 900 astronomical unit</div>
        </section>
        <section class="screen mt-[428rem]">
          <div class="scroll-reveal">
            <span>How can there be a planet so far away from the Sun?</span>
          </div>
        </section>
        <section class="mt-[400rem]">
          <div class="scroll-reveal"><span>Currently Sedna is closer to us than Eris</span></div>
        </section>
        <section class="screen mt-[600rem]">
          <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('sedna')" @mouseleave="hideInfo">
              <div class="sedna"></div>
              <div v-if="hoveredPlanet === 'sedna'" class="info-card">
                <h3 class="info-card-title">{{ planetData.sedna.name }}</h3>
                <ul class="info-card-list">
                  <li v-for="(fact, index) in planetData.sedna.facts" :key="index">
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="scattered-disc">
        <section class="mt-[291rem]">
          <div class="title text-5xl">Scattered Disc</div>
        </section>
        <section class="mt-[300rem]">
          <div class="scroll-reveal">
            <span>Scattered Disc is a region beyond the Kuiper Belt, extending to the edge of the Solar System. It is
              populated by icy bodies, some of which are the source of short-period comets.</span>
          </div>
        </section>
        <section class="mt-[400rem]">
          <div class="scroll-reveal">
            <span>Scattered Disc objects are believed to have been ejected from the Kuiper Belt by Neptune's
              gravity.</span>
          </div>
        </section>
        <section class="screen mt-[300rem]">
          <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('eris')" @mouseleave="hideInfo">
              <div class="eris"></div>
              <div v-if="hoveredPlanet === 'eris'" class="info-card">
                <h3 class="info-card-title">{{ planetData.eris.name }}</h3>
                <ul class="info-card-list">
                  <li v-for="(fact, index) in planetData.eris.facts" :key="index">
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="scroll-reveal">
      <span>Edge of the Solar System</span>
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
    <section class="screen voyager1 mt-[100rem]">
      <div class="title text-5xl">Voyager 1</div>
      <div class="body-info-wrapper">
        <div class="relative" @mouseenter="showInfo('voyager1')" @mouseleave="hideInfo">
          <div class="voyager1"></div>
          <img src="/Images/Space/voyager1.png" alt="Voyager 1" class="w-1/2 pt-32 mx-auto" />
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
    </section>
    <section class="screen mt-[400rem]">
      <OortCloud class="oortCloud" />
    </section>
    <section class="mt-96">
      <div class="scroll-reveal">
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


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow: hidden;
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
</style>
