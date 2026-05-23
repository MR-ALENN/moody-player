// src/pages/Library.jsx

import BottomNav from "../components/BottomNav"
import { Settings, ChevronRight } from "lucide-react"

function Library() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-y-auto pb-32">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5">

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full border border-purple-400 overflow-hidden">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-[15px] font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Moody Music Player
          </h1>

        </div>

        <button>
          <Settings
            size={18}
            className="text-purple-400"
          />
        </button>

      </div>

      {/* Main */}
      <div className="relative z-10 px-4 mt-6">

        {/* Heading */}
        <h1 className="text-[38px] leading-[42px] font-extrabold tracking-tight">
          Your Emotional Journey
        </h1>

        <p className="text-gray-400 text-sm mt-3 leading-6">
          Insights into your moods and movements.
        </p>

        {/* Chart Card */}
        <div className="mt-7 bg-white/[0.05] border border-white/10 rounded-[30px] p-5">

          {/* Top */}
          <div className="flex items-center justify-between">

            <h2 className="text-[11px] tracking-[2px] text-purple-200 font-bold uppercase">
              Weekly Mood Velocity
            </h2>

            <span className="text-gray-400 text-[11px]">
              Past 7 Days
            </span>

          </div>

          {/* Chart */}
          <div className="flex items-end justify-between gap-3 h-44 mt-8">

            <div className="w-full h-16 bg-purple-800 rounded-t-xl" />

            <div className="w-full h-28 bg-purple-600 rounded-t-xl" />

            <div className="w-full h-40 bg-purple-300 rounded-t-xl" />

            <div className="w-full h-20 bg-purple-700 rounded-t-xl" />

            <div className="w-full h-34 bg-pink-700 rounded-t-xl" />

            <div className="w-full h-40 bg-purple-500 rounded-t-xl" />

            <div className="w-full h-26 bg-purple-300 rounded-t-xl" />

          </div>

          {/* Days */}
          <div className="flex justify-between text-[10px] text-gray-400 mt-4 px-1">

            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>

          </div>

        </div>

        {/* Circle Card */}
        <div className="mt-5 bg-white/[0.05] border border-white/10 rounded-[30px] p-6 text-center">

          <h2 className="text-lg font-bold">
            Avg. Intensity
          </h2>

          {/* Circle */}
          <div className="relative w-40 h-40 rounded-full border-[12px] border-cyan-400 mx-auto mt-6 flex items-center justify-center">

            <div>

              <h3 className="text-4xl font-extrabold">
                72%
              </h3>

              <p className="text-cyan-400 text-[10px] mt-1 uppercase">
                High Energy
              </p>

            </div>

          </div>

          <p className="text-gray-400 text-sm mt-6">
            Elevated vibes this week
          </p>

        </div>

        {/* Mood History */}
        <div className="mt-7">

          {/* Top */}
          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Mood History
            </h2>

            <button className="text-purple-400 text-sm">
              View All
            </button>

          </div>

          {/* Cards */}
          <div className="space-y-4 mt-5">

            {/* Card 1 */}
            <div className="bg-white/[0.05] border border-white/10 rounded-[24px] p-4 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-sm">
                      Energetic & Focused
                    </h3>

                    <span className="bg-green-500/20 text-green-300 text-[9px] px-2 py-1 rounded-full uppercase">
                      Peak
                    </span>

                  </div>

                  <p className="text-gray-400 text-[11px] mt-1">
                    Today • 10:45 AM
                  </p>

                  <p className="text-purple-300 text-[11px] mt-1">
                    🎵 “Midnight City” - M83
                  </p>

                </div>

              </div>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />

            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.05] border border-white/10 rounded-[24px] p-4 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-2xl">
                  💧
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-sm">
                      Calm & Reflective
                    </h3>

                    <span className="bg-cyan-500/20 text-cyan-300 text-[9px] px-2 py-1 rounded-full uppercase">
                      Rest
                    </span>

                  </div>

                  <p className="text-gray-400 text-[11px] mt-1">
                    Yesterday • 11:20 PM
                  </p>

                  <p className="text-purple-300 text-[11px] mt-1">
                    🎵 “Weightless” - Marconi Union
                  </p>

                </div>

              </div>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />

            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.05] border border-white/10 rounded-[24px] p-4 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center text-2xl">
                  😊
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-sm">
                      Joyful & Radiant
                    </h3>

                    <span className="bg-orange-500/20 text-orange-300 text-[9px] px-2 py-1 rounded-full uppercase">
                      High
                    </span>

                  </div>

                  <p className="text-gray-400 text-[11px] mt-1">
                    2 days ago • 3:15 PM
                  </p>

                  <p className="text-purple-300 text-[11px] mt-1">
                    🎵 “Happy” - Pharrell Williams
                  </p>

                </div>

              </div>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />

            </div>

          </div>

        </div>

        {/* Based On Flow */}
        <div className="mt-8">

          <h2 className="text-3xl font-bold">
            Based on your Flow
          </h2>

          {/* Playlist Cards */}
          <div className="grid grid-cols-2 gap-4 mt-5">

            {/* Card 1 */}
            <div className="rounded-[22px] overflow-hidden bg-black border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-40 object-cover"
              />

              <div className="p-3">

                <p className="text-[10px] text-pink-400 uppercase tracking-[2px]">
                  Daily Mix
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Focus Flow
                </h3>

              </div>

            </div>

            {/* Card 2 */}
            <div className="rounded-[22px] overflow-hidden bg-black border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-40 object-cover"
              />

              <div className="p-3">

                <p className="text-[10px] text-orange-300 uppercase tracking-[2px]">
                  Weekend Mix
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Upbeat Beats
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Nav */}
      <BottomNav />

    </div>
  )
}

export default Library