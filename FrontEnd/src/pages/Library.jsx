// src/pages/Library.jsx

import BottomNav from "../components/BottomNav"
import { Settings, ChevronRight } from "lucide-react"

function Library() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-y-auto pb-32">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Page container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex items-center justify-between pt-5 sm:pt-8">

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-full border border-purple-400 overflow-hidden shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-sm sm:text-[15px] font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
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

        {/* Heading */}
        <div className="mt-5 sm:mt-8">

          <h1 className="text-[clamp(28px,8vw,44px)] leading-[1.1] font-extrabold tracking-tight">
            Your Emotional Journey
          </h1>

          <p className="text-gray-400 text-sm mt-3 leading-6">
            Insights into your moods and movements.
          </p>

        </div>

        {/* Chart Card */}
        <div className="mt-6 sm:mt-7 bg-white/[0.05] border border-white/10 rounded-[30px] p-4 sm:p-5">

          {/* Top */}
          <div className="flex items-center justify-between">

            <h2 className="text-[10px] sm:text-[11px] tracking-[2px] text-purple-200 font-bold uppercase">
              Weekly Mood Velocity
            </h2>

            <span className="text-gray-400 text-[10px] sm:text-[11px]">
              Past 7 Days
            </span>

          </div>

          {/* Chart */}
          <div className="flex items-end justify-between gap-2 sm:gap-3 h-36 sm:h-44 mt-6 sm:mt-8">
            <div className="w-full h-16 bg-purple-800 rounded-t-xl" />
            <div className="w-full h-28 bg-purple-600 rounded-t-xl" />
            <div className="w-full h-[90%] bg-purple-300 rounded-t-xl" />
            <div className="w-full h-20 bg-purple-700 rounded-t-xl" />
            <div className="w-full h-[75%] bg-pink-700 rounded-t-xl" />
            <div className="w-full h-[90%] bg-purple-500 rounded-t-xl" />
            <div className="w-full h-[60%] bg-purple-300 rounded-t-xl" />
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
        <div className="mt-5 bg-white/[0.05] border border-white/10 rounded-[30px] p-5 sm:p-6 text-center">

          <h2 className="text-base sm:text-lg font-bold">
            Avg. Intensity
          </h2>

          {/* Circle */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border-[12px] border-cyan-400 mx-auto mt-6 flex items-center justify-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold">72%</h3>
              <p className="text-cyan-400 text-[10px] mt-1 uppercase">High Energy</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-5 sm:mt-6">
            Elevated vibes this week
          </p>

        </div>

        {/* Mood History */}
        <div className="mt-6 sm:mt-7">

          <div className="flex items-center justify-between">

            <h2 className="text-xl sm:text-2xl font-bold">
              Mood History
            </h2>

            <button className="text-purple-400 text-sm ml-4">
              View All
            </button>

          </div>

          {/* Cards */}
          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-5">

            {[
              {
                gradient: "from-pink-500 to-purple-500",
                emoji: "⚡",
                label: "Energetic & Focused",
                badge: "Peak",
                badgeClass: "bg-green-500/20 text-green-300",
                time: "Today • 10:45 AM",
                song: '🎵 "Midnight City" - M83',
              },
              {
                gradient: "from-blue-500 to-cyan-400",
                emoji: "💧",
                label: "Calm & Reflective",
                badge: "Rest",
                badgeClass: "bg-cyan-500/20 text-cyan-300",
                time: "Yesterday • 11:20 PM",
                song: '🎵 "Weightless" - Marconi Union',
              },
              {
                gradient: "from-orange-400 to-yellow-500",
                emoji: "😊",
                label: "Joyful & Radiant",
                badge: "High",
                badgeClass: "bg-orange-500/20 text-orange-300",
                time: "2 days ago • 3:15 PM",
                song: '🎵 "Happy" - Pharrell Williams',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.05] border border-white/10 rounded-[24px] p-3 sm:p-4 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                  <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-xl sm:text-2xl`}>
                    {item.emoji}
                  </div>

                  <div className="min-w-0">

                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-sm truncate">{item.label}</h3>
                      <span className={`${item.badgeClass} text-[9px] px-2 py-1 rounded-full uppercase shrink-0`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-gray-400 text-[11px] mt-1">{item.time}</p>
                    <p className="text-purple-300 text-[11px] mt-1 truncate">{item.song}</p>

                  </div>

                </div>

                <ChevronRight size={18} className="text-gray-400 shrink-0" />

              </div>
            ))}

          </div>

        </div>

        {/* Based On Flow */}
        <div className="mt-7 sm:mt-8">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Based on your Flow
          </h2>

          {/* Playlist Cards — 2 cols on mobile, 3 on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-5">

            <div className="rounded-[22px] overflow-hidden bg-black border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-32 sm:h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-[10px] text-pink-400 uppercase tracking-[2px]">Daily Mix</p>
                <h3 className="font-bold text-base sm:text-lg mt-1">Focus Flow</h3>
              </div>
            </div>

            <div className="rounded-[22px] overflow-hidden bg-black border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-32 sm:h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-[10px] text-orange-300 uppercase tracking-[2px]">Weekend Mix</p>
                <h3 className="font-bold text-base sm:text-lg mt-1">Upbeat Beats</h3>
              </div>
            </div>

            {/* Extra card visible on md+ */}
            <div className="hidden md:block rounded-[22px] overflow-hidden bg-black border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-[10px] text-cyan-300 uppercase tracking-[2px]">Late Night</p>
                <h3 className="font-bold text-lg mt-1">Chill Zone</h3>
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
