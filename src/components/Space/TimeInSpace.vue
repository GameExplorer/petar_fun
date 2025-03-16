<script>
export default {
    name: "TimeInSpace",
    data() {
        return {
            time: 0,
            earthSpeedTraveling: 29.78,
        }
    },
    mounted() {
        this.timer = setInterval(this.updateTime, 1000);
    },
    beforeUnMount() {
        clearInterval(this.timer);
    },
    computed: {
        timeInMinutes() {
            return (this.time / 60).toFixed(2)
        },
        timeTraveled() {
            return (this.time * this.earthSpeedTraveling).toFixed(2)
        },
        timeTraveledAU() {
            return (this.time * this.earthSpeedTraveling / 149597871).toFixed(7)
        },
    },
    methods: {
        updateTime() {
            this.time++;
        },
    }
}
</script>

<template>
    <div class="text-white text-2xl lg:text-3xl font-[Venite] text-center ">
        You have spent <span class="sm:text-3xl lg:text-4xl font-medium text-yellow-400">{{ time }}</span>
        seconds or <span class="sm:text-3xl lg:text-4xl font-medium text-yellow-400">{{ timeInMinutes }}</span> minutes
        on this website
        meanwhile
        Earth has traveled <span class="sm:text-3xl lg:text-4xl font-medium text-green-400">{{ timeTraveled }}</span> km or
        <span class="sm:text-3xl lg:text-4xl font-medium text-green-400">{{ timeTraveledAU }}</span> AU around the Sun
    </div>
</template>

<style scoped>
@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.85;
    }
}

.text-yellow-400,
.text-green-400 {
    text-shadow: 0 0 6px currentColor;
}
</style>