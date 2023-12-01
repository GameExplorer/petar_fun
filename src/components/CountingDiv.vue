<template>
  <div class="py-10">
    <div class="text-xl md:text-3xl  sm:text-lg text-left px-12">
      Since his last book George R.R. Martin has published 
      <span class="text-3xl text-[#7F5AF0] font-bold">{{ currentNumber }}</span> books. That is a lot of books
      <!-- horizonal image scroll animation css -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ASOIAFBooks',
  data() {
    return {
      currentNumber: 0,
    };
  },
  methods: {
    handleIntersection(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Increase the number to your desired value
        const desiredNumber = 22; // Change this to your desired number
        const incrementAmount = 1; // You can adjust the increment speed
        const interval = setInterval(() => {
          if (this.currentNumber < desiredNumber) {
            this.currentNumber += incrementAmount;
          } else {
            clearInterval(interval);
          }
        }, 120); // Adjust the interval as needed
      }
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.50, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$el);
  },
};
</script>

<style scoped>

</style>
