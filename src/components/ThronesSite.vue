<script>
import "/src/assets/Thrones/thrones.css";
import Footer from "@/components/Footer/Footer.vue";
import thronesTextData from "@/components/Thrones/ThronesTextData.vue";

export default {
  name: "ThronesSite",
  components: {
    Footer,
    thronesTextData,
  },
  data() {
    return {
      targetDate: new Date("2011-06-12"),
      textData: null,
      classes: [
        { background: "targaryen", text: "text-targaryen" },
        { background: "stark", text: "text-stark" },
        { background: "lannister", text: "text-lannister" },
        { background: "baratheon", text: "text-baratheon" },
        { background: "tyrell", text: "text-tyrell" },
        { background: "tully", text: "text-tully" },
        { background: "martell", text: "text-martell" },
        { background: "greyjoy", text: "text-greyjoy" },
      ],
      currentClassIndex: 0,
      isModalOpen: false,
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
      return this.classes[this.currentClassIndex].background;
    },
    currentTextColor() {
      return this.classes[this.currentClassIndex].text;
    },
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    generateText() {
      if (this.$refs.thronesTextData && this.$refs.thronesTextData.textData) {
        const textDataArray = this.$refs.thronesTextData.textData;
        const randomIndex = Math.floor(Math.random() * textDataArray.length);
        this.textData = textDataArray[randomIndex];
      } else {
        console.error("ThronesTextData component or its textData is undefined");
      }
    },
    changeClasses() {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.classes.length);
      } while (newIndex === this.currentClassIndex);
      this.currentClassIndex = newIndex;
    },

    handleClick() {
      this.generateText();
      this.changeClasses();
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

<template>
  <div class="text-Font">
    <header>
      <div class="background">
        <div class="container mx-auto text-thrones">
          <div class="text-3xl md:text-6xl sm:text-xl py-12 text-center">
            <h1 class="py-2">
              <span class="md:text-7xl text-3xl daysText font-bold">{{
                daysPassed
              }}</span>
              DAYS SINCE LAST
            </h1>
            <h1 class="py-2">ASOIAF BOOK</h1>
            <h2 class="py-2 text-2xl">in the mean time...</h2>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="background2 py-2 items-center border-t-8 border-[#010101]">
        <div class="m-auto p-0 text-center text-3xl">
          <button
            class="text-thrones text-black bg-[#eaeaea] m-6 px-4 py-2 lg:px-12 lg:py-4 rounded-3xl uppercase border-4 border-gray-400 hover:scale-105 hover:font-bold transform transition duration-500 ease-in-out hover:shadow-[0_10px_40px_3px_rgba(234,234,234,0.6)]"
            @click="handleClick"
          >
            FIND OUT
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
                  :class="['box', currentClass]"
                  class="z-[1] w-full h-auto"
                />
              </div>
              <div class="md:col-span-2 text-center z-10">
                <p class="text-5xl lg:text-6xl font-semibold mb-4">
                  <span
                    class="text-blue-400 animate-pulse"
                    :class="['box', currentTextColor]"
                    >{{ textData.number }}</span
                  >
                  <span class="text-gray-300"></span>
                  <span
                    class="text-3xl lg:text-4xl text-thrones uppercase font-semibold mb-4"
                  >
                    {{ textData.text }} </span
                  ><br />
                  <span
                    class="text-xl md:text-2xl italic text-gray-400"
                    :class="['box', currentTextColor]"
                  >
                    {{ textData.info }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
    <div class="items-center">
      <div class="m-auto p-0 text-center text-xl">
        <button
          class="text-thrones text-black bg-[#eaeaea] m-2 px-2 py-2 lg:px-4 lg:py-2 rounded-3xl uppercase border-4 border-gray-400 hover:scale-105 hover:font-bold transform transition duration-500 ease-in-out hover:shadow-[0_5px_30px_1px_rgba(234,234,234,0.6)]"
          @click="openModal"
        >
          CREDITS
        </button>
      </div>
      <div
        v-if="isModalOpen"
        class="fixed inset-0 flex items-center justify-center z-50"
      >
        <div class="fixed inset-0 bg-black opacity-50"></div>

        <div class="bg-gray-200 text-black rounded-lg p-8 shadow-lg z-10">
          <h2 class="text-2xl font-bold mb-4">Credits</h2>
          <p class="mb-2">The links to the all images used in this page.
            <br>The list of images:
          </p>
          <p class="mb-4">
            <a
              href="https://www.flaticon.com/free-icon/throne_4133635?term=throne&page=1&position=3&origin=tag&related_id=4133635"
              class="underline text-blue-400"
              >Throne Icon</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.freepik.com/free-vector/red-medical-heartbeat-line-vector-heart-shape-graphic-health-charity-concept_16262020.htm#query=heartbeat&position=5&from_view=keyword&track=ais_hybrid&uuid=4851f76f-98b5-4c9a-993d-0f96e17d621b"
              class="underline text-blue-400"
              >Heartbeat image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.skyatnightmagazine.com/advice/how-does-earth-orbit-the-sun"
              class="underline text-blue-400"
              >Earth Image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.jpl.nasa.gov/news/nasas-voyager-1-resumes-sending-engineering-updates-to-earth"
              class="underline text-blue-400"
              >Voyager image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.nasa.gov/international-space-station/"
              class="underline text-blue-400"
              >ISS Image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://eu.usatoday.com/story/sponsor-story/white-plains-hospital/2020/02/03/long-distance-running-could-increase-some-peoples-risk-heart-attack/2855538001/"
              class="underline text-blue-400"
              >Running image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://en.m.wikipedia.org/wiki/File:A_small_cup_of_coffee.JPG"
              class="underline text-blue-400"
              >Cup of coffee</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://gameofthrones.fandom.com/wiki/Iron_Throne"
              class="underline text-blue-400"
              >Iron Throne image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://pngtree.com/freebackground/a-stack-of-books_15472158.html"
              class="underline text-blue-400"
              >Stack of books Image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://boardgamegeek.com/boardgame/223376/a-song-of-ice-and-fire-tabletop-miniatures-game-st"
              class="underline text-blue-400"
              >ASOIAF image</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.ign.com/wikis/game-of-thrones/Beyond_the_Wall"
              class="underline text-blue-400"
              >The Wall</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.cntraveler.com/stories/2016-04-22/the-perfect-weekend-in-kings-landing"
              class="underline text-blue-400"
              >Kings Landing</a
            >
          </p>
          <p class="mb-4">
            <a
              href="https://www.hbo.com/game-of-thrones"
              class="underline text-blue-400"
              >Game of Thrones</a
            >
          </p>
          <button
            class="bg-red-500 text-white px-4 py-2 rounded"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <thronesTextData ref="thronesTextData" :daysPassed="daysPassed" />
  </div>
</template>

