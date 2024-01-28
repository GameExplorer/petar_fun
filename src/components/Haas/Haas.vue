<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 ml-4">
          <img
            src="Images/Haas/Haas2016.png"
            alt="Haas"
            class="w-full rounded-xl border-white border-2 shadow-black shadow-lg"
          />
        </div>
        <div class="col-span-1">
          <img
            src="Images/Haas/haas2022.png"
            alt="Haas"
            class="w-full rounded-xl border-white border-2"
          />
        </div>
        <div class="col-span-1 mr-4">
          <img
            src="Images/Haas/Haas2023.png"
            alt="Haas"
            class="w-full rounded-xl border-white border-2 shadow-black shadow-lg"
          />
        </div>
      </div>
      <div class="timeline text-xl text-justify">
        <p id="2016" class="road font-semibold">
          <span class="text-center text-2xl font-extrabold">FIRST RACE</span>
          In the team's debut at the opening race at Australia Grojean finished
          P6. Haas became the first American constructor to win points in its
          first F1 race and first constructor since Toyota Racing in 2002 to
          record points in its debut. Grosjean success continued in the Bahrain
          finishing P5 after that they fell off and only scored points on three
          more occassions socring enough points to secure P8 in the
          constructor's standings.
          <br />
        </p>
        <p id="2018" class="road font-semibold">
          <span class="text-center text-2xl font-extrabold"
            >BEST RESULT IN WCC</span
          >
          The 2018 season started with controversy for Haas due to their car
          looking similar to previous' year Ferrari SF70H. Guiterez was replaced
          by Magnussen. Again Haas scored points in Australia finishing P5 and
          P6. In Austria both went one better and finished P4 and P5 surpassing
          2017 points tally after only nine races. At the Singapore GP,
          Magnussen scored Haas' first ever fastest lap. They ended season in
          fifth position. This was their best position to date.
        </p>
        <p id="2021" class="road font-semibold">
          <span class="text-center text-2xl font-extrabold">BAD YEAR</span>
          After the poor 2020 both drivers Grosjean and Magnussen got replaced by
          Nikita Mazepin and Mick Schumacher. To survive financially Haas
          decided to halt the progress on the 2021 car and focus on the 2022
          car. In their first race Nikita spun on the lap 1 and Mick finished
          P16 last of all running cars. The season was a disaster for Haas, they
          failed to score a single point and finished last in the constructor's
          standings. Nikita was dropped before 2022 season started. Mick stayed
          in Haas for 1 more year.
        </p>
        <p id="2022" class="road font-semibold">
          <span class="text-center text-2xl font-extrabold">MAIDEN POLE</span>
          Nikita was replaced by Magnussen. Haas decision to focus on 2022 car
          paid off in the first two races Magnussen scored teams first points
          since 2020. After that both drivers struggle to score points until
          British GP where both drivers score points, Mick scored his best
          position P8 and Magnussen finished P10. The momentum continued in the
          following race where Mick finished P6 his best race result so far. In
          Brazil team took maiden pole with Magnussen out-qualifying the field
          in changing conditions. Haas finished P7 in the constructor's
          standings. Mick departed Haas after the season.
        </p>
        <p id="2024" class="road font-semibold">
          <span class="text-center text-2xl font-extrabold"
            >GUNTHER DEPARTURE</span
          >
          After poor results in 2023 Haas decided to replace Mick with Magnussen. 
          They signed new sponsorship with MoneyGram. Haas 2023 was
          good in qualifying. Hulkenberg often qualified high but due to high
          tyre wear they usually finished outside the points. Haas finished the
          season in P10 with 12 points. Hulkenberg P7 in the American GP was
          their best result. Few days after the new year Haas announced that
          Gunther Steiner contract will not be renewed. He was replaced by
          engineer Ayao Komatsu.
        </p>
      </div>
</template>

<script>
export default {
  name: "Haas",
};
</script>

<style>
.timeline {
  width: 600px;
  margin: auto;
}

.road {
  border-top: 6px dashed;
  border-color: rgb(255, 255, 255) !important;
  margin: 0;
  padding: 30px;
}

.road:nth-child(even) {
  border-left: 4px dashed;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-right: 30px;
  padding-right: 0;
}

.road:nth-child(odd) {
  border-right: 4px dashed;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-left: 30px;
  padding-left: 0;
}

.road:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.road:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}



.animated-border-boxha,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxha:before,
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
    #b20626,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxha:after {
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
  background: #b6babd;
  /*box border radius*/
  border-radius: 5px;
}

</style>