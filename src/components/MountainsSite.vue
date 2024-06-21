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
          </div>
          <div
            v-for="card in cards"
            :key="card.height"
            class="card"
            :class="card.position"
            :style="{
              bottom: card.alignedHeight + 'px',
              left: card.offset + '%',
            }"
          >
            <div class="card-wrapper">
              <img
                v-if="card.imageSrc"
                :src="card.imageSrc"
                :alt="card.imageAlt"
                class="opacity-50 rounded-xl card-image"
              />
              <!-- replace imageSrc with imageSrcIcon-->
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
        <div class="my-4 text-2xl text-center text-white">
          <div class="text-3xl">Made by Petar</div>
          <div class="mt-4">
            ↑ Scroll up ↑ <br /><i
              >Hover on images for more detail information</i
            >
          </div>
        </div>
        <Footer class="bg-white"></Footer>
      </div>
    </div>

    <div class="scroll-indicator" :class="scrollIndicatorColor">
      <!--Current height:-->
      {{ currentHeight }}
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
      totalHeight: 9000,
      currentHeight: 0,
      cards: [
        {
          title: "Diamond Head",
          height: 232,
          feet: 600,
          range: "Hawaii",
          ascent: "N/A",
          content: "",
          imageSrc: "/Images/Mountains/diamond-head.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Suur Munamagi",
          height: 318,
          feet: 620,
          range: "Haanja",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/Suur_Munamagi.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Great Mell Fell",
          height: 537,
          feet: 1000,
          range: "England",
          ascent: "",
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
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/Saajat.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "The Cheviot",
          height: 815,
          feet: 2674,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/Cheviot.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Sgurr Dearg",
          height: 986,
          feet: 3234,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/sgurr.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Devil's Peak",
          height: 1000,
          feet: 3300,
          range: "Cape Town",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/Devils_Peak.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Hombori",
          height: 1155,
          feet: 3789,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/hombori.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Snaefellsjokull",
          height: 1446,
          feet: 4744,
          range: "Iceland",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/Snaefellsjokull.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Snežka",
          height: 1602,
          feet: 5256,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/snezka.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Bogong",
          height: 1986,
          feet: 6516,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/Mountains/bogong.jpg",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Polar Bear Peak",
          height: 2016,
          feet: 6614,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mountain Kosciuszko",
          height: 2228,
          feet: 7310,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Pico",
          height: 2351,
          feet: 7713,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Špik",
          height: 2472,
          feet: 8110,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Barbeau Peak",
          height: 2616,
          feet: 8583,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Triglav",
          height: 2864,
          feet: 9396,
          range: "Julian Alps",
          ascent: 1778,
          content: "Highest peak in Slovenia and of Julian Alps",
          imageSrc: "/Images/test.webp",
          imageAlt: "Triglav Mountain",
          imageSrcIcon: "",
        },

        {
          title: "Mount Olympus",
          height: 2917,
          feet: 9570,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Glacier Peak",
          height: 3213,
          feet: 10541,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Pico Veleta",
          height: 3396,
          feet: 11142,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Semeru",
          height: 3676,
          feet: 12060,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Aoraki",
          height: 3754,
          feet: 12316,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Fuji",
          height: 3776,
          feet: 12388,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mont Pelvoux",
          height: 3946,
          feet: 12946,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Phoenix Peak",
          height: 4237,
          feet: 13901,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mont Blanc",
          height: 4748,
          feet: 15577,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Pico Bolivar",
          height: 4981,
          feet: 16342,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Vinicunca",
          height: 5200,
          feet: 17060,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Popocatepetl",
          height: 5426,
          feet: 17799,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Kilimanjaro",
          height: 5895,
          feet: 19341,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Huayna Potosi",
          height: 6088,
          feet: 19974,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Huandoy",
          height: 6395,
          feet: 20981,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Mount Kailash",
          height: 6638,
          feet: 21778,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Angel Sar",
          height: 6858,
          feet: 22500,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Machapuchare",
          height: 6993,
          feet: 22943,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Lenin Peak",
          height: 7134,
          feet: 23406,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Muztagh Tower",
          height: 7273,
          feet: 23862,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Gangkhar",
          height: 7570,
          feet: 24836,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          title: "Nanda Devi",
          height: 7816,
          feet: 25643,
          range: "",
          ascent: "",
          content: "",
          imageSrc: "/Images/test.webp",
          imageAlt: "",
          imageSrcIcon: "",
        },

        {
          height: 8516,
          content: "Lhotse",
          imageSrc: "/Images/test.webp",
          imageAlt: "Lhotse",
          imageSrcIcon: "",
        },

        {
          height: 8091,
          content: "Annapurna I",
          imageSrcIcon: "/Images/Mountains/everest.png",
          imageSrc: "/Images/Mountains/everest.png",
          imageAlt: "Annapurna I",
        },

        {
          height: 8611,
          content: "K2",
          imageSrc: "/Images/Mountains/everest.png",
          imageAlt: "K2 Mountain",
          imageSrcIcon: "",
        },

        {
          height: 8848,
          content: "Everest",
          imageSrc: "/Images/Mountains/everest.png",
          imageAlt: "Everest",
          imageSrcIcon: "",
        },

        {
          height: 8167,
          content: "Dhaulagiri",
          imageSrc: "/Images/test.webp",
          imageAlt: "Dhaulagiri",
          imageSrcIcon: "",
        },

        {
          height: 8125,
          content: "Nanga Parbat",
          imageSrc: "/Images/test.webp",
          imageAlt: "Nanga Parbat",
          imageSrcIcon: "",
        },

        {
          height: 8463,
          content: "Makalu",
          imageSrc: "/Images/test.webp",
          imageAlt: "Makalu",
          imageSrcIcon: "",
        },
      ],

      positions: [0, 20, 35, 50, 60], // Possible positions for cards
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
      } else if (this.currentHeight > 7999) {
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
      const shuffledPositions = this.positions.sort(() => Math.random() - 0.5);
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
      this.currentHeight = this.totalHeight - heightIndicator.scrollTop;
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
