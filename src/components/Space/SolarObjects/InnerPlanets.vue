<script>
import "@/assets/Space/innerplanets.css"
export default {
    name: "InnerPlanets",
    props: {
        planetData: {
            type: Object,
            required: true
        },
        hoveredPlanet: {
            type: String,
            default: null
        }
    },
    methods: {
        showInfo(planet) {
            this.$emit('update:hoveredPlanet', planet);
        },
        hideInfo() {
            this.$emit('update:hoveredPlanet', null);
        }
    }
}
</script>

<template>
    <section class="screen mt-[47rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('mercury')" @mouseleave="hideInfo">
                <div class="mercury"></div>
                <div v-if="hoveredPlanet === 'mercury'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.mercury.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.mercury.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Inner Planets are mostly composed of silicates and metals. The
                whole region
                is less than the distance between Jupiter and Saturn.
                Three out of the four planets have atmospheres.
            </span>
        </div>
    </section>
    <section class="screen mt-[26rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('venus')" @mouseleave="hideInfo">
                <div class="venus"></div>
                <div v-if="hoveredPlanet === 'venus'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.venus.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.venus.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="screen mt-[27rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('earth')" @mouseleave="hideInfo">
                <div class="earth"></div>
                <div class="moon"></div>
                <div v-if="hoveredPlanet === 'earth'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.earth.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.earth.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Earth is the only planet known to support life. 💙
            </span>
        </div>
    </section>
    <section class="screen mt-[52rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('mars')" @mouseleave="hideInfo">
                <div class="mars"></div>
                <div class="phobos"></div>
                <div class="deimos"></div>
                <div v-if="hoveredPlanet === 'mars'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.mars.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.mars.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>