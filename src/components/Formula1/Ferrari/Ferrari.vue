<template>
  <div class="timelineFerrari">
    <ol class="years">
      <li v-for="event in events" :key="event.id" :id="event.id" class="year" @mouseover="toggleHover(event.id)">
        <h1 class="text-4xl lg:text-5xl font-semibold header">{{ event.title }}</h1>
        <div class="content">
          <p class="text-3xl text-justify context">{{ event.description }}</p>
          <img :src="event.imageSrc" :alt="event.alt" class="m-auto rounded-lg shadow-black shadow-md" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: "Ferrari",
  data() {
    return {
      events: [
        {
          id: "1961",
          title: "FIRST OF MANY",
          description: "The first Constructor's title was won 1961. Ferrari dominated the whole season failing to win only in Germany and Monaco. Phil Hill of Ferrari won his only Drivers' Championship after his teammate and rival Wolfgang von Trips was killed at the Italian Grand Prix, the penultimate race of the season.",
          imageSrc: new URL('@/assets/Formula/Images/Ferrari/ferrari1964.png', import.meta.url).href,
          alt: "ferrari 1961"
        },
        {
          id: "1964",
          title: "SECOND TITLE",
          description: "John Surtees won the 1964 Drivers' Championship, becoming the only person to win World Championships on both two and four wheels. Ferrari won the Constructors' Championship in a close title fight with BRM.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1964.png",
          alt: "ferrari 1964"
        },
        {
          id: "1975",
          title: "LAUDA'S FIRST",
          description: "In his second year with Ferrari, Niki Lauda was given the keys to the Ferrari 312T, a car that was technically far superior to any of the competition. He won his first drivers' title with five wins and a huge margin over second place in the championship. Ferrari took home the championship trophy for manufacturers. Lauda often referred to 1975 as 'the unbelievable year'.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1975.png",
          alt: "ferrari 1975"
        },
        {
          id: "1976",
          title: "THE RUSH",
          description: "The Drivers's Championship was full of controversy between Niki Lauda and James Hunt. Lauda suffered a near-fatal crash at the German Grand Prix, but returned six weeks later to finish fourth in the Italian Grand Prix. Hunt won the championship by just one point. Ferrari won the Constructors' Championship.",
          imageSrc: "src/assets/Formula/Images/Ferrari/lauda1976.png",
          alt: "ferrari 1976"
        },
        {
          id: "1977",
          title: "THREE IN A ROW",
          description: "Niki Lauda won his second championship, despite Mario Andretti winning more races. Lauda did not complete the season, departing Scuderia Ferrari after securing the title at the 1977 United States Grand Prix. Ferrari won its third consecutive Constructors' title, with new driver Carlos Reutemann having a solid season.",
          imageSrc: "src/assets/Formula/Images/Ferrari/lauda1977.png",
          alt: "ferrari 1977"
        },
        {
          id: "1979",
          title: "FOUR OUT OF FIVE",
          description: "Jody Scheckter won the Drivers' Championship and, with teammate Gilles Villeneuve in second place, Scuderia Ferrari won the Constructors' Championship. This was the team's fourth Constructors' Championship in five years, and more would follow, but it would be their last Drivers' Championship for the next 20 years.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1979.png",
          alt: "ferrari 1977"
        },
        {
          id: "1982",
          title: "UGLY YEAR",
          description: "Eventual champion Rosberg won only one race all season (Swiss GP) but consistency gave him the Drivers' Championship, five points clear of Pironi and John Watson. Eleven different drivers from seven different teams won a race during the season, with no driver winning more than twice. Ferrari, who replaced Villeneuve with Patrick Tambay and Pironi with 1978 World Champion Mario Andretti, managed to score enough points to secure the Constructors' Championship, finishing five clear of McLaren with Renault third.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1982.png",
          alt: "ferrari 1982"
        },
        {
          id: "1983",
          title: "EIGHT TITLE",
          description: "Ferrari won the Constructors' Championship, despite its better driver, René Arnoux, finishing only third overall a unique feat in Formula One history.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1983.png",
          alt: "ferrari 1983"
        },
        {
          id: "1999",
          title: "END OF DROUGHT",
          description: "Defending champion Mika Häkkinen was again awarded the World Drivers' Championship. His team McLaren just missed out on championship, it was Ferrari that clinched the Championship by a margin of four points. It would be the last Drivers' title for a McLaren driver until 2008. It was Ferrari's first Constructors' title since 1983, but would also mark the first of six successive titles up to 2004.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari1999.png",
          alt: "ferrari 1999"
        },
        {
          id: "2000",
          title: "MICHAEL ERA",
          description: "For the third year in succession, the season featured a close battle between Ferrari and McLaren. The title was sealed in Japan on 8 October, after a classic straight fight between Schumacher and Häkkinen, with Schumacher passing Häkkinen at the final pit stop and then holding out in front.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2000.png",
          alt: "ferrari 2000"
        },
        {
          id: "2001",
          title: "SUPERB MICHAEL",
          description: "Defending champions Michael Schumacher and Scuderia Ferrari were again awarded the Drivers' Championship and Constructors' Championship. Schumacher won the title with a record margin of 58 points over David Coulthard (McLaren), after achieving nine victories and five-second places. He also became the driver the most wins thus far, his victory at the Belgian Grand Prix marking his 52nd career win.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2001.png",
          alt: "ferrari 2001"
        },
        {
          id: "2002",
          title: "DOMINANCE",
          description: "Defending champions Michael Schumacher and Scuderia Ferrari were again awarded the Drivers' Championship and Constructors' Championship. Schumacher finished first or second in every race except for the Malaysian Grand Prix, where he finished third, thus achieving a podium position in every race. He won a then-record eleven Grands Prix, surpassing the previous record of nine wins, jointly held by himself. He also set the record for the largest number of races remaining on the calendar when the Drivers' Championship was clinched, securing the title with six races to go in the season.",
          imageSrc: "src/assets/Formula/Images/Ferrari/michael2002.png",
          alt: "ferrari 2002"
        },
        {
          id: "2003",
          title: "TOUGH YEAR",
          description: "Defending champions Michael Schumacher and Scuderia Ferrari were again awarded the Drivers' Championship and Constructors' Championship. Schumacher's closest competitors were Kimi Räikkönen, driving for McLaren, and Juan Pablo Montoya, driving for Williams. It was Schumacher's sixth World Drivers' title overall, breaking Juan Manuel Fangio's 46-year-old record.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2003.png",
          alt: "ferrari 2003"
        },
        {
          id: "2004",
          title: "SIMPLY THE BEST",
          description: "In this championship, several records were broken. Michael Schumacher won 13 races, breaking his record of 11 race wins in one season from 2002. He also broke the record for most consecutive World Drivers' titles (5) and Ferrari broke the record for most consecutive Constructors' titles (6). Ferrari also built one of the fastest f1 cars in history, the F2004.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2004.png",
          alt: "ferrari 2004"
        },
        {
          id: "2007",
          title: "CONTROVERSY",
          description: "A major talking point of the season had been an espionage controversy involving Ferrari and McLaren, which led to McLaren being excluded from the Constructors' Championship. As a result, Ferrari clinched the championship at the Belgian Grand Prix. Kimi Raikkonen won the Drivers' Championship, at the Brazilian GP. This was last time Ferrari won the Drivers' Championship.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2007.png",
          alt: "ferrari 2007"
        },
        {
          id: "2008",
          title: "LAST TITLE",
          description: "Eight wins help power them to their 16th constructors' title, beating McLaren by 21 points. Felipe Massa misses out on drivers' championship by a single point to Lewis Hamilton, despite winning more races (is that Glock?). The 2008 season also marks Scuderia Ferrari's last World Constructors' Championship win as of the 2023.",
          imageSrc: "src/assets/Formula/Images/Ferrari/ferrari2008.png",
          alt: "ferrari 2008"
        }
      ],
      hover: null
    };
  },
  methods: {
    toggleHover(id) {
      this.hover = id;
    },
  }
};
</script>

<style scoped>
.timelineFerrari {
  position: relative;
  width: auto;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.timelineFerrari .years {
  list-style-type: none;
  border-left: 4px solid #fbfeff;
  padding: 10px 3px;
}
.timelineFerrari .years .year {
  padding: 20px 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}
.timelineFerrari .years .year .header {
  display: inline-block;
  background-color: #f6ff00;
  color: #000;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 0.25em;
  text-align: center;
}
.timelineFerrari .years .year .content {
  color: #ffffff;
}
.timelineFerrari .years .year .content .context {
  padding: 5px 0px 15px 0px;
}
.timelineFerrari .years .year:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background-color: #eeff00;
  border-radius: 50%;
  left: -15px;
  top: 28px;
  transition: 0.5s;
}

.timelineFerrari .years  .year:hover:before {
  background-color: #0f0;
  box-shadow: 0px 0px 10px 2px #0f0;
}
</style>
