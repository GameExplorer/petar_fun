<template>
  <div class="container pb-12">
    <div id="2021" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/azerbaijan2021.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Azerbaijan 2021 Podium</h2>
          <p>
            Sebastain Vettel finished second in the Azerbaijan Grand Prix, his first podium since the 2019 Mexican Grand Prix.
            First podium for Aston Martin in Formula One.
          </p>
        </div>
      </div>
    </div>
    <div id="20231" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoBahrain.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Bahrain 2023</h2>
          <p>
             Fernando Alonso finished third. This was only Alonso's second podium since the 2014 Hungarian Grand Prix, 
             and the first of eight for the season.
          </p>
        </div>
      </div>
    </div>
    <div id="20232" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoSaudia.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Saudia Arabia 2023</h2>
          <p>
            Alonso finished third. This was Alonso's 100th podium in Formula One.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-2">
    <div id="20233" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoAustralia.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Australia 2023</h2>
          <p>
            Alonso qualified well and finished third in the race. The race podium featured three world champions,
            with Alonso, Lewis Hamilton and Max Verstappen.
          </p>
        </div>
      </div>
    </div>
    <div id="20234" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoMiami.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Miami 2023</h2>
          <p>
             Fernando Alonso made it four podiums from five races this was Aston Martin best
             podium run ever.
          </p>
        </div>
      </div>
    </div>
    <div id="20235" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoMonaco.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Monaco 2023</h2>
          <p>
            In Monaco Alonso finished second ahead of Ocon. The race was won by Max Verstappen.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-16">
    <div id="20236" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoCanada.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Canada 2023</h2>
          <p>
            Alonso battles past Hamilton to reclaim P2. Lewis Hamilton got the jump on Fernando Alonso 
            on the opening lap to grab second place, but on Lap 22 the Spaniard retook the 
            place with a brilliant move approaching the final chicane.
          </p>
        </div>
      </div>
    </div>
    <div id="20237" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoDutch.png"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Netherlands 2023</h2>
          <p>
             The race was won by Max Verstappen, with Alonso finishing second and Pierre Gasly completing the podium.
          </p>
        </div>
      </div>
    </div>
    <div id="20238" class="box">
      <div class="imgBx">
        <img
          src="/Images/AstonMartin/alonsoBrazil.png" alt="Alonso Brazil 2023"
        />
      </div>
      <div class="content">
        <div>
          <h2 class="uppercase">Brazil 2023</h2>
            <p>
                Fernando Alonso and Sergio Perez played out an enthralling duel for third place in Brazil. 
                erez snatched it on Lap 70, but Alonso re-took the place on the last lap and then just won the 
                drag race to the finish line.          
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AstonMartin",
};
</script>

<style>
/* Aston Martin */
.animated-border-boxam,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxam:before,
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
    #00352f,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxam:after {
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
  background: #006f62;
  /*box border radius*/
  border-radius: 5px;
}

.container {
  position: relative;
  width: 1160px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 500px;
  margin: auto;
}
.container .box {
  position: relative;
  width: 275px;
  height: 275px;
  background: #000;
  transition: 0.5s;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-right: 15px;
  margin-top: 45px;
}
.container:hover .box {
  transform: rotateY(25deg);
}
.container .box:hover ~ .box {
  transform: rotateY(-25deg);
}
.container .box:hover {
  transform: rotateY(0deg) scale(1.25);
  z-index: 1;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}
.container .box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.container .box .imgBx:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f00, #000);
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.container .box:hover .imgBx:before {
  opacity: 1;
}
.container .box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
}
.container .box .content h2 {
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
  transition-delay: 0.3s;
}
.container .box:hover .content h2 {
  transform: translateY(0px);
}
.container .box .content p {
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(200px);
  transition-delay: 0.4s;
}
.container .box:hover .content p {
  transform: translateY(0px);
}
</style>
