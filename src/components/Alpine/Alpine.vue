<template>
  <div class="grid container">
    <div id="2005" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-left font-bold py-10">
        <span class="lg:border-red-400 lg:border-b-8 pr-28 text-6xl"
          >START OF NEW REIGN</span
        >
      </div>
      <div class="text-2xl text-justify">
        <img
          src="/Images/Alpine/Alonso2005.png"
          alt="Alonso Canada"
          class="xl:w-7/12 ml-2 mr-12 float-left cursor-default rounded-2xl mb-4"
        />
        <div class="pt-8 pb-4 text-3xl">
          Giancarlo Fisichella replaced Jarno Trulli for the 2005 season.
          Fisichella won first race of the season. Fernando Alonso won the
          following three races building the considerable lead in the Driver's
          World Championship. Alonso and Renault lead came under the threat from
          Mclaren and Kimi Raikkonen. Mclaren took the lead in the Brazilian GP
          but that was to be race in which Alonso secured his first title. He
          became the youngest Formula 1 champion at the age of 23 years and 301
          days.<br />
        </div>
        <div class="pt-2 text-3xl">
          At the following race in China, Renault secured the Constructor's
          title. This broke the Ferrari's six year reign. It was the first time
          the Renault has won a Constructor's title. Renault only became the
          second French constructor after Matra in 1969 and the first
          French-licensed team to win the title.<br />
          <p class="text-right text-xl text-gray-500 italic">
            Source: Wikipedia
          </p>
        </div>
      </div>
    </div>
    <div id="2006" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-right font-bold py-10">
        <span class="lg:border-red-400 lg:border-b-8 pl-28 text-6xl"
          >FIERCE RIVALRY</span
        >
      </div>
      <div class="text-2xl text-justify">
        <img
          src="/Images/Alpine/Alonso2006.png"
          alt="Alonso Canada"
          class="xl:w-7/12 mr-2 ml-12 float-right img-container cursor-default rounded-2xl mb-4"
        />
        <div class="pt-6 pb-4 text-3xl">
          The 2006 season was highlighted by the rivalry between Alonso and
          Schumacher each won seven races. Both drivers dominated the field,
          they won all but one race, the Hungarian GP which was won by Honda's
          Jenson Button. For the first time since 1956 season no British
          constructor won any race and only factory teams won all the races
          (like in 1956). From this season onwards up until 2013 Formula used
          2.4L V8 engines. <br />
        </div>
        <div class="text-3xl">
          In September 2006 Michael Schumacher announced his retirement. He was
          replaced by Kimi Rainkkonen. Juan Pablo Montoya left Mclaren mid
          season to pursue his career in NASCAR. This was also last season of
          the Bridgestone-Michelin tyre war as Michelin withdrew from the sport
          at the end of the season. As of 2023 no French team has won a
          Constructor's title since Renault in 2006. That was also a last time a
          Spanish driver won a Driver's title. Renault went through a lot of
          rebrandings and name changes. In 2021 they rebranded themselves as
          Alpine F1 Team.
          <br />
          <p class="text-right text-xl text-gray-500 italic">
            Source: Wikipedia
          </p>
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

<style scoped>
img {
  animation: pulsate 1.5s infinite alternate;
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 1rem #fecb10,
    0 0 0.8rem #fecb10, 0 0 1.2rem #fecb10, inset 0 0 1rem #fecb10;
}

@keyframes pulsate {
  100% {
    box-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fecb10,
      0 0 40px #fecb10, 0 0 20px #fecb10, 0 0 50px #fecb10, 0 0 75px #fecb10;
  }

  0% {
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 5px #fecb10,
      0 0 22.5px #fecb10, 0 0 7.5px #fecb10, 0 0 15px #fecb10, 0 0 15px #fecb10;
  }
}
</style>
