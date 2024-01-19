<script>
export default {
  name: "MountainsSite",
  data() {
    return {
      number: 0,
      maxNumber: 8884,
      lastScrollTop: 0,
      mountains2k: [
        {
          name: "Devil's Peak",
          height: "1000",
          country: "South Africa",
          firstAscent: "unknown",
        },
        {
          name: "Sgurr Dearg",
          height: "986",
          country: "Scotland",
          firstAscent: "1880",
        },
        {
          name: "Lantau Peak",
          height: "934",
          country: "Hong Kong",
          firstAscent: "unknown",
        },
        {
          name: "Slieve Donard",
          height: "850",
          country: "Northern Ireland",
          firstAscent: "unknown",
        },
        {
          name: "Pieter Both",
          height: "820",
          country: "Mauritius",
          firstAscent: "Sep 7 1832",
        },
        {
          name: "Dobongsan",
          height: "740",
          country: "South Korea",
          firstAscent: "unknown",
        },
        {
          name: "Mount Takao",
          height: "599",
          country: "Japan",
          firstAscent: "unknown",
        },
        {
          name: "Great Mell Fell",
          height: "537",
          country: "England",
          firstAscent: "unknown",
        },
        {
          name: "Avala",
          height: "511",
          country: "Serbia",
          firstAscent: "unknown",
        },
        {
          name: "Diamond Hill",
          height: "445",
          country: "Ireland",
          firstAscent: "unknown",
        },
        {
          name: "Pic Paradis",
          height: "424",
          country: "France (Saint Martin)",
          firstAscent: "unknown",
        },
        {
          name: "Mount Kinka (金華山)",
          height: "329",
          country: "Japan",
          firstAscent: "unknown",
        },
        {
          name: "Suur Munamägi",
          height: "318",
          country: "Estonia",
          firstAscent: "unkown",
        },
        {
          name: "Diamond Head",
          height: "232",
          country: "US (Hawaii)",
          firstAscent: "unknown*",
          image: "/Images/DiamondHead.png",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 250);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight =
        this.$refs.scrollDiv.scrollHeight - window.innerHeight;
      const scrollProgress = 1 - scrollTop / scrollHeight;

      this.number = Math.min(
        Math.floor(scrollProgress * this.maxNumber),
        this.maxNumber
      );
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div v-cloak @wheel="handleScroll">
    <!-- Sticky div in the center -->
    <div
      class="heightMeter text-2xl lg:text-2xl md:text-xl ls:text-lg text-white p-6 fixed"
    >
      <h1>{{ number }}</h1>
    </div>
    <div class="scrollContent" ref="scrollDiv">
      <div class="backgroundColors">
        <div class="Everest">
          Here we put Everest Image with A 8864M on top of it maybe animation?
        </div>
        <div class="pb-[2500px]">
          GORE + 8K MOUNTAINS Everest 8848m / 29028ft K2 8611m / 28250ft
          Kanchenjunga 8586m / 28169ft Lhotse 8516m / 27940ft Makalu 8463m /
          27766ft Cho Oyu 8201m / 26906ft Dhaulagiri 8167m / 26795ft Manaslu
          8163m / 26781ft Nanga Parbat 8125m / 26660ft Annapurna I 8091m /
          26545ft Gasherbrum I 8068m / 26469ft Broad Peak 8047m / 26400ft
          Gasherbrum II 8035m / 26362ft Shishapangma 8012m / 26285ft
        </div>
        <div class="pb-[3000px]">gore 5 - 7.9K MOUNTAINS</div>
        <div class="pb-[3000px]">GORE 2 - 4.9K MOUNTAINS</div>

        <div class="pt-8 pl-20 pr-20 pb-[2000px] grid grid-cols-8 gap-8">
          <div class="col-span-2">
            <div
              class="group/item growImage"
              v-for="mountain in mountains2k"
              :key="mountain.name"
            >
              <img :src="mountain.image" :alt="mountain.name" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: {{ mountain.name }}<br />
                  Height: {{ mountain.height }}<br />
                  Location: {{ mountain.country }} <br />
                  First Ascent: {{ mountain.firstAscent }}<br />
                </div>
              </div>
            </div>
          </div>
          GORE 0 - 1.9K MOUNTAINS/HILLS
        </div>
        <div class="bg-[#d8c596] pb-[20rem]">
          <div class="grid justify-items-center">
            <div class="text-3xl lg:text-4xl md:text-3xl ls:text-2xl mt-12">
              Made by Petar Petrović
            </div>
            <div>Enjoy climbing the mountains</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Style for height meter */
.heightMeter {
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  border-bottom: 0.2rem solid white;
}

/* Style for the scrollable content */
.scrollContent {
  height: 8884px;
}
/* Color gradient background */
.backgroundColors {
  background-color: rgba(248, 209, 201, 1);
  background: linear-gradient(
    0deg,
    rgba(248, 209, 201, 1) 16%,
    rgba(210, 165, 168, 1) 32%,
    rgba(165, 143, 155, 1) 48%,
    rgba(106, 118, 139, 1) 64%,
    rgba(80, 99, 124, 1) 80%,
    rgba(51, 73, 97, 1) 90%
  );
}

/* Style for the scrollable content */
@font-face {
  font-family: "ArchiaRegular";
  src: url("@/assets/Fonts/archia-regular.woff") format("truetype");
}

/* font family and weight of the font*/
body {
  font-family: "ArchiaRegular";
  font-weight: 400;
}

.mountains2k {
  padding-top: 10rem;
  padding-bottom: 50rem;
  padding-left: 5rem;
}

.growImage {
  opacity: 0.5;
  transition: 1.1s ease;
}

.growImage:hover {
  /*opacity: 1;*/
  opacity: 1;
  transform: scale(1.1);
  transition: 1.1s ease;
  /*box-shadow: 15px 10px 15px rgba(16, 15, 8, 0.944);*/
  filter: drop-shadow(15px 0 12px rgba(0, 0, 0, 0.7));
  transform: translateX(-4px);
}
</style>
