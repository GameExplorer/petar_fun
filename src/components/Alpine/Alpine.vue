<template>
  <div class="grid">
    <div id="2005" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-left font-bold py-10">
        <span
          class="pr-8 border-red-400 border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-8 hover:text-6xl"
          >END OF THE REIGN, START OF NEW ONE</span
        >
      </div>
      <div class="text-2xl text-justify">
        <img
          src="/Images/Alpine/Alonso2006.png"
          alt="Alonso Canada"
          class="xl:h-3/5 xl:w-5/12 ml-2 mr-12 float-left cursor-default rounded-2xl hover:-rotate-[10deg] transition-all duration-500 hover:py-16"
        />
        <div class="pt-8 pb-4">
          Giancarlo Fisichella replaced Jarno Trulli for the 2005 season.
          Fisichella won first race of the season. Fernando Alonso won the
          following three races building the considerable lead in the Driver's
          World Championship. Alonso and Renault lead came under the threat from
          Mclaren and Kimi Raikkonen. Mclaren took the lead in the Brazilian GP
          but that was to be race in which Alonso secured his first title. He
          became the youngest Formula 1 champion at the age of 23 years and 301
          days.<br />
        </div>
        <div>
          At the following race in China, Renault secured the Constructor's
          title. This broke the Ferrari's six year reign. It was the first time
          the Renault has won a Constructor's title. Renault only became the
          second French constructor after Matra in 1969 and the first
          French-licensed team to win the title.<br />
          <p class="text-right text-xl text-gray-500 italic">Source: Wikipedia</p>
        </div>
      </div>
    </div>
    <div id="2006" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-right font-bold py-10">
        <span
          class="pr-2 border-red-400 border-b-2 transition-all duration-500 hover:pl-28 hover:border-b-8 hover:text-6xl"
          >FIERCE RIVALRY</span>
      </div>
      <div class="text-2xl text-justify">
        <img
          src="/Images/Alpine/Alonso2006.png"
          alt="Alonso Canada"
          class="xl:h-3/5 xl:w-5/12 mr-2 ml-12 float-right cursor-default rounded-2xl hover:-rotate-[10deg] transition-all duration-500 hover:py-16"
        />
        <div class="pt-8 pb-4">
          The 2006 season was highlighted by the rivalry between Alonso and Schumacher
          each won seven races. Both drivers dominated the field, they won all but one 
          race, the Hungarian GP which was won by Honda's Jenson Button. For
          the first time since 1956 season no British constructor won any race and only 
          factory teams won all the races (like in 1956). From this season onwards up until
          2013 Formula used 2.4L V8 engines. <br />
        </div>
        <div>
          In September 2006 Michael Schumacher announced his retirement. He
          was replaced by Kimi Rainkkonen. Juan Pablo Montoya left Mclaren 
          mid season to pursue his career in NASCAR. This was also last season of the
          Bridgestone-Michelin tyre war as Michelin withdrew from the sport at the end of the season.
          As of 2023 no French team has won a Constructor's title since Renault in 2006.
          That was also a last time a Spanish driver won a Driver's title.
          Renault went through a lot of rebrandings and name changes. In 2021 they
          rebranded themselves as Alpine F1 Team. 
          <br />
          <p class="text-right text-xl text-gray-500 italic">Source: Wikipedia</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alpine",
};
</script>

<style>
.animated-border-boxal,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxal:before,
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
    #e12319,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxal:after {
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
  background: #0090ff;
  /*box border radius*/
  border-radius: 5px;
}

</style>
