<template>
  <div>
    <div class="container" ref="container">
      <div
        class="height-indicator"
        ref="heightIndicator"
        :class="backgroundColor"
        @scroll="handleScroll"
      >
        <div class="height-scale">
          <div
            v-for="height in heightMarks"
            :key="height"
            class="height-mark"
            :style="{ bottom: height + 'px' }"
          >
            {{ height }}m
            <div
              v-if="height == 8000"
              class="border-b-8 border-dashed border-red-600 text-red-600 text-3xl"
            >
              💀 Death Zone
            </div>
            <div v-if="height == 7900">
              <div
                v-for="cloudClass in cloudClasses"
                :key="cloudClass"
                :class="cloudClass"
              ></div>
            </div>
            <div
              v-if="height == 4000"
              class="border-b-2 border-dashed text-black"
            >
              Snow covers are persistent
            </div>

            <div
              v-if="height == 5500"
              class="border-b-2 border-dashed text-white"
            >
              Mountaineering Base Camps
            </div>
          </div>
          <div
            v-for="card in cards"
            :key="card.height"
            class="card mx-4"
            :class="card.position"
            :style="{
              bottom: card.alignedHeight + 'px',
              left: card.offset + '%',
            }"
          >
            <div class="card-wrapper">
              <!--<img
                src="../Images/Mountains/mountain.svg"
                :alt="card.imageAlt"
                class="iconImage opacity-50 rounded-xl card-image"
              />-->
              <img
                v-if="card.imageSrc"
                :src="card.imageSrc"
                :alt="card.imageAlt"
                class="iconImage opacity-50 rounded-xl card-image"
              />
              <div
                class="bg-emerald-200 border-2 border-black rounded-xl p-2 card-content"
              >
                <img
                  v-if="card.imageSrc"
                  :src="card.imageSrc"
                  :alt="card.imageAlt"
                  class="z-20 my-2 rounded-xl border-2 border-black shadow-md shadow-black"
                />
                <h1
                  class="text-4xl lg:text-5xl uppercase text-center my-4 font-semibold"
                >
                  {{ card.title }}
                </h1>
                <div
                  class="text-2xl rounded-xl border-2 border-black p-4 bg-orange-200"
                >
                  <div class="py-2 flex items-center">
                    📏
                    <span class="ml-2"
                      >Elevation:
                      <b>{{ card.height }}m/{{ card.feet }}ft</b></span
                    >
                  </div>
                  <div class="py-2 flex items-center">
                    🌍<span class="ml-2">Country: {{ card.country }}</span>
                  </div>
                  <div class="py-2 flex items-center">
                    🏔️
                    <span class="ml-2"
                      >Mountain Range: <b>{{ card.range }}</b></span
                    >
                  </div>
                  <div class="py-2 flex items-center">
                    🧗‍♂️
                    <span class="ml-2"
                      >First Ascent: <b>{{ card.ascent }}</b></span
                    >
                  </div>
                  <div class="pt-4 text-2xl">
                    <div
                      class="border-2 border-black bg-yellow-200 rounded-lg p-4"
                    >
                      📜<br />
                      {{ card.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4 text-3xl text-center text-white">
          <div class="text-4xl">Made by Petar</div>
          <div class="mt-4">
            <span class="animate-pulse">↑ Scroll up ↑</span> <br /><i class="text-xl"
              >Hover on images for more detailed information</i
            >
          </div>
        </div>
        <Footer class="bg-white"></Footer>
      </div>
    </div>

    <div class="scroll-indicator" :class="scrollIndicatorColor">
      <!--Current height:-->
      {{ currentHeight }} ->
      <!-- climbing animation?-->
      <div v-if="height < 2000"></div>
    </div>
  </div>
</template>

<script>
import "./Mountains/mountains.css";
import Footer from "./Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      totalHeight: 9700,
      currentHeight: 0,
      cloudClasses: [
        "cloud",
        "cloud1",
        "cloud2",
        "cloud2",
        "cloud3",
        "cloud4",
        "cloud5",
        "cloud6",
        "cloud7",
        "cloud8",
        "cloud9",
      ],
      cards: [
        {
          title: "Diamond Head",
          height: 232,
          feet: 761,
          range: "Hawaii",
          country: "United States",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/diamond-head.jpg",
          imageAlt: "",
          imageSrcIcon: "/Images/Mountains/diamond-headIcon.png",
        },
        {
          title: "Suur Munamagi",
          height: 318,
          feet: 1043,
          range: "Haanja",
          country: "Estonia",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Suur_Munamagi.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Great Mell Fell",
          height: 537,
          feet: 1762,
          range: "Lake District",
          country: "England",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Greatmellfell.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Qalorujoorneq",
          height: 676,
          feet: 2218,
          range: "Greenland",
          country: "Denmark",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Saajat.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "The Cheviot",
          height: 815,
          feet: 2674,
          range: "Cheviot Hills",
          country: "England",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Cheviot.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Sgurr Dearg",
          height: 986,
          feet: 3234,
          range: "Cuillin",
          country: "Scotland",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/sgurr.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Devil's Peak",
          height: 1000,
          feet: 3281,
          range: "Cape Peninsula",
          country: "South Africa",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Devils_Peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Hombori",
          height: 1155,
          feet: 3786,
          range: "Hombori Mountains",
          country: "Mali",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/hombori.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Snaefellsjokull",
          height: 1446,
          feet: 4744,
          range: "None",
          country: "Iceland",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Snaefellsjokull.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Snežka",
          height: 1602,
          feet: 5259,
          range: "Giant Mountains",
          country: "Czech Republic / Poland",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/snezka.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Bogong",
          height: 1986,
          feet: 6516,
          range: "Victorian Alps",
          country: "Australia",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/bogong.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Polar Bear Peak",
          height: 2016,
          feet: 6614,
          range: "None",
          country: "Canada",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Polar_Bear_Peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Špik",
          height: 2472,
          feet: 8110,
          range: "Julian Alps",
          country: "Slovenia",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/spik.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Barbeau Peak",
          height: 2616,
          feet: 8583,
          range: "Ellesmere Island",
          country: "Canada",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Barbeau_Peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Olympus",
          height: 2917,
          feet: 9570,
          range: "Olympus Range",
          country: "Greece",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/olympus.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Glacier Peak",
          height: 3213,
          feet: 10541,
          range: "Cascades",
          country: "United States",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/glacier_peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Semeru",
          height: 3676,
          feet: 12066,
          range: "None",
          country: "Indonesia",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/semeru.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Aoraki",
          height: 3754,
          feet: 12317,
          range: "Southern Alps",
          country: "New Zealand",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/aoraki.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Fuji",
          height: 3776,
          feet: 12388,
          range: "None",
          country: "Japan",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/fuji.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mont Pelvoux",
          height: 3946,
          feet: 12941,
          range: "Dauphiné Alps",
          country: "France",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/pelvoux.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Phoenix Peak",
          height: 4237,
          feet: 13901,
          range: "None",
          country: "Canada",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/Phoenix_Peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Matterhorn",
          height: 4478,
          feet: 14692,
          range: "Pennine Alps",
          country: "Switzerland / Italy",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/matterhorn.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mont Blanc",
          height: 4748,
          feet: 15582,
          range: "Mont Blanc Massif",
          country: "France / Italy",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/mont_blanc.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Pico Bolivar",
          height: 4981,
          feet: 16345,
          range: "Cordillera de Mérida",
          country: "Venezuela",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/bolivar.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Vinicunca",
          height: 5200,
          feet: 17060,
          range: "Andes",
          country: "Peru",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/vinicunca.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Popocatepetl",
          height: 5426,
          feet: 17783,
          range: "Trans-Mexican Volcanic Belt",
          country: "Mexico",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/popocatepetl.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Kilimanjaro",
          height: 5895,
          feet: 19341,
          range: "None",
          country: "Tanzania",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/kilimanjaro.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Huayna Potosi",
          height: 6088,
          feet: 19974,
          range: "Cordillera Real",
          country: "Bolivia",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/potosi.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Huandoy",
          height: 6395,
          feet: 20977,
          range: "Cordillera Blanca",
          country: "Peru",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/huandoy.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Mount Kailash",
          height: 6638,
          feet: 21778,
          range: "None",
          country: "Tibet (China)",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/kailash.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Angel Sar",
          height: 6858,
          feet: 22500,
          range: "None",
          country: "Pakistan",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/sar.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Machapuchare",
          height: 6993,
          feet: 22943,
          range: "Annapurna Himalayas",
          country: "Nepal",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/machapuchare.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Lenin Peak",
          height: 7134,
          feet: 23406,
          range: "Pamir Mountains",
          country: "Tajikistan / Kyrgyzstan",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/lenin_peak.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Muztagh Tower",
          height: 7273,
          feet: 23862,
          range: "Karakoram Range",
          country: "Pakistan",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/tower.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Gangkhar Puensum",
          height: 7570,
          feet: 24836,
          range: "Kurichu Range",
          country: "Bhutan",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/gangkhar.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Nanda Devi",
          height: 7816,
          feet: 25643,
          range: "Garhwal Himalayas",
          country: "India",
          ascent: "Unknown",
          content: "",
          imageSrc: "/Images/Mountains/nanda_devi.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },
        {
          title: "Lhotse",
          height: 8516,
          feet: 27940,
          range: "Mahalangur Himalayas",
          country: "Nepal / China",
          ascent: "1956",
          content:
            "With Everest to the north and Nuptse to the west, Lhotse forms the apex of the massive horseshoe-shaped arc of the Everest massif. It is the least prominent of the eight-thousanders.",
          imageSrc: "/Images/Mountains/lhotse.jpg",
          imageAlt: "Lhotse",
          imageSrcIcon: "",
        },
        {
          title: "Annapurna I",
          height: 8091,
          feet: 26545,
          range: "Annapurna Himalayas",
          country: "Nepal",
          ascent: "1950",
          content:
            "Named after a Hindu goddess of food and nourishment, who is said to reside there. Name derives from Sanskrit meaning 'everlasting food'.",
          imageSrc: "/Images/Mountains/annapurna.webp",
          imageAlt: "Annapurna I",
          imageSrcIcon: "",
        },
        {
          title: "K2",
          height: 8611,
          feet: 28251,
          range: "Karakoram Range",
          country: "Pakistan / China",
          ascent: "1954",
          content:
            "Known as Savage Mountain by George Bell K2 is second highest mountain and by some metrics the deadliest.",
          imageSrc: "/Images/Mountains/k2.jpg",
          imageAlt: "K2 Mountain",
          imageSrcIcon: "",
        },
        {
          title: "Everest",
          height: 8848,
          feet: 29029,
          range: "Mahalangur Himalayas",
          country: "Nepal / China",
          ascent: "1953",
          content:
            "Highest mountain above sea level. Everest's Nepali/Sanskrit name is Sagarmāthā meaning goddess of the sky.",
          imageSrc: "/Images/Mountains/everest.webp",
          imageAlt: "Everest",
          imageSrcIcon: "",
        },
        {
          title: "Dhaulagiri",
          height: 8167,
          feet: 26795,
          range: "Dhaulagiri Himalayas",
          country: "Nepal",
          ascent: "1960",
          content:
            "Seventh highest mountain in the world and the highest mountain within the borders of a single country. Dhaulagiri means dazzlig, white, beautiful (Sanskrit).",
          imageSrc: "/Images/Mountains/dhaulagiri.jpg",
          imageAlt: "Dhaulagiri",
          imageSrcIcon: "",
        },
        {
          title: "Makalu",
          height: 8463,
          feet: 27766,
          range: "Mahalangur Himalayas",
          country: "Nepal / China",
          ascent: "1955",
          content:
            "Fifth highest mountain on Earth. It is an isolated peak shaped as a four-sided pyramid. It is located 19km (12mi) from Mount Everest",
          imageSrc: "/Images/Mountains/makalu.avif",
          imageAlt: "Makalu",
          imageSrcIcon: "",
        },
      ],

      positions: [0, 20, 35, 50, 60], // Possible positions for cards
      positionsMobile: [30], // Centered position for mobile screens
    };
  },
  computed: {
    heightMarks() {
      const marks = [];
      for (let i = 0; i <= this.totalHeight; i += 100) {
        marks.push(i);
      }
      return marks;
    },
    backgroundColor() {
      if (this.currentHeight < 1800) {
        return "dif1-background";
      } else if (this.currentHeight < 3000) {
        return "dif2-background";
      } else if (this.currentHeight < 5000) {
        return "dif3-background";
      } else if (this.currentHeight < 7900) {
        return "dif4-background";
      } else {
        return "dif5-background";
      }
    },
    scrollIndicatorColor() {
      if (this.currentHeight < 1800) {
        return "scroll-indicatorW";
      } else if (this.currentHeight > 5000) {
        return "scroll-indicatorW";
      } else {
        return "scroll-indicator";
      }
    },
  },
  mounted() {
    this.alignCardHeights();
    this.setInitialScrollPosition();
  },
  methods: {
    alignCardHeights() {
      const isMobile = window.innerWidth <= 1200;
      const positions = isMobile ? this.positionsMobile : this.positions;
      const shuffledPositions = positions.sort(() => Math.random() - 0.5);
      this.cards.forEach((card, index) => {
        card.alignedHeight = card.height;
        card.offset = shuffledPositions[(index % shuffledPositions.length) - 1];
      });
    },
    setInitialScrollPosition() {
      const heightIndicator = this.$refs.heightIndicator;
      heightIndicator.scrollTop = heightIndicator.scrollHeight;
      this.currentHeight = this.totalHeight - heightIndicator.scrollTop;
    },
    handleScroll() {
      const heightIndicator = this.$refs.heightIndicator;
      this.currentHeight = this.totalHeight - heightIndicator.scrollTop - 50;
    },
  },
  watch: {
    cards() {
      this.alignCardHeights();
      this.setInitialScrollPosition();
    },
  },
};
</script>
