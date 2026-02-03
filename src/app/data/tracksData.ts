export interface Track {
  id: string;
  name: string;
  location: string;
  country: string;
  firstGP: number;
  lapLength: string;
  numberOfLaps: number;
  raceDistance: string;
  lapRecord: {
    time: string;
    driver: string;
    year: number;
  };
  corners: number;
  description: string;
  characteristics: string[];
  imageQuery: string;
}

export const tracksData: Track[] = [
  {
    id: "monaco",
    name: "Circuit de Monaco",
    location: "Monte Carlo",
    country: "Monaco",
    firstGP: 1950,
    lapLength: "3.337 km",
    numberOfLaps: 78,
    raceDistance: "260.286 km",
    lapRecord: { time: "1:12.909", driver: "Lewis Hamilton", year: 2021 },
    corners: 19,
    description: "The Monaco Grand Prix is F1's most prestigious race, held on the tight street circuit through Monte Carlo. With its narrow roads, tight corners, and barrier-lined track, it's the ultimate test of precision and concentration. Overtaking is nearly impossible, making qualifying crucial. The race passes iconic landmarks like the Casino Square, the tunnel, and the famous Swimming Pool complex.",
    characteristics: ["Street circuit", "Low speed", "High prestige", "Difficult overtaking", "Glamorous setting"],
    imageQuery: "monaco grand prix circuit"
  },
  {
    id: "monza",
    name: "Autodromo Nazionale di Monza",
    location: "Monza",
    country: "Italy",
    firstGP: 1950,
    lapLength: "5.793 km",
    numberOfLaps: 53,
    raceDistance: "306.72 km",
    lapRecord: { time: "1:21.046", driver: "Rubens Barrichello", year: 2004 },
    corners: 11,
    description: "Known as the 'Temple of Speed', Monza is F1's fastest circuit and hosts the Italian Grand Prix. The historic track features long straights, heavy braking zones, and iconic chicanes. The Tifosi (Ferrari fans) create an electric atmosphere. Key sections include the Lesmo corners, Ascari chicane, and the high-speed Parabolica. The circuit has minimal downforce setups, producing thrilling slipstreaming battles.",
    characteristics: ["High speed", "Low downforce", "Long straights", "Historic venue", "Passionate fans"],
    imageQuery: "monza racing circuit italy"
  },
  {
    id: "silverstone",
    name: "Silverstone Circuit",
    location: "Silverstone",
    country: "United Kingdom",
    firstGP: 1950,
    lapLength: "5.891 km",
    numberOfLaps: 52,
    raceDistance: "306.198 km",
    lapRecord: { time: "1:27.097", driver: "Max Verstappen", year: 2020 },
    corners: 18,
    description: "Silverstone is the birthplace of F1, hosting the first-ever World Championship race in 1950. This high-speed circuit features fast, flowing corners like Maggotts-Becketts-Chapel and Copse. The British Grand Prix attracts huge crowds and often produces exciting racing. Recent modifications have improved overtaking opportunities while maintaining the track's character as one of the fastest and most challenging on the calendar.",
    characteristics: ["High speed", "Fast corners", "Historic significance", "Challenging layout", "Unpredictable weather"],
    imageQuery: "silverstone racing circuit"
  },
  {
    id: "spa",
    name: "Circuit de Spa-Francorchamps",
    location: "Stavelot",
    country: "Belgium",
    firstGP: 1950,
    lapLength: "7.004 km",
    numberOfLaps: 44,
    raceDistance: "308.052 km",
    lapRecord: { time: "1:46.286", driver: "Valtteri Bottas", year: 2018 },
    corners: 19,
    description: "Spa-Francorchamps is widely considered the greatest race track in the world. Set in the Ardennes forest, it features dramatic elevation changes, high-speed sections, and unpredictable weather. Iconic corners include Eau Rouge/Raidillon (a breathtaking uphill left-right-left complex), Pouhon, and the long Kemmel Straight. The track demands bravery, precision, and adaptability. Its natural beauty and challenging layout make it a favorite among drivers and fans.",
    characteristics: ["Very long lap", "Elevation changes", "High speed", "Unpredictable weather", "Iconic corners"],
    imageQuery: "spa francorchamps circuit belgium"
  },
  {
    id: "suzuka",
    name: "Suzuka International Racing Course",
    location: "Suzuka",
    country: "Japan",
    firstGP: 1987,
    lapLength: "5.807 km",
    numberOfLaps: 53,
    raceDistance: "307.471 km",
    lapRecord: { time: "1:30.983", driver: "Lewis Hamilton", year: 2019 },
    corners: 18,
    description: "Suzuka is a unique figure-eight circuit designed by John Hugenholtz. It's a technical masterpiece featuring a perfect blend of high-speed sections and technical corners. Key sections include the fearsome 130R corner (now slightly modified), the Spoon Curve, and the final chicane. The track rewards precision and bravery, with minimal runoff in places. It's hosted many championship deciders and remains a true driver's circuit.",
    characteristics: ["Figure-eight layout", "Technical", "High speed", "Challenging corners", "Fan favorite"],
    imageQuery: "suzuka racing circuit japan"
  },
  {
    id: "interlagos",
    name: "Autódromo José Carlos Pace",
    location: "São Paulo",
    country: "Brazil",
    firstGP: 1973,
    lapLength: "4.309 km",
    numberOfLaps: 71,
    raceDistance: "305.909 km",
    lapRecord: { time: "1:10.540", driver: "Valtteri Bottas", year: 2018 },
    corners: 15,
    description: "Interlagos (meaning 'between lakes') is a challenging anti-clockwise circuit with significant elevation changes. The track's bumpy surface, unpredictable weather, and passionate Brazilian fans create a unique atmosphere. Key sections include the uphill run to Senna S, the downhill back straight, and the challenging Juncao corner. The circuit often produces dramatic races and has hosted many championship deciders. It's particularly special as Ayrton Senna's home circuit.",
    characteristics: ["Anti-clockwise", "Elevation changes", "Bumpy surface", "Passionate fans", "Unpredictable weather"],
    imageQuery: "interlagos circuit brazil"
  },
  {
    id: "marina-bay",
    name: "Marina Bay Street Circuit",
    location: "Singapore",
    country: "Singapore",
    firstGP: 2008,
    lapLength: "4.940 km",
    numberOfLaps: 62,
    raceDistance: "306.143 km",
    lapRecord: { time: "1:35.867", driver: "Lewis Hamilton", year: 2023 },
    corners: 19,
    description: "The Singapore Grand Prix was F1's first night race, creating a spectacular visual spectacle under floodlights. This demanding street circuit through downtown Singapore is physically and mentally exhausting for drivers, with high humidity, 90-degree corners, and constant bumps. The race typically lasts two hours, testing driver stamina. The stunning cityscape backdrop and unique atmosphere make it one of F1's most distinctive events.",
    characteristics: ["Night race", "Street circuit", "High humidity", "Physically demanding", "Spectacular setting"],
    imageQuery: "singapore night circuit"
  },
  {
    id: "yas-marina",
    name: "Yas Marina Circuit",
    location: "Abu Dhabi",
    country: "United Arab Emirates",
    firstGP: 2009,
    lapLength: "5.281 km",
    numberOfLaps: 58,
    raceDistance: "306.183 km",
    lapRecord: { time: "1:26.103", driver: "Max Verstappen", year: 2021 },
    corners: 16,
    description: "Yas Marina hosts the season finale, often under twilight conditions with the sun setting during the race. The circuit passes through the stunning Yas Hotel, features a marina backdrop, and includes both slow technical sections and high-speed straights. Recent modifications improved racing by making sector 2 faster and more flowing. The 2021 finale here produced one of the most controversial championship conclusions in F1 history.",
    characteristics: ["Twilight race", "Season finale", "Modern facility", "Mix of speeds", "Unique setting"],
    imageQuery: "abu dhabi circuit sunset"
  },
  {
    id: "circuit-americas",
    name: "Circuit of the Americas",
    location: "Austin, Texas",
    country: "United States",
    firstGP: 2012,
    lapLength: "5.513 km",
    numberOfLaps: 56,
    raceDistance: "308.405 km",
    lapRecord: { time: "1:36.169", driver: "Charles Leclerc", year: 2019 },
    corners: 20,
    description: "COTA was purpose-built to bring F1 back to the US. Designed by Hermann Tilke with input from drivers, it combines elements from classic circuits worldwide. Turn 1 is a dramatic uphill left-hander inspired by Eau Rouge. The circuit features elevation changes, high-speed sections, and technical corners. The Esses (turns 3-6) flow beautifully, while the long back straight promotes overtaking. The vibrant Austin atmosphere adds to the event's appeal.",
    characteristics: ["Modern facility", "Elevation changes", "Varied corners", "Great atmosphere", "Purpose-built"],
    imageQuery: "circuit americas texas"
  },
  {
    id: "red-bull-ring",
    name: "Red Bull Ring",
    location: "Spielberg",
    country: "Austria",
    firstGP: 1970,
    lapLength: "4.318 km",
    numberOfLaps: 71,
    raceDistance: "306.452 km",
    lapRecord: { time: "1:05.619", driver: "Carlos Sainz", year: 2020 },
    corners: 10,
    description: "Formerly known as the Österreichring and A1-Ring, this compact circuit in the Styrian mountains is one of the shortest on the calendar. Despite its length, the Red Bull Ring produces exciting racing with elevation changes, high-speed corners, and overtaking opportunities. The circuit's short lap means qualifying gaps are tiny. Set against a stunning Alpine backdrop, it hosts one or two races per season and is known for its passionate atmosphere.",
    characteristics: ["Short lap", "Mountain setting", "Good overtaking", "High altitude", "Beautiful scenery"],
    imageQuery: "austria red bull ring mountains"
  },
  {
    id: "imola",
    name: "Autodromo Enzo e Dino Ferrari",
    location: "Imola",
    country: "Italy",
    firstGP: 1980,
    lapLength: "4.909 km",
    numberOfLaps: 63,
    raceDistance: "309.049 km",
    lapRecord: { time: "1:15.484", driver: "Lewis Hamilton", year: 2020 },
    corners: 19,
    description: "Imola is a historic and challenging anti-clockwise circuit that hosted the San Marino Grand Prix. The track features limited runoff areas, elevation changes, and a mix of high and low-speed corners. Key sections include Tamburello (site of Senna's fatal crash in 1994), Villeneuve chicane, Tosa corner, and the fast Piratella complex. The traditional layout makes overtaking difficult, emphasizing qualifying. Passionate Italian fans create an intense atmosphere.",
    characteristics: ["Anti-clockwise", "Historic", "Challenging layout", "Limited runoff", "Passionate fans"],
    imageQuery: "imola racing circuit"
  },
  {
    id: "hungaroring",
    name: "Hungaroring",
    location: "Mogyoród",
    country: "Hungary",
    firstGP: 1986,
    lapLength: "4.381 km",
    numberOfLaps: 70,
    raceDistance: "306.630 km",
    lapRecord: { time: "1:16.627", driver: "Lewis Hamilton", year: 2020 },
    corners: 14,
    description: "The Hungaroring is often described as 'Monaco without walls' due to its tight, twisty layout that makes overtaking extremely difficult. This made it unique during the Communist era as the first F1 race behind the Iron Curtain. The dusty, low-grip surface and scorching summer heat create additional challenges. Strategy and qualifying are crucial here. Despite limited overtaking, the Hungaroring has produced memorable races through strategy and tire management.",
    characteristics: ["Tight and twisty", "Difficult overtaking", "Hot weather", "Strategic racing", "Historic significance"],
    imageQuery: "hungary circuit racing"
  },
];
