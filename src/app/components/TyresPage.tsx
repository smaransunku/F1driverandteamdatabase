import { tyresData, tyreHistory, tireStrategy } from "@/app/data/tyresData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Circle, Clock, Gauge, TrendingUp, History, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export function TyresPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl text-white flex items-center">
          <Circle className="size-10 mr-4 text-purple-500" />
          F1 Tyre Compounds
        </h1>
        <p className="text-xl text-zinc-400">
          Understanding Formula 1 tire technology, compounds, strategy, and the evolution of 
          tire regulations throughout F1 history.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="compounds" className="space-y-6">
        <TabsList className="bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="compounds" className="data-[state=active]:bg-red-600">
            Tire Compounds
          </TabsTrigger>
          <TabsTrigger value="strategy" className="data-[state=active]:bg-red-600">
            Strategy
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-red-600">
            History
          </TabsTrigger>
        </TabsList>

        {/* Compounds Tab */}
        <TabsContent value="compounds" className="space-y-6">
          <div className="space-y-6">
            {tyresData.map((tyre) => (
              <Card key={tyre.id} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-2xl flex items-center gap-3">
                      <Circle
                        className="size-8"
                        style={{ color: tyre.colorCode }}
                        fill={tyre.colorCode}
                      />
                      {tyre.name}
                    </CardTitle>
                    <Badge
                      className="text-white"
                      style={{ backgroundColor: tyre.colorCode }}
                    >
                      {tyre.color}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-300 leading-relaxed">{tyre.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Gauge className="size-4 text-purple-500" />
                        <span className="text-sm text-zinc-400">Performance</span>
                      </div>
                      <div className="text-white">{tyre.performance}</div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="size-4 text-purple-500" />
                        <span className="text-sm text-zinc-400">Durability</span>
                      </div>
                      <div className="text-white">{tyre.durability}</div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="size-4 text-purple-500" />
                        <span className="text-sm text-zinc-400">Best Usage</span>
                      </div>
                      <div className="text-white">{tyre.usage}</div>
                    </div>
                  </div>

                  <div className="text-xs text-zinc-500 pt-2">
                    Introduced: {tyre.introduced}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Understanding Tire Compounds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                Pirelli, the sole tire supplier since 2011, brings five slick tire compounds (C1-C5) 
                to each race weekend. However, only three are nominated for each Grand Prix:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The softest available compound is marked with a RED stripe (Soft)</li>
                <li>The middle compound gets a YELLOW stripe (Medium)</li>
                <li>The hardest compound has a WHITE stripe (Hard)</li>
              </ul>
              <p>
                This means the "Soft" tire at one race might be a C3 compound, while at another 
                circuit it could be a C5, depending on track characteristics and expected temperatures.
              </p>
              <p className="pt-2">
                <strong className="text-white">Key Rule:</strong> In dry conditions, drivers must 
                use at least two different tire compounds during the race (unless red-flagged or 
                heavy rain occurs).
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Strategy Tab */}
        <TabsContent value="strategy" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Lightbulb className="size-6 mr-3 text-yellow-500" />
                {tireStrategy.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {tireStrategy.concepts.map((concept) => (
                <div key={concept.name} className="bg-zinc-800/50 rounded-lg p-4">
                  <h3 className="text-xl text-white mb-2">{concept.name}</h3>
                  <p className="text-zinc-300 leading-relaxed">{concept.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Strategic Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">Track Temperature</h4>
                  <p>
                    Higher track temperatures increase tire degradation. Teams must decide whether 
                    to start on softer tires for track position or harder tires for strategy flexibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Safety Cars</h4>
                  <p>
                    A well-timed safety car can enable "free" pit stops, as the time loss is reduced 
                    when the field is bunched up. Teams gamble on when safety cars might appear.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Qualifying Strategy</h4>
                  <p>
                    Drivers who reach Q3 must start the race on the tires they set their fastest Q2 
                    lap on. This creates strategic dilemmas: use softer tires for a better grid position 
                    but difficult race, or use harder tires and start further back but with better race pace?
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Tire Management</h4>
                  <p>
                    Skilled drivers can extend tire life by managing wheelspin, avoiding lock-ups, 
                    taking smooth racing lines, and managing tire temperatures. This can gain several 
                    seconds per lap over a stint.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Wet-to-Dry Transitions</h4>
                  <p>
                    The most challenging strategic calls occur when weather changes. Switching too 
                    early to slicks on a drying track risks going off; switching too late loses track 
                    position. Getting this call right can win races.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Famous Strategic Battles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                <strong className="text-white">Spain 2021:</strong> Max Verstappen's two-stop strategy 
                to chase down Lewis Hamilton's one-stop, showcasing how tire management and strategy 
                can overcome track position.
              </p>
              <p>
                <strong className="text-white">Turkey 2020:</strong> Lewis Hamilton nursed his 
                intermediate tires for over 50 laps on a drying track, an incredible display of tire 
                management to win the race.
              </p>
              <p>
                <strong className="text-white">Hungary 2019:</strong> Lewis Hamilton went from last 
                to first partly through strategic tire calls, including fitting fresh mediums late 
                in the race while rivals were on worn tires.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <History className="size-6 mr-3 text-blue-500" />
                {tyreHistory.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {tyreHistory.timeline.map((period) => (
                <div key={period.period} className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-xl text-white mb-2">{period.period}</h3>
                  <p className="text-zinc-300 leading-relaxed">{period.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">The Tire Wars Era</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                From the 1950s through 2006, multiple tire manufacturers competed in F1, most notably 
                Goodyear, Michelin, Bridgestone, and Pirelli. This "tire war" drove rapid innovation 
                as manufacturers competed for performance advantages.
              </p>
              <p>
                The most intense period was 2001-2006, when Michelin and Bridgestone battled for 
                supremacy. Teams were split between suppliers, and tire choice became as important as 
                car design. Some circuits favored Michelin's characteristics; others suited Bridgestone.
              </p>
              <p>
                The infamous 2005 United States Grand Prix saw only 6 cars start the race after 
                Michelin-shod teams withdrew due to safety concerns about their tires on Indianapolis' 
                banking - a low point that contributed to the eventual move to a single supplier.
              </p>
              <p>
                Since 2011, Pirelli has been the sole supplier, with a mandate to create tires that 
                degrade predictably to encourage strategic variety and multiple pit stops, making 
                races more exciting for fans.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Innovation & Safety</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>
                Modern F1 tires are engineering marvels. A single tire can withstand lateral forces 
                exceeding 1.5 tons and temperatures over 100°C. The rubber compound contains over 
                20 ingredients, and the precise recipe is a closely guarded secret.
              </p>
              <p>
                Tire failures, while rare, have had significant consequences throughout F1 history. 
                This has led to stringent safety regulations including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Mandatory tire pressure and temperature monitoring</li>
                <li>Maximum age limits for tire compounds</li>
                <li>Strict quality control and testing procedures</li>
                <li>Ban on tire blankets being planned for future seasons</li>
              </ul>
              <p>
                Looking ahead, F1 is working towards sustainable tires with targets to use sustainable 
                materials and eventually achieve fully recyclable racing tires.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
