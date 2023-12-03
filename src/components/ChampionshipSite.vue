<template>
  <div
    class="bg-[#00192D] text-white outline-8 grid grid-cols-3 gap-8"
    :class="currentTeamClass"
  >
    <div class="col-span-1">
      <div
        id="stats"
        class="left mt-64 mx-8 px-6 pl-4 pt-2 pb-4 text-xl border-2 border-pink-400 float-left position-absolute shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)] shadow-purple-400"
      >
        <div v-if="buttonClickedRB">
          <div class="mt-2 mb-2 font-bold text-center">List of Stats</div>
          <div>Race debut: <span class="font-semibold">2005</span></div>
          <div>Race starts: <span>369</span></div>
          <div>Poles: <span>95</span></div>
          <div>Podiums: <span>264</span></div>
          <div>Wins: <span>113</span></div>
          <div>Fastest laps: <span>95</span></div>
          <div>Points: <span>7248</span></div>
          <div>Constructors Championship: <span>6</span></div>
          <div>Drivers Championship: <span>7</span></div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div class="text-4xl text-center pt-24">
        How many days has passed since teams' last F1 Championship
        <div class="text-center mt-24 text-4xl">
          <div v-if="buttonClickedRB">
            Days since RedBull last championship: <br />
            <div class="text-8xl text-yellow-400 font-bold pt-4 pb-2">
              {{ redBullDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/24/2023 - Suzuka</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedFr">
            Days since Ferrari last championship: <br />
            <div class="text-7x text-white font-bold pt-4 pb-2">
              {{ ferrariDate }}
            </div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAt">
            Has Never Won Constructor
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div
        id="champions"
        class="right mt-64 mr-8 pr-8 text-xl border-2 float-right position-absolute"
      >
        <h5>List of Constructors Years</h5>
        <div>
          <span
            >2010 2011 2012 2013<br />
            2022 2023</span
          >
        </div>
      </div>
    </div>

    <div
      class="grid object-none object-bottom place-items-center pb-12 pt-20 col-span-4"
    >
      <ul class="inline mx-2">
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg"
          @click="toggleRedBull"
        >
          RedBull
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleFerrari"
        >
          Ferrari
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleMercedes"
        >
          Mercedes
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleMclaren"
        >
          Mclaren
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
        >
          Aston Martin
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
        >
          Alpine
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlphaTauri"
        >
          Alpha Tauri
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-xl rounded-lg border-2"
        >
          Williams
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
        >
          Alfa Romeo
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
        >
          Haas
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonClickedRB: true,
      buttonClickedFr: false,
      buttonClickedAt: false,
    };
  },
  computed: {
    redBullDate() {
      const days = new Date("10/24/2023");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    ferrariDate() {
      const days = new Date("11/08/2008");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    alphaTauriDate() {
      return `Has never won constructor`;
    },
    currentTeamClass() {
      if (this.buttonClickedRB) {
        this.currentTeam = "RedBull"; // Set current team to RedBull when buttonClickedRB is true
        return "redbull"; // Apply 'redbull' class when buttonClickedRB is true
      } else if (this.buttonClickedFr) {
        this.currentTeam = "Ferrari";
        return "ferrari";
      } else if (this.buttonClickedAt) {
        this.currentTeam = "Alpha Tauri";
        return "alphatauri";
      }
      return ""; // Default class if no button is clicked
    },
  },
  methods: {
    toggleRedBull() {
      this.buttonClickedRB = !this.buttonClickedRB;
      this.currentTeam = "RedBull";
      if (this.buttonClickedRB) {
        this.buttonClickedFr = false; // Close Ferrari information if Red Bull is clicked
      }
    },
    toggleFerrari() {
      this.buttonClickedFr = !this.buttonClickedFr;
      this.currentTeam = "Ferrari";
      if (this.buttonClickedFr) {
        this.buttonClickedRB = false; // Close Red Bull information if Ferrari is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Ferrari is clicked
      }
    },
    toggleAlphaTauri() {
      this.buttonClickedAt = !this.buttonClickedAt;
      this.currentTeam = "Alpha Tauri";
      if (this.buttonClickedAt) {
        this.buttonClickedRB = false; // Close Red Bull information if Alpha Tauri is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Alpha Tauri is clicked
      }
    },
  },
};
</script>

<style>
.redbull {
  background-color: #00192d;
}
.ferrari {
  background-color: #dc0000;
}

.alphatauri {
  background-color: #2b4562;
}
</style>
