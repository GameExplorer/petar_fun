<template>
  <div id="app" @scroll="handleScroll" ref="scrollContainer">
    <div class="scroll-content">
      <div class="height-indicator">
        {{ height }} m
      </div>
      <div v-if="showMessage" :style="messageStyle" class="message">
        <div class="card">
          <h2>Triglav!</h2>
          <p>You have reached 2864 meters!</p>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      showMessage: false,
      messagePosition: 0
    };
  },
  mounted() {
    // Ensure starting at the bottom
    this.$nextTick(() => {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
      this.handleScroll(); // Initialize the height indicator
    });
  },
  methods: {
    handleScroll() {
      const scrollContainer = this.$refs.scrollContainer;
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      // Calculate the height from bottom to top
      this.height = Math.round(((scrollHeight - scrollTop) / scrollHeight) * 8884);
      // Check if the height is between 2000 and 2100 meters
      if (this.height >= 2464) {
        if (!this.showMessage) {
          this.messagePosition = this.height;
        }
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    },
    getRandomPosition() {
      // Calculate a random position between 2000 and 2100 meters
      const minPosition = 2864;
      const maxPosition = 4500;
      return Math.floor(Math.random() * (maxPosition - minPosition + 1)) + minPosition;
    }
  },
  computed: {
    messageStyle() {
      // Calculate the top position based on the random message position
      const scrollContainer = this.$refs.scrollContainer;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const top = (scrollHeight * (1 - this.messagePosition / 8884)) + 'px';
      return {
        position: 'absolute',
        top: top,
        left: '10px'
      };
    }
  }
};
</script>

<style>
#app {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  background: linear-gradient(to top, #1e3c72, #2a5298);
  color: white;
  font-family: Arial, sans-serif;
}

.scroll-content {
  position: relative;
  height: 8884px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.height-indicator {
  position: fixed;
  top: 50%;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5em;
}

.message {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card {
  padding: 10px;
  text-align: center;
}

.spacer {
  height: 100vh;
}
</style>
