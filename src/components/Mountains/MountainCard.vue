<template>
    <div class="card mx-4" :class="card.position" :style="{
        bottom: card.alignedHeight + 'px',
        left: card.offset + '%',
    }">
        <div class="card-wrapper">
            <span v-if="isSevenSummit" class="seven-summit-star">★</span>
            <img v-if="card.imageSrc" :src="card.imageSrc" :alt="card.imageAlt"
                class="iconImage opacity-50 rounded-xl card-image" />
            <div
                class="bg-gradient-to-b from-emerald-100 to-emerald-500 border-2 border-black rounded-xl p-4 card-content">
                <h1 class="text-2xl lg:text-4xl uppercase text-center my-1 lg:my-4 font-semibold">
                    {{ card.title }}
                </h1>
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 text-lg lg:text-xl rounded-xl border-2 border-black p-2 bg-orange-200">
                    <div class="py-2 flex items-center">
                        📏
                        <span class="mx-2">Elevation:
                            <br><b>{{ card.height }}m/{{ card.feet }}ft</b></span>
                    </div>
                    <div class="py-2 flex items-center">
                        🌍 <span class="mx-2">Country: <br><b>{{ card.country }}</b></span>
                    </div>
                    <div class="py-2 flex items-center">
                        🏔️
                        <span class="mx-2">Mountain Range: <br><b>{{ card.range }}</b></span>
                    </div>
                    <div class="py-2 flex items-center">
                        🧗‍♂️
                        <span class="mx-2">First Ascent: <br><b>{{ card.ascent }}</b></span>
                    </div>
                </div>
                <div class="text-lg lg:text-xl">
                    <div class="border-2 border-black bg-yellow-200 rounded-lg p-4">
                        📜<br />
                        <template>
                            <div class="card mx-4" :class="card.position" :style="{
                                bottom: card.alignedHeight + 'px',
                                left: card.offset + '%',
                            }">
                                <div class="card-wrapper">
                                    <span v-if="isSevenSummit" class="seven-summit-star">★</span>
                                    <img v-if="card.imageSrc" :src="card.imageSrc" :alt="card.imageAlt"
                                        class="iconImage opacity-50 rounded-xl card-image" />
                                    <div
                                        class="bg-gradient-to-b from-emerald-100 to-emerald-500 border-2 border-black rounded-xl p-4 card-content">
                                        <span v-if="isSevenSummit" class="seven-summit-badge">★</span>
                                        <h1
                                            class="text-2xl lg:text-4xl uppercase text-center my-1 lg:my-4 font-semibold">
                                            {{ card.title }}
                                        </h1>
                                        <div
                                            class="grid grid-cols-1 lg:grid-cols-2 text-lg lg:text-xl rounded-xl border-2 border-black p-2 bg-orange-200">
                                            <div class="py-2 flex items-center">
                                                📏
                                                <span class="mx-2">Elevation:
                                                    <br><b>{{ card.height }}m/{{ card.feet }}ft</b></span>
                                            </div>
                                            <div class="py-2 flex items-center">
                                                🌍 <span class="mx-2">Country: <br><b>{{ card.country }}</b></span>
                                            </div>
                                            <div class="py-2 flex items-center">
                                                🏔️
                                                <span class="mx-2">Mountain Range: <br><b>{{ card.range }}</b></span>
                                            </div>
                                            <div class="py-2 flex items-center">
                                                🧗‍♂️
                                                <span class="mx-2">First Ascent: <br><b>{{ card.ascent }}</b></span>
                                            </div>
                                        </div>
                                        <div class="text-lg lg:text-xl">
                                            <div class="border-2 border-black bg-yellow-200 rounded-lg p-4">
                                                📜<br />
                                                {{ card.content }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template> {{ card.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MountainCard',
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    computed: {
        isSevenSummit() {
            const sevenSummits = [
                "Mount Everest",
                "Aconcagua", 
                "Mount Denali", 
                "Mount Kilimanjaro", 
                "Mount Elbrus", 
                "Vinson Massif", 
                "Mount Kosciuszko" 
            ];

            return sevenSummits.includes(this.card.title);
        },

        summitRank() {
            const sevenSummitsRanked = {
                "Mount Everest": 1, 
                "Aconcagua": 2,
                "Mount Denali": 3,
                "Mount Kilimanjaro": 4,
                "Mount Elbrus": 5,
                "Vinson Massif": 6,
                "Mount Kosciuszko": 7 
            };

            return this.isSevenSummit ? sevenSummitsRanked[this.card.title] : null;
        }
    },
};
</script>

<style scoped>
@font-face {
    font-family: MastonRegular;
    src: url("@/assets/Fonts/MRKMaston-Regular.ttf") format("truetype");
}

.card {
    position: absolute;
    width: 25%;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        box-shadow 0.4s ease,
        z-index 0s 0.1s;
    z-index: 7;
    filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07));
}

.card:hover {
    transform: translateY(5px) scale(1.03);
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15));
    z-index: 999;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        filter 0.4s ease,
        z-index 0s;
}

.card-wrapper {
    position: relative;
    width: 100%;
    font-family: MastonRegular, sans-serif;
}

.card img {
    height: 75%;
    margin: auto;
}

.card-wrapper img {
    width: 50%;
}

.card-image {
    z-index: 1;
    transition: all 0.3s ease-in-out;
    width: 70%;
    opacity: 0.85;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
    position: relative;
}

.card-image::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 13px;
    opacity: 0;
    animation: pulse-outline 3s ease-in-out infinite;
    pointer-events: none;
}

@keyframes pulse-outline {

    0%,
    100% {
        opacity: 0;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.02);
    }
}

.card-wrapper {
    position: relative;
    width: 100%;
}

.card-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center,
            rgba(255, 255, 255, 0.2),
            transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
    pointer-events: none;
}

.card:hover .card-wrapper::before {
    opacity: 0.7;
}

.card:hover::after {
    opacity: 0;
}

.iconImage {
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
}

.card-content {
    display: none;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(to bottom, #f0fdfa, #34d399);
    border: 2px solid #065f46;
    border-radius: 12px;
    padding: 1.5rem;
}

.card-content img {
    width: 80%;
    border: 2px solid #fbbf24;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover .card-image {
    opacity: 0;
}

.card:hover .card-content {
    display: block;
    opacity: 1;
}

.card-content h1 {
    color: #1f2937;
}

.card-content .grid {
    border-color: #065f46;
    color: #1f2937;
}

.card-content .additional-content {
    background-color: #fef9c3;
    border-color: #fbbf24;
    color: #1f2937;
}

.seven-summit-star {
    position: absolute;
    top: -10px;
    right: 20%;
    color: gold;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    z-index: 50;
    animation: twinkle 1.5s infinite alternate;
}

 .seven-summit-badge {
    position: relative;
    top: 10px;
    right: 10px;
    color: gold;
    font-size: 28px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 10;
    animation: twinkle 1.5s infinite alternate;
}

@keyframes twinkle {
    0% {
        opacity: 0.7;
        transform: scale(1);
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.7);
    }

    100% {
        opacity: 1;
        transform: scale(1.2);
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 215, 0, 0.9);
    }
}


@media only screen and (max-width: 1200px) {
    .card {
        width: 75%;
        margin: 0 auto;
    }

    .card img {
        height: 65%;
        margin: auto;
    }

    .card-content img {
        display: none;
    }

    .card-wrapper img {
        width: 40%;
    }

    .height-scale {
        font-size: 1.5em;
    }

}
</style>