import { weatherFactors, memorableWeatherRaces, weatherImpactOnTracks } from "@/app/data/weatherData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Cloud, CloudRain, Wind, Thermometer, Trophy, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export function WeatherPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl text-white flex items-center">
          <Cloud className="size-10 mr-4 text-blue-500" />
          Weather in F1
        </h1>
        <p className="text-xl text-zinc-400">
          How weather conditions dramatically impact Formula 1 races, from track temperature to 
          torrential rain, and the memorable races defined by the elements.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="factors" className="space-y-6">
        <TabsList className="bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="factors" className="data-[state=active]:bg-red-600">
            Weather Factors
          </TabsTrigger>
          <TabsTrigger value="races" className="data-[state=active]:bg-red-600">
            Memorable Races
          </TabsTrigger>
          <TabsTrigger value="tracks" className="data-[state=active]:bg-red-600">
            Track Weather
          </TabsTrigger>
        </TabsList>

        {/* Factors Tab */}
        <TabsContent value="factors" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Understanding Weather Impact</CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-300 space-y-2">
              <p>
                Weather is one of the great unpredictables in Formula 1. While teams can forecast 
                conditions, rapid changes can transform a race in minutes. Temperature, rain, wind, 
                and humidity all play crucial roles in car performance, tire behavior, and race strategy.
              </p>
              <p>
                Teams employ dedicated meteorologists who provide lap-by-lap weather predictions. 
                These forecasts help teams make critical decisions about setup, tire choices, and 
                pit stop timing. Getting it right can win championships; getting it wrong can lose them.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {weatherFactors.map((factor) => {
              const iconMap: Record<string, any> = {
                temperature: Thermometer,
                rain: CloudRain,
                wind: Wind,
                humidity: Cloud,
                "changing-conditions": Cloud,
              };
              const Icon = iconMap[factor.id] || Cloud;

              return (
                <Card key={factor.id} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center gap-3">
                      <Icon className="size-8 text-blue-500" />
                      {factor.factor}
                    </CardTitle>
                    <div className="pt-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700">
                        Impact: {factor.impact}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-zinc-300 leading-relaxed">{factor.description}</p>

                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="text-white mb-3">Notable Examples:</h4>
                      <ul className="space-y-2">
                        {factor.examples.map((example, index) => (
                          <li key={index} className="text-zinc-300 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Weather Strategy Decisions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                <strong className="text-white">Before the Race:</strong> Teams must decide on 
                aerodynamic setup based on predicted conditions. A wet race requires maximum downforce; 
                a hot, dry race might favor low-downforce for top speed.
              </p>
              <p>
                <strong className="text-white">During the Race:</strong> Real-time weather data 
                determines tire choices. Teams gamble on when rain will start or stop, deciding 
                whether to pit for intermediates, wets, or gamble on staying out.
              </p>
              <p>
                <strong className="text-white">The Human Factor:</strong> Drivers have different 
                abilities in wet conditions. Some, like Ayrton Senna, Lewis Hamilton, and Max 
                Verstappen, excel in the rain, often gaining multiple positions when conditions 
                deteriorate.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Memorable Races Tab */}
        <TabsContent value="races" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Trophy className="size-6 mr-3 text-yellow-500" />
                Legendary Weather-Affected Races
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <p className="mb-6">
                Some of F1's most memorable moments have come in challenging weather. Rain is the 
                great equalizer, often producing surprise results and showcasing driver skill in 
                its purest form. Here are the most iconic weather-affected races in F1 history:
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {memorableWeatherRaces.map((race, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <CloudRain className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl text-white">{race.race}</h3>
                        <Badge className="bg-yellow-600 hover:bg-yellow-700">
                          {race.winner}
                        </Badge>
                      </div>
                      <p className="text-zinc-300 leading-relaxed">{race.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Masters of the Wet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                Certain drivers have legendary reputations for wet-weather driving:
              </p>
              <div className="space-y-2 ml-4">
                <p>
                  <strong className="text-white">Ayrton Senna:</strong> Widely considered the 
                  greatest rain driver ever. His 1984 Monaco performance and 1993 European GP 
                  (Donington Park) stand as masterclasses in wet-weather driving.
                </p>
                <p>
                  <strong className="text-white">Michael Schumacher:</strong> Devastating in the 
                  wet, particularly in his Ferrari years. His 1996 Spanish GP win in torrential 
                  rain showcased his brilliance.
                </p>
                <p>
                  <strong className="text-white">Lewis Hamilton:</strong> Multiple stunning wet 
                  drives including Brazil 2008, Silverstone 2008, and Singapore 2022. His car 
                  control in the wet is exceptional.
                </p>
                <p>
                  <strong className="text-white">Max Verstappen:</strong> The modern wet-weather 
                  master. His Brazil 2016 drive as a teenager announced his talent, while Germany 
                  2019 showed his maturity.
                </p>
                <p>
                  <strong className="text-white">Jenson Button:</strong> Canada 2011 remains one 
                  of the greatest wet-weather performances, coming from last to win in treacherous 
                  conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Track Weather Tab */}
        <TabsContent value="tracks" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <MapPin className="size-6 mr-3 text-green-500" />
                Weather Patterns by Circuit
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <p className="mb-6">
                Each circuit has unique weather characteristics based on location, time of year, 
                and local geography. Some tracks are notorious for unpredictable conditions, while 
                others offer near-guaranteed sunshine or rain.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {weatherImpactOnTracks.map((track, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-2">
                    <MapPin className="size-5 text-green-500" />
                    {track.track}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Seasonal Weather Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">European Summer (June-August)</h4>
                  <p>
                    Generally hot and dry, but thunderstorms possible. Tracks like Silverstone, 
                    Spa, and Hungaroring can experience sudden weather changes. High temperatures 
                    increase tire degradation.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Asian Autumn (September-October)</h4>
                  <p>
                    Typhoon season affects Japan and Singapore. High humidity is constant. Singapore's 
                    tropical climate means thunderstorms are always possible. Suzuka often faces 
                    typhoon threats.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Middle East (November-March)</h4>
                  <p>
                    Bahrain and Abu Dhabi are typically hot and dry. Night races help moderate 
                    temperatures. Sandstorms are rare but possible, reducing visibility and grip.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Americas (Various)</h4>
                  <p>
                    Miami and Austin are hot. Mexico City's altitude (2,200m) affects engine 
                    performance more than weather. Brazil in November is unpredictable - can be 
                    hot and dry or torrential rain.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Australia/Early Season</h4>
                  <p>
                    Melbourne (when on calendar) is autumn - pleasant but changeable. Bahrain's 
                    season opener is typically hot and dusty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
