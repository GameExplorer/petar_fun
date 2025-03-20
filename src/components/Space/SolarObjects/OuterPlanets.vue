<script>
import "@/assets/Space/outerPlanets.css";

export default {
    name: "OuterPlanets",
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
    <section class="mt-[120rem]">
        <div class="title">
            <span class="text-7xl">Gas Giants</span>
        </div>
    </section>
    <section class="screen mt-[70rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('jupiter')" @mouseleave="hideInfo">
                <div class="jupiter"></div>
                <div v-if="hoveredPlanet === 'jupiter'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.jupiter.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.jupiter.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body-info-wrapper absolute">
            <div class="relative" @mouseenter="showInfo('io')" @mouseleave="hideInfo">
                <div class="moon io"></div>
                <div v-if="hoveredPlanet === 'io'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.io.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.io.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body-info-wrapper absolute">
            <div class="relative" @mouseenter="showInfo('europa')" @mouseleave="hideInfo">
                <div class="moon europa"></div>
                <div v-if="hoveredPlanet === 'europa'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.europa.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.europa.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body-info-wrapper absolute">
            <div class="relative" @mouseenter="showInfo('ganymede')" @mouseleave="hideInfo">
                <div class="moon ganymede"></div>
                <div v-if="hoveredPlanet === 'ganymede'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.ganymede.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.ganymede.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body-info-wrapper absolute">
            <div class="relative" @mouseenter="showInfo('callisto')" @mouseleave="hideInfo">
                <div class="moon callisto"></div>
                <div v-if="hoveredPlanet === 'callisto'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.callisto.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.callisto.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[150rem]">
        <div class="scroll-reveal text-2xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Gas Giant planet is manily composed of hydrogen and helium.
                Jupiter and Saturn are the only Gas Giants in the solar system.</span>
        </div>
    </section>
    <section class="screen mt-[292rem]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('saturn')" @mouseleave="hideInfo">
                <div class="saturn"></div>
                <div v-if="hoveredPlanet === 'saturn'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.saturn.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.saturn.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="body-info-wrapper absolute">
            <div class="relative" @mouseenter="showInfo('titan')" @mouseleave="hideInfo">
                <div class="moons titan"></div>
                <div v-if="hoveredPlanet === 'titan'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.titan.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.titan.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[100rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Saturn's moon Titan is larger than Mercury</span>
        </div>
    </section>
    <section class="mt-[800rem]">
        <div class="title">
            <span class="text-7xl">Ice Giants</span>
        </div>
    </section>
    <section class="screen mt-[92em]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('uranus')" @mouseleave="hideInfo">
                <div class="uranus"></div>
                <div v-if="hoveredPlanet === 'uranus'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.uranus.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.uranus.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[100rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Uranus and Neptune are the Ice Giants in the solar system.
                They are mainly composed of water, ammonia, and methane.</span>
        </div>
    </section>
    <section class="mt-[300rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Lacking well defined solid surfaces they are primarily composed of gases and liquids.
            </span>
        </div>
    </section>
    <section class="mt-[200rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Uranus most famous moons are Titania, Oberon, Umbriel, Ariel and Miranda</span>
        </div>
    </section>
    <section class="screen mt-[435em]">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('neptune')" @mouseleave="hideInfo">
                <div class="neptune"></div>
                <div v-if="hoveredPlanet === 'neptune'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.neptune.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.neptune.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[100rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Neptune's moon Triton is the only large moon in the solar system that orbits in the opposite direction
                of its planet's rotation.</span>
        </div>
    </section>
    <section class="mt-[250rem]">
        <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
            <span>Neptune was mathematically predicted by Alexis Bouvard, the planet was discovered after his
                death</span>
        </div>
    </section>
</template>