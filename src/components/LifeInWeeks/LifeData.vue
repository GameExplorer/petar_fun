<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h2
      class="relative text-red-400 text-4xl sm:text-5xl py-2 font-bold uppercase flex items-center justify-center before:content-[''] before:flex-1 before:h-1 before:bg-red-600 before:mx-4 after:content-[''] after:flex-1 after:h-1 after:bg-red-600 after:mx-4"
    >
      Significant Events Since You Were Born
    </h2>

    <ul class="space-y-6 mt-8">
      <li
        v-for="event in processedYearsData"
        :key="event.date"
        class="bg-white p-4 rounded-md shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <div class="flex flex-col sm:flex-row sm:items-center">
          <span
            class="text-red-600 font-semibold text-lg sm:text-xl flex-shrink-0 sm:w-32"
          >
            {{ event.date }}
          </span>
          <p class="text-gray-800 text-lg sm:text-xl mt-2 sm:mt-0">
            {{ event.text }}
          </p>
        </div>
        <p class="text-gray-600 italic mt-2">
          ({{ event.weeksSinceBirth }} weeks after your birth)
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LifeData",
  props: ["birthdate"],
  data() {
    return {
      yearsData: [
        {
          date: "1903-15-02",
          text: "The first teddy bear is invented.",
        },
        {
          date: "1908-30-06",
          text: "The Tunguska event, a massive explosion that flattened 2,000 square kilometers of forest in Siberia, Russia, occurred.",
        },
        {
          date: "1910-04-04",
          text: "Halley's Comet returns",
        },
        {
          date: "1912-15-04",
          text: "The Titanic hits the iceberg and sinks",
        },
        {
          date: "1914-28-06",
          text: "The assassination of Archduke Franz Ferdinand of Austria-Hungary triggers the start of World War I.",
        },
        {
          date: "1918-11-11",
          text: "World War I ends ",
        },
        {
          date: "1922-11-04",
          text: "Howard Carter discovers the tomb of Tutankhamun in Egypt.",
        },
        {
          date: "1924-21-01",
          text: "Vladimir Lenin dies which triggered a power struggle in the Soviet Union.",
        },
        {
          date: "1929-29-10",
          text: "The Great Depression begins with the Wall Street Crash of 1929.",
        },
        {
          date: "1933-30-01",
          text: "Adolf Hitler becomes Chancellor of Germany",
        },
        {
          date: "1939-01-09",
          text: "World War II begins with the invasion of Poland by Germany.",
        },
        {
          date: "1945-08-05",
          text: "World War II ends",
        },
        {
          date: "1945-08-06",
          text: "The United States dropped an atomic bomb on Hiroshima, Japan, during World War II.",
        },
        {
          date: "1949-08-06",
          text: "George Orwell's novel Nineteen Eighty-Four is published.",
        },
        {
          date: "1953-25-04",
          text: "Francis Crick and James Watson discover the structure of DNA.",
        },
        {
          date: "1954-29-07",
          text: "JRR Tolkien publishes The Fellowship of the Ring, the first volume of the Lord of the Rings",
        },
        {
          date: "1957-04-10",
          text: "The Soviet Union launches Sputnik 1, the first artificial satellite to orbit the Earth. Space Age begins",
        },
        {
          date: "1959-03-01",
          text: "Alaska becomes the 49th state of the United States",
        },
        {
          date: "1963-22-11",
          text: "US President John F. Kennedy is assassinated in Dallas, Texas.",
        },
        {
          date: "1967-26-05",
          text: "The Beatles release Sgt. Pepper's Lonely Hearts Club Band, one of the most influential albums in the history of popular music.",
        },
        {
          date: "1969-07-20",
          text: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.",
        },
        {
          date: "1972-29-11",
          text: "Atari releases Pong, the first commercially successful video game Pong.",
        },
        {
          date: "1973-01-03",
          text: "Pink Flyod's album The Dark Side of the Moon is released.",
        },
        {
          date: "1975-03-01",
          text: "Atair 8800 the first commercially successful personal computer is released",
        },
        {
          date: "1976-01-04",
          text: "Apple Computer is founded by Steve Jobs and Steve Wozniak.",
        },
        {
          date: "1977-25-05",
          text: "Star Wars: A New Hope is released.",
        },
        {
          date: "1981-12-06",
          text: "The AIDS epidemic is officially recognized by the US Centers for Disease Control and Prevention.",
        },
        {
          date: "1986-26-04",
          text: "The Chernobyl disaster occurs, releasing large amounts of radioactive particles into the atmosphere.",
        },
        {
          date: "1989-11-09",
          text: "The Berlin Wall fell, marking the end of the Cold War.",
        },
        {
          date: "1991-05-10",
          text: "Linus Torvald launches the first version of the Linux kernel",
        },
        {
          date: "1992-31-10",
          text: "Microsoft releases Windows 3.1, the first widely successful version of Windows.",
        },
        {
          date: "1994-07-05",
          text: "Amazon founded in Bellevue, Washington, by Jeff Bezos.",
        },
        {
          date: "1993-12-02",
          text: "Colombian drug lord Pablo Escobar is gunned down by police.",
        },
        {
          date: "1995-08-24",
          text: "Release date of Windows 95.",
        },
        {
          date: "1996-07-05",
          text: "Dolly the sheep becomes the first successful cloned mammal.",
        },
        {
          date: "1997-07-01",
          text: "Handover of Hong Kong from the United Kingdom to China.",
        },
        {
          date: "1998-09-04",
          text: "Google is founded by Larry Page and Sergey Brin.",
        },
        {
          date: "1999-10-12",
          text: "World population reaches 6 billion.",
        },
        {
          date: "2001-09-11",
          text: "9/11 attacks: Al-Qaeda terrorists hijack four planes, crashing them into the World Trade Center, the Pentagon, and a field in Pennsylvania.",
        },
        {
          date: "2002-01-01",
          text: "Euro banknotes and coins enter into circulation in 12 participating European countries.",
        },
        {
          date: "2004-02-04",
          text: "Facebook is founded by Mark Zuckerberg.",
        },
        {
          date: "2004-12-26",
          text: "A massive tsunami in the Indian Ocean, caused by an undersea earthquake, kills over 230,000 people in 14 countries.",
        },
        {
          date: "2005-08-29",
          text: "Hurricane Katrina hits the U.S. Gulf Coast, devastating New Orleans and causing over 1,800 deaths.",
        },
        {
          date: "2006-07-15",
          text: "Twitter is launched by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams.",
        },
        {
          date: "2006-12-30",
          text: "Former Iraqi President Saddam Hussein is executed following his conviction for crimes against humanity.",
        },
        {
          date: "2007-06-29",
          text: "The first iPhone was released, revolutionizing mobile technology.",
        },
        {
          date: "2008-09-15",
          text: "Lehman Brothers files for bankruptcy, marking a major point in the global financial crisis.",
        },
        {
          date: "2008-11-04",
          text: "Barack Obama is elected as the 44th President of the United States, becoming the first African American to hold the office.",
        },
        {
          date: "2010-04-20",
          text: "BP's Deepwater Horizon oil rig explodes, leading to the largest marine oil spill in history.",
        },
        {
          date: "2011-03-11",
          text: "A massive earthquake and tsunami strike Japan, causing the Fukushima Daiichi nuclear disaster.",
        },
        {
          date: "2011-05-02",
          text: "U.S. Navy SEALs kill al-Qaeda leader Osama bin Laden in Pakistan during a covert operation.",
        },
        {
          date: "2012-07-27",
          text: "The London Summer Olympics begin.",
        },
        {
          date: "2013-11-08",
          text: "Typhoon Haiyan, one of the strongest tropical cyclones ever recorded, strikes the Philippines, killing over 6,000 people.",
        },
        {
          date: "2013-17-09",
          text: "Rockstar releases Grand Theft Auto V, which becomes one of the best-selling video games of all time.",
        },
        {
          date: "2014-03-03",
          text: "Malaysia Airlines Flight 370 disappears, sparking one of the largest aviation mysteries in history.",
        },
        {
          date: "2016-23-06",
          text: "The United Kingdom votes to leave the European Union in the Brexit referendum.",
        },
        {
          date: "2017-20-01",
          text: "Donald Trump is inaugurated as the 45th President of the United States.",
        },
        {
          date: "2018-25-05",
          text: "The General Data Protection Regulation (GDPR) goes into effect in the European Union.",
        },
        {
          date: "2019-10-04",
          text: "Scientists capture the first image of a black hole, located in the galaxy M87.",
        },
        {
          date: "2020-11-03",
          text: "The World Health Organization declares COVID-19 a global pandemic.",
        },
        {
          date: "2021-12-12",
          text: "Max Verstappen wins the 2021 Formula 1 World Championship.",
        },
        {
          date: "2022-14-04",
          text: "Elon Musk purchases Twitter.",
        },
        {
          date: "2023-06-05",
          text: "Charles III is crowned King of United Kingdom and Commonwealth",
        },
      ],
    };
  },
  computed: {
    processedYearsData() {
      const birthDate = new Date(this.birthdate);
      return this.yearsData
        .map((event) => {
          const eventDate = new Date(event.date);
          const weeksSinceBirth = Math.floor(
            (eventDate - birthDate) / (7 * 24 * 60 * 60 * 1000)
          );
          return {
            ...event,
            weeksSinceBirth: weeksSinceBirth,
            happened: weeksSinceBirth > 0,
          };
        })
        .filter((event) => event.happened);
    },
  },
  methods: {
    //randomly select only 10 events
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  position: relative;
  overflow: hidden;
}

li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: #ef4444;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

li:hover::before {
  transform: scaleY(1);
}
</style>
