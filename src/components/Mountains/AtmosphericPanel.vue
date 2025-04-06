<template>
    <div class="atmospheric-panel">
        <div class="panel-title">Atmospheric Conditions</div>
        <div class="condition-item">
            <div class="condition-label">
                <span class="icon">💨</span> Wind Speed:
            </div>
            <div class="condition-value" :class="windSpeedClass">
                {{ windSpeed }} km/h
            </div>
        </div>
        <div class="condition-item">
            <div class="condition-label">
                <span class="icon">🌡️</span> Temperature:
            </div>
            <div class="condition-value" :class="temperatureClass">
                {{ temperature }}°C
            </div>
        </div>
        <div class="condition-item">
            <div class="condition-label">
                <span class="icon">🫁</span> Oxygen Level:
            </div>
            <div class="condition-value" :class="oxygenLevelClass">
                {{ Math.round(oxygenLevel) }}%
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AtmosphericPanel',
    props: {
        oxygenLevel: {
            type: Number,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        windSpeed: {
            type: Number,
            required: true
        }
    },
    computed: {
        oxygenLevelClass() {
            if (this.oxygenLevel < 40) return 'critical';
            if (this.oxygenLevel < 60) return 'warning';
            return 'normal';
        },
        temperatureClass() {
            if (this.temperature < -20) return 'critical';
            if (this.temperature < 0) return 'warning';
            if (this.temperature > 25) return 'hot';
            return 'normal';
        },
        windSpeedClass() {
            if (this.windSpeed > 80) return 'critical';
            if (this.windSpeed > 50) return 'warning';
            return 'normal';
        }
    }
};
</script>

<style scoped>
.atmospheric-panel {
    position: fixed;
    top: 15%;
    left: 7%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    padding: 15px;
    color: white;
    font-family: Maston, sans-serif;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    width: 260px;
    z-index: 10;
}

.panel-title {
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 5px;
}

.condition-item {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    align-items: center;
}

.condition-label {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 5px;
    font-size: 1.2em;
}

.condition-value {
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 5px;
    text-align: right;
}

.condition-value.normal {
    background: rgba(34, 197, 94, 0.3);
}

.condition-value.warning {
    background: rgba(251, 146, 60, 0.3);
}

.condition-value.critical {
    background: rgba(239, 68, 68, 0.3);
    animation: pulse-alert 1.5s infinite;
}

.condition-value.hot {
    background: rgba(249, 115, 22, 0.3);
}

.toggle-effects-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px 15px;
    border-radius: 30px;
    cursor: pointer;
    font-family: Maston, sans-serif;
    z-index: 100;
    transition: all 0.2s ease;
}

.toggle-effects-btn:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
}



@keyframes pulse-alert {

    0%,
    100% {
        opacity: 0.8;
    }

    50% {
        opacity: 1;
    }
}

@media screen and (max-width: 1800px) {
    .atmospheric-panel {
        top: auto;
        left: 12%;
        bottom: 50%;
    }
}

@media only screen and (max-width: 1100px) {
    .atmospheric-panel {
        display: none;
    }
}
</style>