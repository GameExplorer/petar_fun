<template>
  <div class="">
    <div class="space-cursor"></div>
    <div class="space scroller ">
      <Stars v-for="(star, index) in stars" :key="index" :size="star.size" :top="star.top" :left="star.left"
        :flickerDuration="star.flickerDuration" />
      <div className="scroll-wrapper">
        <SolarSystem class="content" />
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "../components/Space/Stars.vue";
import SolarSystem from "../components/Space/SolarSystem.vue";
import "../assets/Space/scrollbar.css";

export default {
  name: "Space",
  components: {
    Stars,
    SolarSystem,
  },
  data() {
    return {
      stars: [],
    };
  },
  created() {
    this.stars = this.generateStars(200);
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    generateStars(count) {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          size: Math.random() * 5 + 1,
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
          flickerDuration: Math.random() * 3 + 1,
        });
      }
      return stars;
    },
    handleMouseMove(e) {
      const cursorBorder = document.querySelector('.space-cursor');
      cursorBorder.style.left = e.clientX + 'px';
      cursorBorder.style.top = e.clientY + 'px';
    }
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Equinox";
  src: url("@/assets/Fonts/Equinox-Regular.otf");
}

@font-face {
  font-family: "Stargaze";
  src: url("@/assets/Fonts/Stargaze-Regular.otf");
}

@font-face {
  font-family: "Venite";
  src: url("@/assets/Fonts/Venite.ttf");
}

.space {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: -1;
}

.scroll-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
}

.content {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: min-content;
}

.space-cursor {
  position: fixed;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
  box-shadow: 0 0px 20px rgba(255, 255, 255, 0.9);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

@media screen and (max-width: 1200px) {
  .space-cursor {
    display: none;
   }

 

  ::-webkit-scrollbar {
    display: none;
  }
  
}
</style>
