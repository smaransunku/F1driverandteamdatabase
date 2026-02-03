import { Link } from "react-router";
import { Flag, Trophy, MapPin, Circle, Cloud, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";

export function HomePage() {
  const sections = [
    {
      icon: Flag,
      title: "Drivers",
      description: "Explore comprehensive profiles of F1 legends including backstories, career statistics, championship wins, and team histories from 1950 to present day.",
      link: "/drivers",
      color: "bg-red-600"
    },
    {
      icon: Trophy,
      title: "Championships",
      description: "Complete history of World Drivers' and Constructors' Championships from 1950. View every champion, their winning team, and notable events from each season.",
      link: "/championships",
      color: "bg-yellow-600"
    },
    {
      icon: MapPin,
      title: "Tracks",
      description: "Detailed information on iconic F1 circuits around the world including track characteristics, lap records, and what makes each venue unique.",
      link: "/tracks",
      color: "bg-green-600"
    },
    {
      icon: Circle,
      title: "Tyre Compounds",
      description: "Understanding F1 tire technology, from soft to hard compounds, wet weather tires, strategy implications, and the evolution of tire regulations.",
      link: "/tyres",
      color: "bg-purple-600"
    },
    {
      icon: Cloud,
      title: "Weather Impact",
      description: "How weather conditions affect races, memorable wet-weather grands prix, and the strategic decisions teams make based on weather forecasts.",
      link: "/weather",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl text-white mb-4">
          Formula 1 Encyclopedia
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Your comprehensive guide to Formula 1 history, featuring detailed information about drivers, 
          teams, circuits, championships, technical regulations, and everything that makes F1 the pinnacle 
          of motorsport.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-red-500 mb-2">75+</div>
            <div className="text-zinc-400">Years of F1</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-red-500 mb-2">1,100+</div>
            <div className="text-zinc-400">Races</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-red-500 mb-2">770+</div>
            <div className="text-zinc-400">Drivers</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-red-500 mb-2">70+</div>
            <div className="text-zinc-400">Circuits</div>
          </CardContent>
        </Card>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.link} to={section.link}>
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-red-600/10 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`${section.color} p-3 rounded-lg`}>
                      <Icon className="size-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-zinc-400 text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* About F1 Section */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center">
            <TrendingUp className="size-6 mr-3 text-red-500" />
            About Formula 1
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-zinc-300">
          <p>
            Formula One (F1) is the highest class of international racing for open-wheel single-seater 
            formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA). 
            The World Drivers' Championship, which became the FIA Formula One World Championship in 1981, 
            has been one of the premier forms of racing around the world since its inaugural season in 1950.
          </p>
          <p>
            The word "formula" in the name refers to the set of rules to which all participants' cars must 
            conform. A Formula One season consists of a series of races, known as Grands Prix, which take 
            place worldwide on both purpose-built circuits and closed public roads.
          </p>
          <p>
            F1 cars are the fastest regulated road-course racing cars in the world, owing to very high 
            cornering speeds achieved through the generation of large amounts of aerodynamic downforce. 
            Formula One cars race at speeds of up to 370 km/h (230 mph) with engines currently limited 
            in performance to a maximum of 15,000 RPM. The cars are capable of lateral acceleration in 
            excess of 5g in corners.
          </p>
          <p>
            This encyclopedia covers the complete history from 1950 to the present day, featuring legendary 
            drivers like Juan Manuel Fangio, Ayrton Senna, Michael Schumacher, Lewis Hamilton, and Max Verstappen, 
            iconic teams like Ferrari, McLaren, Williams, and Mercedes, and historic circuits from Monaco 
            to Monza, Silverstone to Suzuka.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
