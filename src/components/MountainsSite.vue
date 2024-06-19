<template>
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
          :style="{ bottom: card.alignedHeight + 'px' }"
        >
          <div class="card-content">
            <h1
              class="text-3xl lg:text-5xl uppercase text-center border-b-2 border-black"
            >
              {{ card.title }}
            </h1>
            <div class="pt-2">{{ card.content }}</div>
            <img
              v-if="card.imageSrc"
              :src="card.imageSrc"
              :alt="card.imageAlt"
              class="pt-2 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">Current height: {{ currentHeight }}m</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalHeight: 8884,
      currentHeight: 0,
      cards: [
        {
          height: 2864,
          title: "Triglav",
          content: "Highest peak in Slovenia",
          imageSrc: "/Images/test.webp",
          imageAlt: "Mercedes Team in 2014",
        },
        { height: 5000, content: "Card at 5000m" },
        { height: 7500, content: "Card at 7500m" },
        {
          height: 8000,
          content: "K2",
          imageSrc: "",
          imageAlt: "Mercedes Team in 2014",
        },
        {
          height: 8600,
          content: "Everest",
          imageSrc: "",
          imageAlt: "Mercedes Team in 2014",
        },
      ],
      positions: ["left", "center", "right"], // Possible positions for cards
      heightColors: ["green", "blue", "yellow", "orange"],
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
      if (this.currentHeight < 2000) {
        return "green-background";
      } else if (this.currentHeight < 4000) {
        return "blue-background";
      } else if (this.currentHeight < 6000) {
        return "yellow-background";
      } else {
        return "red-background";
      }
    },
  },
  mounted() {
    // Align card heights to the nearest hundred and assign random positions
    this.cards.forEach((card) => {
      card.alignedHeight = Math.floor(card.height / 100) * 100;
      card.position =
        this.positions[Math.floor(Math.random() * this.positions.length)];
    });

    // Start from the bottom
    this.$nextTick(() => {
      const heightIndicator = this.$refs.heightIndicator;
      heightIndicator.scrollTop = heightIndicator.scrollHeight;
      this.currentHeight = this.totalHeight - heightIndicator.scrollTop;
    });
  },
  methods: {
    handleScroll() {
      const heightIndicator = this.$refs.heightIndicator;
      this.currentHeight = this.totalHeight - heightIndicator.scrollTop;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
}

.height-indicator {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.height-scale {
  position: relative;
  height: 8884px;
  width: 100%;
}

.height-mark {
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  color: #aaa;
  text-align: right;
  padding-right: 10px;
}

.card {
  position: absolute;
  width: 35%;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card.left {
  left: 10%;
}

.card.center {
  left: 35%;
}

.card.right {
  right: 15%;
}

.card img {
  width: auto;
}

.card-content {
  padding: 10px;
}

.height-scale:last-child {
  padding-bottom: 1000px;
}

.scroll-indicator {
  position: fixed;
  top: 10px;
  left: 2.5%;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(0deg, #96c565 0%, #96c565 100%) border-box;
  color: #000;
  padding: 10px 15px;
  border: 4px solid transparent;
  border-radius: 10px;
}
/*
.green-background {
  background-color: green;
  transition: all 0.5s ease-in-out;
}
.blue-background {
  background-color: blue;
  transition: all 0.5s ease-in-out;
}
.yellow-background {
  background-color: yellow;
}
.red-background {
  background-color: red;
}*/
</style>
