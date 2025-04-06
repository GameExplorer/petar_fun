<template>
  <div class="achievements-container">
    <div class="timeline-header">
      <h1 class="text-4xl font-bold text-center mb-8">Aston Martin F1 Achievements</h1>
      <p class="text-xl text-center mb-12">A journey through our podium finishes</p>
    </div>

    <div class="timeline">
      <div class="timeline-item" id="2021">
        <div class="timeline-dot"></div>
        <div class="timeline-date">June 2021</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = '2021'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === '2021' }">
              <img src="src/assets/Formula/Images/AstonMartin/azerbaijan2021.png" alt="Azerbaijan 2021" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === '2021' }">
              <h2>Azerbaijan 2021 Podium</h2>
              <p>Sebastian Vettel finished second in the Azerbaijan Grand Prix, his first podium since the 2019 Mexican
                Grand Prix. First podium for Aston Martin in Formula One.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">2nd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">Vettel</span>
                  <span class="stat-label">Driver</span>
                </div>
                <div class="stat">
                  <span class="stat-value">1st</span>
                  <span class="stat-label">AM Podium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20231">
        <div class="timeline-dot"></div>
        <div class="timeline-date">March 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'bahrain2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'bahrain2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoBahrain.png" alt="Bahrain 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'bahrain2023' }">
              <h2>Bahrain 2023</h2>
              <p>Fernando Alonso finished third. This was only Alonso's second podium since the 2014 Hungarian Grand
                Prix, and the first of eight for the season.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">3rd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">Alonso</span>
                  <span class="stat-label">Driver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20232">
        <div class="timeline-dot"></div>
        <div class="timeline-date">March 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'saudi2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'saudi2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoSaudia.png" alt="Saudi Arabia 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'saudi2023' }">
              <h2>Saudi Arabia 2023</h2>
              <p>Alonso finished third. This was Alonso's 100th podium in Formula One.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">3rd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">100th</span>
                  <span class="stat-label">Career Podium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20233">
        <div class="timeline-dot"></div>
        <div class="timeline-date">April 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'australia2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'australia2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoAustralia.png" alt="Australia 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'australia2023' }">
              <h2>Australia 2023</h2>
              <p>Alonso qualified well and finished third in the race. The race podium featured three world champions,
                with Alonso, Lewis Hamilton and Max Verstappen.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">3rd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">3</span>
                  <span class="stat-label">World Champions on Podium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20234">
        <div class="timeline-dot"></div>
        <div class="timeline-date">May 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'miami2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'miami2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoMiami.png" alt="Miami 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'miami2023' }">
              <h2>Miami 2023</h2>
              <p>Fernando Alonso made it four podiums from five races this was Aston Martin best podium run ever.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">4/5</span>
                  <span class="stat-label">Podium Streak</span>
                </div>
                <div class="stat">
                  <span class="stat-value">Record</span>
                  <span class="stat-label">For Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20235">
        <div class="timeline-dot"></div>
        <div class="timeline-date">May 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'monaco2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'monaco2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoMonaco.png" alt="Monaco 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'monaco2023' }">
              <h2>Monaco 2023</h2>
              <p>In Monaco Alonso finished second ahead of Ocon. The race was won by Max Verstappen.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">2nd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">Monaco</span>
                  <span class="stat-label">Prestigious GP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20236">
        <div class="timeline-dot"></div>
        <div class="timeline-date">June 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'canada2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'canada2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoCanada.png" alt="Canada 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'canada2023' }">
              <h2>Canada 2023</h2>
              <p>Lewis Hamilton got the jump on Fernando Alonso on the opening lap to grab second place, but on Lap 22
                the Spaniard retook the place with a brilliant move approaching the final chicane.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">Lap 22</span>
                  <span class="stat-label">Key Overtake</span>
                </div>
                <div class="stat">
                  <span class="stat-value">2nd</span>
                  <span class="stat-label">Position</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20237">
        <div class="timeline-dot"></div>
        <div class="timeline-date">August 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'dutch2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'dutch2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoDutch.png" alt="Netherlands 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'dutch2023' }">
              <h2>Netherlands 2023</h2>
              <p>The race was won by Max Verstappen, with Alonso finishing second and Pierre Gasly completing the
                podium.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">2nd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">7th</span>
                  <span class="stat-label">Podium of 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item" id="20238">
        <div class="timeline-dot"></div>
        <div class="timeline-date">November 2023</div>
        <div class="timeline-content">
          <div class="timeline-card" @mouseover="activeCard = 'brazil2023'" @mouseleave="activeCard = null">
            <div class="timeline-image" :class="{ 'image-active': activeCard === 'brazil2023' }">
              <img src="src/assets/Formula/Images/AstonMartin/alonsoBrazil.png" alt="Brazil 2023" />
              <div class="image-overlay"></div>
            </div>
            <div class="timeline-info" :class="{ 'info-active': activeCard === 'brazil2023' }">
              <h2>Brazil 2023</h2>
              <p>Fernando Alonso and Sergio Perez played out an enthralling duel for third place in Brazil. Perez
                snatched it on Lap 70, but Alonso re-took the place on the last lap and then just won the drag race to
                the finish line.</p>
              <div class="timeline-stats">
                <div class="stat">
                  <span class="stat-value">3rd</span>
                  <span class="stat-label">Position</span>
                </div>
                <div class="stat">
                  <span class="stat-value">Last Lap</span>
                  <span class="stat-label">Decisive Move</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AstonMartinAchievements",
  data() {
    return {
      activeCard: null
    }
  }
}
</script>

<style>
.achievements-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Racing Sans One', 'Arial', sans-serif;
  color: #ffffff;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #00594F;
  top: 0;
  bottom: 0;
  left: 50px;
  margin-left: -3px;
  border-radius: 3px;
}

.timeline-item {
  padding: 10px 40px 10px 80px;
  position: relative;
  margin-bottom: 60px;
}

.timeline-dot {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 50px;
  background-color: #A8FF35;
  /* Aston Martin Lime Green */
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 10px rgba(168, 255, 53, 0.5);
  transform: translateX(-50%);
}

.timeline-date {
  position: absolute;
  left: 80px;
  top: -25px;
  font-size: 16px;
  font-weight: bold;
  color: #A8FF35;
}

.timeline-content {
  background-color: #222222;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.timeline-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s ease;
  position: relative;
}

.timeline-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  transition: height 0.4s ease;
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0.3;
  transition: opacity 0.4s ease;
}

.timeline-info {
  padding: 20px;
  transition: all 0.4s ease;
  background-color: #222222;
}

.timeline-info h2 {
  font-size: 24px;
  color: #A8FF35;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.timeline-info p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #f0f0f0;
}

.timeline-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-top: 1px solid rgba(168, 255, 53, 0.3);
  padding-top: 15px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.stat-value {
  font-size: 22px;
  font-weight: bold;
  color: #A8FF35;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #cccccc;
  text-transform: uppercase;
}

/* Hover Effects */
.timeline-card:hover .image-overlay {
  opacity: 0.7;
}

.timeline-card:hover .timeline-image img {
  transform: scale(1.05);
}

.image-active {
  height: 300px;
}

.info-active {
  background-color: #1a1a1a;
}

/* Media Queries */
@media screen and (min-width: 768px) {
  .timeline::before {
    left: 100px;
  }

  .timeline-item {
    padding: 10px 40px 10px 120px;
  }

  .timeline-dot {
    left: 100px;
  }

  .timeline-date {
    left: 130px;
  }
}

@media screen and (min-width: 992px) {
  .timeline-item {
    margin-bottom: 80px;
  }

  .timeline-content {
    max-height: 350px;
  }

  .timeline-card {
    flex-direction: row;
    height: 350px;
  }

  .timeline-image {
    width: 50%;
    height: 100%;
  }

  .timeline-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image-active {
    width: 50%;
  }

  .timeline::before {
    left: 150px;
  }

  .timeline-item {
    padding-left: 180px;
  }

  .timeline-dot {
    left: 150px;
  }

  .timeline-date {
    left: 180px;
  }
}
</style>