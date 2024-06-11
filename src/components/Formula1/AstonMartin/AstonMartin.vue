  <template>
    <div class="container pb-12 grid grid-cols-1 lg:grid-cols-3">
      <div id="2021" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/azerbaijan2021.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Azerbaijan 2021 Podium</h2>
            <p class="pt-16">
              Sebastain Vettel finished second in the Azerbaijan Grand Prix, his
              first podium since the 2019 Mexican Grand Prix. First podium for
              Aston Martin in Formula One.
            </p>
          </div>
        </div>
      </div>
      <div id="20231" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoBahrain.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Bahrain 2023</h2>
            <p class="pt-16">
              Fernando Alonso finished third. This was only Alonso's second podium
              since the 2014 Hungarian Grand Prix, and the first of eight for the
              season.
            </p>
          </div>
        </div>
      </div>
      <div id="20232" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoSaudia.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Saudia Arabia 2023</h2>
            <p class="pt-28">
              Alonso finished third. This was Alonso's 100th podium in Formula
              One.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-2 grid grid-cols-1 lg:grid-cols-3">
      <div id="20233" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoAustralia.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Australia 2023</h2>
            <p class="pt-16">
              Alonso qualified well and finished third in the race. The race
              podium featured three world champions, with Alonso, Lewis Hamilton
              and Max Verstappen.
            </p>
          </div>
        </div>
      </div>
      <div id="20234" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoMiami.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Miami 2023</h2>
            <p class="pt-24">
              Fernando Alonso made it four podiums from five races this was Aston
              Martin best podium run ever.
            </p>
          </div>
        </div>
      </div>
      <div id="20235" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoMonaco.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Monaco 2023</h2>
            <p class="pt-32">
              In Monaco Alonso finished second ahead of Ocon. The race was won by
              Max Verstappen.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-16 grid grid-cols-1 lg:grid-cols-3">
      <div id="20236" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoCanada.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Canada 2023</h2>
            <p class="pt-4">
              Lewis Hamilton got the jump on Fernando Alonso on the opening lap to
              grab second place, but on Lap 22 the Spaniard retook the place with
              a brilliant move approaching the final chicane.
            </p>
          </div>
        </div>
      </div>
      <div id="20237" class="box mx-16">
        <div class="imgBx">
          <img src="/Images/AstonMartin/alonsoDutch.png" />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase">Netherlands 2023</h2>
            <p class="pt-20">
              The race was won by Max Verstappen, with Alonso finishing second and
              Pierre Gasly completing the podium.
            </p>
          </div>
        </div>
      </div>
      <div id="20238" class="box mx-16">
        <div class="imgBx">
          <img
            src="/Images/AstonMartin/alonsoBrazil.png"
            alt="Alonso Brazil 2023"
          />
        </div>
        <div class="content">
          <div>
            <h2 class="uppercase pb-24">Brazil 2023</h2>
            <p class="pt-6">
              Fernando Alonso and Sergio Perez played out an enthralling duel for
              third place in Brazil. erez snatched it on Lap 70, but Alonso
              re-took the place on the last lap and then just won the drag race to
              the finish line.
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
  .container {
    position: relative;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: auto;
  }
  .container .box {
    position: relative;
    width: 70%;
    height: 400px;
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
    padding: 5px;
    align-items: flex-end;
    box-sizing: border-box;
  }
  .container .box .content h2 {
    color: #fff;
    text-shadow: 1px 1px 2px red, 0 0 1em black, 0 0 0.2em black;
    transition: 0.5s;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 5px;
    padding-bottom: 20px;
    font-size: 32px;
    transform: translateY(200px);
    transition-delay: 0.3s;
  }
  .container .box:hover .content h2 {
    transform: translateY(0px);
  }
  .container .box .content p {
    color: #fff;
    transition: 0.5s;
    font-size: 20px;
    transform: translateY(200px);
    transition-delay: 0.4s;
  }
  .container .box:hover .content p {
    transform: translateY(0px);
  }
  </style>
