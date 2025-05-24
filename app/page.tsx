
"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Gamepad2, Users, Zap, Trophy, Play } from "lucide-react";
import { games } from "./gameList/games";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="flex justify-center items-center mb-8">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-4 rounded-2xl shadow-2xl">
                <Gamepad2 className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
              Game On!
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Challenge your friends in epic 2-player battles
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              From classic games to brain-bending puzzles - compete, laugh, and create unforgettable gaming moments together!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                Start Playing
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-200">
                <Users className="w-5 h-5 mr-2" />
                Invite Friends
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Play</h3>
                <p className="text-gray-400">Jump into games instantly - no downloads required!</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">2-Player Focus</h3>
                <p className="text-gray-400">Perfect games designed for you and your friend</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Competitive Fun</h3>
                <p className="text-gray-400">Track wins, celebrate victories, and improve your skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Choose Your Battle
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pick a game and challenge your friend to an epic showdown!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {games.map((game) => (
            <Card key={game.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${game.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  <span className="text-3xl">{game.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {game.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {game.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-cyan-400 font-medium">{game.players}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${game.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      game.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                    }`}>
                    {game.difficulty}
                  </span>
                </div>

                <Button onClick={() => router.push('/game/rock-paper')}
                  className={`w-full bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white font-semibold transition-all duration-200 ${game.name === 'Rock Paper Scissors' ? '' : 'opacity-60 cursor-not-allowed'
                    }`}
                  disabled={game.name !== 'Rock Paper Scissors'}
                >
                  {game.name === 'Rock Paper Scissors' ? 'Play Now' : 'Coming Soon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">More Games Coming Soon!</h3>
            <p className="text-gray-300 mb-6">
              We're working hard to bring you more exciting 2-player games. Stay tuned for epic battles and brain-teasing challenges!
            </p>
            <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
