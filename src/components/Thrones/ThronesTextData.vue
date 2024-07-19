<template></template>

<script>
export default {
  name: "thronesTextData",
  props: ["daysPassed"],
  data() {
    return {
      textData: [
        {
          number: Math.floor(this.daysPassed / 200),
          text: " Times you could have travelled from King's Landing to the Wall",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 110),
          text: " Times you could have read the entire A Song of Ice and Fire series",
          info: "Around four months to complete the series",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 35),
          text: " Times you could have watched the entire got series (You watch 2 episodes per day)",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed / 12),
          text: " Times you could have watched the LOTR trilogy (extended edition)",
          image: "/Images/Thrones/got.avif",
        },

        {
          number: Math.floor(this.daysPassed / 225),
          text: " Times you could have beaten the Witcher trilogy",
          image: "/Images/Thrones/got.avif",
        },

        {
          number: Math.floor(this.daysPassed / 554),
          text: " Times you could have travelled around the world",
          image: "/Images/Thrones/got.avif",
        },
        {
          number: Math.floor(this.daysPassed * 42.2),
          text: " Times you could have run",
          image: "/Images/Thrones/got.avif",
        },
      ],
    };
  },
};
</script>
