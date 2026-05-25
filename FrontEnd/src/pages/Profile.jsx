// src/pages/Profile.jsx

import BottomNav from "../components/BottomNav"
import {
  Settings,
  Shield,
  ChevronRight,
  Bell,
  AudioWaveform,
  Brain,
  LogOut,
} from "lucide-react"

function Profile() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-y-auto pb-32">

      {/* Purple Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Page container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex items-center justify-between pt-5 sm:pt-8">

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

          <button>
            <Settings size={20} className="text-purple-400" />
          </button>

        </div>

        {/* Profile Card */}
        <div className="mt-6 sm:mt-7">

          <div className="bg-white/[0.05] border border-white/10 rounded-[32px] p-5 sm:p-7 text-center backdrop-blur-xl">

            {/* Avatar */}
            <div className="relative w-fit mx-auto">

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[4px] border-pink-500 overflow-hidden shadow-[0_0_35px_rgba(236,72,153,0.35)]">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-500 flex items-center justify-center border-4 border-[#12182f] text-sm">
                ✎
              </div>

            </div>

            {/* Name */}
            <h1 className="text-[clamp(34px,9vw,52px)] leading-none font-extrabold mt-5 sm:mt-7 tracking-tight">
              Alex Rivera
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm sm:text-[15px] mt-3 sm:mt-4 leading-6 sm:leading-7">
              Melodic Daydreamer • Listener since
              <br />
              2022
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-7 sm:mt-10 border-t border-white/10 pt-5 sm:pt-7">

              <div>
                <h2 className="text-[clamp(28px,7vw,42px)] leading-none font-extrabold text-purple-300">124</h2>
                <p className="text-gray-400 text-[10px] sm:text-[11px] mt-2 tracking-[1px] uppercase">Playlists</p>
              </div>

              <div className="border-x border-white/10">
                <h2 className="text-[clamp(28px,7vw,42px)] leading-none font-extrabold text-pink-300">2.5k</h2>
                <p className="text-gray-400 text-[10px] sm:text-[11px] mt-2 tracking-[1px] uppercase">Songs</p>
              </div>

              <div>
                <h2 className="text-[clamp(28px,7vw,42px)] leading-none font-extrabold text-cyan-300">48</h2>
                <p className="text-gray-400 text-[10px] sm:text-[11px] mt-2 tracking-[1px] uppercase">Moods</p>
              </div>

            </div>

          </div>

        </div>

        {/* Preferences */}
        <div className="mt-8 sm:mt-10">

          <h2 className="text-[clamp(28px,8vw,44px)] leading-none font-extrabold tracking-tight">
            Preferences
          </h2>

          <div className="mt-5 sm:mt-6 bg-white/[0.05] border border-white/10 rounded-[28px] overflow-hidden">

            {/* Item 1 */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 border-b border-white/5 gap-3">

              <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                  <Brain size={22} className="text-purple-300" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">Mood Syncing</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-5">Auto-detect mood from activity</p>
                </div>

              </div>

              {/* Toggle ON */}
              <div className="w-12 sm:w-14 h-7 sm:h-8 bg-purple-300 rounded-full flex items-center px-1 shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full ml-auto" />
              </div>

            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 border-b border-white/5 gap-3">

              <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                  <AudioWaveform size={22} className="text-pink-300" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">Spatial Audio</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-5">Enable immersive listening</p>
                </div>

              </div>

              {/* Toggle OFF */}
              <div className="w-12 sm:w-14 h-7 sm:h-8 bg-white/10 rounded-full flex items-center px-1 shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-400 rounded-full" />
              </div>

            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 gap-3">

              <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <Bell size={22} className="text-cyan-300" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">Mood Notifications</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-5">Daily emotional check-ins</p>
                </div>

              </div>

              <ChevronRight size={20} className="text-gray-400 shrink-0" />

            </div>

          </div>

        </div>

        {/* Account */}
        <div className="mt-8 sm:mt-10">

          <h2 className="text-[clamp(28px,8vw,44px)] leading-none font-extrabold tracking-tight">
            Account
          </h2>

          {/* Privacy */}
          <div className="mt-5 sm:mt-6 bg-white/[0.05] border border-white/10 rounded-[24px] px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between gap-3">

            <div className="flex items-center gap-3 sm:gap-4 min-w-0">

              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Shield size={20} className="text-purple-300" />
              </div>

              <h3 className="font-bold text-base sm:text-lg">Privacy &amp; Security</h3>

            </div>

            <ChevronRight size={20} className="text-gray-400 shrink-0" />

          </div>

          {/* Logout */}
          <button className="w-full mt-5 sm:mt-6 py-4 sm:py-5 rounded-[22px] bg-gradient-to-r from-purple-500 to-pink-500 text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(168,85,247,0.35)] border border-purple-300/20">
            <LogOut size={20} />
            LOGOUT
          </button>

        </div>

      </div>

      {/* Bottom Nav */}
      <BottomNav />

    </div>
  )
}

export default Profile
