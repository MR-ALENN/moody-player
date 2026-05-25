// src/pages/Home.jsx
import { useNavigate } from "react-router-dom"
import BottomNav from "../components/BottomNav"
import { Sparkles, Settings } from "lucide-react"

function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#050816] text-white pb-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Page container — centers content on wide screens */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-center justify-between pt-5 sm:pt-8">

          {/* Logo */}
          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-full border border-purple-400 overflow-hidden shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
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
        <div className="mt-8 sm:mt-12">

          <h1 className="text-[clamp(38px,10vw,64px)] leading-[1.05] font-extrabold tracking-tight">
            How are you
            <br />
            feeling today?
          </h1>

          <p className="text-gray-400 text-sm sm:text-[15px] leading-7 mt-4 sm:mt-5 max-w-xs sm:max-w-sm">
            Let AI analyze your vibe and pick the perfect soundtrack for your soul.
          </p>

          {/* Detect Button */}
          <button  onClick={() => navigate("/scan")} className="w-full mt-8 sm:mt-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] border border-purple-300/20 flex items-center justify-center gap-2 text-base sm:text-lg font-semibold">
            <Sparkles
              size={18}
              className="text-white"
            />
            Detect My Mood
          </button>

        </div>

        {/* Recent Activity */}
        <div className="mt-12 sm:mt-16">

          {/* Header */}
          <div className="flex items-center justify-between">

            <h2 className="text-[clamp(24px,7vw,38px)] font-extrabold tracking-tight">
              Recent Activity
            </h2>

            <button className="text-purple-400 text-sm font-medium whitespace-nowrap ml-4">
              View History
            </button>

          </div>

          {/* Card */}
          <div className="mt-5 sm:mt-6 bg-white/[0.04] border border-white/10 rounded-[34px] p-3 sm:p-4 backdrop-blur-xl shadow-2xl">

            {/* Image */}
            <div className="rounded-[28px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover"
              />
            </div>

            {/* Song Details */}
            <div className="mt-4 sm:mt-5">

              {/* Tag */}
              <div className="flex items-center justify-between">

                <div className="px-3 sm:px-4 py-2 rounded-full bg-purple-500/20 text-[10px] sm:text-[11px] font-semibold text-purple-300 border border-purple-400/20">
                  ⚡ HIGH ENERGY
                </div>

                <span className="text-gray-500 text-xs">
                  2h ago
                </span>

              </div>

              {/* Song */}
              <div className="mt-4 sm:mt-5">

                <h3 className="text-[clamp(28px,8vw,42px)] font-extrabold leading-none tracking-tight">
                  Electric Dreams
                </h3>

                <p className="text-gray-400 text-lg sm:text-xl mt-2">
                  Cyber Synth Wave
                </p>

              </div>

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
