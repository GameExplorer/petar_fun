<script>
export default {
    data() {
        return {
            currentAU: 0,
            scrollContainer: null,
            showMeter: false,
            visibleBody: null,
            meterWidth: 320, // Default width in pixels
            isResizing: false,
            startX: 0,
            startWidth: 0,
            minWidth: 200, // Minimum width
            maxWidth: 800, // Maximum width
            breakpointAU: 120, // Where the scale changes
            breakpointPct: 90, // What percentage of the scale the breakpoint represents
            celestialBodies: {
                sun: 0,
                mercury: 0.31,
                venus: 0.72,
                earth: 0.99,
                mars: 1.66,
                ceres: 3.93,
                jupiter: 5.10,
                saturn: 9.62,
                uranus: 19.54,
                neptune: 29.89,
                pluto: 35.21,
                haumea: 50.47,
                makemake: 52.01,
                eris: 97.19,
                sedna: 84.28,
                heliosphere: 100,
                voyager1: 167.28,
                oortCloud: 2000, // Using the 2000 AU value
            }
        }
    },
    mounted() {
        this.scrollContainer = document.querySelector('.scroll-wrapper');
        if (this.scrollContainer) {
            this.scrollContainer.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        }

        // Add resize event listeners to document
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('touchmove', this.onTouchMove);
        document.addEventListener('touchend', this.onTouchEnd);
    },
    beforeDestroy() {
        if (this.scrollContainer) {
            this.scrollContainer.removeEventListener('scroll', this.handleScroll);
        }

        // Remove resize event listeners
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
    },
    methods: {
        // Get visual position on the scale based on AU value
        getVisualPosition(au) {
            if (au <= this.breakpointAU) {
                // Linear scale for inner solar system
                return (au / this.breakpointAU) * this.breakpointPct;
            } else {
                // Compressed scale for outer regions
                const remainingPct = 100 - this.breakpointPct;
                const remainingAU = 2000 - this.breakpointAU;
                return this.breakpointPct + ((au - this.breakpointAU) / remainingAU) * remainingPct;
            }
        },

        // Resize handlers
        startResize(event) {
            this.isResizing = true;
            this.startX = event.clientX || event.touches[0].clientX;
            this.startWidth = this.meterWidth;

            // Prevent default to avoid text selection during drag
            event.preventDefault();
        },

        onMouseMove(event) {
            if (!this.isResizing) return;
            this.resizeMeter(event.clientX);
        },

        onTouchMove(event) {
            if (!this.isResizing) return;
            this.resizeMeter(event.touches[0].clientX);
        },

        resizeMeter(clientX) {
            // Calculate the new width based on the drag distance
            // (Drag left to expand because the meter is positioned on the right)
            const deltaX = this.startX - clientX;
            let newWidth = this.startWidth + deltaX;

            // Enforce min/max width constraints
            newWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));

            // Update the meter width
            this.meterWidth = newWidth;
        },

        onMouseUp() {
            this.isResizing = false;
        },

        onTouchEnd() {
            this.isResizing = false;
        },

        handleScroll() {
            if (!this.scrollContainer) return;

            // Check if we've scrolled past the sun section
            const sunSection = document.querySelector('.sun')?.closest('.screen');
            if (sunSection) {
                const sunRect = sunSection.getBoundingClientRect();
                this.showMeter = sunRect.bottom < 0;
            }


            if (!this.showMeter) return;

            // Find visible planets and their positions
            const planetPositions = [];
            Object.entries(this.celestialBodies).forEach(([planet, au]) => {
                const planetElement = document.querySelector(`.${planet}`);
                if (planetElement) {
                    const rect = planetElement.getBoundingClientRect();
                    const centerY = rect.top + (rect.height / 2);
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                    if (isVisible) {
                        this.visibleBody = planet;
                    }

                    planetPositions.push({
                        planet,
                        au,
                        centerY,
                        rect
                    });
                }
            });

            // Sort planets by vertical position
            planetPositions.sort((a, b) => a.centerY - b.centerY);

            // Find the two closest planets to the viewport center
            const viewportCenter = window.innerHeight / 2;
            let prevPlanet = null;
            let nextPlanet = null;

            for (let i = 0; i < planetPositions.length; i++) {
                if (planetPositions[i].centerY > viewportCenter) {
                    prevPlanet = planetPositions[Math.max(0, i - 1)];
                    nextPlanet = planetPositions[i];
                    break;
                }
            }

            if (prevPlanet && nextPlanet) {
                // Calculate progress between the two planets
                const totalDistance = nextPlanet.centerY - prevPlanet.centerY;
                const distanceFromPrev = viewportCenter - prevPlanet.centerY;
                const progress = distanceFromPrev / totalDistance;

                // Interpolate AU value
                const auDiff = nextPlanet.au - prevPlanet.au;
                this.currentAU = parseFloat((prevPlanet.au + (progress * auDiff)).toFixed(2));
            } else if (planetPositions.length > 0) {
                if (viewportCenter < planetPositions[0].centerY) {
                    this.currentAU = 0;
                } else if (viewportCenter > planetPositions[planetPositions.length - 1].centerY) {
                    this.currentAU = planetPositions[planetPositions.length - 1].au;
                }
            }
        },
        scrollToPlanet(planet) {
            const planetElement = document.querySelector(`.${planet}`);
            if (planetElement && this.scrollContainer) {
                const planetScreen = planetElement.closest('.screen');
                if (planetScreen) {
                    const planetOffset = planetScreen.offsetTop;
                    this.scrollContainer.scrollTo({
                        top: planetOffset,
                        behavior: 'smooth'
                    });
                }
            }
        },
        getNearestBody() {
            let nearest = 'mercury';
            let smallestDiff = Infinity;

            for (const [body, au] of Object.entries(this.celestialBodies)) {
                const diff = Math.abs(au - this.currentAU);
                if (diff < smallestDiff) {
                    smallestDiff = diff;
                    nearest = body;
                }
            }
            return nearest;
        },
        getNextBody() {
            const current = this.getNearestBody();
            const sortedBodies = Object.entries(this.celestialBodies)
                .sort((a, b) => a[1] - b[1])
                .map(entry => entry[0]);

            const currentIndex = sortedBodies.indexOf(current);
            if (currentIndex < sortedBodies.length - 1) {
                return sortedBodies[currentIndex + 1];
            }
            return null;
        },
        formatBodyName(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    },
    computed: {
        nearestCelestialBody() {
            return this.getNearestBody();
        },
        nextCelestialBody() {
            return this.getNextBody();
        },
        displayAU() {
            return Math.max(0, Math.min(2000, this.currentAU));
        },
        currentBodyFormatted() {
            return this.formatBodyName(this.nearestCelestialBody);
        },
        nextBodyFormatted() {
            return this.nextCelestialBody ? this.formatBodyName(this.nextCelestialBody) : '-';
        },
        currentAUStatus() {
            return this.visibleBody === this.nearestCelestialBody ? 'in-range' : '';
        },
        meterStyle() {
            return {
                width: `${this.meterWidth}px`
            };
        }
    }
}
</script>

<template>
    <div v-if="showMeter" class="au-meter" :style="meterStyle" :class="{ 'resizing': isResizing }">
        <!-- Resize handle on the left side -->
        <div class="resize-handle" @mousedown="startResize" @touchstart="startResize">
            <div class="handle-icon">
                <div class="handle-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </div>

        <!-- Meter content -->
        <div class="meter-content">
            <div class="au-value-container">
                <div class="au-value" :class="currentAUStatus">
                    {{ displayAU }} AU
                </div>
            </div>

            <div class="au-scale">
                <div class="scale-line">
                    <div class="scale-fill" :style="{ width: `${getVisualPosition(displayAU)}%` }"></div>
                </div>
                <div class="scale-marker" v-for="(au, planet) in celestialBodies" :key="planet"
                    :style="{ left: `${getVisualPosition(au)}%` }" @click="scrollToPlanet(planet)">
                    <div class="marker-dot"></div>
                    <div class="marker-label">{{ planet }}</div>
                </div>
                <div class="current-position" :style="{ left: `${getVisualPosition(displayAU)}%` }">
                    <div class="position-indicator"></div>
                </div>
            </div>

            <div class="body-info">
                <div class="current-body">
                    <div class="body-label">Current:</div>
                    <div class="body-details">
                        <div class="body-name">{{ currentBodyFormatted }}</div>
                        <div class="body-range">{{ celestialBodies[nearestCelestialBody].toFixed(2) }} AU</div>
                    </div>
                </div>

                <div class="next-body" v-if="nextCelestialBody">
                    <div class="body-label">Next:</div>
                    <div class="body-details">
                        <div class="body-name">{{ nextBodyFormatted }}</div>
                        <div class="body-range">
                            {{ celestialBodies[nextCelestialBody].toFixed(2) }} AU
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.au-meter {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px;
    border-radius: 10px;
    color: #fff;
    font-family: "Horizon", sans-serif;
    z-index: 1000;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: slideIn 0.5s ease-out forwards;
    opacity: 0;
    transition: width 0.1s ease-out;
    overflow: hidden;
    display: flex;
}

/* Resize handle styling */
.resize-handle {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    cursor: ew-resize;
    display: flex;
    align-items: center;
    justify-content: center;
}

.handle-icon {
    width: 14px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.2s ease;
}

.resize-handle:hover .handle-icon {
    opacity: 1;
}

.handle-line {
    width: 4px;
    height: 20px;
    background: rgba(255, 255, 255, 0.6);
    margin: 0 5px;
    border-radius: 1px;
}

.handle-dots {
    display: flex;
    flex-direction: column;
    margin-top: 2px;
}

.dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    margin: 2px 0;
}

/* When resizing is active */
.au-meter.resizing {
    user-select: none;
    transition: none;
    border-color: rgba(64, 192, 255, 0.5);
    box-shadow: 0 0 15px rgba(64, 192, 255, 0.3);
}

/* Main content container */
.meter-content {
    flex: 1;
    padding-left: 10px;
}

.au-value-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.au-value {
    font-size: 28px;
    padding: 5px 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.au-value.in-range {
    background: rgba(64, 192, 255, 0.3);
    box-shadow: 0 0 15px rgba(64, 192, 255, 0.5);
}

.au-scale {
    position: relative;
    height: 40px;
    margin: 15px 0;
}

.scale-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
    overflow: hidden;
    border-radius: 1px;
}

.scale-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    box-shadow: 0 0 10px rgba(79, 172, 254, 0.7);
    transition: width 0.3s ease-out;
    border-radius: 1px;
}

.scale-marker {
    position: absolute;
    transform: translateX(-50%);
    cursor: pointer;
    transition: transform 0.2s ease;
}

.scale-marker:hover {
    transform: translateX(-50%) scale(1.2);
}

.marker-dot {
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    margin: 0 auto;
    transition: all 0.2s ease;
}

.marker-label {
    font-size: 8px;
    transform: rotate(-45deg);
    margin-top: 5px;
    opacity: 0.7;
    white-space: nowrap;
    transition: opacity 0.2s ease;
}

.current-position {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    transition: left 0.3s ease-out;
}

.position-indicator {
    width: 2px;
    height: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    margin: 0 auto;
}

/* Scale break styling */
.scale-break {
    position: absolute;
    transform: translateX(-50%);
    color: #ff6b6b;
    font-weight: bold;
}

.break-indicator {
    font-size: 14px;
    line-height: 1;
}

.break-label {
    font-size: 8px;
    margin-top: 3px;
    white-space: nowrap;
}

.body-info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.current-body,
.next-body {
    flex: 1;
    padding: 8px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
}

.next-body {
    margin-left: 10px;
}

.body-label {
    font-size: 11px;
    opacity: 0.7;
    margin-bottom: 5px;
}

.body-name {
    font-weight: 500;
    margin-bottom: 3px;
}

.body-range {
    font-size: 12px;
    opacity: 0.8;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.scale-marker:hover .marker-dot {
    background: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    transform: scale(1.5);
}

.scale-marker:hover .marker-label {
    opacity: 1;
}
</style>