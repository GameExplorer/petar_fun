<template>
  <div class="timelineMercedes">
    <ol class="years">
      <li v-for="year in years" :key="year.id" :id="year.id" class="year">
        <h1 class="text-6xl pt-2 uppercase header">
          <span class="border-b-4 border-white pr-8">{{ year.title }}</span>
        </h1>
        <div class="content text-3xl pt-2 text-justify">
          <p class="context">{{ year.description }}</p>
          <img
            :src="year.imageSrc"
            :alt="year.imageAlt"
            class="pt-2 rounded-xl shadow-lg shadow-gray-500"
          />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Mercedes",
  data() {
    return {
      years: [
        {
          id: "2014",
          title: "2014 - NEW ERA",
          description:
            "New season introduced new 1.6 litre V6 turbocharged engines with energy recovery systems. Mercedes dominated the season with 16 wins out of 19 races. The other three being won by Daniel Ricciardo in Red Bull. Vettel failed to win a single race. Hamilton won his second title and first of many with Mercedes. Rosberg finished second in the championship.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2014.png",
          imageAlt: "Mercedes Team in 2014",
        },
        {
          id: "2015",
          title: "2015 - DOMINANCE",
          description:
            "Defending champion Lewis Hamilton won his third title 59 points ahead of Nico Rosberg. Mercedes again won 16 out of 19 races with 703 points, 275 points ahead of Ferrari. Throughout the season, the rivalry between Hamilton and Rosberg intensified and next season would reach the peak of their rivalry.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2015.png",
          imageAlt: "Mercedes Team in 2015, Malaysia FP2",
        },
        {
          id: "2016",
          title: "2016 - SILVER WAR",
          description:
            "The rivalry between Hamilton and Rosberg reached its peak. The two drivers collided in the Spanish Grand Prix, taking each other out of the race. The rivalry was so intense that the team had to intervene and impose team orders. Rosberg won his first title with 385 points, 5 points ahead of Hamilton. Mercedes won 19 out 21 races and scored 765 points, 297 points ahead of Red Bull. Rosberg retired after winning the title, leaving the seat for Valtteri Bottas.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2016.avif",
          imageAlt: "Rosberg win in Abu Dhabi",
        },
        {
          id: "2017",
          title: "2017 - SILVER V RED",
          description:
            "The 2017 featured the battle between Hamilton and Vettel. Vettel led the championship for the first 12 rounds, Hamilton regained the title lead and never looked back. Lewis won his fourth title and Mercedes finished ahead of Ferrari in Constructor's championship.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2017.png",
          imageAlt: "Mercedes v Ferrari",
        },
        {
          id: "2018",
          title: "2018 - Fight for five",
          description:
            "For the second year in the row the season featured title fight between Lewis Hamilton and Sebastian Vettel. This was first time two quadruple world champions fought for the fifth title. The championship lead ebbed and flowed between the two title contenders, the points lead swapping hands five times throughout the year. Hamilton clinched his fifth World Drivers' Championship title at the 2018 Mexican Grand Prix, with the team securing its fifth consecutive World Constructors' Championship title at the following race.",
          imageSrc: "src/assets/Formula/Images/Mercedes/hamiltonVettel2018.png",
          imageAlt: "Mercedes v Ferrari",
        },
        {
          id: "2019",
          title: "2019 - DOMINATION",
          description:
            "Lewis Hamilton successfully defended the World Drivers' Championship for the second year running, winning his sixth championship title at the United States Grand Prix. Mercedes successfully defended the World Constructors' Championship, securing the title for the sixth consecutive year at the Japanese Grand Prix to tie Ferrari's record from 1999 to 2004.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2019.avif",
          imageAlt: "Mercedes 2019",
        },
        {
          id: "2020",
          title: "2020 - 7th title",
          description:
            "At the Emilia Romagna Grand Prix, Mercedes secured their seventh consecutive Constructors' Championship making them the only team to achieve this feat. Lewis Hamilton also secured his seventh World Drivers' Championship title at the Turkish Grand Prix, equalling the record held by Michael Schumacher.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2020.png",
          imageAlt: "Mercedes 2020",
        },
        {
          id: "2021",
          title: "2021 - Change of tides",
          description:
            "Mercedes faced a challenging season in 2021, with Red Bull becoming strong title contenders. Despite the stiff competition, Lewis Hamilton secured his eighth World Drivers' Championship at the Abu Dhabi Grand Prix. However, the controversy over the race's outcome marred the celebration, leaving the championship open to dispute.",
          imageSrc: "src/assets/Formula/Images/Mercedes/mercedes2021.png",
          imageAlt: "Mercedes 2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
.timelineMercedes {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.years {
  list-style-type: none;
  border-left: 4px solid #000;
  padding: 10px 3px;
}

.year {
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}

.header {
  display: inline-block;
  color: #fff;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 0.25em;
  text-align: center;
}

.content {
  color: #4d4d4d;
}

.context {
  padding: 5px 0px 15px 0px;
}

.year::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background-color: #1a1a18;
  border-radius: 50%;
  left: -15px;
  top: 28px;
  transition: 0.5s;
}

.year:hover::before {
  background-color: #6cd3bf;
  box-shadow: 0px 0px 15px 12px #c8ccce;
}
</style>
