<template>
  <div>
    <div class="mountain" ref="container">
      <AtmosphericPanel v-if="showAtmosphericEffects" :oxygenLevel="oxygenLevel" :temperature="temperature"
        :windSpeed="windSpeed" />

      <button class="toggle-effects-btn" @click="toggleAtmosphericEffects">
        {{ showAtmosphericEffects ? '❌ Hide Effects' : '✅ Show Effects' }}
      </button>

      <div class="height-indicator" ref="heightIndicator" :class="backgroundColor" @scroll="handleScroll">
        <div class="height-scale">
          <div v-for="height in heightMarks" :key="height" class="height-mark z-40" :class="heightMarkColor"
            :style="{ bottom: height + 'px' }">
            {{ height }}m
            <div class="RandomHeightFacts">
              <div v-if="height == 0" class="grass-container">
                <div class="trees-container">
                  <div class="tree tree-1"></div>
                  <div class="tree tree-2 conifer"></div>
                  <div class="tree tree-3"></div>
                  <div class="tree tree-4 pine"></div>
                  <div class="tree tree-5"></div>
                  <div class="tree tree-6 conifer"></div>
                  <div class="tree tree-7 pine"></div>
                  <div class="tree tree-8"></div>
                </div>
                <div class="grass"></div>
              </div>
              <div v-if="height == 800" class="text-white text-center">
                <span class="lg:text-2xl text-lg">Tallest building in the world - Burj Khalifa (828m)</span>
              </div>
              <div v-if="height == 1500" class="flying-vehicle-container">
                <img src="@/assets/Mountains/Images/helicopter.svg" alt="helicopter" class="flying-vehicle" />
              </div>
              <div v-if="height == 2200" class="text-white text-center">
                <span class="lg:text-2xl text-lg">End of tree line in Swiss Alps</span>
              </div>
              <div v-if="height == 4000" class="text-center text-white">
                Snow covers become persistent
              </div>
              <div v-if="height == 8000" class="border-b-8 border-dashed border-red-600 text-red-600 text-3xl">
                💀 Death Zone
              </div>
              <div v-if="height == 9600" class="cloud-container">
                <div v-for="cloudClass in cloudClasses" :key="cloudClass" :class="cloudClass"></div>
              </div>
            </div>
          </div>
          <MountainCard v-for="card in cards" :key="card.height" :card="card" />
        </div>
        <Footer class="bg-white">
          <div class="my-4 text-3xl text-center">
            <div class="text-4xl">Made by Petar</div>
            <div class="mt-4">
              <i class="text-lg">Hover on images for more detailed information</i>
            </div>
          </div>
        </Footer>
      </div>
    </div>

    <div class="scroll-indicator text-3xl text-center" :class="scrollIndicatorColor">
      {{ currentHeight }}m
      <div v-if="height < 2000"></div>
    </div>
  </div>
</template>

<script>
import MountainData from "@/components/Mountains/MountainsData.vue";
import "@/assets/Mountains/heightScale.css";
import "@/assets/Mountains/clouds.scss";
import "@/assets/Mountains/groundFloor.css";
import "@/assets/Mountains/flyingObjects.css";
import Footer from "./Footer/Footer.vue";
import AtmosphericPanel from "./Mountains/AtmosphericPanel.vue";
import MountainCard from "./Mountains/MountainCard.vue";

export default {
  components: {
    Footer,
    AtmosphericPanel,
    MountainCard,
  },
  data() {
    return {
      totalHeight: 9700,
      currentHeight: 0,
      sheetWidth: 800,
      sheetHeight: 50,
      fullWidth: window.innerWidth,
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
      positions: [5, 15, 30, 45, 65, 70],
      positionsMobile: [5],
      oxygenLevel: 100,
      temperature: 20,
      windSpeed: 5,
      showAtmosphericEffects: true,
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
      switch (true) {
        case this.currentHeight < 1800:
          return "dif1-background";
        case this.currentHeight < 3000:
          return "dif2-background";
        case this.currentHeight < 5000:
          return "dif3-background";
        case this.currentHeight < 7999:
          return "dif4-background";
        default:
          return "dif5-background";
      }
    },
    heightMarkColor() {
      if (this.currentHeight > 8000) {
        return "height-mark-8k";
      }
    },
    scrollIndicatorColor() {
      if (this.currentHeight >= 4000 && this.currentHeight < 7999) {
        return "scroll-indicator--blue ";
      } else if (this.currentHeight > 8000) {
        return "scroll-indicator--red";
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
    this.calculateAtmosphericConditions();
  },
  methods: {
    alignCardHeights() {
      const isMobile = window.innerWidth <= 1200;
      const positions = isMobile ? this.positionsMobile : this.positions;
      const minVerticalGap = 100;

      this.cards.sort((a, b) => b.height - a.height);

      let lastPeakAbove8000 = null;

      this.cards.forEach((card, index) => {
        card.alignedHeight = card.height;

        if (card.height >= 8000) {
          if (lastPeakAbove8000) {
            const heightDifference = lastPeakAbove8000.height - card.height;
            if (heightDifference < minVerticalGap) {
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
      this.currentHeight = Math.floor(
        this.totalHeight - heightIndicator.scrollTop
      );
    },

    calculateAtmosphericConditions() {
      this.oxygenLevel = Math.max(100 - (this.currentHeight / 8848 * 67), 33);
      this.temperature = Math.round(20 - (this.currentHeight / 1000 * 6.5));
      this.windSpeed = Math.round(5 + (this.currentHeight / 8000 * 95));
    },

    toggleAtmosphericEffects() {
      this.showAtmosphericEffects = !this.showAtmosphericEffects;

      if (this.showAtmosphericEffects && this.audioEnabled) {
        this.updateAtmosphericEffects();
      }
    },

    handleScroll() {
      const heightIndicator = this.$refs.heightIndicator;
      this.currentHeight = Math.floor(
        this.totalHeight - heightIndicator.scrollTop - 50
      );

      if (this.currentHeight >= 8848) {
        this.currentHeight = 8848;
      }

      if (this.currentHeight <= 0) {
        this.currentHeight = Math.floor(
          this.totalHeight - heightIndicator.scrollTop - this.currentHeight - 50
        );
      }

      this.calculateAtmosphericConditions();
    }
  },
  watch: {
    cards() {
      this.alignCardHeights();
      this.setInitialScrollPosition();
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: Maston;
  src: url("@/assets/Fonts/MRKMaston-Bold.woff2") format("truetype");
}

.mountain {
  font-family: Maston;
  height: 100vh;
  overflow: hidden;
  transition: background 0.8s ease-in-out;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
  display: none;
}

.toggle-effects-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 15px;
  border-radius: 30px;
  cursor: pointer;
  font-family: Maston, sans-serif;
  z-index: 100;
  transition: all 0.2s ease;
}

.toggle-effects-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

@media only screen and (max-width: 1100px) {
  .toggle-effects-btn {
    display: none;
  }
}
</style>