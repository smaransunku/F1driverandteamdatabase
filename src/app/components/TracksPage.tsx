import { useState } from "react";
import { tracksData } from "@/app/data/tracksData";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { MapPin, Gauge, Calendar, Award } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function TracksPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTracks = tracksData.filter(
    (track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl text-white flex items-center">
          <MapPin className="size-10 mr-4 text-green-500" />
          F1 Circuits
        </h1>
        <p className="text-xl text-zinc-400">
          Explore the world's most iconic racing circuits, from the streets of Monaco to the 
          high-speed straights of Monza.
        </p>
      </div>

      {/* Search */}
      <Input
        type="text"
        placeholder="Search tracks by name, location, or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-500 mb-1">{tracksData.length}</div>
            <div className="text-sm text-zinc-400">Featured Tracks</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-500 mb-1">
              {tracksData.filter((t) => t.firstGP < 1960).length}
            </div>
            <div className="text-sm text-zinc-400">Historic Circuits (pre-1960)</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-500 mb-1">
              {tracksData.filter((t) => t.characteristics.includes("Street circuit")).length}
            </div>
            <div className="text-sm text-zinc-400">Street Circuits</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="pt-6">
            <div className="text-2xl text-green-500 mb-1">
              {new Set(tracksData.map((t) => t.country)).size}
            </div>
            <div className="text-sm text-zinc-400">Countries</div>
          </CardContent>
        </Card>
      </div>

      {/* Tracks Grid */}
      <div className="space-y-6">
        {filteredTracks.map((track) => (
          <Card
            key={track.id}
            className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="aspect-video lg:aspect-square relative overflow-hidden bg-zinc-800">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=800&fit=crop"
                    alt={track.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl text-white mb-2">{track.name}</h2>
                    <div className="flex items-center gap-2 text-zinc-400 mb-3">
                      <MapPin className="size-4" />
                      <span>{track.location}, {track.country}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {track.characteristics.map((char) => (
                        <Badge
                          key={char}
                          variant="outline"
                          className="text-zinc-400 border-zinc-700"
                        >
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">{track.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-800">
                    <div>
                      <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Calendar className="size-4" />
                        <span className="text-xs">First GP</span>
                      </div>
                      <div className="text-white">{track.firstGP}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Gauge className="size-4" />
                        <span className="text-xs">Lap Length</span>
                      </div>
                      <div className="text-white">{track.lapLength}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs mb-1">Total Laps</div>
                      <div className="text-white">{track.numberOfLaps}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs mb-1">Corners</div>
                      <div className="text-white">{track.corners}</div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="size-4 text-yellow-500" />
                      <span className="text-sm text-zinc-400">Lap Record</span>
                    </div>
                    <div className="text-white">
                      <span className="text-xl text-green-500 mr-2">{track.lapRecord.time}</span>
                      <span className="text-zinc-400">
                        {track.lapRecord.driver} ({track.lapRecord.year})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredTracks.length === 0 && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="py-12 text-center">
            <p className="text-zinc-400">No tracks found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
