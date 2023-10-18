<script>
import '/src/style.css'
import CountingDiv from '@/components/CountingDiv.vue';
import Shows from '@/components/Shows.vue';


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
    components: { CountingDiv }
};

</script>

<template>
  <div class="background">
    <div class="container mx-auto text-thrones">
      <div class="text text-2xl md:text-6xl sm:text-xl py-12 text-center">
        <h1 class="py-2"> <span class="md:text-7xl text-3xl">{{ daysPassed }}</span> DAYS SINCE LAST</h1>
        <h1 class="py-2">ASOIAF BOOK </h1>
        <h2 class="py-2 text-2xl">in the mean time...</h2>
      </div>
    </div>
  </div>
  <div class="border-t-8 border-[#010101]">
  </div>
  <div class="background2 py-12">
      <CountingDiv />
  </div>
  <div class="background p-10">
    <div class="text text-2xl md:text-2xl py-10 text-left">
      You could have travelled from King's Landing to the Wall 
      <span class="text-4xl text-[#7F5AF0] font-semibold animate-pulse">{{ Math.ceil(daysPassed / (3000 / 15)) }}</span> times.
      <div class="text-xs font-sans">The distance is 3000 miles, assuming you walk 15 miles each day </div>
    </div>
  </div> 
  <div class="background2 p-10">
    <div class="text text-2xl md:text-2xl py-10 text-right">
      You could have watched the entire series GOT
      <span class="text-4xl text-[#7F5AF0] font-semibold animate-pulse">{{ Math.ceil(daysPassed / (70 / 10)) }}</span> times.
      <div class="text-xs font-sans">The series is 70 hours long, assuming you watch 10 hours each day </div>
    </div>
  </div>
</template>

<style scoped>
.text-thrones {
  font-family: Thrones;
  color: #fffffe;
}
</style>

