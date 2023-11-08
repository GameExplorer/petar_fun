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
            Everest 8848m / 29028ft
K2 8611m / 28250ft
Kanchenjunga 8586m / 28169ft
Lhotse 8516m / 27940ft
Makalu 8463m / 27766ft
Cho Oyu 8201m / 26906ft
Dhaulagiri 8167m / 26795ft
Manaslu 8163m / 26781ft
Nanga Parbat 8125m / 26660ft
Annapurna I 8091m / 26545ft
Gasherbrum I 8068m / 26469ft
Broad Peak 8047m / 26400ft
Gasherbrum II 8035m / 26362ft
Shishapangma 8012m / 26285ft
        </div>
        <div class="bg-[#176B87] py-32">
                gore 5 - 7.9K MOUNTAINS
        </div>
        <div class="bg-[#64ccc5] py-64">
                GORE 2 - 4.9K MOUNTAINS
        </div>
        <div class="bg-[#eeeeee] mountains2k grid grid-cols-8 gap-16">
            <div class="col-span-2">01</div>
            <div class="col-span-2">
                <img src="public/Images/test.webp" alt="Everest"/>
            </div>
            <div class="col-span-2">03</div>
            <div class="col-span-2">04</div>
            <!-- classic zoom-->
            <div class="col-span-2">
                <div class="growImage">
                    <img src="public/Images/test2.png" alt="Everest"/>
                    <span>Everest 8848m / 29028ft</span>
                </div>
            </div>
            <!-- alternative zoom-->
            <div class="col-span-2">
                <div class="group/item growImage">
                    <img src="public/Images/test2.png" alt="Everest"/>
                    <div class="group-hover/edit invisible group-hover/item:visible">
                        <span class="group-hover/opacity-100">Everest 8848m / 29028ft</span>
                    </div>
                </div>
            </div>
            <div class="col-span-2">07</div>
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
    padding-left: 5rem;
}


.growImage {
    opacity: 0.5;
    transition: 1s ease;
}

.growImage:hover {
    /*opacity: 1;*/
    transform: scale(1.1);
    transition: 1s ease;
    /*box-shadow: 15px 10px 15px rgba(16, 15, 8, 0.944);*/
    filter: drop-shadow(15px 0 12px rgba(0, 0, 0, 0.7));
    transform: translateX(-4px);
    opacity: 1;
}

</style>
