<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-32">
    <div
      v-for="(year, index) in years"
      :key="year.id"
      :id="year.id"
      :class="['card', index % 2 === 1 ? '' : '']"
    >
      <div class="imgBx">
        <img
          :src="year.imageSrc"
          :class="'mb-' + (index % 2 === 1 ? '12' : '6')"
        />
        <span
          class="text-5xl uppercase font-extrabold border-b-2 border-white p-2"
          >{{ year.title }}</span
        >
      </div>
      <div class="details">
        <h2 class="header text-4xl lg:text-5xl uppercase">
          {{ year.subtitle }}
        </h2>
        <p class="textMclaren text-2xl">{{ year.description }}</p>
        <div class="text-lg pb-24">Image source: {{ year.source }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mclaren",
  data() {
    return {
      years: [
        {
          id: "1974",
          title: "1974 - Mclaren's first",
          imageSrc: "/Images/Mclaren/mclaren1974.png",
          subtitle: "Close Title Fight",
          description:
            "Emerson Fittipaldi signed for Mclaren in 1974. At the opening race Fittipaldi collided and finished the race in the 10th place, his teammate Denny Hulme won the first race. In the following race Fittipaldi won in his home country. Up until French GP Fittipaldi had a great run and finished the races in the top 5 expect South Africa. His first retirement came in the French GP. Double DNF in Germany and Austria put Fittipaldi in a difficult position his rival Ragazzoni was leading the championship. Fittipaldi finished second in the Italian GP and won the Canadian GP. In the end Fittipaldi won the championship by 3 points.",
          source: "wikipedia.com",
        },
        {
          id: "1984",
          title: "1984 - Close call",
          imageSrc: "/Images/Mclaren/mclaren1984.png",
          subtitle: "Lauda's Last",
          description:
            "Having been fired by Renault, Alan Prost returned to Mclaren. Mclaren used TAG engines and dominated the whole season.Mclaren had two times more points than the second place Ferrari.In the driver's championship it was hot. Niki Lauda and Alan Prost enjoyed the season long duel for the title. Prost won seven races to equal Jim Clark's record from 1963, over Lauda's five, but the Austrian eventually prevailed by half a point – the smallest margin in Formula One history. It was Lauda's third title, but his first since 1977. Lauda managed to win a title without scoring pole position.",
          source: "snaplap.net",
        },
        {
          id: "1985",
          title: "1985 - two in a row",
          imageSrc: "/Images/Mclaren/mclaren1985.png",
          subtitle: "Prost finally wins",
          description:
            "Prost won the opening race of the season but then followed with a Retirement and Disqualification. After his retirement in Detroit, Prost went on a seven streak podium finishes. At the Brands' Hatch he sealed his first title. After being two years a runner up and scoring more wins than the champion, he was able to win the title. Mclaren won the constructors' championship as well. Reining champion Lauda retired from the sport. This was Minardi's first season in the sport.",
          source: "statsf1.com",
        },
        {
          id: "1988",
          title: "1988 - FIERCE RIVALRY",
          imageSrc: "/Images/Mclaren/mclaren1988.png",
          subtitle: "Senna v Prost",
          description:
            "The 1988 season saw one of the greatest rivalries in the Formula 1 history. Senna and Prost exchanged wins winning 15 out of 16 races, failing to win only in Italy where Gerhard Berger won for a ferrari four weeks after the death of the Enzo Ferrari. Despite having more podiums than Senna, Prost lost the title by 3 points. Mclaren had won a Constructor's Championship with three times more points than the second place Ferrari. This record was later broken in 2002 by Ferrari.",
          source: "motorsportimages.com",
        },
        {
          id: "1989",
          title: "1989 - BREAKING POINT",
          imageSrc: "/Images/Mclaren/mclaren1989.png",
          subtitle: "Senna v Prost",
          description:
            "The Drivers' Championship was decided in controversial circumstances at the penultimate race of the season in Japan, when Prost and teammate Ayrton Senna, who needed to win the race, collided in the closing laps. Prost retired while Senna rejoined the track after a push start and crossed the line first, only to be disqualified for not rejoining the track correctly. This handed Prost the title, his last with McLaren before joining Ferrari for 1990. Mclaren won the Constructors' Championship for a second year in a row.",
          source: "motorsport.com",
        },
        {
          id: "1990",
          title: "1990 - CONTROVERSY",
          imageSrc: "/Images/Mclaren/mclaren1990.png",
          subtitle: "Senna v Prost (in red)",
          description:
            "The championship featured a dramatic battle between Senna and former teammate Alain Prost, who had made the switch to Ferrari. Prost led the championship after three consecutive mid-season wins. Senna fought back strongly and went into the penultimate round at the Suzuka circuit in Japan with a nine-point lead over Prost. There, Senna took pole position only for Prost to beat him off the line. Senna then drove into the Frenchman at the first corner, putting both out and thus settling the championship in Senna's favour. This was the second year in succession that the two drivers had collided at Suzuka.",
          source: "motorsport.com",
        },
        {
          id: "1991",
          title: "1991 - FOUR IN A ROW",
          imageSrc: "/Images/Mclaren/mclaren1991.png",
          subtitle: "SENNA'S THIRD",
          description:
            "Ayrton Senna won his third and last Drivers' Championship, and McLaren-Honda won their fourth consecutive Constructors' Championship. Senna won seven of the sixteen races; his main challenger for the title was Nigel Mansell, who won five races in his first season back at Williams. Alain Prost failed to win a race with Ferrari and was fired before the end of the season due to a dispute with the team. 1991 also saw the debuts of future world champions Michael Schumacher and Mika Häkkinen, as well as the retirement of three-time champion Nelson Piquet.",
          source: "motorsportimages.com",
        },
        {
          id: "1998",
          title: "1998 - MCLAREN'S LAST",
          imageSrc: "/Images/Mclaren/mclaren1998.png",
          subtitle: "WEST MCLAREN",
          description:
            "The season saw a large shuffling of the pecking order, with McLaren emerging as the fastest constructor. After the factory withdrawal of Renault and the departure of designer Adrian Newey to McLaren, the Williams team and Jacques Villeneuve were unable to defend their respective championships. Williams suffered their first winless season since 1988. Mika Häkkinen won his first World Drivers' Championship and McLaren won the World Constructors' Championship for the first time since 1991.",
          source: "reddit.com",
        },
        {
          id: "2024",
          title: "2024 - BACK ON TOP",
          imageSrc: "/Images/Mclaren/mclaren_2024.webp",
          subtitle: "MCLAREN'S RETURN",
          description:
            "2024 was one of the best years in the modern era of Formula 1. It started with Verstappen winning first couple of races it all looked it would be Max and RedBull year it turned out to be a close title fight between Ferrari and Mclaren. After Spain Mclaren were on the rise earning wins and podiums and Norris closing the gap on the championship leader. Despite great perfomance from Mclaren, Max showed why he is world champion. In Brazil he drove from P17 all the way to P1 to win and seal the title. He won the title in Las Vegas and in going to the last race Ferrari were 21 pts behind Mclaren. Despite a comeback drive from Leclerc from P19 to P3 Mclaren had enough points to secure its title. First in 26 years. Oscar Piastri completed all racing laps which was done only 3 times before that.",
          source: "mclaren.com",
        },
      ],
    };
  },
};
</script>

<style>
.card {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 720px;
  background: #262626;
  overflow: hidden;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5);
}
.card .imgBx,
.card .details {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  transition: 0.5s;
  text-align: center;
}
.card .imgBx {
  top: 0;
  left: 0;
}
.card:hover .imgBx {
  top: 0;
  left: -100%;
}
.card .imgBx img {
  width: 100%;
}
.card .details {
  background: #333333;
  top: 0;
  left: 100%;
  padding: 60px 30px;
}
.card:hover .details {
  top: 0;
  left: 0%;
}
.card .details .header {
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0 0 10px;
  border-bottom: 2px solid #fff;
}
.card .details .textMclaren {
  margin: 20px 0 0;
  color: #fff;
}
</style>
