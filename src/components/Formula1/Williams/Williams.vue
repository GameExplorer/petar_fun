<template>
  <div class="grid grid-flow-row">
    <div v-for="event in events" :key="event.id" :id="event.id" class="event-container">
      <div class="pl-12 pb-8 pt-8 text-6xl text-left font-extrabold">
        <span class="pr-8 border-b-4 border-white border-dashed uppercase">{{ event.title }}</span>
      </div>
      <div :class="['float-' + (event.float || 'left'), 'pl-12', 'mr-' + (event.margin || '4'), 'pb-12']">
        <img :src="event.imageSrc" class="Williams-img" :alt="event.alt" />
      </div>
      <div class="pl-12 pr-8 pt-2 text-4xl text-justify">
        <p v-for="paragraph in event.description" :key="paragraph" class="pt-2">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Williams",
  data() {
    return {
      events: [
        {
          id: "1980",
          title: "First title",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/williams1980.png",
          alt: "Alan Jones",
          description: [
            "The Williams was formed in 1977 and just after 3 years they won their first Constructor's title with Alan Jones. Jones won the opening race in Argentina and then followed with four more wins at French GP, British GP, Canadian GP and the win at the last race in United States.",
            "Jones also won the driver's title 17 points ahead of Nelson Piquet. In the constructor's championship Williams almost had double the points from the 2nd placed Ligier.",
            "Originally 1980 was to be a 18 race championship season but Mexico, Sweden and Ceasars Palace were cancelled which cut the number to 15 and when Spain lost championship status the number of championship races became 14."
          ]
        },
        {
          id: "1981",
          title: "Make it double",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/williams1981.png",
          alt: "Williams FW07C 1981",
          description: [
            "Williams won four races in 1981, Jones won the first race US GP and the last race of the season at Caesars Palace. Reutemann won the Brazilian GP and the Belgian GP.",
            "The team won the constructor's championship with 120 points, 29 points ahead of Ferrari. The title crown went to Nelson Piquet. Williams won back to back titles despite having this year more competition from Ferrari and Brabham.",
            "In 1981 championship season was the first to run under FIA Formula One World Championship name. The entry rules were changed and prize money was introduced. Formula one started to become more commercial."
          ]
        },
        {
          id: "1986",
          title: "The Gang of Four",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/theGangFour.png",
          alt: "The Gang of Four",
          description: [
            "The 1986 season was dominated by the four drivers from the 'Gang of Four' teams – Alain Prost, Nigel Mansell, Nelson Piquet and Ayrton Senna – who won all but one of the 16 races that season.",
            "The season started in Brazil, where Piquet won and Senna finished second, while Prost and Mansell retired. Throughout the season, all four drivers exchanged podium places, with Prost finishing the season with 11 podium finishes.",
            "The only race where none of the four drivers won the race was Mexico GP which was won by Gerhard Berger. At the last race in Australia, three of the four drivers had a shot at a championship. Senna retired from the race and Mansell suffered the puncture. Prost won the race and the championship.",
            "The constructor's championship was won by the Williams-Honda team. This was the first time a Japanese engine won a constructor's championship.",
            "Before the season started Frank Williams was involved in a road accident that left him in a wheelchair in 1989."
          ]
        },
        {
          id: "1987",
          title: "Williams-Honda",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/williams1987.png",
          alt: "Williams-Honda",
          description: [
            "The 1987 season brought Williams-Honda their second constructor's and the first and only driver's title for Nelson Piquet. Nelson won three races while his teammate Nigel won six but due his crash in Japanese GP he lost the title to the Piquet.",
            "Williams won the constructor's title with 137 points, 61 points ahead of McLaren.",
            "At the end of the year Honda ended their partnership with Williams and moved to McLaren. Pirelli left the sport and Goodyear was the sole tyre supplier."
          ]
        },
        {
          id: "1992",
          title: "Mansell domination",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/mansell.png",
          alt: "Nigel Mansell, 1992",
          description: [
            "Mansell dominated the opening race in South Africa winning with the margin of over 24 seconds. Mansell continued his domination winning the next four races. Mansell winning five opening races set the new record in Formula One. Mansell went on to record for more wins, ending the season with a record high nine season wins which was the new record in Formula One.",
            "Mansell won the driver's title with 108 points, 52 points ahead of his teammate Patrese. Williams won the constructor's title with 164 points, 65 points ahead of McLaren.",
            "Williams signed Prost for the 1993 season and promoted their test driver Damon Hill."
          ]
        },
        {
          id: "1993",
          title: "ACTIVE SUSPENSION",
          float: "left",
          margin: "6",
          imageSrc: "src/assets/Formula/Images/Williams/williams1992.png",
          alt: "Williams 1993",
          description: [
            "The Williams FW15C was an extremely dominant car, with active suspension and traction control systems beyond anything available to the other teams.",
            "Prost won the opening race in South Africa dominating the whole weekend and winning with over a minute ahead of Senna. After the collision in Brazil. Prost won the next three of the four GP. In France Prost and Hill finished 1-2 that was the only 1-2 for the Williams that season. Prost won in Silverstone and Hockenheim. Hill won his first race in Hungary, continued his winning streak in Belgium and Italy. After Italy Williams failed to win any races.",
            "Williams retained their Constructors' title, 84 points ahead of second-placed McLaren. Prost clinched the Drivers' Championship in Portugal and finished the season 26 points ahead of second-placed Senna.",
            "1993 marked the final season that Williams ran with Canon as its primary backer."
          ]
        },
        {
          id: "1994",
          title: "Senna & HILL",
          float: "left",
          imageSrc: "src/assets/Formula/Images/Williams/senna.png",
          alt: "Senna 1994",
          description: [
            "Williams signed with Rothmans as their title sponsor. The team retained Hill and signed Senna. Prost retired completely from the sport. The FIA banned the active suspension and traction control systems.",
            "The Williams FW16 was a difficult car to drive and Senna struggled with it. Schumacher won the first two rounds. At the San Marino the whole weekend started badly first Rubens Barrichello had a big crash on Friday. On Saturday Roland Ratzenberger died in the crash. On Sunday on the lap 6 Senna lost the control of the car and crashed into the wall. Senna died from the injuries. As a mark of respect all Williams cars up until 2022 were marked with Senna 's'.",
            "Hill won in Spain taking team's first win in the season. Hill won in Germany and then followed with three wins in Belgium, Italy and Portugal and the final win in Japan. Despite having a tragic year Williams won the constructor's title with 118 points, 15 points ahead of Benetton."
          ]
        },
        {
          id: "1996",
          title: "Williams Domination",
          float: "left",
          margin: "6",
          imageSrc: "src/assets/Formula/Images/Williams/williams1996.png",
          alt: "Damon Hill in Williams 1996",
          description: [
            "Hill won four out of five races in the opening season. Williams won then three races in a row. They won in Canada, France, Hungary and Germany. Villeneuve mounted a title challenge going into the final race of the season at Japan, but Hill reasserted his dominance to take the race and the 1996 title, while Villeneuve lost a wheel and retired.",
            "Damon Hill won the Drivers' Championship, making him the first son of a World Champion (his father Graham having won the title in 1962 and 1968) to have won the title himself.",
            "Williams's dominance was such that they had clinched the Constructors' Championship and only their drivers had a mathematical chance of taking the title, several races before the season concluded This was the last championship for a British driver until Lewis Hamilton in 2008."
          ]
        },
        {
          id: "1997",
          title: "The Last title",
          float: "left",
          margin: "4",
          imageSrc: "src/assets/Formula/Images/Williams/williams1997.png",
          alt: "Jacques Villeneuve in Williams 1997",
          description: [
            "The 1997 season was the last season of Williams-Renault and the last Williams' car designed by Adrian Newey. Jacques Villeneuve won seven races that season with his teammate winning only one. At the British GP Williams achieved their 100th GP wins. Coming to the final round of the season at Jerez, Schumacher led Villeneuve by 1 point; however, on lap 48, Schumacher and Villeneuve collided. Schumacher was disqualified from second place in the championship as the accident was deemed by the FIA as 'avoidable'.",
            "Williams won the Constructors' title for the second time in a row, scoring 123 points. Jacques Villeneuve won the Drivers' Championship by three points to Michael Schumacher, who kept his points total despite being removed from second place.",
            "As of 2023, this is the last championship for a non-European driver, the last Constructors' and Drivers' championships for Williams, and the last championship won on Goodyear tyres."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.Williams-img {
  --s: 10px; /* size of the frame */
  --b: 2px; /* border thickness */
  --w: 620px; /* width of the image */
  --c: #c70b0b;

  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: calc(2 * var(--s));
  --_g: var(--c) var(--b), #0000 0 calc(100% - var(--b)), var(--c) 0;
  background: linear-gradient(var(--_g)) 50%/100% var(--_i, 100%) no-repeat,
    linear-gradient(90deg, var(--_g)) 50% / var(--_i, 100%) 100% no-repeat;
  outline: calc(var(--w) / 2) solid #0009;
  outline-offset: calc(var(--w) / -2 - 2 * var(--s));
  transition: 0.4s;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0 2rem;
}
.Williams-img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: calc(
    var(--w) * 0.025 - var(--s) / 2
  ); /* Adjust this value for responsiveness */
  --_i: calc(100% - 2 * var(--s));
}

@media only screen and (max-width: 768px) {
  .Williams-img {
    outline: none;
  }

  .Williams-img:hover {
    --_i: calc(100% - 2 * var(--s));
  }
}

.event-container {
  margin-bottom: 2rem;
}
</style>
