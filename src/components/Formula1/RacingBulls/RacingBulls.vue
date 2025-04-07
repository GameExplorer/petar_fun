<template>
  <section id="timeline" class="grid xl:grid-cols-4 grid-cols-1 bg-[#031625]">
    <div v-for="year in timelineEvents" :key="year.id" :id="year.id" class="tl-item">
      <div class="tl-bg" :style="{ backgroundImage: `url(${year.image})` }"></div>
      <div class="absolute top-2/4 left-2/4 z-[1] -translate-x-2/4 -translate-y-2/4 border-t-2 border-white border-b-2">
        <p class="text-5xl leading-none">{{ year.year }}</p>
      </div>
      <div class="tl-content">
        <h1 class="font-bold text-4xl uppercase text-blue-400">{{ year.title }}</h1>
        <p class="text-xl">{{ year.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RacingBulls",
  data() {
    return {
      timelineEvents: [
        {
          id: "2008",
          year: "2008",
          image: new URL('@/assets/Formula/Images/RacingBulls/vettel2008.png', import.meta.url).href,
          title: "FIRST VICTORY",
          description: "The race started under the SC. Rain early in the race allowed Vettel to establish a solid lead over Kovalainen, which he extended as the track dried. Vettel's victory made him the youngest driver to win a Formula One race, at 21 years 73 days in addition to giving Toro Rosso its maiden Formula One win despite using a 2007-spec engine."
        },
        {
          id: "2019",
          year: "2019",
          image: new URL('@/assets/Formula/Images/RacingBulls/gasly2019.png', import.meta.url).href,
          title: "DOUBLE PODIUMS",
          description: "At the chaotic 2019 German Grand Prix, Daniil Kvyat scored a shock podium for the team, in what was the team's first podium finish since 2008. Later in 2019, Pierre Gasly finished second at the Brazilian Grand Prix by 0.062 seconds ahead of Mercedes driver Lewis Hamilton taking the team's third podium, its second of the year, and also his maiden podium finish. This would prove to be the team's most successful season yet, scoring more points than in any other season previously."
        },
        {
          id: "2020",
          year: "2020",
          image: new URL('@/assets/Formula/Images/RacingBulls/gasly2020.png', import.meta.url).href,
          title: "GASLY'S FIRST WIN",
          description: "The race was won by Pierre Gasly of AlphaTauri, who took his first Formula One win and became the first French Formula One driver to win a race since Olivier Panis won the 1996 Monaco Grand Prix. Gasly started the race in tenth, but gained positions due to a well-timed pit-stop prior to a safety car, sent to retrieve the broken car of Kevin Magnussen. Lewis Hamilton, who led the race until this point, was given a penalty for entering the pit lane when it was closed, passing the lead to Gasly, who defended from McLaren's Carlos Sainz Jr. in the closing stages of the race."
        },
        {
          id: "2021",
          year: "2021",
          image: new URL('@/assets/Formula/Images/RacingBulls/gasly2021.png', import.meta.url).href,
          title: "PODIUM IN AZERBAIJAN",
          description: "Both championship contenders, Lewis Hamilton and Max Verstappen, experienced problems during the 51-lap race. Verstappen retired due to a high-speed tyre blowout, while Hamilton made a severe error at the resultant restart. Their troubles cleared the way for Sergio Pérez, Verstappen's teammate, to win his second Grand Prix, following his victory at the 2020 Sakhir Grand Prix. Sebastian Vettel took second place for his only podium with Aston Martin, and the final podium finish of his career, while Pierre Gasly claimed third place for AlphaTauri."
        }
      ]
    };
  }
};
</script>

<style scoped>
#timeline {
  background-color: #031625;
}

.tl-item {
  position: relative;
  flex: 0 0 25%;
  height: 100vh;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: flex 0.5s ease;
}

.tl-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.tl-content {
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.75s ease 0.5s, transform 0.75s ease 0.5s;
}

.tl-item:before,
.tl-item:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.tl-item:before {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);
  z-index: 1;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.tl-item:after {
  background: rgba(3, 22, 37, 0.85);
  opacity: 1;
  transition: opacity 0.5s ease;
}

.tl-item:hover {
  flex: 0 0 30% !important;
}

.tl-item:hover .tl-bg {
  filter: grayscale(0);
}

.tl-item:hover .tl-content {
  opacity: 1;
  transform: translateY(0);
}

.tl-item:hover:before {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}

.tl-item:hover:after {
  opacity: 0;
}
</style>
