<template>
  <section id="timeline" class="flex bg-[#031625]">
  
  <div id="2008" class="tl-item">
    <div class="tl-bg" style="background-image: url('/Images/AlphaTauri/vettel2008.png')"></div>
    <div class="absolute top-2/4 left-2/4 z-[1] -translate-x-2/4 -translate-y-2/4 border-t-2 border-white border-b-2">
      <p class="text-4xl leading-none">2008</p>
    </div>
    <div class="tl-content">
      <h1 class="font-bold text-2xl uppercase text-blue-400">FIRST VICTORY</h1>
      <p>The race started under the SC. Rain early in the race allowed Vettel to 
         establish a solid lead over Kovalainen, which he extended as the track dried.
         Vettel's victory made him the youngest driver to win a Formula One race, at 21 years 73 days in addition to giving Toro Rosso
         its maiden Formula One win despite using a 2007-spec engine</p>
    </div>
  </div>
  <div id="2019" class="tl-item">
    <div class="tl-bg" style="background-image: url('/Images/AlphaTauri/gasly2019.png')"></div>
    <div class="absolute top-2/4 left-2/4 z-[1] -translate-x-2/4 -translate-y-2/4 border-t-2 border-white border-b-2">
      <p class="text-4xl leading-none">2019</p>
    </div>
    <div class="tl-content">
      <h1 class="font-bold text-2xl uppercase text-blue-400">DOUBLE PODIUMS</h1>
      <p>At the chaotic 2019 German Grand Prix, Daniil Kvyat scored a shock podium for the team, 
        in what was the team's first podium finish since 2008.
        Later in 2019, Pierre Gasly finished second at the Brazilian Grand Prix by 0.062 seconds ahead of Mercedes 
        driver Lewis Hamilton taking the team's third podium, its second of the year, and also his maiden podium finish. 
        This would prove to be the team's most successful season yet, scoring more points than in any other season previously.</p>
    </div>
  </div>
  <div id="2020" class="tl-item">
    <div class="tl-bg" style="background-image: url('/Images/AlphaTauri/gasly2020.png')"></div>
    <div class="absolute top-2/4 left-2/4 z-[1] -translate-x-2/4 -translate-y-2/4 border-t-2 border-white border-b-2">
      <p class="text-4xl leading-none">2020</p>
    </div>
    <div class="tl-content">
      <h1 class="font-bold text-2xl uppercase text-blue-400">GASLY'S FIRST WIN</h1>
      <p>The race was won by Pierre Gasly of AlphaTauri-Honda, who took his first Formula One win and became the 
        first French Formula One driver to win a race since Olivier Panis won the 1996 Monaco Grand Prix. 
        Gasly started the race in tenth, but gained positions due to a well-timed pit-stop prior to a safety car, 
        sent to retrieve the broken car of Kevin Magnussen. Lewis Hamilton, who led the race until this point, 
        was given a penalty for entering the pit lane when it was closed, passing the lead to Gasly, 
        who defended from McLaren's Carlos Sainz Jr. in the closing stages of the race. Racing Point's Lance Stroll 
        completed the podium.</p>
    </div>
  </div>
  <div id="2021" class="tl-item">
    <div class="tl-bg" style="background-image: url('/Images/AlphaTauri/gasly2021.png')"></div>
    <div class="absolute top-2/4 left-2/4 z-[1] -translate-x-2/4 -translate-y-2/4 border-t-2 border-white border-b-2">
      <p class="text-4xl leading-none">2021</p>
    </div>
    <div class="tl-content">
      <h1 class="font-bold text-2xl uppercase text-blue-400">PODIUM IN AZERBAIJAN</h1>
      <p>Both championship contenders, Lewis Hamilton and Max Verstappen, experienced problems during the 51-lap race. 
        Verstappen retired due to a high-speed tyre blowout, while Hamilton made a severe error at the resultant restart. 
        Their troubles cleared the way for Sergio Pérez, Verstappen's teammate, to win his second Grand Prix, 
        following his victory at the 2020 Sakhir Grand Prix. Sebastian Vettel took second place for his only 
        podium with Aston Martin, and the final podium finish of his career, 
        while Pierre Gasly claimed third place for AlphaTauri</p>
    </div>
  </div>
</section>    
</template>

<script>
export default {
    name: "AlphaTauri",

}
</script>

<style>

#timeline:hover .tl-item {
  width: 23.3333%;
}

.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 100vh;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
}

.tl-item:before,
.tl-item:after {
  transform: translate3d(0, 0, 0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.tl-item:after {
  background: transparentize(#031625, 0.15);
  opacity: 1;
  transition: opacity 0.5s ease;
}

.tl-item:before {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 0, 0) translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.tl-item:hover {
  width: 30% !important;
}

.tl-item:hover:after {
  opacity: 0;
}

.tl-item:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}

.tl-item:hover .tl-content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}

.tl-item:hover .tl-bg {
  filter: grayscale(0);
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
}

.tl-bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}

/* Alpha Tauri */

.animated-border-boxat,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxat:before,
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
    #f1f3f4,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxat:after {
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
  background: #1534cc;
  /*box border radius*/
  border-radius: 5px;
}

</style>