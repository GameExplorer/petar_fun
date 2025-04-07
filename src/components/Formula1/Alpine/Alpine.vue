<template>
  <div class="grid container">
    <section id="2005" class="history-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-highlight">START OF NEW REIGN</span>
        </h2>
      </div>
      <div class="section-content">
        <figure class="section-image section-image-left">
          <img src="@/assets/Formula/Images/Alpine/Alonso2005.png" alt="Fernando Alonso racing during the 2005 season"
            class="history-image" />
          <figcaption class="image-caption">Fernando Alonso, 2005 World Champion</figcaption>
        </figure>
        <div class="section-text text-xl lg:text-2xl">
          <p>
            Giancarlo Fisichella replaced Jarno Trulli for the 2005 season.
            Fisichella won the first race of the season. Fernando Alonso won the
            following three races, building a considerable lead in the Driver's
            World Championship. Alonso and Renault's lead came under threat from
            McLaren and Kimi Raikkonen. McLaren took the lead in the Brazilian GP,
            but that was to be the race in which Alonso secured his first title. He
            became the youngest Formula 1 champion at the age of 23 years and 301
            days.
          </p>

          <p>
            At the following race in China, Renault secured the Constructor's
            title. This broke Ferrari's six-year reign. It was the first time
            Renault had won a Constructor's title. Renault became only the
            second French constructor after Matra in 1969 and the first
            French-licensed team to win the title.
          </p>

          <cite class="source-citation">Source: Wikipedia</cite>
        </div>
      </div>
    </section>
    <section id="2006" class="history-section">
      <div class="section-header">
        <h2 class="section-title section-title-right">
          <span class="title-highlight">FIERCE RIVALRY</span>
        </h2>
      </div>
      <div class="section-content">
        <figure class="section-image section-image-right">
          <img src="@/assets/Formula/Images/Alpine/Alonso2006.png" alt="Fernando Alonso racing during the 2006 season"
            class="history-image" />
          <figcaption class="image-caption">Fernando Alonso's championship-winning 2006 season</figcaption>
        </figure>
        <div class="section-text text-xl lg:text-2xl">
          <p>
            The 2006 season was highlighted by the rivalry between Alonso and
            Schumacher, each winning seven races. Both drivers dominated the field;
            they won all but one race, the Hungarian GP, which was won by Honda's
            Jenson Button. For the first time since the 1956 season, no British
            constructor won any race, and only factory teams won all the races
            (like in 1956). From this season onwards until 2013, Formula 1 used
            2.4L V8 engines.
          </p>
          <p>
            In September 2006, Michael Schumacher announced his retirement. He was
            replaced by Kimi Raikkonen. Juan Pablo Montoya left McLaren mid-season
            to pursue his career in NASCAR. This was also the last season of
            the Bridgestone-Michelin tire war as Michelin withdrew from the sport
            at the end of the season. As of 2023, no French team has won a
            Constructor's title since Renault in 2006. That was also the last time a
            Spanish driver won a Driver's title. Renault went through several
            rebrandings and name changes. In 2021, they rebranded themselves as
            the Alpine F1 Team.
          </p>
          <cite class="source-citation">Source: Wikipedia</cite>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'AlpineHistory',
}
</script>

<style scoped>
.history-section {
  padding: 3rem;
  margin-bottom: 3rem;
  position: relative;
}

.section-header {
  padding: 2.5rem 0;
}

.section-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
}

.section-title-right {
  text-align: right;
}

.title-highlight {
  position: relative;
  font-size: 3.5rem;
  display: inline-block;
  padding-right: 2rem;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background-color: rgba(239, 68, 68, 0.7);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.history-section:hover .title-highlight::after {
  transform: scaleX(1);
}

.section-title-right .title-highlight {
  padding-right: 0;
  padding-left: 2rem;
}

.section-title-right .title-highlight::after {
  transform-origin: right;
}

.section-content {
  display: flex;
  flex-direction: column;
  text-align: justify;
}

@media (min-width: 768px) {
  .section-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .section-content {
    grid-template-columns: 1fr 1fr;
  }
}

.section-image {
  margin-bottom: 1.5rem;
  align-self: center;
  width: 100%;
}

.section-image-left {
  grid-column: 1;
  grid-row: 1;
}

.section-image-right {
  grid-column: 2;
  grid-row: 1;
}

.history-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.history-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 0 15px rgba(254, 203, 16, 0.7);
}

.image-caption {
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
  color: #eeeee7;
}

.section-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.source-citation {
  text-align: right;
  font-style: italic;
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 1rem;
}

/* For improved mobile experience */
@media (max-width: 768px) {

  .section-title,
  .section-title-right {
    text-align: center;
    font-size: 2.5rem;
  }

  .title-highlight {
    font-size: 2.5rem;
    padding: 0;
  }

  .section-content {
    display: block;
  }

  .history-section {
    padding: 1.5rem;
  }
}
</style>