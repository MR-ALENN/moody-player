// src/pages/Home.jsx

import BottomNav from "../components/BottomNav"
import { Sparkles, Settings } from "lucide-react"

function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white pb-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full border border-purple-400 overflow-hidden">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Moody Music Player
          </h1>

        </div>

        {/* Settings */}
        <button>
          <Settings
            size={20}
            className="text-purple-400"
          />
        </button>

      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-5 mt-10">

        <h1 className="text-[52px] leading-[54px] font-extrabold tracking-tight">
          How are you
          <br />
          feeling today?
        </h1>

        <p className="text-gray-400 text-[15px] leading-7 mt-5 max-w-[320px]">
          Let AI analyze your vibe and pick the perfect soundtrack for your soul.
        </p>

        {/* Detect Button */}
        <button className="w-full mt-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] border border-purple-300/20 flex items-center justify-center gap-2 text-lg font-semibold">

          <Sparkles
            size={18}
            className="text-white"
          />

          Detect My Mood

        </button>

      </div>

      {/* Recent Activity */}
      <div className="relative z-10 px-5 mt-14">

        {/* Header */}
        <div className="flex items-center justify-between">

          <h2 className="text-[34px] font-extrabold tracking-tight">
            Recent Activity
          </h2>

          <button className="text-purple-400 text-sm font-medium">
            View History
          </button>

        </div>

        {/* Card */}
        <div className="mt-6 bg-white/[0.04] border border-white/10 rounded-[34px] p-4 backdrop-blur-xl shadow-2xl">

          {/* Image */}
          <div className="rounded-[28px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[360px] object-cover"
            />

          </div>

          {/* Song Details */}
          <div className="mt-5">

            {/* Tag */}
            <div className="flex items-center justify-between">

              <div className="px-4 py-2 rounded-full bg-purple-500/20 text-[11px] font-semibold text-purple-300 border border-purple-400/20">
                ⚡ HIGH ENERGY
              </div>

              <span className="text-gray-500 text-xs">
                2h ago
              </span>

            </div>

            {/* Song */}
            <div className="mt-5">

              <h3 className="text-[38px] font-extrabold leading-none tracking-tight">
                Electric Dreams
              </h3>

              <p className="text-gray-400 text-xl mt-2">
                Cyber Synth Wave
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  )
}

export default Home