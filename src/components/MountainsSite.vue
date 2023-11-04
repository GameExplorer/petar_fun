<script>
export default {
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
};

</script>

<template>
    <div v-cloak>
        <div class="Everest">
            Here we put Everest Image with A 8864M on top of it maybe animation?
        </div>
        <div class="bg-[#053B50] py-32">
            GORE +
            8K MOUNTAINS
        </div>
        <div class="bg-[#176B87] py-32">
                gore 5 - 7.9K MOUNTAINS
        </div>
        <div class="bg-[#64ccc5] py-64">
                GORE 2 - 4.9K MOUNTAINS
        </div>
        <div class="bg-[#eeeeee] mountains2k grid grid-cols-8 gap-16">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div class="col-span-2 fadein">
                <img src="@/assets/Images/test.webp" alt="Everest"/>
            </div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>

                GORE 0 - 1.9K MOUNTAINS/HILLS
        </div>
    </div>
</template>

<style>
@font-face {
    font-family: 'Maston';
    src: url('@/assets/Fonts/MRKMaston-Bold.ttf') format('truetype');
}

body {
    font-family: 'Maston';
}

.mountains2k {
    padding-top: 10rem;
    padding-bottom: 50rem;
}

.fadein img {
    opacity: 0.5;
    transition: 1s ease;
}

.fadein img:hover {
    opacity: 1;
    transition: 1s ease;
}
</style>
