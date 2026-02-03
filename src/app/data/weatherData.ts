export interface WeatherFactor {
  id: string;
  factor: string;
  impact: string;
  description: string;
  examples: string[];
}

export const weatherFactors: WeatherFactor[] = [
  {
    id: "temperature",
    factor: "Track Temperature",
    impact: "Tire performance & degradation",
    description: "Track temperature significantly affects tire grip and wear. Higher temperatures increase degradation and can cause overheating, while cold temperatures make it harder to bring tires into their operating window. Teams must adjust tire pressures, setup, and strategy based on track temperature predictions.",
    examples: [
      "Hot races (50°C+ track temp): High degradation, tire management crucial",
      "Cold races (20°C- track temp): Difficulty warming tires, reduced grip",
      "Singapore 2023: 62°C track temperature challenged tire management"
    ]
  },
  {
    id: "rain",
    factor: "Rain & Wet Conditions",
    impact: "Tire choice, visibility, grip levels",
    description: "Rain transforms F1 races completely. Teams must choose between intermediate and full wet tires. Visibility becomes extremely poor due to spray. Grip is significantly reduced, making the cars challenging to drive. Rain often creates unpredictable racing with surprise results as it levels the performance field between teams.",
    examples: [
      "Monaco 1984: Senna's legendary drive from 13th to 2nd (would have won if not stopped)",
      "Brazil 2008: Hamilton won championship on last corner in torrential rain",
      "Spa 2021: Race lasted only 2 laps under Safety Car due to heavy rain",
      "Canada 2011: 4-hour rain-affected race with multiple red flags"
    ]
  },
  {
    id: "wind",
    factor: "Wind Speed & Direction",
    impact: "Car balance, brake cooling",
    description: "Wind affects car aerodynamics and balance. Headwinds help braking but hurt acceleration, while tailwinds do the opposite. Crosswinds are particularly challenging, causing unpredictable handling. Strong winds can unsettle cars at high speed. Teams monitor wind forecasts closely for setup decisions.",
    examples: [
      "Bahrain: Strong desert winds often challenge drivers through fast corners",
      "Zandvoort: Coastal winds make the banked corners more unpredictable",
      "Silverstone: Variable winds affect high-speed sections like Copse"
    ]
  },
  {
    id: "humidity",
    factor: "Humidity",
    impact: "Engine performance, driver stamina",
    description: "High humidity affects engine performance (reduced power due to less oxygen density) and driver comfort. It can also influence tire behavior and grip levels. Races in tropical climates like Singapore and Malaysia are particularly demanding due to high humidity combined with heat.",
    examples: [
      "Singapore: 80%+ humidity makes it the most physically demanding race",
      "Malaysia (when on calendar): Extreme humidity challenged driver fitness",
      "Brazil: High humidity can create sudden thunderstorms"
    ]
  },
  {
    id: "changing-conditions",
    factor: "Changing Conditions",
    impact: "Strategy, tire choices, race management",
    description: "Transitional weather is the most challenging. Teams must decide when to switch from wet to dry tires or vice versa. Getting this call right can win races; getting it wrong can lose them. Drivers must manage different grip levels across the track as some sections dry faster than others.",
    examples: [
      "Germany 2019: Changing conditions caused multiple crashes and strategy gambles",
      "Turkey 2020: Wet race that gradually dried created strategic opportunities",
      "Imola 2021: Drying track led to critical tire strategy decisions"
    ]
  }
];

export const memorableWeatherRaces = [
  {
    race: "Monaco 1984",
    description: "Torrential rain. Ayrton Senna's breakthrough drive, climbing from 13th to catch race leader Alain Prost before the race was controversially stopped. Senna was gaining 2-3 seconds per lap in impossible conditions.",
    winner: "Alain Prost"
  },
  {
    race: "Brazil 2008",
    description: "Monsoon conditions at Interlagos. Lewis Hamilton passed Timo Glock on the last corner of the last lap to clinch his first World Championship by a single point.",
    winner: "Felipe Massa (but Hamilton won championship)"
  },
  {
    race: "Canada 2011",
    description: "The longest race in F1 history (4+ hours) due to rain delays. Multiple red flags. Jenson Button came from last place after multiple incidents to win in a dramatic finish.",
    winner: "Jenson Button"
  },
  {
    race: "Germany 2019",
    description: "Changing conditions caused chaos. Multiple crashes including race leader Charles Leclerc and Mercedes' Lewis Hamilton. Max Verstappen dominated in the wet conditions.",
    winner: "Max Verstappen"
  },
  {
    race: "Belgium 1998",
    description: "Heavy rain at the start caused a massive first-corner pileup involving 13 cars. Race was red-flagged and restarted. Damon Hill won his final F1 race.",
    winner: "Damon Hill"
  },
  {
    race: "Japan 2007",
    description: "Typhoon threatened the race. Heavy rain and fog reduced visibility severely. Lewis Hamilton crashed while leading, helping Kimi Räikkönen to the championship.",
    winner: "Lewis Hamilton (race), Kimi Räikkönen (championship)"
  },
  {
    race: "Malaysia 2012",
    description: "Tropical storm hit mid-race. Track conditions varied dramatically. Alonso drove brilliantly to win from 8th on the grid in tricky conditions.",
    winner: "Fernando Alonso"
  },
  {
    race: "Spa 2021",
    description: "The shortest 'race' in F1 history. Cars completed just 2 laps behind the Safety Car in torrential rain before being red-flagged. Half points awarded. Race was criticized as a 'farce'.",
    winner: "Max Verstappen (but no actual racing occurred)"
  }
];

export const weatherImpactOnTracks = [
  {
    track: "Spa-Francorchamps",
    description: "Famous for unpredictable weather. Due to its location in the Ardennes forest and length (7km), it can be raining on one part of the circuit while dry on another. Micro-climates make tire choices extremely difficult."
  },
  {
    track: "Silverstone",
    description: "British weather means rain is always possible. The exposed location makes it susceptible to sudden showers. High-speed corners become treacherous in wet conditions."
  },
  {
    track: "Suzuka",
    description: "Often affected by typhoons in October. Heavy rain can create dangerous conditions. The figure-eight layout means water runs differently across sections of the track."
  },
  {
    track: "Singapore",
    description: "Tropical climate with high risk of thunderstorms. Humidity is extreme (80%+), making it physically the most demanding race even without rain. When it rains, drainage is good but visibility becomes zero due to spray."
  },
  {
    track: "Interlagos",
    description: "Summer thunderstorms are common. Rain can arrive suddenly and heavily. The elevation changes mean water flows across the track. Scene of many dramatic wet-weather moments."
  },
  {
    track: "Nürburgring",
    description: "Located in the Eifel mountains, notorious for sudden weather changes. Rain, fog, and even snow have affected races here. Michael Schumacher's crash in 1999 was partly due to sudden rain."
  }
];
