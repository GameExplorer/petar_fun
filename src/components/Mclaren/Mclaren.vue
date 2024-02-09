<template>
  <div class="grid grid-cols-2 gap-3 pb-32">
    <div id="1974" class="card mb-24">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        <span class="text-5xl uppercase font-extrabold">Mclaren's first</span>
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1984" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1985" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1988" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        <span class="text-5xl uppercase font-extrabold">Fierest Teammates rivalry</span>
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1989" class="card mb-24">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1990" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1991" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div id="1998" class="card">
      <div class="imgBx">
        <img src="/Images/vettel2012.png" />
        Vettel 2012
      </div>
      <div class="details">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mclaren",
};
</script>

<style>
.card {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;;
  height: 580px;
  background: #262626;
  overflow: hidden;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.5);
}
.card .imgBx,
.card .details {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  transition: 0.5s;
  text-align: center;
}
.card .imgBx {
  top: 0;
  left: 0;
}
.card:hover .imgBx {
  top: 0;
  left: -100%;
}
.card .imgBx img {
  width: 100%;
}
.card .details {
  background: #262626;
  top: 0;
  left: 100%;
  padding: 60px 30px;
}
.card:hover .details {
  top: 0;
  left: 0%;
}
.card .details h2 {
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0 0 10px;
  border-bottom: 2px solid #fff;
}
.card .details p {
  margin: 20px 0 0;
  color: #fff;
}


/* Mclaren style*/
.animated-border-boxmc,
.animated-border-box-glow {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: 11px;
}

.animated-border-boxmc:before,
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
    #000000,
    rgba(0, 0, 0, 0) 25%
  );
  /* change speed here */
  animation: rotate 4s linear infinite;
}

.animated-border-boxmc:after {
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
  background: #ff8700;
  /*box border radius*/
  border-radius: 5px;
}
</style>
