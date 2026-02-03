import { useParams, Link } from "react-router";
import { driversData } from "@/app/data/driversData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Trophy, Flag, Calendar, MapPin, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function DriverDetailPage() {
  const { driverId } = useParams<{ driverId: string }>();
  const driver = driversData.find((d) => d.id === driverId);

  if (!driver) {
    return (
      <div className="space-y-4">
        <Link to="/drivers">
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4 mr-2" />
            Back to Drivers
          </Button>
        </Link>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="py-12 text-center">
            <p className="text-zinc-400">Driver not found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link to="/drivers">
        <Button variant="ghost" className="text-zinc-400 hover:text-white">
          <ArrowLeft className="size-4 mr-2" />
          Back to Drivers
        </Button>
      </Link>

      {/* Driver Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="aspect-square relative overflow-hidden bg-zinc-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=800&fit=crop"
                alt={driver.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-4xl text-white mb-3">{driver.name}</h1>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-red-600 hover:bg-red-700 text-lg py-1 px-3">
                {driver.nationality}
              </Badge>
              {driver.championships > 0 && (
                <Badge className="bg-yellow-600 hover:bg-yellow-700 text-lg py-1 px-3 flex items-center gap-1">
                  <Trophy className="size-4" />
                  {driver.championships}x World Champion
                </Badge>
              )}
            </div>
          </div>

          {/* Key Info */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="size-5 text-red-500 mt-1" />
                  <div>
                    <div className="text-sm text-zinc-500">Born</div>
                    <div className="text-white">{driver.birthDate}</div>
                    <div className="text-sm text-zinc-400">{driver.birthPlace}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Flag className="size-5 text-red-500 mt-1" />
                  <div>
                    <div className="text-sm text-zinc-500">Career</div>
                    <div className="text-white">{driver.careerYears}</div>
                    <div className="text-sm text-zinc-400">{driver.totalRaces} races</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Stats */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="size-5 mr-2 text-red-500" />
                Career Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl text-red-500 mb-1">{driver.totalWins}</div>
                  <div className="text-sm text-zinc-400">Race Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-red-500 mb-1">{driver.totalPodiums}</div>
                  <div className="text-sm text-zinc-400">Podiums</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-red-500 mb-1">{driver.totalPoles}</div>
                  <div className="text-sm text-zinc-400">Pole Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-red-500 mb-1">{driver.totalFastestLaps}</div>
                  <div className="text-sm text-zinc-400">Fastest Laps</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl text-red-500 mb-1">{driver.careerPoints}</div>
                  <div className="text-sm text-zinc-400">Career Points</div>
                </div>
                <div>
                  <div className="text-2xl text-red-500 mb-1">{driver.championships}</div>
                  <div className="text-sm text-zinc-400">World Championships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Backstory */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Backstory</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
            {driver.backstory}
          </p>
        </CardContent>
      </Card>

      {/* Team History */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center">
            <Flag className="size-6 mr-3 text-red-500" />
            Team History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {driver.teamHistory.map((team, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl text-white mb-1">{team.team}</h3>
                    <p className="text-zinc-400">{team.years}</p>
                  </div>
                  <Badge variant="outline" className="text-zinc-300 border-zinc-600 mt-2 md:mt-0 w-fit">
                    {team.races} races
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl text-red-500">{team.wins}</div>
                    <div className="text-xs text-zinc-500">Wins</div>
                  </div>
                  <div>
                    <div className="text-2xl text-red-500">{team.podiums}</div>
                    <div className="text-xs text-zinc-500">Podiums</div>
                  </div>
                  <div>
                    <div className="text-2xl text-red-500">
                      {team.podiums > 0 ? ((team.wins / team.races) * 100).toFixed(1) : '0.0'}%
                    </div>
                    <div className="text-xs text-zinc-500">Win Rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Timeline Summary */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Career Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-zinc-300">
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded">
              <span>Total Career Length</span>
              <span className="text-red-500">{driver.careerYears}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded">
              <span>Total Races Entered</span>
              <span className="text-red-500">{driver.totalRaces}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded">
              <span>Podium Rate</span>
              <span className="text-red-500">
                {((driver.totalPodiums / driver.totalRaces) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded">
              <span>Win Rate</span>
              <span className="text-red-500">
                {((driver.totalWins / driver.totalRaces) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded">
              <span>Average Points per Race</span>
              <span className="text-red-500">
                {(driver.careerPoints / driver.totalRaces).toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
