<script>
import "@/assets/Space/comets.css";
import "@/assets/Space/tnp.css";

export default {
    name: "Trans Neptunina Planets",
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
    <div class="kuiper-belt">
        <section class=" mt-[100rem]">
            <div class="title">
                <span class="text-5xl lg:text-6xl">The solar system does not end here...</span>
            </div>
        </section>
        <section class="screen mt-[100rem]">
            <div class="title">
                <span class="md:text-5xl text-[2.5rem]">Planets Beyond Neptune - Trans Neptunian Region</span>
            </div>
        </section>
        <section class="screen">
            <div class="halleys-comet"></div>
            <div class="halleys-dust-tail"></div>
            <div class="title text-4xl">Halley's commet</div>
        </section>
        <section class="screen mt-[82rem]">
            <div class="body-info-wrapper">
                <div class="relative" @mouseenter="showInfo('pluto')" @mouseleave="hideInfo">
                    <div class="pluto"></div>
                    <div v-if="hoveredPlanet === 'pluto'" class="info-card">
                        <h3 class="info-card-title">{{ planetData.pluto.name }}</h3>
                        <ul class="info-card-list">
                            <li v-for="(fact, index) in planetData.pluto.facts" :key="index">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-[250rem]">
            <div class="title text-5xl">
                Space is empty
            </div>
        </section>
        <section class="mt-[500rem]">
            <div class="title text-5xl">
                <span>99% of Solar System is empty</span>
            </div>
        </section>
        <section class="mt-[500rem]">
            <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
                <span>Haumea is the fastest rotating body in the solar system, spinning once every 3.9 hours.</span>
            </div>
        </section>
        <section class="screen mt-[250rem]">
            <div class="body-info-wrapper">
                <div class="relative" @mouseenter="showInfo('haumea')" @mouseleave="hideInfo">
                    <div class="haumea"></div>
                    <div v-if="hoveredPlanet === 'haumea'" class="info-card">
                        <h3 class="info-card-title">{{ planetData.haumea.name }}</h3>
                        <ul class="info-card-list">
                            <li v-for="(fact, index) in planetData.haumea.facts" :key="index">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="screen">
            <div class="hale-bopp">
                <div class="hale-bopp-dust"></div>
                <div class="comet-particle" v-for="i in 6" :key="i"
                    :style="{ top: (40 + i * 10) + '%', right: (20 + i * 25) + 'px' }"></div>
            </div>
            <div class="title text-4xl">Hale-Bopp Comet</div>
        </section>
        <section class="screen mt-[200rem]">
            <div class="body-info-wrapper">
                <div class="relative" @mouseenter="showInfo('makemake')" @mouseleave="hideInfo">
                    <div class="makemake"></div>
                    <div v-if="hoveredPlanet === 'makemake'" class="info-card">
                        <h3 class="info-card-title">{{ planetData.makemake.name }}</h3>
                        <ul class="info-card-list">
                            <li v-for="(fact, index) in planetData.makemake.facts" :key="index">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="extreme-trans-neptune">
        <section class="mt-[300rem]">
            <div class="title text-5xl">Extreme Trans Neptunian Region</div>
        </section>
        <section class="mt-[600rem]">
            <div class="title text-4xl">There truly isn't anything there. Vast emptiness</div>
        </section>
        <section class="mt-[1000rem]">
            <div class="title text-4xl">Sedna is orbit is over 900 astronomical unit</div>
        </section>
        <section class="screen mt-[428rem]">
            <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
                <span>How can there be a planet so far away from the Sun?</span>
            </div>
        </section>
        <section class="mt-[400rem]">
            <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
                <span>Currently Sedna is closer to us than Eris</span>
            </div>
        </section>
        <section class="screen mt-[600rem]">
            <div class="body-info-wrapper">
                <div class="relative" @mouseenter="showInfo('sedna')" @mouseleave="hideInfo">
                    <div class="sedna"></div>
                    <div v-if="hoveredPlanet === 'sedna'" class="info-card">
                        <h3 class="info-card-title">{{ planetData.sedna.name }}</h3>
                        <ul class="info-card-list">
                            <li v-for="(fact, index) in planetData.sedna.facts" :key="index">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="scattered-disc">
        <section class="mt-[291rem]">
            <div class="title text-5xl">Scattered Disc</div>
        </section>
        <section class="mt-[300rem]">
            <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
                <span>Scattered Disc is a region beyond the Kuiper Belt, extending to the edge of the Solar System. It
                    is
                    populated by icy bodies, some of which are the source of short-period comets.</span>
            </div>
        </section>
        <section class="mt-[400rem]">
            <div class="scroll-reveal text-3xl md:text-4xl lg:text-5xl/[3.5rem] tracking-wide text-balance">
                <span>Scattered Disc objects are believed to have been ejected from the Kuiper Belt by Neptune's
                    gravity.</span>
            </div>
        </section>
        <section class="screen mt-[300rem]">
            <div class="body-info-wrapper">
                <div class="relative" @mouseenter="showInfo('eris')" @mouseleave="hideInfo">
                    <div class="eris"></div>
                    <div v-if="hoveredPlanet === 'eris'" class="info-card">
                        <h3 class="info-card-title">{{ planetData.eris.name }}</h3>
                        <ul class="info-card-list">
                            <li v-for="(fact, index) in planetData.eris.facts" :key="index">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="title text-4xl mt-96">
            <span>Edge of the Solar System</span>
        </div>
    </div>
</template>