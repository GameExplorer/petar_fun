<script>
import "@/assets/Space/asteroid-belt.css";

export default {
    name: "AsteroidBelt",
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
    <section class="screen mt-[80rem]">
        <div class="body-info-wrapper">
            <div class="asteroid-belt belt-wobble">
                <div class="asteroid-layer layer-1"></div>
                <div class="asteroid-layer layer-2"></div>
                <div class="asteroid-layer layer-3"></div>
                <div class="asteroid-layer layer-dust"></div>
                <div class="kirkwood-gap" style="width:2%; left:30%; opacity:0.5;"></div>
                <div class="kirkwood-gap" style="width:1.5%; left:44%; opacity:0.4;"></div>
                <div class="kirkwood-gap" style="width:2.5%; left:62%; opacity:0.6;"></div>

                <div class="concentration-zone" style="width:15%; height:25%; top:20%; left:25%;"></div>
                <div class="concentration-zone" style="width:20%; height:30%; top:60%; left:55%;"></div>
                <div class="concentration-zone" style="width:22%; height:20%; top:40%; left:70%;"></div>

                <div class="asteroid-individual asteroid-large asteroid-silicate"
                    style="top:25%; left:22%; animation-delay: 0s;"></div>
                <div class="asteroid-individual asteroid-large asteroid-metallic"
                    style="top:67%; left:78%; animation-delay: -3s;"></div>
                <div class="asteroid-individual asteroid-large asteroid-carbonaceous"
                    style="top:42%; left:33%; animation-delay: -6s;"></div>

                <div class="asteroid-individual asteroid-medium asteroid-metallic"
                    style="top:55%; left:45%; animation-delay: -2s;"></div>
                <div class="asteroid-individual asteroid-medium asteroid-silicate"
                    style="top:28%; left:68%; animation-delay: -5s;"></div>
                <div class="asteroid-individual asteroid-medium asteroid-carbonaceous"
                    style="top:73%; left:12%; animation-delay: -8s;"></div>
                <div class="asteroid-individual asteroid-medium asteroid-silicate"
                    style="top:33%; left:88%; animation-delay: -4s;"></div>

                <div class="asteroid-individual asteroid-small asteroid-silicate"
                    style="top:62%; left:54%; animation-delay: -1s;"></div>
                <div class="asteroid-individual asteroid-small asteroid-metallic"
                    style="top:22%; left:76%; animation-delay: -3.5s;"></div>
                <div class="asteroid-individual asteroid-small asteroid-carbonaceous"
                    style="top:51%; left:33%; animation-delay: -7s;"></div>
                <div class="asteroid-individual asteroid-small asteroid-silicate"
                    style="top:38%; left:65%; animation-delay: -9s;"></div>
                <div class="asteroid-individual asteroid-small asteroid-metallic"
                    style="top:75%; left:43%; animation-delay: -2.5s;"></div>
                <div class="asteroid-individual asteroid-small asteroid-carbonaceous"
                    style="top:18%; left:51%; animation-delay: -5.5s;"></div>

                <div class="info-box">
                    <h2 class="info-title">Asteroid Belt</h2>
                    <p class="info-text">Torus shaped region between Mars and Jupiter. There are over millions of
                        objects the
                        largest object being the dwarf planet Ceres. Jupiter's gravity prevented these rocks
                        from forming into a planet. What could have been maybe another planet?</p>
                </div>
            </div>
        </div>
    </section>
    <section class="screen">
        <div class="body-info-wrapper">
            <div class="relative" @mouseenter="showInfo('ceres')" @mouseleave="hideInfo">
                <div class="ceres"></div>
                <div v-if="hoveredPlanet === 'ceres'" class="info-card">
                    <h3 class="info-card-title">{{ planetData.ceres.name }}</h3>
                    <ul class="info-card-list">
                        <li v-for="(fact, index) in planetData.ceres.facts" :key="index">
                            {{ fact }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="screen mt-[365rem]">
        <div class="scroll-reveal">
            <span>The asteroid belt marks the boundary between the inner rocky planets and the outer gas giants. It
                contains
                millions of asteroids, from tiny pebbles to dwarf planets like Ceres. Jupiter's gravity prevented these
                rocks
                from forming into a planet.</span>
        </div>
    </section>
</template>
