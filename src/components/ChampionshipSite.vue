<template>
  <div class="text-4xl text-center pt-10 text-white" :class="currentTeamClass">
    How many days has passed since teams' last F1 Championship
  </div>
  <div
    class="bg-[#00192D] text-white outline-8 grid grid-cols-3 gap-8"
    :class="currentTeamClass"
  >
    <div class="col-span-1">
      <div
        id="stats"
        class="left mt-36 mx-8 px-6 pl-4 pt-2 pb-4 pr-8 text-xl float-left position-absolute"
      >
        <div v-if="buttonClickedRB" class="animated-border-box">
          <div class="mt-2 mb-2 font-bold text-center">Stats</div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Race debut: <span class="font-semibold">Australia, 2005</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Race starts: <span class="font-semibold">369</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Poles: <span class="font-semibold">95</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Podiums: <span class="font-semibold">264</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Wins: <span class="font-semibold">113</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Fastest laps: <span class="font-semibold">95</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Points: <span class="font-semibold">7248</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Constructor's Championship: <span class="font-semibold">6</span>
          </div>
          <div class="hover:border-b-2 hover:border-red-400 p-2">
            Driver's Championship: <span class="font-semibold">7</span>
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
        <div class="text-center mt-8 text-4xl">
          <div class="pt-2 pb-8 shiny" v-if="buttonClickedRB">
            Days elapsed since RedBull's previous championship: <br />
            <div class="text-9xl gold-text font-bold pt-8 pb-2 silver">
              <span class="shine">{{ redBullDate }}</span>
            </div>
            <div class="pt-4 pb-10">24-10-2023 - Japanese GP</div>
            <span class="text-2xl">Last champion:<br /></span>
            <span class="shiny gold-text text-5xl pt-4">
              <span class="inner-shiny">Max Verstappen</span>
            </span>
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
        class="right mt-52 mr-8 pr-8 text-xl text-center grid float-right position-absolute"
      >
        <h5>WINNING YEARS</h5>
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <!--<img src="Images/test2.png" alt="testImage">-->2010
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <!--<img src="Images/test2.png" alt="testImage">-->2010
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <!--<div class="desc hover:border-b-2 hover:border-red-400">
            2010
            <div class="hide bg-white text-black">RedBull wins first title</div>
          </div>
        </div>
        <div class="group/item">
          <div class="hover:border-b-2 hover:border-red-400 group-hover/edit">
            2011
            <div class="invisible group-hover/item:visible">
              RedBull dominates 2011<br />
              and wins its second title
            </div>
          </div>
          <span class="mx-0 hover:border-b-2 hover:border-red-400"
            >2012<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400"
            >2013<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400"
            >2022<br
          /></span>
          <span class="mx-0 hover:border-b-2 hover:border-red-400"
            >2023<br
          /></span>-->
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
.animated-border-box,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 10px;
}

.animated-border-box-glow {
  overflow: hidden;
}

.animated-border-box:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #0a2aef,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-box:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #00192d;
  /*box border radius*/
  border-radius: 7px;
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}

.silver {
  text-decoration: none;
  text-transform: uppercase;
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: shine 2s linear infinite;
}

@keyframes shine {
  from {
    mask-position: 150%;
  }
  to {
    mask-position: -50%;
  }
}

.shiny {
  color: #f5c21b;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f5c21b),
    to(#d17000)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
}

.inner-shiny::after,
.inner-shiny::before {
  animation: sparkle 3.5s infinite;
  animation-timing-function: linear;
  background: #fff;
  border-radius: 100%;
  box-shadow: 0 0 15px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
    0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff;
  content: "";
  display: block;
  height: 15px;
  opacity: 0.7;
  position: absolute;
  width: 15px;
}

.inner-shiny::before {
  animation-delay: 0.2s;
  height: 12px;
  left: 0.12em;
  top: 0.95em;
  width: 0.25em;
}

.inner-shiny::after {
  top: 0.52em;
  right: -2px;
}

@keyframes sparkle {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0.8;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.gold-text {
  background: linear-gradient(
    to bottom,
    #cfc09f 22%,
    #634f2c 24%,
    #cfc09f 26%,
    #cfc09f 27%,
    #ffecb3 40%,
    #3a2c0f 78%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
}

.gold-text:after {
  z-index: -1;
  position: absolute;
  text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f,
    5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
}

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
