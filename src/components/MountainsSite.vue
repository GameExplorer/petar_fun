<template>
  <div>
    <div class="mountain" ref="container">
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
            :class="heightMarkColor"
            :style="{ bottom: height + 'px' }"
          >
            {{ height }}m
            <div
              v-if="height == 8000"
              class="border-b-8 border-dashed border-red-600 text-red-600 text-3xl"
            >
              💀 Death Zone
            </div>
            <div v-if="height == 800" class="text-white text-left">
              <span class="m-12 text-2xl">Tallest building in the world - Burj Khalifa (828m)</span>
            </div>
            <div v-if="height == 9600" class="cloud-container">
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
              <div class="ice-sheet" :style="sheetStyles"></div>
            </div>

            <div
              v-if="height == 5500"
              class="text-white"
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
                class="glowy-border-animation iconImage opacity-50 rounded-xl card-image"
              />
              <div
                :style="{
                  borderColor: card.borderColor,
                  borderWidth: '4px',
                  borderStyle: 'solid',
                }"
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
                  :style="{ borderColor: card.borderColor }"
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
            <span class="animate-pulse">↑ Scroll up ↑</span> <br /><i
              class="text-xl"
              >Hover on images for more detailed information</i
            >
          </div>
        </div>
        <Footer class="bg-white"></Footer>
      </div>
    </div>

    <div class="scroll-indicator" :class="scrollIndicatorColor">
      <!--Current height:-->
      {{ currentHeight }}
      <!-- climbing animation?-->
      <div v-if="height < 2000"></div>
    </div>
  </div>
</template>

<script>
import MountainData from "./Mountains/MountainsData.vue";
import "@/assets/Mountains/mountains.css";
import "@/assets/Mountains/clouds.scss";
import Footer from "./Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      totalHeight: 9700,
      currentHeight: 0,
      sheetWidth: 800, // Adjust as needed
      sheetHeight: 50, // Adjust as needed
      fullWidth: window.innerWidth, // Width of the viewport
      glowIntensity: 20, // Intensity of the glow effect
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
        "cloud10",
        "cloud11",
        "cloud12",
        "cloud13",
        "cloud14",
        "cloud15",
        "cloud16",
        "cloud17",
        "cloud18",
        "cloud19",
        "cloud20",
        "cloud21",
        "cloud22",
        "cloud23",
        "cloud24",
        "cloud25",
      ],
      cards: [],
      positions: [0, 15, 30, 45, 65, 70], // Possible positions for cards
      positionsMobile: [30], // Centered position for mobile screens
    };
  },
  created() {
    this.cards = MountainData.data().mountainCards;
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

    heightMarkColor() {
      if (this.currentHeight > 8000) {
        return "height-mark-8k";
      }
    },
    scrollIndicatorColor() {
      if (this.currentHeight < 1800) {
        return "scroll-indicatorG";
      } else if (this.currentHeight > 1800 && this.currentHeight < 7900) {
        return "scroll-indicatorB";
      } else if (this.currentHeight > 8000) {
        return "scroll-indicatorR";
      } else {
        return "scroll-indicator";
      }
    },
    sheetStyles() {
      return {
        height: `${this.sheetHeight}px`,
      };
    },
  },
  mounted() {
    this.animationEndPosition = `${this.fullWidth}px`;
    this.alignCardHeights();
    this.setInitialScrollPosition();
  },
  methods: {
    alignCardHeights() {
      const isMobile = window.innerWidth <= 1200;
      const positions = isMobile ? this.positionsMobile : this.positions;
      const minVerticalGap = 100; // Minimum visual gap for 8000m+ peaks

      // Sort the cards by height, descending
      this.cards.sort((a, b) => b.height - a.height);

      let lastPeakAbove8000 = null;

      this.cards.forEach((card, index) => {
        // Set alignedHeight to actual height for correct positioning
        card.alignedHeight = card.height;

        // For peaks above 8000m, adjust visual representation
        if (card.height >= 8000) {
          if (lastPeakAbove8000) {
            const heightDifference = lastPeakAbove8000.height - card.height;
            if (heightDifference < minVerticalGap) {
              // Add a visual offset without changing alignedHeight
              card.visualOffset = minVerticalGap - heightDifference;
            }
          }
          lastPeakAbove8000 = card;
        }

        this.assignHorizontalPosition(card, index, positions);
      });
    },

    assignHorizontalPosition(card, index, positions) {
      if (index === 0) {
        card.offset = positions[Math.floor(Math.random() * positions.length)];
      } else {
        const previousCard = this.cards[index - 1];
        let availablePositions = positions.filter(
          (pos) => Math.abs(pos - previousCard.offset) > 25
        );

        if (availablePositions.length === 0) {
          availablePositions = positions;
        }

        card.offset =
          availablePositions[
            Math.floor(Math.random() * availablePositions.length)
          ];
      }
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
