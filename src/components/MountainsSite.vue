<script>
export default {
  data() {
    return {
      number: 0,
      maxNumber: 8884,
      lastScrollTop: 0,
      mountains1k: [
          { name: 'Mount Everest', height: '8,848 meters', country: 'Nepal', firstAscent: 'May 29, 1953' },
          { name: 'Triglav', height: '2,864 meters', country: 'Slovenia', firstAscent: 'Jul 1, 1884' }  
      ]
    };
  },
  mounted() {
    window.scrollTo(0, document.body.scrollHeight);
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
    <div class="heightMeter text-2xl lg:text-2xl md:text-xl ls:text-lg text-white p-6">
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

        <div class="pt-8 pl-20 pb-[2000px] grid grid-cols-8 gap-16">
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 mt-24">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <!-- alternative zoom-->
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="group/item growImage">
              <img src="/Images/test2.png" alt="Everest" />
              <div class="group-hover/edit invisible group-hover/item:visible">
                <div class="bg-[#d6d6d6] py-4 pl-2 group-hover/opacity-100">
                  Name: Name<br />
                  Height: m / ft<br />
                  Location: <br />
                  First Ascent: 19..<br />
                </div>
              </div>
            </div>
          </div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div class="col-span-2">
            <div class="group/item growImage" v-for="mountain in mountains1k" :key="mountain.Triglav">
              <img src="/Images/test2.png" alt="Everest" />
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
        <div class="bg-[#d8c596] pb-[26rem] ">
          <div class="grid justify-items-center">
            <div class="text-3xl lg:text-4xl md:text-3xl ls:text-2xl">
                Made by Petar Petrović
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Style for height meter */
.heightMeter {
  position: fixed;
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  border-bottom: 0.2rem solid white;
}

/* Style for the scrollable content */
.scrollContent {
    height: 2000px; 
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
