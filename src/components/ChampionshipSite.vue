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
        <div v-else-if="buttonClickedFr">
          <div class="mt-2 mb-2 font-bold text-center">List of Stats</div>
          <div>Race debut: <span class="font-semibold">1950</span></div>
          <div>Race starts: <span>1000</span></div>
          <div>Poles: <span>100</span></div>
          <div>Podiums: <span>300</span></div>
          <div>Wins: <span>200</span></div>
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
          <div class="pt-2 pb-8" v-if="buttonClickedRB">
            Days since RedBull last championship: <br />
            <div class="text-8xl text-[#FFD700] font-bold pt-4 pb-2">
              {{ redBullDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/24/2023 - Suzuka GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedFr">
            Days since Ferrari last <br />championship: <br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ ferrariDate }}
            </div>
            <div class="pt-2 pb-8">Date: 08/11/2023 - Brazilian GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedMe">
            Days since Mercedes last championship: <br />
            <div class="text-7xl text-white font-bold pt-4 pb-2">
              {{ mercedesDate }}
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
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
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
          @click="toggleAstonMartin"
        >
          Aston Martin
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlpine"
        >
          Alpine
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleWilliams"
        >
          Williams
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlphaTauri"
        >
          Alpha Tauri
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleAlfaRomeo"
        >
          Alfa Romeo
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-2xl rounded-lg border-2"
          @click="toggleHaas"
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
      buttonClickedMe: false,
      buttonClickedMc: false,
      buttonClickedAm: false,
      buttonClickedAl: false,
      buttonClickedWi: false,
      buttonClickedAt: false,
      buttonClickedAr: false,
      buttonClickedHa: false,
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
    mercedesDate() {
      const days = new Date("11/24/2020");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mclarenDate() {
      return `Has never won constructor`;
    },
    astonMartinDate() {
      return `Has never won constructor`;
    },
    alpineDate() {
      return `Has never won constructor`;
    },
    williamsDate() {
      return `Has never won constructor`;
    },
    alphaTauriDate() {
      return `Has never won constructor`;
    },
    alfaRomeoDate() {
      return `Has never won constructor`;
    },
    haasDate() {
      return `Has never won constructor`;
    },
    currentTeamClass() {
      if (this.buttonClickedRB) {
        this.currentTeam = "RedBull"; // Set current team to RedBull when buttonClickedRB is true
        return "redbull"; // Apply 'redbull' class when buttonClickedRB is true
      } else if (this.buttonClickedFr) {
        this.currentTeam = "Ferrari";
        return "ferrari";
      } else if (this.buttonClickedMe) {
        this.currentTeam = "Mercedes";
        return "mercedes";
      } else if (this.buttonClickedMc) {
        this.currentTeam = "Mclaren";
        return "mclaren";
      } else if (this.buttonClickedAm) {
        this.currentTeam = "Aston Martin";
        return "astonmartin";
      } else if (this.buttonClickedAl) {
        this.currentTeam = "Alpine";
        return "alpine";
      } else if (this.buttonClickedWi) {
        this.currentTeam = "Williams";
        return "williams";
      } else if (this.buttonClickedAt) {
        this.currentTeam = "Alpha Tauri";
        return "alphatauri";
      } else if (this.buttonClickedAr) {
        this.currentTeam = "Alfa Romeo";
        return "alfaromeo";
      } else if (this.buttonClickedHa) {
        this.currentTeam = "Haas";
        return "haas";
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
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleFerrari() {
      this.buttonClickedFr = !this.buttonClickedFr;
      this.currentTeam = "Ferrari";
      if (this.buttonClickedFr) {
        this.buttonClickedRB = false; // Close Red Bull information if Ferrari is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMercedes() {
      this.buttonClickedMe = !this.buttonClickedMe;
      this.currentTeam = "Mercedes";
      if (this.buttonClickedMe) {
        this.buttonClickedRB = false; // Close Red Bull information if Mercedes is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mercedes is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMclaren() {
      this.buttonClickedMc = !this.buttonClickedMc;
      this.currentTeam = "Mclaren";
      if (this.buttonClickedMc) {
        this.buttonClickedRB = false; // Close Red Bull information if Mclaren is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mclaren is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAstonMartin() {
      this.buttonClickedAm = !this.buttonClickedAm;
      this.currentTeam = "Aston Martin";
      if (this.buttonClickedAm) {
        this.buttonClickedRB = false; // Close Red Bull information if Aston Martin is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Aston Martin is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlpine() {
      this.buttonClickedAl = !this.buttonClickedAl;
      this.currentTeam = "Alpine";
      if (this.buttonClickedAl) {
        this.buttonClickedRB = false; // Close Red Bull information if Alpine is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Alpine is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleWilliams() {
      this.buttonClickedWi = !this.buttonClickedWi;
      this.currentTeam = "Williams";
      if (this.buttonClickedWi) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlphaTauri() {
      this.buttonClickedAt = !this.buttonClickedAt;
      this.currentTeam = "Alpha Tauri";
      if (this.buttonClickedAt) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlfaRomeo() {
      this.buttonClickedAr = !this.buttonClickedAr;
      this.currentTeam = "Alfa Romeo";
      if (this.buttonClickedAr) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleHaas() {
      this.buttonClickedHa = !this.buttonClickedHa;
      this.currentTeam = "Haas";
      if (this.buttonClickedHa) {
        this.buttonClickedRB = false; // Close Red Bull information if Haas is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Haas is clicked
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Haas information if Red Bull is clicked
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
  background-color: #a7121f;
}
.mercedes {
  background-color: #6cd3bf;
}

.mclaren {
  background-color: #ff8700;
}

.astonmartin {
  background-color: #006f62;
}

.alpine {
  background-color: #0090ff;
}

.williams {
  background-color: #005aff;
}

.alphatauri {
  background-color: #2b4562;
}

.alfaromeo {
  background-color: #900000;
}

.haas {
  background-color: #b6babd;
}
</style>
