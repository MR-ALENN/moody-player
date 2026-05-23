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

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5">

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

      {/* Profile Card */}
      <div className="relative z-10 px-4 mt-7">

        <div className="bg-white/[0.05] border border-white/10 rounded-[32px] p-7 text-center backdrop-blur-xl">

          {/* Avatar */}
          <div className="relative w-fit mx-auto">

            <div className="w-28 h-28 rounded-full border-[4px] border-pink-500 overflow-hidden shadow-[0_0_35px_rgba(236,72,153,0.35)]">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

            {/* Edit Icon */}
            <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center border-4 border-[#12182f]">

              ✎

            </div>

          </div>

          {/* Name */}
          <h1 className="text-[48px] leading-none font-extrabold mt-7 tracking-tight">
            Alex Rivera
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-[15px] mt-4 leading-7">
            Melodic Daydreamer • Listener since
            <br />
            2022
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 mt-10 border-t border-white/10 pt-7">

            {/* Playlists */}
            <div>

              <h2 className="text-[38px] leading-none font-extrabold text-purple-300">
                124
              </h2>

              <p className="text-gray-400 text-[11px] mt-2 tracking-[1px] uppercase">
                Playlists
              </p>

            </div>

            {/* Songs */}
            <div className="border-x border-white/10">

              <h2 className="text-[38px] leading-none font-extrabold text-pink-300">
                2.5k
              </h2>

              <p className="text-gray-400 text-[11px] mt-2 tracking-[1px] uppercase">
                Songs
              </p>

            </div>

            {/* Moods */}
            <div>

              <h2 className="text-[38px] leading-none font-extrabold text-cyan-300">
                48
              </h2>

              <p className="text-gray-400 text-[11px] mt-2 tracking-[1px] uppercase">
                Moods
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Preferences */}
      <div className="relative z-10 px-4 mt-10">

        <h2 className="text-[40px] leading-none font-extrabold tracking-tight">
          Preferences
        </h2>

        {/* Preference Card */}
        <div className="mt-6 bg-white/[0.05] border border-white/10 rounded-[28px] overflow-hidden">

          {/* Item 1 */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">

                <Brain
                  size={24}
                  className="text-purple-300"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Mood Syncing
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Auto-detect mood from activity
                </p>

              </div>

            </div>

            {/* Toggle */}
            <div className="w-14 h-8 bg-purple-300 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full ml-auto" />

            </div>

          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">

                <AudioWaveform
                  size={24}
                  className="text-pink-300"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Spatial Audio
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Enable immersive listening
                </p>

              </div>

            </div>

            {/* Toggle */}
            <div className="w-14 h-8 bg-white/10 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-gray-400 rounded-full" />

            </div>

          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between px-5 py-5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

                <Bell
                  size={24}
                  className="text-cyan-300"
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Mood Notifications
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Daily emotional check-ins
                </p>

              </div>

            </div>

            <ChevronRight
              size={20}
              className="text-gray-400"
            />

          </div>

        </div>

      </div>

      {/* Account */}
      <div className="relative z-10 px-4 mt-10">

        <h2 className="text-[40px] leading-none font-extrabold tracking-tight">
          Account
        </h2>

        {/* Privacy */}
        <div className="mt-6 bg-white/[0.05] border border-white/10 rounded-[24px] px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">

              <Shield
                size={22}
                className="text-purple-300"
              />

            </div>

            <h3 className="font-bold text-lg">
              Privacy & Security
            </h3>

          </div>

          <ChevronRight
            size={20}
            className="text-gray-400"
          />

        </div>

        {/* Logout */}
        <button className="w-full mt-6 py-5 rounded-[22px] bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(168,85,247,0.35)] border border-purple-300/20">

          <LogOut size={20} />

          LOGOUT

        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />

    </div>
  )
}

export default Profile