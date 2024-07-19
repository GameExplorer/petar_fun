<template v-cloak>
  <div class="text-Font">
    <div class="background">
      <div class="container mx-auto text-thrones">
        <div class="text text-2xl md:text-6xl sm:text-xl py-12 text-center">
          <h1 class="py-2">
            <span class="md:text-7xl text-3xl daysText font-bold">{{
              daysPassed
            }}</span>
            DAYS SINCE LAST
          </h1>
          <h1 class="py-2">ASOIAF BOOK</h1>
          <h2 class="py-2 text-2xl">in the mean time you could have...</h2>
        </div>
      </div>
    </div>
    <div class="background2 py-2 items-center border-t-8 border-[#010101]">
      <div class="m-auto p-0 text-center text-2xl">
        <button
          class="text-black bg-[#eaeaea] m-6 px-4 py-2 lg:px-12 lg:py-4 rounded-2xl uppercase border-4 border-gray-400 hover:scale-105 transform transition duration-500 ease-in-out"
          @click="handleClick"
        >
          Winter is Coming
        </button>
      </div>
    </div>
    <div class="background2 mb-8 pb-32">
      <div v-if="textData" class="container mx-auto mb-8 pb-32">
        <div
          :class="['box', currentClass]"
          class="p-6 rounded-lg shadow-xl border-2 border-gray-600 bgImage"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div class="md:col-span-1">
              <img
                v-if="textData.image"
                :src="textData.image"
                :alt="textData.text"
                class="w-full h-auto rounded-xl shadow-md border-2 border-gray-600"
              />
            </div>
            <div class="md:col-span-2 text-center">
              <p class="text-5xl lg:text-6xl font-bold mb-4">
                <span class="text-purple-400 animate-pulse">{{
                  textData.number
                }}</span>
                <span class="text-gray-300"></span>
                <span class="text-4xl lg:text-5xl font-semibold mb-4">
                  {{ textData.text }} </span
                ><br />
                <span class="text-xl md:text-2xl italic text-gray-400">
                  {{ textData.info }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <thronesTextData ref="thronesTextData" :daysPassed="daysPassed" />
  </div>

  <Footer></Footer>
</template>

<script>
import "/src/style.css";
import CountingDiv from "@/components/CountingDiv.vue";
import Footer from "@/components/Footer/Footer.vue";
import thronesTextData from "@/components/Thrones/ThronesTextData.vue";

export default {
  name: "ThronesSite",
  components: {
    CountingDiv,
    Footer,
    thronesTextData,
  },
  data() {
    return {
      targetDate: new Date("2011-06-12"),
      textData: null,
      colorClasses: ["targaryen", "stark", "lannister", "baratheon"],
      currentClassIndex: 0,
    };
  },

  computed: {
    daysPassed() {
      const currentDate = new Date();
      const timeDifference = currentDate - this.targetDate;
      const daysPassed =
        Math.floor(timeDifference / (1000 * 60 * 60 * 24)) - 30; // Milliseconds to days
      return daysPassed;
    },
    currentClass() {
      return this.colorClasses[this.currentClassIndex];
    },
  },

  methods: {
    generateText() {
      if (this.$refs.thronesTextData && this.$refs.thronesTextData.textData) {
        const textDataArray = this.$refs.thronesTextData.textData;
        const randomIndex = Math.floor(Math.random() * textDataArray.length);
        this.textData = textDataArray[randomIndex];
      } else {
        console.error("ThronesTextData component or its textData is undefined");
      }
    },
    changeColor() {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.colorClasses.length);
      } while (newIndex === this.currentClassIndex);
      this.currentClassIndex = newIndex;
    },
    handleClick() {
      this.generateText();
      this.changeColor();
    },
  },
  mounted() {
    // Initialize textData with the first element of thronesTextData
    this.$nextTick(() => {
      if (this.$refs.thronesTextData && this.$refs.thronesTextData.textData) {
        this.textData = this.$refs.thronesTextData.textData[0];
      } else {
        console.error("ThronesTextData component or its textData is undefined");
      }
    });
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Thrones";
  src: url("@/assets/Fonts/GameOfThrones.ttf") format("truetype");
}

@font-face {
  font-family: "Inter";
  src: url("@/assets/Fonts/Inter-Regular.ttf") format("truetype");
}

.background {
  background-color: #16161a;
  color: #fffffe;
}

.background2 {
  background-color: #242629;
  color: #fffffe;
}

[v-cloak] {
  display: none;
}

.text-Font {
  font-family: "Inter";
}
.daysText {
  font-family: "Inter";
  color: #fffffe;
  font-size: 1.4em;
}
.text-thrones {
  font-family: Thrones;
  color: #fffffe;
}

.targaryen {
  position: relative;
  background-color: #262222;
  color: #fffffe;
  border: 10px solid transparent;
  border-radius: 15px;
  border-image: linear-gradient(to bottom right, #ff8a00, #da1b60, #ff8a00) 1;
  box-shadow: 0 0 10px 5px rgba(255, 0, 0, 0.7),
    0 0 20px 10px rgba(255, 69, 0, 0.5), 0 0 30px 15px rgba(255, 140, 0, 0.3),
    inset 0 0 10px 5px rgba(255, 0, 0, 0.7),
    inset 0 0 20px 10px rgba(255, 69, 0, 0.5);
  animation: fire-border 5s infinite alternate;
}

.stark {
  position: relative;
  background-color: #c9e9ee;
  color: #000;
  border: 10px solid transparent;
  border-image: linear-gradient(to bottom right, #2b3b4a, #353331, #2b3b4a) 1;
  box-shadow: 0 0 10px 15px rgba(43, 59, 74, 0.7),
    0 0 20px 10px rgba(53, 51, 49, 0.5), 0 0 30px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 10px 5px rgba(43, 59, 74, 0.7),
    inset 0 0 20px 10px rgba(53, 51, 49, 0.5);
  animation: ice-border 5s infinite alternate;
}

.lannister {
  position: relative;
  background-color: #931613;
  color: #fff;
  border: 10px solid transparent;
  border-image: linear-gradient(to bottom right, #f3b72e, #931613, #f3b72e) 1;
  box-shadow: 0 0 10px 15px rgba(147, 22, 19, 0.7),
    0 0 20px 10px rgba(147, 22, 19, 0.5), 0 0 30px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 10px 5px rgba(243, 183, 46, 0.7),
    inset 0 0 20px 10px rgba(147, 22, 19, 0.5);
  animation: lion-border 5s infinite alternate;
}

.baratheon {
  position: relative;
  background-color: #f6ef4c;
  color: #000;
  border: 10px solid transparent;
  border-image: linear-gradient(to bottom right, #382929, #513f3f, #382929) 1;
  box-shadow: 0 0 20px 15px rgba(81, 63, 63, 0.7),
    0 0 20px 10px rgba(0, 0, 0, 0.5), 0 0 30px 25px rgba(0, 0, 0, 0.3),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.7),
    inset 0 0 20px 10px rgba(210, 70, 80, 0.5);
  animation: stag-border 5s infinite alternate;
}

.targaryen::before,
.stark::before,
.lannister::before,
.baratheon::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%; 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  opacity: 0.33;
}

.targaryen::before {
  background-image: url("/Images/Thrones/targaryen.png");
}

.stark::before {
  background-image: url("/Images/Thrones/stark.png");
}

.lannister::before {
  background-image: url("/Images/Thrones/lannister.png");
}

.baratheon::before {
  background-image: url("/Images/Thrones/baratheon.png");
}

@keyframes fire-border {
  0% {
    border-image: linear-gradient(to bottom right, #ff8a00, #da1b60, #ff8a00) 1;
  }
  25% {
    border-image: linear-gradient(to top left, #ff4500, #ff0000, #ff4500) 1;
  }
  50% {
    border-image: linear-gradient(to top right, #ff8a00, #da1b60, #ff8a00) 1;
  }
  100% {
    border-image: linear-gradient(to bottom left, #ff4500, #ff0000, #ff4500) 1;
  }
}

@keyframes ice-border {
  0% {
    border-image: linear-gradient(to bottom right, #2b3b4a, #353331, #2b3b4a) 1;
  }
  25% {
    border-image: linear-gradient(to top left, #2b3b4a, #353331, #2b3b4a) 1;
  }
  50% {
    border-image: linear-gradient(to top right, #2b3b4a, #353331, #2b3b4a) 1;
  }
  100% {
    border-image: linear-gradient(to bottom left, #2b3b4a, #353331, #2b3b4a) 1;
  }
}

@keyframes lion-border {
  0% {
    border-image: linear-gradient(to bottom right, #f3b72e, #931613, #f3b72e) 1;
  }
  25% {
    border-image: linear-gradient(to top left, #f3b72e, #631025, #f3b72e) 1;
  }
  50% {
    border-image: linear-gradient(to top right, #f3b72e, #631025, #f3b72e) 1;
  }
  100% {
    border-image: linear-gradient(to bottom left, #f3b72e, #931613, #f3b72e) 1;
  }
}

@keyframes stag-border {
  0% {
    border-image: linear-gradient(to bottom right, #62556d, #d24646, #382929) 1;
  }
  25% {
    border-image: linear-gradient(to top left, #62556d, #d24646, #382929) 1;
  }
  50% {
    border-image: linear-gradient(to top right, #62556d, #d24646, #382929) 1;
  }
  100% {
    border-image: linear-gradient(to bottom left, #62556d, #d24646, #382929) 1;
  }
}
</style>
