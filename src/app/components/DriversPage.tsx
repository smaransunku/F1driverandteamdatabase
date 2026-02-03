import { useState } from "react";
import { Link } from "react-router";
import { driversData } from "@/app/data/driversData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Search, Trophy, Flag } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { unsplash_tool } from "@/tools/unsplash";

export function DriversPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrivers = driversData.filter((driver) =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl text-white flex items-center">
          <Flag className="size-10 mr-4 text-red-500" />
          F1 Drivers
        </h1>
        <p className="text-xl text-zinc-400">
          Explore legendary Formula 1 drivers with comprehensive career statistics, backstories, 
          and team histories spanning from 1950 to the present day.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-zinc-500" />
        <Input
          type="text"
          placeholder="Search drivers by name or nationality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
        />
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-red-500 mb-1">{driversData.length}</div>
            <div className="text-sm text-zinc-400">Featured Drivers</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-red-500 mb-1">
              {driversData.reduce((sum, d) => sum + d.championships, 0)}
            </div>
            <div className="text-sm text-zinc-400">Total Championships</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-red-500 mb-1">
              {driversData.reduce((sum, d) => sum + d.totalWins, 0)}
            </div>
            <div className="text-sm text-zinc-400">Total Race Wins</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-red-500 mb-1">
              {driversData.reduce((sum, d) => sum + d.totalPodiums, 0)}
            </div>
            <div className="text-sm text-zinc-400">Total Podiums</div>
          </CardContent>
        </Card>
      </div>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDrivers.map((driver) => (
          <Link key={driver.id} to={`/drivers/${driver.id}`}>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-red-600/10 h-full overflow-hidden group">
              <div className="aspect-video relative overflow-hidden bg-zinc-800">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop`}
                  alt={driver.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {driver.championships > 0 && (
                    <Badge className="bg-yellow-600 hover:bg-yellow-700 flex items-center gap-1">
                      <Trophy className="size-3" />
                      {driver.championships}x
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{driver.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                    {driver.nationality}
                  </Badge>
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                    {driver.careerYears}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg text-red-500">{driver.totalWins}</div>
                    <div className="text-xs text-zinc-500">Wins</div>
                  </div>
                  <div>
                    <div className="text-lg text-red-500">{driver.totalPodiums}</div>
                    <div className="text-xs text-zinc-500">Podiums</div>
                  </div>
                  <div>
                    <div className="text-lg text-red-500">{driver.totalPoles}</div>
                    <div className="text-xs text-zinc-500">Poles</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredDrivers.length === 0 && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="py-12 text-center">
            <p className="text-zinc-400">No drivers found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
