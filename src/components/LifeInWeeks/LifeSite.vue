<template>
  <div class="m-auto">
    <LifeInWeeksHeader></LifeInWeeksHeader>
    <div class="flex flex-col items-center m-auto p-4 space-y-2">
      <label for="birthdate" class="text-2xl font-bold uppercase text-gray-700">
        Enter your birthdate:
      </label>
      <input
        id="birthdate"
        type="date"
        v-model="birthdate"
        class="w-64 text-xl text-center py-2 px-4 rounded-xl border-2 border-green-500 focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50 hover:border-green-600 transition duration-300 ease-in-out"
      />
    </div>
    <div class="flex justify-center">
      <button
        @click="calculateWeeks"
        class="bg-green-600 hover:bg-green-800 border-2 border-green-600 hover:border-green-800 text-white text-2xl font-semibold py-3 px-8 m-2 rounded-xl hover:shadow-lg hover:shadow-black transition-all duration-300 transform uppercase ring-2 ring-green-300"
      >
        Calculate
      </button>
    </div>
    <div class="text-center text-sm italic text-black">Hover over circles</div>

    <div v-if="showResults" class="text-center text-2xl px-4 pt-2">
      You have lived for <b>{{ years }}</b> years, which is equivalent to
      <b>{{ weeks }}</b> weeks or <b>{{ days }}</b> days. Here is a visual
      representation of your life so far:
    </div>
    <div class="container m-auto p-4">
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(circle, index) in generateCircles"
          :key="index"
          :class="circle.class"
          class="circle-base"
          @mouseenter="handleShowTooltip(circle, $event)"
          @mouseleave="handleHideTooltip"
        ></div>
      </div>
      <div
        v-if="tooltipVisible"
        class="tooltip"
        :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }"
      >
        Year {{ hoveredCircle.year }}, Week {{ hoveredCircle.week }}
      </div>
    </div>
  </div>
  <div v-if="showResults" class="mb-8 text-center">
    <div></div>
    <LifeData :birthdate="birthdate" />
  </div>
  <Footer class="pt-16"></Footer>
</template>

<script>
import LifeInWeeksHeader from "./LifeInWeeksHeader.vue";
import LifeData from "./LifeData.vue";
import Footer from "../Footer/Footer.vue";
import "@/assets/LifeInWeeks/lifeInWeeks.css";
export default {
  name: "LifeSite",
  data() {
    return {
      birthdate: "",
      days: 0,
      weeks: 0,
      years: 0,
      year: [],
      showResults: false,
      tooltipVisible: false,
      tooltipX: 0,
      tooltipY: 0,
      hoveredCircle: { year: 0, week: 0 },
    };
  },
  created() {
    this.year = LifeData.data().yearsData;
  },
  components: {
    Footer,
    LifeInWeeksHeader,
    LifeData,
  },

  methods: {
    calculateWeeks() {
      const currentDate = new Date();
      const userInputBirthdate = new Date(this.birthdate);
      this.days = Math.round(
        (currentDate - userInputBirthdate) / (1000 * 60 * 60 * 24)
      );
      this.years = Math.floor(this.days / 365);

      this.weeks = Math.floor(this.days / 7);

      this.showResults = true;

      return this.weeks;
    },
    handleShowTooltip(circle, event) {
      this.hoveredCircle = {
        year: circle.year,
        week: circle.week,
      };
      this.tooltipX = event.clientX;
      this.tooltipY = event.clientY;
      this.tooltipVisible = true;
    },
    handleHideTooltip() {
      this.tooltipVisible = false;
    },
  },

  computed: {
    generateCircles() {
      let circles = [];
      for (let i = 0; i < this.weeks; i++) {
        let category = {
          year: Math.floor(i / 52),
          week: (i % 52) + 1,
          class: "",
        };

        if (i < 52) {
          category.class = "babyCircle";
        } else if (i < 260) {
          category.class = "toddlerCircle";
        } else if (i < 676) {
          category.class = "kidCircle";
        } else if (i < 936) {
          category.class = "teenCircle";
        } else if (i < 1820) {
          category.class = "youngAdultCircle";
        } else if (i < 3328) {
          category.class = "adultCircle";
        } else if (i < 4004) {
          category.class = "seniorCircle";
        } else {
          category.class = "elderlyCircle";
        }

        if (i === this.weeks - 1) {
          category.class += " currentWeekCircle";
        }

        circles.push(category);
      }
      return circles;
    },
  },
};
</script>
