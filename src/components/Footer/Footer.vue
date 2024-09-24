<template>
  <div class="grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <li v-for="link in randomLinks" :key="link.name" class="flex items-center justify-center rounded-lg text-white px-4 py-4">
        <RouterLink :to="link.to">
          <img :src="link.image" alt="{{ link.name }} page" class="hover:scale-105 transition-all duration-500" />
        </RouterLink>
      </li>
    </div>
    <div class="text-center text-2xl pt-16 text-gray-700">PETAR.FUN</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Game of Thrones', to: { name: 'Game of Thrones' }, image: '/Images/PageIcons/thrones_button.png' },
        { name: 'Mountains', to: { name: 'Mountains' }, image: '/Images/PageIcons/mountains_button.png' },
        { name: 'F1 Champions', to: { name: 'F1 Champions'}, image: "/Images/PageIcons/F1Champions.png"},
        { name: 'Life in Weeks', to: { name: 'Life in Weeks' }, image: '/Images/PageIcons/LifeInWeeks.webp' },
      ],
    };
  },
  computed: {
    randomLinks() {
      const shuffledLinks = [...this.links]; // Create a copy to avoid mutation
      for (let i = shuffledLinks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledLinks[i], shuffledLinks[j]] = [shuffledLinks[j], shuffledLinks[i]];
      }
      return shuffledLinks.slice(0, 4); // Get the first four elements
    },
  },
};
</script>
