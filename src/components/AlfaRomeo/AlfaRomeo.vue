<template>
  <div class="grid ">
    <div id="1993" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-left font-bold py-10">
        <span
          class="pr-8 border-dashed border-white border-b-2 transition-all duration-500 hover:pr-28 hover:border-b-8 hover:text-6xl"
          >FIRST RACE</span
        >
      </div>
      <div class="text-2xl text-justify">
        <img
          src="/Images/AlfaRomeo/Farina1950.png"
          alt="Farina winning first driver's title"
          class="xl:h-3/5 xl:w-5/12 ml-2 mr-12 float-left cursor-default rounded-2xl transition-all duration-500 alfaImages"
        />
        <div class="pt-8 pb-4">
          The Alfa Romeo team dominated the British Grand Prix at the fast Silverstone circuit in England, locking 
          out the four-car front row of the grid. Giuseppe Farina won the race from pole position, also setting the 
          fastest lap. The podium was completed by his teammates Luigi Fagioli and Reg Parnell, 
          while the remaining Alfa driver, Juan Manuel Fangio, was forced 
          to retire after experiencing problems with his engine.<br />
          <p class="text-right text-xl text-gray-500 italic">
            Source: Wikipedia
          </p>
        </div>
      </div>
    </div>
    <div id="1995" class="p-12 mb-6">
      <div class="text-4xl md:text-5xl text-right font-bold py-10">
        <span
          class="pr-2 border-white border-b-2 transition-all duration-500 hover:pl-28 hover:border-b-8 hover:text-6xl"
          >LAST WIN</span
        >
      </div>
      <div class="text-2xl text-justify">
        <img    
          src="/Images/AlfaRomeo/alfaRomeo1951.png"
          alt="Alfa Romeo 159"
          class="xl:h-3/5 xl:w-5/12 mr-2 ml-12 float-right cursor-default rounded-2xl opacity-50 hover:opacity-100 transition-all duration-500 alfaImages"
        />
        <div class="pt-8 pb-4">
          The first ever Formula One Spanish Grand Prix, held at the Pedralbes street circuit in Barcelona
           The Ferrari and Alfa Romeo teams each ran four cars, with Ferrari fielding Ascari, Gigi Villoresi, Froilan González, and Piero Taruffi 
           and Alfa Romeo running Fangio, Giuseppe Farina, Felice Bonetto, and Baron Emanuel de Graffenried. 
           Ascari led from the start, with González chasing, but by the end of the first lap, González had dropped to fifth behind Farina, Fangio, and Bonetto. 
           Fangio quickly passed Farina and took the lead from Ascari on the fourth lap. As Fangio sailed away to victory,
            Ferrari's challenge fell apart along with its tires – the team having opted to use smaller wheels than normal.
            Fangio duly won the race and his first of five championships, with González finishing second and Farina third.<br />
          <p class="text-right text-xl text-gray-500 italic">
            Source: Wikipedia
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animated-border-boxar,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxar:before,
.animated-border-box-glow:before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  /*border color, change middle color*/
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #004e37,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxar:after {
  content: "";
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #00b901;
  /*box border radius*/
  border-radius: 5px;
}

.alfaImages {
  --g:#0000 ,#000 .5deg 90deg,#0000 91deg;
  --m:
    conic-gradient(from 45deg ,var(--g)) 20px 0  no-repeat,
    conic-gradient(from 135deg,var(--g)) 0 20px  no-repeat,
    conic-gradient(from 225deg,var(--g)) -20px 0 no-repeat,
    conic-gradient(from 315deg,var(--g)) 0 -20px no-repeat;
  -webkit-mask: var(--m);
          mask: var(--m);
  transition: .3s linear;
  filter: grayscale(.5);
  cursor: pointer;
}
.alfaImages:hover {
  -webkit-mask-position: 0 0;
          mask-position: 0 0;
  filter: grayscale(0);
}


</style>
