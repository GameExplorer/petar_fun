<template>
  <div class="star" :style="starStyle"></div>
</template>

<script>
export default {
  name: "Stars",
  props: {
    size: Number,
    top: Number,
    left: Number,
    flickerDuration: Number,
  },
  computed: {
    starStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        top: `${this.top}px`,
        left: `${this.left}px`,
        animationDuration: `${this.flickerDuration}s`,
      };
    },
  },
};
</script>

<style scoped>
.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 8px white;
  opacity: 0.7;
  animation: flicker infinite alternate ease-in-out;
}

@keyframes flicker {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
</style>
