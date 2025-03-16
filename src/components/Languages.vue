<script>
import ProgrammingLang from "@/components/ProgrammingHistory/ProgrammingLang.vue";
import Footer from "./Footer/Footer.vue";

export default {
  name: "ProgrammingLanguages",
  components: {
    ProgrammingLang,
    Footer,
  },
  data() {
    return {
      programmingData: null,
    };
  },
  methods: {
    generateText() {
      if (this.$refs.programmingLang && this.$refs.programmingLang.programmingLists) {
        const programmingDataArray = this.$refs.programmingLang.programmingLists;
        const randomIndex = Math.floor(Math.random() * programmingDataArray.length);
        this.programmingData = programmingDataArray[randomIndex];
      } else {
        console.error("ProgrammingLang component or its programmingLists is undefined");
      }
    }
  },
};
</script>

<template>
  <div class="bg-gray-300 h-full w-full">
    <h1 class="text-center py-12 uppercase text-3xl">
      Programming languages <br> throughtout the history
    </h1>
    <div class="years">
      <div class="border-2 border-blue-400">1950 1951 1952</div>
    </div>
    <div class="main">Main content goes here </div>
    <div class="years-btn">
      <button class="mx-2">Previous</button>
      <button class="mx-2">Next</button>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.years {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.years div {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #3182ce;
  color: white;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.years-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #3182ce;
  color: white;
}

button:hover {
  background-color: #2c5282;
}
</style>
