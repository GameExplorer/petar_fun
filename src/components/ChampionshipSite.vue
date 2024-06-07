<template>
  <div class="fontsF1">
    <div
      class="2xl:text-[4.5rem] xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-center p-0 m-auto font-bold pt-4 text-white uppercase"
      :class="currentTeamClass"
    >
      Days since last championship title
    </div>
    <div
      id="teams"
      class="bg-[#00192D] text-white outline-8 mx-auto grid xl:grid-cols-3 grid-cols-1 gap-4"
      :class="currentTeamClass"
    >
      <div id="stats" class="order-2 xl:order-1 cursor-default">
        <div
          class="left mt-24 lg:mx-8 lg:px-6 lg:pl-12 md:pl-0 pt-2 pb-4 pr-8 text-xl"
        >
          <div v-if="buttonClickedRB" class="mx-4 lg:mx-2 p-4 uppercase boxRb">
            <RedBullStats></RedBullStats>
          </div>
          <div
            v-else-if="buttonClickedFr"
            class="mx-4 lg:mx-2 p-4 uppercase boxFr"
          >
            <FerrariStats></FerrariStats>
          </div>
          <div
            v-else-if="buttonClickedMe"
            class="mx-4 lg:mx-2 p-4 uppercase text-black boxMe"
          >
            <MercedesStats></MercedesStats>
          </div>
          <div
            v-else-if="buttonClickedMc"
            class="mx-4 uppercase boxMc text-black"
          >
            <MclarenStats></MclarenStats>
          </div>
          <div
            v-else-if="buttonClickedAm"
            class="p-4 uppercase animated-border-boxam"
          >
            <AstonMartinStats></AstonMartinStats>
          </div>
          <div
            v-else-if="buttonClickedAl"
            class="p-4 uppercase animated-border-boxal"
          >
            <AlpineStats></AlpineStats>
          </div>
          <div v-else-if="buttonClickedWi" class="p-4 uppercase">
            <WilliamsStats></WilliamsStats>
          </div>
          <div
            v-else-if="buttonClickedAt"
            class="p-4 uppercase animated-border-boxat"
          >
            <AlphaTauriStats></AlphaTauriStats>
          </div>
          <div
            v-else-if="buttonClickedAr"
            class="p-4 uppercase animated-border-boxar"
          >
            <AlfaRomeoStats></AlfaRomeoStats>
          </div>
          <div
            v-else-if="buttonClickedHa"
            class="p-4 uppercase animated-border-boxha text-black"
          >
            <HaasStats></HaasStats>
          </div>
        </div>
      </div>
      <div id="days" class="order-1 xl:order-2">
        <div class="text-4xl text-center pt-20">
          <div class="text-center mt-8 text-3xl lg:text-5xl">
            <div class="pt-2 shiny" v-if="buttonClickedRB">
              Days elapsed since RedBull's previous championship: <br />
              <div class="text-9xl font-bold pt-8 pb-2">
                <span class="silver">{{ redBullDate }}</span>
              </div>
              <div class="pt-4 pb-10">24-10-2023 - Japanese GP</div>
              <span class="text-4xl">Last champion:<br /></span>
              <span class="text-6xl lg:text-7xl pt-4">
                <span class="silver">Max Verstappen</span>
              </span>
            </div>
            <div class="pt-2 uppercase font-bold" v-else-if="buttonClickedFr">
              <span class="text-5xl tracking-wider"
                >Days elapsed since<br />
                Ferrari's previous<br />
                championship: </span
              ><br />
              <div class="text-9xl text-white font-bold pt-8 pb-2">
                <span class="silver">{{ ferrariDate }}</span>
              </div>
              <div class="pt-4 pb-10 text-4xl">08-11-2023 - Brazilian GP</div>
              <span class="text-4xl">LAST CHAMPION:<br /></span>
              <span class="text-6xl lg:text-7xl pt-4 silver"
                >Kimi Raikkonen</span
              >
            </div>
            <div class="pt-2 uppercase font-bold text-black" v-else-if="buttonClickedMe">
              <span class="text-5xl tracking-wider"
                >Days elapsed since<br />
                Mercedes's previous<br />
                championship: </span
              ><br />
              <div class="text-9xl text-white font-bold pt-8 pb-2">
                <span class="silver">{{ mercedesDate }}</span>
              </div>
              <div class="pt-4 pb-10 text-4xl">12-12-2021 - Abu Dhabi GP</div>
              <span class="text-4xl">LAST CHAMPION:<br /></span>
              <span class="text-6xl lg:text-7xl pt-4"
                >Lewis Hamilton</span
              >
            </div>
            <div class="pt-2 uppercase font-bold text-black" v-else-if="buttonClickedMc"
            >
              <span class="text-5xl tracking-wider"
                >Days elapsed since<br />
                Mclaren's previous<br />
                championship:</span
              >
              <br />
              <div class="text-9xl text-white font-bold pt-8 pb-2">
                <span class="text-black">{{ mclarenDate }}</span>
              </div>
              <div class="pt-4 pb-10 text-5xl">11-01-1998 - Japanese GP</div>
              <span class="text-4xl">LAST CHAMPION:<br /></span>
              <span class="text-7xl pt-4">Mika Hakkinen</span>
            </div>
            <div
              class="pt-2 pb-24 uppercase font-bold"
              v-else-if="buttonClickedAm"
            >
              <span class="text-5xl tracking-wider"
                >Aston Martin<br />
                has never won<br />
                Constructor's Championship</span
              >
              <br />
              <div class="pt-6 pb-10">CURRENT DRIVERS:</div>
              <span class="text-7xl"
                >Fernando Alonso<br />
                Lance Stroll</span
              >
            </div>
            <div class="pt-2 uppercase font-bold" v-else-if="buttonClickedAl">
              <span class="text-5xl tracking-wider"
                >Days elapsed since<br />
                Alpine's previous<br />
                championship:</span
              >
              <br />
              <div class="text-9xl text-white font-bold pt-8 pb-2">
                <span>{{ alpineDate }}</span>
              </div>
              <div class="pt-4 pb-10 text-5xl">22-10-2005 - Brazilian GP</div>
              <span class="text-4xl">LAST CHAMPION:<br /></span>
              <span class="text-7xl pt-4">Fernando Alonso</span>
            </div>
            <div class="pt-2 uppercase font-bold" v-else-if="buttonClickedWi">
              <span class="text-5xl tracking-wider"
                >Days elapsed since<br />
                Williams's previous<br />
                championship:</span
              >
              <br />
              <div class="text-9xl text-white font-bold pt-8 pb-2">
                <span>{{ williamsDate }}</span>
              </div>
              <div class="pt-4 pb-10 text-5xl">12-10-1997 - Japanese GP</div>
              <span class="text-4xl">LAST CHAMPION:<br /></span>
              <span class="text-7xl pt-4">Jacques Villeneuve</span>
            </div>
            <div
              class="pt-2 pb-24 uppercase font-bold"
              v-else-if="buttonClickedAt"
            >
              <span class="text-5xl tracking-wider"
                >Alpha Tauri<br />
                has never won<br />
                Constructor's Championship </span
              ><br />
              <div class="pt-8 pb-10 text-5xl">CURRENT DRIVERS:</div>
              <span class="text-7xl"
                >Daniel Ricciardo<br />
                Yuki Tsunoda</span
              >
            </div>
            <div
              class="pt-2 pb-24 uppercase font-extrabold text-4xl"
              v-else-if="buttonClickedAr"
            >
              <span class="text-5xl tracking-wider"
                >Alfa Romeo<br />
                has never won<br />
                Constructor's Championship</span
              ><br />
              <div class="pt-6 pb-10 text-5xl">CURRENT DRIVERS:</div>
              <span class="text-7xl"
                >Valtteri Bottas<br />
                Zhou Guanyu</span
              >
            </div>
            <div
              class="pt-2 pb-24 uppercase font-bold text-black"
              v-else-if="buttonClickedHa"
            >
              <span class="text-5xl tracking-wider"
                >Haas<br />
                has never won<br />
                Constructor's Championship</span
              >
              <br />
              <div class="pt-6 pb-10 text-5xl">CURRENT DRIVERS:</div>
              <div class="text-7xl pb-4">Kevin Magnussen</div>
              <div class="text-7xl">Nico Hulkenberg</div>
            </div>
          </div>
        </div>
      </div>
      <div id="champions" class="order-3 items-center justify-center text-center">
        <div
          class="xl:mx-8 xl:ml-64 mt-24 px-6 pl-4 pt-2 pb-4 pr-8 text-2xl text-center"
        >
          <div v-if="buttonClickedRB" class="text-4xl boxRb p-4">
            <div class="mt-2 mb-2 text-4xl lg:text-5xl pb-4 font-bold">
              WINNING YEARS
            </div>
            <div class="grid grid-cols-1 gap-1">
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2010)"
              >
                2010<br />
              </span>
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2011)"
              >
                2011<br />
              </span>
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2012)"
                >2012<br
              /></span>
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2013)"
                >2013<br
              /></span>
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2022)"
                >2022<br
              /></span>
              <span
                class="px-2 hover:text-5xl cursor-pointer sm:max-xl:py-4 hover:rounded-lg hover:bg-[#f5c21b]"
                @click="scrollToYear(2023)"
                >2023<br
              /></span>
            </div>
          </div>
          <div v-if="buttonClickedFr" class="text-4xl boxFr p-4">
            <div class="mt-2 mb-2 text-4xl lg:text-5xl pb-4 font-bold">
              WINNING YEARS
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1961)"
                id="1961-2"
              >
                1961<br />
              </span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1964)"
              >
                1964<br />
              </span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1975)"
                >1975<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1976)"
                >1976<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1977)"
                >1977<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1979)"
                >1979<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1982)"
                >1982<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1983)"
                >1983<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(1999)"
                >1999<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2000)"
                >2000<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2001)"
                >2001<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2002)"
                >2002<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2003)"
                >2003<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2004)"
                >2004<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2007)"
                >2007<br
              /></span>
              <span
                class="px-2 py-1 sm:max-xl:py-4 hover:bg-white hover:text-red-700 hover:text-4xl hover:rounded-xl cursor-pointer"
                @click="scrollToYear(2008)"
                >2008<br
              /></span>
            </div>
          </div>
          <div v-if="buttonClickedMe" class="text-3xl boxMe p-4 text-black">
            <div class="mt-2 text-4xl lg:text-5xl pb-4 font-bold">
              WINNING YEARS
            </div>
            <div class="grid grid-cols-1 gap-1">
              <span
                class="lg:px-2 py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2014)"
              >
                2014<br />
              </span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2015)"
              >
                2015<br />
              </span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2016)"
                >2016<br
              /></span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2017)"
                >2017<br
              /></span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2018)"
                >2018<br
              /></span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2019)"
                >2019<br
              /></span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2020)"
                >2020<br
              /></span>
              <span
                class="py-1 text-4xl hover:text-5xl hover:bg-black hover:text-[#6cd3bf] hover:rounded-lg cursor-pointer"
                @click="scrollToYear(2021)"
                >2021<br
              /></span>
            </div>
          </div>
          <div
            v-if="buttonClickedMc"
            class="text-3xl boxMc p-4 text-black"
          >
            <div class="mt-2 text-4xl pb-4 font-bold">WINNING YEARS</div>
            <div class="grid grid-cols-2 gap-2">
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1974)"
              >
                1974<br />
              </span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1984)"
              >
                1984<br />
              </span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1985)"
                >1985<br
              /></span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1988)"
                >1988<br
              /></span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1989)"
                >1989<br
              /></span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1990)"
                >1990<br
              /></span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1991)"
                >1991<br
              /></span>
              <span
                class="px-2 text-4xl hover:bg-black hover:rounded-lg hover:text-orange-400 pr-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1998)"
                >1998<br
              /></span>
            </div>
          </div>
          <div
            v-if="buttonClickedAl"
            class="text-4xl animated-border-boxal p-4"
          >
            <div class="mt-2 pb-4 font-bold">WINNING YEARS</div>
            <span
              class="px-2 hover:bg-red-600 hover:rounded-lg hover:text-5xl cursor-pointer"
              @click="scrollToYear(2005)"
            >
              2005<br />
            </span>
            <span
              class="px-2 hover:bg-red-600 hover:rounded-lg hover:text-5xl cursor-pointer"
              @click="scrollToYear(2006)"
            >
              2006<br />
            </span>
          </div>
          <div v-if="buttonClickedWi" class="text-3xl p-4">
            <div class="mt-2 text-4xl pb-4 font-bold">WINNING YEARS</div>
            <div class="grid grid-cols-2 gap-2">
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1980)"
              >
                1980<br />
              </span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1981)"
              >
                1981<br />
              </span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1986)"
                >1986<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1987)"
                >1987<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1992)"
                >1992<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1993)"
                >1993<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1994)"
                >1994<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1996)"
                >1996<br
              /></span>
              <span
                class="text-4xl hover:bg-red-600 hover:rounded-lg px-2 hover:text-5xl cursor-pointer"
                @click="scrollToYear(1997)"
                >1997<br
              /></span>
            </div>
          </div>
          <div
            v-if="buttonClickedAm"
            class="text-2xl uppercase animated-border-boxam p-4"
          >
            <div class="mt-2 text-4xl pb-4 font-bold">PODIUMS</div>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(2021)"
            >
              Azerbaijan, 2021<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20231)"
            >
              Bahrain, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20232)"
            >
              Saudi Arabia, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20233)"
            >
              Australia, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20234)"
            >
              Miami, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20235)"
            >
              Monaco, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20236)"
            >
              Canada, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20237)"
            >
              Netherlands, 2023<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:text-4xl hover:bg-white hover:text-[#006f62] hover:rounded-xl cursor-pointer"
              @click="scrollToYear(20238)"
            >
              Brazil, 2023<br />
            </span>
          </div>
          <div
            v-if="buttonClickedAt"
            class="text-2xl uppercase animated-border-boxat p-2"
          >
            <div class="mt-2 text-4xl pb-4 font-bold">
              NOTABLE<br />
              ACHIEVEMENTS
            </div>
            <span
              class="hover:bg-[#00293F] hover:rounded-lg p-2 text-3xl hover:text-4xl cursor-pointer"
              @click="scrollToYear(2008)"
            >
              2008, First Victory<br />
            </span>
            <span
              class="hover:bg-[#00293F] hover:rounded-lg p-2 text-3xl hover:text-4xl cursor-pointer"
              @click="scrollToYear(2019)"
            >
              2019, Double podiums<br />
            </span>
            <span
              class="hover:bg-[#00293F] hover:rounded-lg p-2 text-3xl hover:text-4xl cursor-pointer"
              @click="scrollToYear(2020)"
            >
              2020, Monza win<br />
            </span>
            <span
              class="hover:bg-[#00293F] hover:rounded-lg p-2 text-3xl hover:text-4xl cursor-pointer"
              @click="scrollToYear(2021)"
            >
              2021, Podium in AZE<br />
            </span>
          </div>
          <div
            v-if="buttonClickedAr"
            class="text-2xl uppercase animated-border-boxar p-4"
          >
            <div class="mt-2 text-4xl pb-4 font-bold">
              NOTABLE<br />
              ACHIEVEMENTS
            </div>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(1993)"
            >
              1993, First Race<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(1995)"
            >
              1995, First Podium<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(2001)"
            >
              2001, Best finish<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(2008)"
            >
              2008, FIRST WIN<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(2012)"
            >
              2012, Last podium<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(2014)"
            >
              2014, Worst season<br />
            </span>
            <span
              class="px-4 py-1 text-3xl hover:bg-[#DE3126] hover:rounded-lg hover:text-white hover:text-4xl cursor-pointer"
              @click="scrollToYear(2024)"
            >
              2024, Kick Sauber</span
            >
          </div>
          <div
            v-if="buttonClickedHa"
            class="text-2xl uppercase animated-border-boxha p-2 pb-4 mr-2 text-black"
          >
            <div class="mt-2 text-4xl pb-4 font-bold">
              NOTABLE<br />
              ACHIEVEMENTS
            </div>
            <span
              class="px-2 py-1 text-3xl hover:bg-white hover:border-[1px] hover:border-black hover:rounded-lg hover:text-4xl cursor-pointer"
              @click="scrollToYear(2016)"
            >
              2016, FIRST RACE<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:bg-white hover:border-[1px] hover:border-black hover:rounded-lg hover:text-4xl cursor-pointer"
              @click="scrollToYear(2018)"
            >
              2018, P5 IN WCC<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:bg-white hover:border-[1px] hover:border-black hover:rounded-lg hover:text-4xl cursor-pointer"
              @click="scrollToYear(2021)"
            >
              2021, BAD YEAR<br
            /></span>
            <span
              class="px-2 py-1 text-3xl hover:bg-white hover:border-[1px] hover:border-black hover:rounded-lg hover:text-4xl cursor-pointer"
              @click="scrollToYear(2022)"
            >
              2022, MAIDEN POLE<br />
            </span>
            <span
              class="px-2 py-1 text-3xl hover:bg-white hover:border-[1px] hover:border-black hover:rounded-lg hover:text-4xl cursor-pointer"
              @click="scrollToYear(2024)"
            >
              2023, GUNTHER LEAVES<br />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="buttons"
      class="bg-[#00192D] grid place-items-center pb-32 pt-32 col-span-4 position-absolute"
      :class="currentTeamClass"
    >
      <ul
        class="mx-2 grid lg:grid-cols-5 grid-cols-2 justify-content-center gap-2"
      >
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#00192d] hover:font-bold hover:text-white hover:rounded-bl-3xl hover:rounded-tr-3xl"
          @click="toggleRedBull"
        >
          RedBull
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#a7121f] hover:text-white hover:font-bold hover:rounded-br-3xl hover:rounded-tl-3xl"
          @click="toggleFerrari"
        >
          Ferrari
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#6cd3bf] hover:font-bold hover:rounded-bl-3xl hover:rounded-tr-3xl"
          @click="toggleMercedes"
        >
          Mercedes
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#ff8700] hover:font-bold hover:rounded-br-3xl hover:rounded-tl-3xl"
          @click="toggleMclaren"
        >
          Mclaren
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#006f62] hover:font-bold hover:text-white hover:rounded-bl-3xl hover:rounded-tr-3xl"
          @click="toggleAstonMartin"
        >
          Aston Martin
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#0090ff] hover:font-bold hover:text-white hover:rounded-br-3xl hover:rounded-tl-3xl"
          @click="toggleAlpine"
        >
          Alpine
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#005aff] hover:font-bold hover:text-white hover:rounded-bl-3xl hover:rounded-tr-3xl"
          @click="toggleWilliams"
        >
          Williams
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#1534cc] hover:font-bold hover:text-white hover:rounded-br-3xl hover:rounded-tl-3xl"
          @click="toggleAlphaTauri"
        >
          Visa RB
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#00b901] hover:font-bold hover:text-white hover:rounded-bl-3xl hover:rounded-tr-3xl"
          @click="toggleAlfaRomeo"
        >
          Sauber
        </button>
        <button
          class="mx-4 px-4 bg-white text-black text-3xl rounded-lg border-black border-2 btn-shadow transition-all duration-500 hover:bg-[#b6babd] hover:font-bold hover:text-black hover:rounded-br-3xl hover:rounded-tl-3xl"
          @click="toggleHaas"
        >
          Haas
        </button>
      </ul>
    </div>
    <div id="content">
      <div v-if="buttonClickedRB" class="redbull text-white grid">
        <RedBull></RedBull>
      </div>
      <div v-if="buttonClickedFr" class="ferrari text-white grid">
        <Ferrari></Ferrari>
      </div>
      <div v-if="buttonClickedMe" class="mercedes text-white grid">
        <Mercedes></Mercedes>
      </div>
      <div v-if="buttonClickedMc" class="mclaren text-white grid">
        <Mclaren></Mclaren>
      </div>
      <div v-if="buttonClickedAm" class="astonmartin text-white">
        <AstonMartin></AstonMartin>
      </div>
      <div v-if="buttonClickedAl" class="alpine text-white grid">
        <Alpine></Alpine>
      </div>
      <div v-if="buttonClickedWi" class="williams text-white grid">
        <Williams></Williams>
      </div>
      <div v-if="buttonClickedAt" class="alphatauri text-white grid">
        <AlphaTauri></AlphaTauri>
      </div>
      <div v-if="buttonClickedAr" class="alfaromeo text-white grid">
        <AlfaRomeo></AlfaRomeo>
      </div>
      <div v-if="buttonClickedHa" class="haas text-black grid relative">
        <Haas></Haas>
      </div>
    </div>
    <div class="flex items-center justify-center pt-32 pb-16">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Haas from "@/components/Haas/Haas.vue";
import HaasStats from "@/components/Haas/HaasStats.vue";
import Alpine from "@/components/Alpine/Alpine.vue";
import AlpineStats from "@/components/Alpine/AlpineStats.vue";
import AlphaTauri from "@/components/AlphaTauri/AlphaTauri.vue";
import AlphaTauriStats from "@/components/AlphaTauri/AlphaTauriStats.vue";
import RedBull from "@/components/RedBull/RedBull.vue";
import RedBullStats from "@/components/RedBull/RedBullStats.vue";
import AlfaRomeoStats from "@/components/AlfaRomeo/AlfaRomeoStats.vue";
import AlfaRomeo from "@/components/AlfaRomeo/AlfaRomeo.vue";
import AstonMartinStats from "@/components/AstonMartin/AstonMartinStats.vue";
import AstonMartin from "@/components/AstonMartin/AstonMartin.vue";
import WilliamsStats from "@/components/Williams/WilliamsStats.vue";
import Williams from "@/components/Williams/Williams.vue";
import Mclaren from "@/components/Mclaren/Mclaren.vue";
import MclarenStats from "@/components/Mclaren/MclarenStats.vue";
import Ferrari from "@/components/Ferrari/Ferrari.vue";
import FerrariStats from "@/components/Ferrari/FerrariStats.vue";
import Mercedes from "@/components/Mercedes/Mercedes.vue";
import MercedesStats from "@/components/Mercedes/MercedesStats.vue";

import Footer from "@/components/Footer/Footer.vue";

export default {
  data() {
    return {
      buttonClickedRB: true,
      buttonClickedFr: false,
      buttonClickedMe: false,
      buttonClickedMc: false,
      buttonClickedAm: false,
      buttonClickedAl: false,
      buttonClickedWi: false,
      buttonClickedAt: false,
      buttonClickedAr: false,
      buttonClickedHa: false,
    };
  },
  components: {
    Haas,
    HaasStats,
    Alpine,
    AlpineStats,
    RedBull,
    RedBullStats,
    AlphaTauri,
    AlphaTauriStats,
    AlfaRomeo,
    AlfaRomeoStats,
    AstonMartin,
    AstonMartinStats,
    WilliamsStats,
    Williams,
    Mclaren,
    MclarenStats,
    Ferrari,
    FerrariStats,
    Mercedes,
    MercedesStats,
    Footer,
  },
  computed: {
    redBullDate() {
      const days = new Date("10/24/2023");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    ferrariDate() {
      const days = new Date("11/08/2008");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mercedesDate() {
      const days = new Date("12/12/2021");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    mclarenDate() {
      const days = new Date("11/01/1998");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    astonMartinDate() {
      return `Has never won constructor`;
    },
    alpineDate() {
      const days = new Date("10/22/2006");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    williamsDate() {
      const days = new Date("10/12/1997");
      const today = new Date();
      const diffTime = Math.abs(today - days);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1);
      return `${diffDays}`;
    },
    alphaTauriDate() {
      return `Has never won constructor`;
    },
    alfaRomeoDate() {
      return `Has never won constructor`;
    },
    haasDate() {
      return `Has never won constructor`;
    },
    currentTeamClass() {
      if (this.buttonClickedRB) {
        this.currentTeam = "RedBull"; // Set current team to RedBull when buttonClickedRB is true
        return "redbull"; // Apply 'redbull' class when buttonClickedRB is true
      } else if (this.buttonClickedFr) {
        this.currentTeam = "Ferrari";
        return "ferrari";
      } else if (this.buttonClickedMe) {
        this.currentTeam = "Mercedes";
        return "mercedes";
      } else if (this.buttonClickedMc) {
        this.currentTeam = "Mclaren";
        return "mclaren";
      } else if (this.buttonClickedAm) {
        this.currentTeam = "Aston Martin";
        return "astonmartin";
      } else if (this.buttonClickedAl) {
        this.currentTeam = "Alpine";
        return "alpine";
      } else if (this.buttonClickedWi) {
        this.currentTeam = "Williams";
        return "williams";
      } else if (this.buttonClickedAt) {
        this.currentTeam = "Alpha Tauri";
        return "alphatauri";
      } else if (this.buttonClickedAr) {
        this.currentTeam = "Alfa Romeo";
        return "alfaromeo";
      } else if (this.buttonClickedHa) {
        this.currentTeam = "Haas";
        return "haas";
      }
      return "redbull"; // Default class if no button is clicked
    },
  },
  methods: {
    scrollToYear(year) {
      const element = document.getElementById(`${year}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleRedBull() {
      this.buttonClickedRB = !this.buttonClickedRB;
      this.currentTeam = "RedBull";
      if (this.buttonClickedRB) {
        this.buttonClickedFr = false; // Close Ferrari information if Red Bull is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleFerrari() {
      this.buttonClickedFr = !this.buttonClickedFr;
      this.currentTeam = "Ferrari";
      if (this.buttonClickedFr) {
        this.buttonClickedRB = false; // Close Red Bull information if Ferrari is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMercedes() {
      this.buttonClickedMe = !this.buttonClickedMe;
      this.currentTeam = "Mercedes";
      if (this.buttonClickedMe) {
        this.buttonClickedRB = false; // Close Red Bull information if Mercedes is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mercedes is clicked
        this.buttonClickedMc = false; // Close Mclaren information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleMclaren() {
      this.buttonClickedMc = !this.buttonClickedMc;
      this.currentTeam = "Mclaren";
      if (this.buttonClickedMc) {
        this.buttonClickedRB = false; // Close Red Bull information if Mclaren is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Mclaren is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAstonMartin() {
      this.buttonClickedAm = !this.buttonClickedAm;
      this.currentTeam = "Aston Martin";
      if (this.buttonClickedAm) {
        this.buttonClickedRB = false; // Close Red Bull information if Aston Martin is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Aston Martin is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlpine() {
      this.buttonClickedAl = !this.buttonClickedAl;
      this.currentTeam = "Alpine";
      if (this.buttonClickedAl) {
        this.buttonClickedRB = false; // Close Red Bull information if Alpine is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Alpine is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleWilliams() {
      this.buttonClickedWi = !this.buttonClickedWi;
      this.currentTeam = "Williams";
      if (this.buttonClickedWi) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlphaTauri() {
      this.buttonClickedAt = !this.buttonClickedAt;
      this.currentTeam = "Alpha Tauri";
      if (this.buttonClickedAt) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleAlfaRomeo() {
      this.buttonClickedAr = !this.buttonClickedAr;
      this.currentTeam = "Alfa Romeo";
      if (this.buttonClickedAr) {
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedHa = false; // Close Haas information if Red Bull is clicked
      }
    },
    toggleHaas() {
      this.buttonClickedHa = !this.buttonClickedHa;
      this.currentTeam = "Haas";
      if (this.buttonClickedHa) {
        this.buttonClickedRB = false; // Close Red Bull information if Haas is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Haas is clicked
        this.buttonClickedRB = false; // Close Red Bull information if Williams is clicked
        this.buttonClickedFr = false; // Close Ferrari information if Williams is clicked
        this.buttonClickedMe = false; // Close Mercedes information if Red Bull is clicked
        this.buttonClickedMc = false; // Close Aston Martin information if Red Bull is clicked
        this.buttonClickedAm = false; // Close Alpine information if Red Bull is clicked
        this.buttonClickedAl = false; // Close Williams information if Red Bull is clicked
        this.buttonClickedWi = false; // Close Alpha Tauri information if Red Bull is clicked
        this.buttonClickedAr = false; // Close Alfa Romeo information if Red Bull is clicked
        this.buttonClickedAt = false; // Close Haas information if Red Bull is clicked
      }
    },
  },
};
</script>

<style>
@import "@/assets/Formula_Styles/border_animations.css";

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "MRKMaston";
  src: url("@/assets/Fonts/MRKMaston-Regular.woff") format("truetype");
}

.fontsF1 {
  font-family: "MRKMaston", sans-serif;
}

.silver {
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 40%,
    #ff0101 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: shine 1.5s linear infinite;
}

.titleStroke {
  -webkit-text-stroke-color: #000;
  -webkit-text-stroke-width: 1px;
}

.btn-shadow:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  transform: translateY(-5px);
}

.redbull {
  background-color: #00192d;
}
.ferrari {
  background-color: #a7121f;
}
.mercedes {
  background-color: #6cd3bf;
}

.mclaren {
  background-color: #ff8700;
}

.astonmartin {
  background-color: #006f62;
}

.alpine {
  background-color: #0090ff;
}

.williams {
  background-color: #005aff;
}

.alphatauri {
  background-color: #1534cc;
}

.alfaromeo {
  background-color: #00b901;
}

.haas {
  background-color: #b6babd;
}

.backgroundRB {
  background-color: #0a2aef;
}
</style>
