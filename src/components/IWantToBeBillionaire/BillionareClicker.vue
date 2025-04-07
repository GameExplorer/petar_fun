<template>
    <div>Billionaire Clicker Game</div>
    <div>
        <button @click="increment">Click me!</button>
        <p>Clicks: {{ clicks }}</p>
        <p>Money: {{ money }}</p>
        <p>Upgrades:</p>
        <ul>
            <li v-for="(upgrade, index) in upgrades" :key="index">
                {{ upgrade.name }}: {{ upgrade.cost }} ({{ upgrade.multiplier }}x)
                <button @click="buyUpgrade(index)" :disabled="money < upgrade.cost">Buy</button>
            </li>
        </ul>
        <p>Auto Clickers:</p>
        <ul>
            <li v-for="(autoClicker, index) in autoClickers" :key="index">
                {{ autoClicker.name }}: {{ autoClicker.cost }} ({{ autoClicker.multiplier }}x)
                <button @click="buyAutoClicker(index)" :disabled="money < autoClicker.cost">Buy</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BillionaireClickerGame",
    data() {
        return {
            clicks: 0,
            money: 0,
            upgrades: [
                { name: "Upgrade 1", cost: 10, multiplier: 1 },
                { name: "Upgrade 2", cost: 50, multiplier: 5 },
                { name: "Upgrade 3", cost: 100, multiplier: 10 },
            ],
            autoClickers: [
                { name: "Auto Clicker 1", cost: 20, multiplier: 1 },
                { name: "Auto Clicker 2", cost: 100, multiplier: 5 },
            ],
        };
    },
    methods: {
        increment() {
            this.clicks++;
            this.money += 1;
        },
        buyUpgrade(index) {
            const upgrade = this.upgrades[index];
            if (this.money >= upgrade.cost) {
                this.money -= upgrade.cost;
                this.clicks *= upgrade.multiplier;
                upgrade.cost *= 2; // Increase cost for next purchase
            }
        },
        buyAutoClicker(index) {
            const autoClicker = this.autoClickers[index];
            if (this.money >= autoClicker.cost) {
                this.money -= autoClicker.cost;
                setInterval(() => {
                    this.clicks += autoClicker.multiplier;
                    this.money += autoClicker.multiplier;
                }, 1000); // Auto click every second
                autoClicker.cost *= 2; // Increase cost for next purchase
            }
        },
    },
    watch: {
        clicks(newClicks) {
            this.money += newClicks; // Convert clicks to money
        },
    },
    computed: {
        totalUpgrades() {
            return this.upgrades.reduce((total, upgrade) => total + upgrade.multiplier, 0);
        },
        totalAutoClickers() {
            return this.autoClickers.reduce((total, autoClicker) => total + autoClicker.multiplier, 0);
        },
    },
}
</script>