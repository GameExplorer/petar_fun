<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 p-4 xl:p-0">
    <div
      v-for="image in images"
      :key="image.alt"
      class="col-span-1"
      :class="image.position"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full rounded-xl border-white border-2 shadow-black shadow-lg hover:scale-105"
      />
    </div>
  </div>
  <div class="timelineHaas text-xl text-justify">
    <p
      v-for="event in events"
      :key="event.id"
      :id="event.id"
      class="road font-semibold text-2xl"
    >
      <span class="text-center text-5xl font-extrabold">{{ event.title }}</span>
      {{ event.description }}
      <br />
    </p>
  </div>
</template>

<script>
export default {
  name: "Haas",
  data() {
    return {
      images: [
        { src: "/Images/Haas/Haas2016.png", alt: "Haas 2016", position: "ml-4" },
        { src: "/Images/Haas/haas2022.png", alt: "Haas 2022", position: "" },
        { src: "/Images/Haas/Haas2023.png", alt: "Haas 2023", position: "mr-4" },
      ],
      events: [
        {
          id: "2016",
          title: "FIRST RACE",
          description: "In the team's debut at the opening race at Australia Grojean finished P6. Haas became the first American constructor to win points in its first F1 race and first constructor since Toyota Racing in 2002 to record points in its debut. Grosjean success continued in the Bahrain finishing P5 after that they fell off and only scored points on three more occasions socring enough points to secure P8 in the constructor's standings.",
        },
        {
          id: "2018",
          title: "BEST RESULT IN WCC",
          description: "The 2018 season started with controversy for Haas due to their car looking similar to previous' year Ferrari SF70H. Guiterez was replaced by Magnussen. Again Haas scored points in Australia finishing P5 and P6. In Austria both went one better and finished P4 and P5 surpassing 2017 points tally after only nine races. At the Singapore GP, Magnussen scored Haas' first ever fastest lap. They ended season in fifth position. This was their best position to date.",
        },
        {
          id: "2021",
          title: "BAD YEAR",
          description: "After the poor 2020 both drivers Grosjean and Magnussen got replaced by Nikita Mazepin and Mick Schumacher. To survive financially Haas decided to halt the progress on the 2021 car and focus on the 2022 car. In their first race Nikita spun on the lap 1 and Mick finished P16 last of all running cars. The season was a disaster for Haas, they failed to score a single point and finished last in the constructor's standings. Nikita was dropped before 2022 season started. Mick stayed in Haas for 1 more year.",
        },
        {
          id: "2022",
          title: "MAIDEN POLE",
          description: "Nikita was replaced by Magnussen. Haas decision to focus on 2022 car paid off in the first two races Magnussen scored teams first points since 2020. After that both drivers struggle to score points until British GP where both drivers score points, Mick scored his best position P8 and Magnussen finished P10. The momentum continued in the following race where Mick finished P6 his best race result so far. In Brazil team took maiden pole with Magnussen out-qualifying the field in changing conditions. Haas finished P7 in the constructor's standings. Mick departed Haas after the season.",
        },
        {
          id: "2024",
          title: "GUNTHER DEPARTURE",
          description: "After poor results in 2023 Haas decided to replace Mick with Magnussen. They signed new sponsorship with MoneyGram. Haas 2023 was good in qualifying. Hulkenberg often qualified high but due to high tyre wear they usually finished outside the points. Haas finished the season in P10 with 12 points. Hulkenberg P7 in the American GP was their best result. Few days after the new year Haas announced that Gunther Steiner contract will not be renewed. He was replaced by engineer Ayao Komatsu.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.timelineHaas {
  position: relative;
  max-width: 800px;
  margin: auto;
}

.road {
  border-top: 6px dashed;
  border-color: white;
  margin: 10px;
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
</style>
