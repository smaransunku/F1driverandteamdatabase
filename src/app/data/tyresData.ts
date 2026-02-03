export interface TyreCompound {
  id: string;
  name: string;
  color: string;
  colorCode: string;
  performance: string;
  durability: string;
  usage: string;
  description: string;
  introduced: string;
}

export const tyresData: TyreCompound[] = [
  {
    id: "soft",
    name: "Soft (C5)",
    color: "Red",
    colorCode: "#FF0000",
    performance: "Highest grip",
    durability: "Lowest",
    usage: "Qualifying, short stints",
    description: "The softest compound provides maximum grip but wears fastest. Ideal for qualifying laps and short race stints. Offers the quickest lap times but requires careful management. Typically 1-1.5 seconds faster than hard compound but degrades rapidly, especially in hot conditions or on abrasive track surfaces.",
    introduced: "2019 (current naming system)"
  },
  {
    id: "medium",
    name: "Medium (C3)",
    color: "Yellow",
    colorCode: "#FFD700",
    performance: "Balanced grip",
    durability: "Medium",
    usage: "Race stints, versatile",
    description: "The medium compound offers a balance between performance and durability. Most versatile tire choice that works well in various conditions. Often the preferred race tire for teams looking to minimize pit stops. Provides consistent performance over longer stints and works across a wide temperature window.",
    introduced: "2019 (current naming system)"
  },
  {
    id: "hard",
    name: "Hard (C1)",
    color: "White",
    colorCode: "#FFFFFF",
    performance: "Lower grip",
    durability: "Highest",
    usage: "Long stints, one-stop strategies",
    description: "The hardest compound is most durable but offers less grip. Designed for long race stints and can handle high temperatures and abrasive surfaces. Essential for one-stop strategies. Takes longer to reach optimal operating temperature but rewards teams that can manage the trade-off between speed and strategy.",
    introduced: "2019 (current naming system)"
  },
  {
    id: "intermediate",
    name: "Intermediate",
    color: "Green",
    colorCode: "#00FF00",
    performance: "Wet conditions grip",
    durability: "Medium (wet use)",
    usage: "Damp track, light rain",
    description: "Intermediate tires are designed for wet conditions with light to moderate rain or a drying track. Features grooves to disperse water and prevent aquaplaning. Can clear up to 30 liters of water per second at 300 km/h. Works best when there's a consistent damp surface. Teams often gamble on these during changing conditions, making strategy calls crucial.",
    introduced: "1998 (grooved wet tires)"
  },
  {
    id: "wet",
    name: "Full Wet",
    color: "Blue",
    colorCode: "#0000FF",
    performance: "Heavy rain grip",
    durability: "High (wet use)",
    usage: "Heavy rain, standing water",
    description: "Full wet tires are for heavy rain and standing water conditions. Feature deep grooves that can disperse up to 85 liters of water per second at 300 km/h. Essential for driver safety in torrential conditions. The extreme tread pattern provides aquaplaning resistance but creates significant drag, reducing top speed. Used only in the most challenging weather conditions.",
    introduced: "1998 (grooved wet tires)"
  }
];

export const tyreHistory = {
  title: "History of F1 Tire Regulations",
  timeline: [
    {
      period: "1950-1997",
      description: "Open tire competition with multiple manufacturers (Goodyear, Michelin, Pirelli, Bridgestone). Teams could choose suppliers, leading to tire wars that drove innovation. Slick tires (no grooves) were standard in dry conditions."
    },
    {
      period: "1998-2008",
      description: "Grooved tires mandatory (4 grooves) to reduce cornering speeds for safety. Michelin and Bridgestone competed until 2006. Bridgestone became sole supplier 2007-2010."
    },
    {
      period: "2009",
      description: "Slick tires returned with wider front tires. Bridgestone sole supplier."
    },
    {
      period: "2011-present",
      description: "Pirelli became sole tire supplier. Initially used a wide range of compounds with complex naming. Reformed in 2019 to current simple system (Soft/Medium/Hard plus Wet/Intermediate) where the actual compounds (C1-C5) vary by circuit."
    },
    {
      period: "2024-present",
      description: "Continued evolution with focus on sustainability. Pirelli developing tires with sustainable materials for future regulations."
    }
  ]
};

export const tireStrategy = {
  title: "Tire Strategy Fundamentals",
  concepts: [
    {
      name: "Undercut",
      description: "Pitting earlier than the car ahead to gain track position. Fresh tires allow faster laps while the opponent is on older, slower tires. The pit stop time loss is offset by the pace advantage on new tires."
    },
    {
      name: "Overcut",
      description: "Staying out longer than competitors before pitting. Works by building a gap while others lose time in the pits, then using fresher tires at the end of the race."
    },
    {
      name: "Two-stop vs One-stop",
      description: "Two-stop strategies involve more pit stops but allow pushing harder on fresher tires. One-stop strategies minimize time lost in pits but require careful tire management. The optimal strategy depends on tire degradation rates and circuit characteristics."
    },
    {
      name: "Tire Management",
      description: "Preserving tire life by adjusting driving style, managing temperatures, and avoiding excessive sliding. Critical skill that can gain seconds per lap over a race distance."
    }
  ]
};
