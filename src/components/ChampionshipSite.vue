<template>
  <div class="text-4xl text-center pt-24 text-white" :class="currentTeamClass">
    How many days has passed since teams' last F1 Championship
  </div>
  <div
    class="bg-[#00192D] text-white outline-8 grid grid-cols-3 gap-8"
    :class="currentTeamClass"
  >
    <div class="col-span-1">
      <div
        id="stats"
        class="left mt-52 mx-8 px-6 pl-4 pt-2 pb-4 pr-8 text-xl rounded-lg border-2 border-pink-400 float-left position-absolute shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)] shadow-purple-400"
      >
        <div v-if="buttonClickedRB">
          <div class="mt-2 mb-2 font-bold text-center">Stats</div>
          <div class="hover:bg-gray-400 hover:text-black p-2 rounded-md">
            Race debut: <span class="font-semibold">Australia, 2005</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Race starts: <span>369</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Poles: <span>95</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Podiums: <span>264</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Wins: <span>113</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Fastest laps: <span>95</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Points: <span>7248</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Constructors Championship: <span>6</span>
          </div>
          <div class="hover:bg-gray-300 hover:text-black">
            Drivers Championship: <span>7</span>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h3>Race Debut</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  RedBull debut race in Australia 2005 sees them finish...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="buttonClickedFr">
          <div class="mt-2 mb-2 font-bold text-center">List of Stats</div>
          <div class="p-2">
            Race debut: <span class="font-semibold">1950</span>
          </div>
          <div>Race starts: <span>1000</span></div>
          <div>Poles: <span>100</span></div>
          <div>Podiums: <span>300</span></div>
          <div>Wins: <span>200</span></div>
          <div>Fastest laps: <span>95</span></div>
          <div>Points: <span>7248</span></div>
          <div>Constructors Championship: <span>6</span></div>
          <div>Drivers Championship: <span>7</span></div>
        </div>
        <div v-else-if="buttonClickedMe">
          <div class="mt-2 mb-2 font-bold text-center">List of Stats</div>
          <div class="p-2">
            Race debut: <span class="font-semibold">1950</span>
          </div>
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
        <div class="text-center mt-24 text-4xl">
          <div class="pt-2 pb-8" v-if="buttonClickedRB">
            Days since RedBull last championship: <br />
            <div class="text-8xl text-[#FFD700] font-bold pt-4 pb-2">
              {{ redBullDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/24/2023 - Japanese GP</div>
            <div class="text-gray-200 text-xl">
              Last champion: Max Verstappen
            </div>
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
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ mercedesDate }}
            </div>
            <div class="pt-2 pb-8">Date: 12/12/2022 - Abu Dhabi GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedMc">
            Days since Mclaren last won championship:<br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ mclarenDate }}
            </div>
            <div class="pt-2 pb-8">Date: 11/01/1998 - Japanese GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAm">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAl">
            Days since Alpine last won championship:<br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ alpineDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/22/2005 - Brazilian GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedWi">
            Days since Williams last won championship:<br />
            <div class="text-8xl text-white font-bold pt-4 pb-2">
              {{ williamsDate }}
            </div>
            <div class="pt-2 pb-8">Date: 10/12/1997 - Japanese GP</div>
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAt">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedAr">
            Has Never Won Constructor
          </div>
          <div class="pt-2 pb-8" v-else-if="buttonClickedHa">
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
      class="grid object-none object-bottom place-items-center pb-32 pt-24 col-span-4"
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

  <div class="card">
    <div class="face face1">
      <div class="content">
        <h3>Design</h3>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
          cumque minus iste veritatis provident at.
        </p>
      </div>
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
      const days = new Date("12/12/2021");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mclarenDate() {
      const days = new Date("11/01/1998");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    astonMartinDate() {
      return `Has never won constructor`;
    },
    alpineDate() {
      const days = new Date("10/22/2006");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    williamsDate() {
      const days = new Date("10/12/1997");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
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
      return "redbull"; // Default class if no button is clicked
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

.card {
  position: relative;
  cursor: pointer;
  color: #000
}

.card .face {
  width: 250px;
  height: 150px;
  transition: 0.5s;
}

.card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(50px);
}

.card:hover .face.face1 {
  background: #ff0057;
  transform: translateY(0);
}

.card .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
}

.card:hover .face.face1 .content {
  opacity: 1;
}

.card .face.face1 .content img {
  max-width: 50px;
}

.card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.card:hover .face.face2 {
  transform: translateY(0);
}

.card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.card .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>
