<template>
  <div class="bg-[#00192D] text-white outline-8" :class="currentTeamClass">
    <div class="text-4xl text-center pt-24">
      How many days has passed since teams' last F1 Championship
    </div>
    <div class="text-center mt-24 text-4xl">
      <div v-if="buttonClickedRB">
        Days since RedBull last championship: <br />
        <div class="text-8xl text-yellow-400 font-bold pt-4 pb-2">
          {{ redBullDate }}
        </div>
        <div class="pt-2 pb-4">Date: 10/24/2023 - Suzuka</div>
      </div>
      <div v-else-if="buttonClickedFr">{{ ferrariDate }}</div>
      <div v-else-if="buttonClickedAt">Has Never Won Constructor</div>
    </div>
    <div id="stats" class="left pl-8 border-2 float-left">
      <div class="mt-12">List of Stats</div>
      <div>Wins:</div>
      <div>Podiums:</div>
      <div>Poles:</div>
      <div>Race starts:</div>
      <div>Championships:</div>
      <div>Since:</div>
    </div>
    <div id="champions" class="right pr-8 border-2 float-right">
      <h5>List of Constructors Years</h5>
      <div v-if="buttonClickedRB">
        <div>2010</div>
        <div>2011</div>
        <div>2012</div>
        <div>2013</div>
      </div>
    </div>
    <div class="grid object-none object-bottom place-items-center pb-12">
      <ul class="inline mx-2">
        <button
          class="mx-4 bg-white text-black px-4 rounded-lg text-2xl"
          @click="toggleRedBull"
        >
          RedBull
        </button>
        <button class="mx-2" @click="toggleFerrari">Ferrari</button>
        <button class="mx-2" @click="toggleMercedes">Mercedes</button>
        <button class="mx-2" @click="toggleMclaren">Mclaren</button>
        <button class="mx-2">Aston Martin</button>
        <button class="mx-2">Alpine</button>
        <button class="mx-2" @click="toggleAlphaTauri">Alpha Tauri</button>
        <button class="mx-2">Williams</button>
        <button class="mx-2">Alfa Romeo</button>
        <button class="mx-2">Haas</button>
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
      return `Days since last championship: ${diffDays}`;
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
