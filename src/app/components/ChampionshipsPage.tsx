import { useState } from "react";
import { championshipsData } from "@/app/data/championshipsData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Trophy, TrendingUp, Award } from "lucide-react";
import { Input } from "@/app/components/ui/input";

export function ChampionshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredChampionships = championshipsData
    .filter((champ) =>
      champ.year.toString().includes(searchTerm) ||
      champ.driversChampion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      champ.driversTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      champ.constructorsChampion?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse(); // Show most recent first

  // Calculate statistics
  const driversChampionCount = championshipsData.reduce((acc, champ) => {
    acc[champ.driversChampion] = (acc[champ.driversChampion] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const constructorsChampionCount = championshipsData.reduce((acc, champ) => {
    if (champ.constructorsChampion && champ.constructorsChampion !== "TBD") {
      acc[champ.constructorsChampion] = (acc[champ.constructorsChampion] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const topDrivers = Object.entries(driversChampionCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  const topConstructors = Object.entries(constructorsChampionCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl text-white flex items-center">
          <Trophy className="size-10 mr-4 text-yellow-500" />
          F1 Championships
        </h1>
        <p className="text-xl text-zinc-400">
          Complete history of World Drivers' and Constructors' Championships from 1950 to present.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-yellow-500 mb-2">
              {championshipsData.filter(c => c.year <= 2024).length}
            </div>
            <div className="text-zinc-400">Seasons Completed</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-yellow-500 mb-2">
              {Object.keys(driversChampionCount).length - 1}
            </div>
            <div className="text-zinc-400">Different Champions</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-3xl text-yellow-500 mb-2">
              {Object.keys(constructorsChampionCount).length}
            </div>
            <div className="text-zinc-400">Constructor Champions</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="timeline" className="data-[state=active]:bg-red-600">
            Championship Timeline
          </TabsTrigger>
          <TabsTrigger value="drivers" className="data-[state=active]:bg-red-600">
            Top Drivers
          </TabsTrigger>
          <TabsTrigger value="constructors" className="data-[state=active]:bg-red-600">
            Top Constructors
          </TabsTrigger>
        </TabsList>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <Input
            type="text"
            placeholder="Search by year, driver, or team..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
          />

          <div className="space-y-3">
            {filteredChampionships.map((champ) => (
              <Card
                key={champ.year}
                className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl text-yellow-500 min-w-[80px]">
                        {champ.year}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="size-5 text-yellow-500" />
                          <div>
                            <span className="text-white text-lg">{champ.driversChampion}</span>
                            <span className="text-zinc-400 ml-2">({champ.driversTeam})</span>
                          </div>
                        </div>
                        {champ.constructorsChampion && (
                          <div className="flex items-center gap-2">
                            <Award className="size-5 text-blue-500" />
                            <div>
                              <span className="text-zinc-400">Constructors:</span>
                              <span className="text-white ml-2">{champ.constructorsChampion}</span>
                            </div>
                          </div>
                        )}
                        {champ.notableEvents && (
                          <p className="text-sm text-zinc-500 mt-2 italic">
                            {champ.notableEvents}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredChampionships.length === 0 && (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="py-12 text-center">
                <p className="text-zinc-400">No championships found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Top Drivers Tab */}
        <TabsContent value="drivers" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <TrendingUp className="size-6 mr-3 text-yellow-500" />
                Most Successful Drivers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topDrivers.map(([driver, count], index) => (
                  <div
                    key={driver}
                    className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`text-2xl min-w-[40px] text-center ${
                          index === 0
                            ? "text-yellow-500"
                            : index === 1
                            ? "text-zinc-300"
                            : index === 2
                            ? "text-orange-600"
                            : "text-zinc-500"
                        }`}
                      >
                        #{index + 1}
                      </div>
                      <div>
                        <div className="text-white text-lg">{driver}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-600 hover:bg-yellow-700 text-lg py-1 px-4">
                        {count} {count === 1 ? "Championship" : "Championships"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Notable Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-zinc-300">
              <p>• Lewis Hamilton and Michael Schumacher share the record with 7 championships each</p>
              <p>• Juan Manuel Fangio won 5 titles in the 1950s, a record that stood for 46 years</p>
              <p>• Only driver to win championships with 4 different teams: Fangio (Alfa Romeo, Ferrari, Mercedes, Maserati)</p>
              <p>• Jochen Rindt (1970) is the only posthumous champion</p>
              <p>• Fernando Alonso was the youngest champion when he won in 2005 at age 24</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Top Constructors Tab */}
        <TabsContent value="constructors" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Award className="size-6 mr-3 text-blue-500" />
                Most Successful Constructors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topConstructors.map(([constructor, count], index) => (
                  <div
                    key={constructor}
                    className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`text-2xl min-w-[40px] text-center ${
                          index === 0
                            ? "text-yellow-500"
                            : index === 1
                            ? "text-zinc-300"
                            : index === 2
                            ? "text-orange-600"
                            : "text-zinc-500"
                        }`}
                      >
                        #{index + 1}
                      </div>
                      <div>
                        <div className="text-white text-lg">{constructor}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700 text-lg py-1 px-4">
                        {count} {count === 1 ? "Championship" : "Championships"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Constructors' Championship History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-zinc-300">
              <p>• The Constructors' Championship was officially introduced in 1958</p>
              <p>• Ferrari leads with 16 championships</p>
              <p>• Williams won 9 championships between 1980-1997</p>
              <p>• Mercedes dominated 2014-2021 with 8 consecutive titles</p>
              <p>• McLaren won 8 championships across different eras</p>
              <p>• Red Bull Racing won 6 championships (2010-2013, 2022-2023)</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
