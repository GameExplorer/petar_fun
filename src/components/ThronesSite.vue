<script>
import '/src/style.css'
import CountingDiv from '@/components/CountingDiv.vue';
import Reveal from '@/components/Reveal.vue';


export default {
  
    data() {
        return {
            targetDate: new Date('2011-06-12'), // Replace with your target date
        };
    },
    computed: {
        daysPassed() {
            const currentDate = new Date();
            const timeDifference = currentDate - this.targetDate;
            const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) - 30; // Milliseconds to days
            return daysPassed;
        },
    },
  components: {
    CountingDiv,
    Reveal
  }
};

</script>

<template class="v-cloak">
  <div class="background">
    <div class="container mx-auto text-thrones">
      <div class="text text-2xl md:text-6xl sm:text-xl py-12 text-center">
        <h1 class="py-2"> <span class="md:text-7xl text-3xl daysText">{{ daysPassed }}</span> DAYS SINCE LAST</h1>
        <h1 class="py-2">ASOIAF BOOK </h1>
        <h2 class="py-2 text-2xl">in the mean time...</h2>
      </div>
    </div>
  </div>
  <div class="border-t-8 border-[#010101]"></div>
  <div class="textFont font-semibold">
    <div class="background2 py-12">
        <CountingDiv />
    </div>
    <div class="background p-10">
      <div class="text text-2xl md:text-3xl py-10 text-left">
        You could have travelled from King's Landing to the Wall 
        <!-- 200 days is how long is ONE journey from King's landing to the Wall-->
        <span class="text-4xl text-[#7F5AF0] font-semibold animate-pulse">{{ Math.ceil(daysPassed / 200) }}</span> times.
        <div class="text-xs font-sans italic">The distance is 3000 miles, assuming you walk 15 miles each day </div>
      </div>
    </div> 
    <div class="background2 p-10">
      <div class="text text-2xl md:text-3xl sm:text-xl text-right py-10">
        You could read the current ASOIAF books
        <!-- 47 days is how long you need to read a volume -->
        <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed / 47 ) }}</span> times.
        <div class="text-xs font-sans italic">You read 2h per day at 250WPM</div>
      </div>    
    </div>
    <div class="background p-10">
      <div class="text text-2xl md:text-3xl py-10 text-left">
        You could have watched the entire series GOT
        <!-- 14 days or 70 / 5 is how long it takes to watch the series.. 5h per day 70 is how long is the series -->
        <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed / (70 / 5)) }}</span> times.
        <div class="text-xs font-sans italic">Assuming you can watch it more than once </div>
      </div>
    </div>
    <div class="background2 p-10">
      <div class="text text-4xl md:text-3xl py-10 text-right">
          You could have watched LOTR extended trilogy 
          <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed / 11.5) }}</span> times.
      </div>
    </div>
    <div class="background p-10">
      <div class="text text-4xl md:text-3xl py-10 text-left">
        Metis travel around the jupiter
        <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed / 0.30) }}</span> times.
      </div>
    </div>
    <div class="background2 p-10">
      <div class="text text-4xl md:text-3xl py-10 text-right">
          If you walked 5 km everyday you would have travelled
          <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed * 5) }}</span> kilometers.
      </div>
    </div>
    <div class="background p-10">
      <div class="text text-4xl md:text-3xl py-10 text-left">
        Metis travel around the jupiter
        <span class="text-4xl text-[#7F5AF0] font-semibold">{{ Math.ceil(daysPassed ) }}</span> times.
      </div>
    </div>
  </div>
</template>

<style scoped>

[v-cloak] {
  display: none;
}

.textFont {
  font-family: 'Montserrat';
  text-transform: uppercase;
}
.daysText {
  font-family: 'Montserrat';
  color: #fffffe;
  font-size: 1.4em;
  font-weight: 100;
}
.text-thrones {
  font-family: Thrones;
  color: #fffffe;
}

</style>

