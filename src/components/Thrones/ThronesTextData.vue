<template></template>

<script>
export default {
  name: "thronesTextData",
  props: ["daysPassed"],
  data() {
    return {
      textData: [
        {
          number: Math.floor(this.daysPassed / 110),
          text: " Times you could have read the entire A Song of Ice and Fire series",
          info: "Around four months to complete the series",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: (this.daysPassed * 0.001).toFixed(2),
          text: " meters of grass has grown",
          info: "Grass grows at 0.1mm/s",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 29.5),
          text: " Full moons have occurred",
          info: "The lunar cycle is approximately 29.5 days",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 7),
          text: " Books you could have read if you read one book per week",
          info: "Assuming an average reading time of one week per book",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 12),
          text: " Times you could have watched the LOTR extended edition trilogy",
          info: "Around 12 hours to complete the trilogy",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 14),
          text: " Times you could have watched all Marvel movies and tv shows ever",
          info: "Around 14 days to complete",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 35),
          text: " Times you could have watched the entire GoT series",
          info: "You watch 2 episodes per day",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 59),
          text: " Times you could have built the Iron Throne",
          info: "It is said that it took 59 days to forge the Iron Throne from the swords of vanquished enemies",
          image: "/Images/Thrones/got.avif",
        },

        {
          number: Math.floor(this.daysPassed / 200),
          text: " Times you could have travelled from King's Landing to the Wall",
          info: "King's Landing is 1000 leagues or 3000 miles (4800km) from the Wall",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 2),
          text: " Cups of coffee you could have had",
          info: "Assuming an average of two cups of coffee per day",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 5),
          text: " Kilometers you could have run",
          info: "Assuming you run 5 kilometers every day",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 8),
          text: " Hours of sleep you had",
          info: "Assuming 8 hours of sleep per day",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 27600),
          text: " km the International Space Station has traveled",
          info: "The ISS travels at approximately 28,000 km/h",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 86400),
          text: " Heartbeats you have experienced",
          info: "Assuming an average heart rate of 1 beat per second",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 1340000),
          text: " km has Voyager 1 travelled",
          info: "Voyager 1 travels at 17km/s",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 2600000),
          text: " km has Earth travelled around the sun",
          info: "Earth travels at 30km/s around the sun",
          image: "/Images/Thrones/got.avif",
        },
      ],
    };
  },
};
</script>
