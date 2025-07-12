import { Search, Settings, Play } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  const moodFilters = ["Chill", "Energetic", "Romantic", "Melancholy", "Focus"]

  const playlists = [
    { title: "Sunset Vibes", artist: "Lofi Collective", image: "/placeholder.svg?height=120&width=120" },
    { title: "Morning Coffee", artist: "Acoustic Dreams", image: "/placeholder.svg?height=120&width=120" },
    { title: "Night Drive", artist: "Synthwave Society", image: "/placeholder.svg?height=120&width=120" },
    { title: "Study Session", artist: "Focus Beats", image: "/placeholder.svg?height=120&width=120" },
    { title: "Rainy Days", artist: "Ambient Sounds", image: "/placeholder.svg?height=120&width=120" },
    { title: "Workout Energy", artist: "Beat Makers", image: "/placeholder.svg?height=120&width=120" },
    { title: "Love Songs", artist: "Romantic Hits", image: "/placeholder.svg?height=120&width=120" },
    { title: "Deep Thoughts", artist: "Melancholy Mix", image: "/placeholder.svg?height=120&width=120" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12">
        <Button variant="ghost" size="icon" className="rounded-full bg-white/70 backdrop-blur-sm shadow-sm">
          <Settings className="h-5 w-5 text-purple-600" />
        </Button>

        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          EchoNest
        </h1>

        <Button variant="ghost" size="icon" className="rounded-full bg-white/70 backdrop-blur-sm shadow-sm">
          <Search className="h-5 w-5 text-purple-600" />
        </Button>
      </header>

      {/* Mood Filter Chips */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">How are you feeling?</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-2">
            {moodFilters.map((mood, index) => (
              <Button
                key={mood}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-6 py-2 text-sm font-medium whitespace-nowrap ${
                  index === 0
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md"
                    : "bg-white/80 backdrop-blur-sm border-purple-200 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {mood}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Playlist Grid */}
      <div className="px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Discover Playlists</h2>
        <div className="grid grid-cols-2 gap-4">
          {playlists.map((playlist, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={playlist.image || "/placeholder.svg"}
                    alt={playlist.title}
                    width={120}
                    height={120}
                    className="w-full h-32 object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white w-8 h-8"
                  >
                    <Play className="h-4 w-4 text-purple-600 fill-purple-600" />
                  </Button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1">{playlist.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{playlist.artist}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </div>
  )
}
