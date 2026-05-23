// src/pages/Login.jsx

import { Music2, CircleHelp, Mail, Lock, Eye } from "lucide-react"

function Login() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col justify-between overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-72 bg-purple-600/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">

        <div className="flex items-center gap-2">

          <Music2
            size={20}
            className="text-purple-400"
          />

          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Moody Music Player
          </h1>

        </div>

        <CircleHelp
          size={20}
          className="text-gray-300"
        />

      </div>

      {/* Login Card */}
      <div className="relative z-10 mx-4 mt-8 bg-white/5 border border-white/10 rounded-[30px] px-5 py-8 backdrop-blur-xl shadow-2xl">

        {/* Title */}
        <div className="text-center">

          <h2 className="text-2xl font-bold">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Your musical aura awaits.
          </p>

        </div>

        {/* Email */}
        <div className="mt-10">

          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <div className="mt-3 flex items-center gap-3 bg-[#1A1F38] border border-white/5 rounded-2xl px-4 py-4">

            <Mail
              size={18}
              className="text-gray-400"
            />

            <input
              type="email"
              placeholder="name@example.com"
              className="bg-transparent outline-none text-sm w-full text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Password */}
        <div className="mt-7">

          <div className="flex items-center justify-between">

            <label className="text-sm text-gray-300">
              Password
            </label>

            <button className="text-purple-400 text-sm">
              Forgot?
            </button>

          </div>

          <div className="mt-3 flex items-center gap-3 bg-[#1A1F38] border border-white/5 rounded-2xl px-4 py-4">

            <Lock
              size={18}
              className="text-gray-400"
            />

            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent outline-none text-sm w-full text-white placeholder:text-gray-500"
            />

            <Eye
              size={18}
              className="text-gray-400"
            />

          </div>

        </div>

        {/* Login Button */}
        <button className="w-full mt-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-300/30">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-10">

          <div className="flex-1 h-[1px] bg-white/10" />

          <span className="text-gray-500 text-xs">
            OR CONTINUE WITH
          </span>

          <div className="flex-1 h-[1px] bg-white/10" />

        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          <button className="bg-white/10 border border-white/5 rounded-2xl py-4 flex items-center justify-center gap-2 text-sm">

            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt=""
              className="w-5 h-5"
            />

            Google

          </button>

          <button className="bg-white/10 border border-white/5 rounded-2xl py-4 flex items-center justify-center gap-2 text-sm">

            <img
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt=""
              className="w-5 h-5 invert"
            />

            Apple

          </button>

        </div>

        {/* Register */}
        <div className="text-center mt-10">

          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}

            <span className="text-purple-400 font-semibold">
              Register
            </span>

          </p>

        </div>

      </div>

      {/* Quote */}
      <div className="relative z-10 text-center text-gray-500 text-sm italic px-10 pb-8">

        “Music is the emotional life of most people.”
        <span className="block mt-1">
          — Leonard Bernstein
        </span>

      </div>

    </div>
  )
}

export default Login