<script>
export default {
    name: "Oort Cloud",
    mounted() {
        this.$nextTick(() => {
            this.createParticles(this.$refs.nearLayer, 150); // particles in near layer
            this.createParticles(this.$refs.midLayer, 200); // particles in mid layer
            this.createParticles(this.$refs.farLayer, 270); // particles in far layer
            this.createComets(document.querySelector('.oort-cloud'), 10); // comets
        });
    },
    methods: {
        createParticles(layer, count) {
            if (!layer) return;

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');

                particle.className = 'oort-particle';

                const sizeClass = `size-${Math.floor(Math.random() * 4) + 1}`;
                particle.classList.add(sizeClass);

                const colorClass = `color-${Math.floor(Math.random() * 4) + 1}`;
                particle.classList.add(colorClass);

                if (Math.random() < 0.05) {
                    particle.classList.add('comet');
                }

                const phi = Math.random() * Math.PI * 2; 
                const theta = Math.acos(2 * Math.random() - 1); 
                const radius = 40 + Math.random() * 50; 

                const sphereX = radius * Math.sin(theta) * Math.cos(phi);
                const sphereY = radius * Math.sin(theta) * Math.sin(phi);
                const sphereZ = radius * Math.cos(theta);

                particle.style.left = `calc(50% + ${sphereX}vmin)`;
                particle.style.top = `calc(50% + ${sphereY}vmin)`;
                particle.style.transform = `translateZ(${sphereZ}px)`;

                const delay = Math.random() * 20;
                particle.style.animationDelay = `${delay}s`;

                const opacity = 0.3 + Math.random() * 0.7;
                particle.style.setProperty('--particle-opacity', opacity);

                layer.appendChild(particle);
            }
        },

        createComets(container, count) {
            if (!container) return;

            for (let i = 0; i < count; i++) {
                const comet = document.createElement('div');
                comet.className = 'oort-comet';

                const size = 2 + Math.random() * 3;
                comet.style.width = `${size}px`;
                comet.style.height = `${size}px`;

                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                comet.style.left = `${startX}%`;
                comet.style.top = `${startY}%`;

                const tailLength = 30 + Math.random() * 80;
                comet.style.setProperty('--tail-length', `${tailLength}px`);

                const delay = Math.random() * 20;
                comet.style.setProperty('--comet-delay', `${delay}s`);

                container.appendChild(comet);
            }
        },
    }
}
</script>

<template>
    <div class="oort-cloud">
        <h1 class="oort-cloud-title">Oort Cloud</h1>
        <div class="oort-info-box">
            <h2 class="oort-info-title">Oort Cloud</h2>
            <p class="oort-info-text">
                A theoretical cloud of predominantly icy objects believed to surround the Sun at distances from 2,000 to
                100,000 AU.
                It is the source of long-period comets and may contain trillions of icy bodies.
            </p>
        </div>
        <div class="oort-sphere"></div>
        <div class="oort-particle-layer oort-particles-near" ref="nearLayer"></div>
        <div class="oort-particle-layer oort-particles-mid" ref="midLayer"></div>
        <div class="oort-particle-layer oort-particles-far" ref="farLayer"></div>
    </div>
</template>

<style>
.oort-cloud {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    perspective: 2500px;
}

.oort-cloud-title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 3rem;
    text-align: center;
    z-index: 10;
    font-family: "Equinox", sans-serif;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.oort-info-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 15px 25px;
    color: #fff;
    font-family: "SpaceOdyssey", sans-serif;
    backdrop-filter: blur(5px);
    max-width: 400px;
    text-align: center;
    z-index: 10;
    opacity: 0.9;
    transition: all 0.3s ease;
}

.oort-info-box:hover {
    background: rgba(30, 30, 40, 0.8);
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 0 20px rgba(100, 100, 255, 0.3);
}

.oort-info-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #ccc, #fff, #ccc);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
}

.oort-info-text {
    font-size: 1.1rem;
    line-height: 1.4;
    color: #ddd;
    font-family: "SpaceRegular", sans-serif;
}

.oort-particle-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.oort-particles-near {
    transform-style: preserve-3d;
    animation: oortParticlesNear 120s linear infinite;
}

.oort-particles-mid {
    transform-style: preserve-3d;
    animation: oortParticlesMid 180s linear infinite;
}

.oort-particles-far {
    transform-style: preserve-3d;
    animation: oortParticlesFar 240s linear infinite;
}

.oort-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    opacity: 0;
    animation: particleFade 20s infinite ease-in-out;
}

.oort-particle.size-1 {
    width: 1px;
    height: 1px;
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.4);
}

.oort-particle.size-2 {
    width: 2px;
    height: 2px;
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.5);
}

.oort-particle.size-3 {
    width: 3px;
    height: 3px;
    box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.6);
}

.oort-particle.color-1 {
    background: rgba(255, 255, 255, 0.9);
}

.oort-particle.color-2 {
    background: rgba(200, 220, 255, 0.8);
}

.oort-particle.color-3 {
    background: rgba(180, 180, 255, 0.7);
}

.oort-particle.color-4 {
    background: rgba(255, 230, 210, 0.8);
}

.oort-particle.comet {
    width: 4px;
    height: 4px;
    box-shadow: 0 0 6px 2px rgba(200, 220, 255, 0.9),
        0 0 12px 6px rgba(180, 200, 255, 0.5);
    background: rgb(220, 235, 255);
    opacity: 0.9;
}

.oort-particle.comet::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 1px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent);
    right: 1px;
    top: 50%;
    transform: translateY(-50%);
}

@keyframes oortParticlesNear {
    0% {
        transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg);
    }

    100% {
        transform: rotateZ(360deg) rotateY(120deg) rotateX(40deg);
    }
}

@keyframes oortParticlesMid {
    0% {
        transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg);
    }

    100% {
        transform: rotateZ(-360deg) rotateY(240deg) rotateX(-40deg);
    }
}

@keyframes oortParticlesFar {
    0% {
        transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg);
    }

    100% {
        transform: rotateZ(180deg) rotateY(-180deg) rotateX(60deg);
    }
}

@keyframes particleFade {

    0%,
    100% {
        opacity: 0;
    }

    20%,
    80% {
        opacity: var(--particle-opacity, 0.7);
    }
}

@keyframes sphericalRotation {
    0% {
        transform: rotate3d(1, 1, 1, 0deg);
    }

    100% {
        transform: rotate3d(1, 1, 1, 360deg);
    }
}

@keyframes cometMove {
    0% {
        opacity: 0;
        transform: translate(-100%, -100%) scale(0.5);
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(100%, 100%) scale(1.5);
    }
}

.oort-comet {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    filter: blur(0.5px);
    opacity: 0;
    z-index: 5;
    animation: cometMove 20s infinite linear;
    animation-delay: var(--comet-delay, 0s);
}

.oort-comet::after {
    content: '';
    position: absolute;
    width: var(--tail-length, 50px);
    height: 1px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.7), transparent);
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.oort-sphere {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform: translate(-50%, -50%);
    animation: sphericalRotation 300s infinite linear;
}

.oort-sphere::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.03);
    transform: rotate(45deg);
}

.oort-sphere::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.03);
    transform: rotate(135deg);
}
</style>