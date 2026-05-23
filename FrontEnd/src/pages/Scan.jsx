// src/pages/Scan.jsx

import { useState } from "react"
import FacialExpression from "../components/FacialExpression"
import BottomNav from "../components/BottomNav"

import {
  Camera,
  ScanFace,
  Sparkles,
  History,
  TrendingUp,
} from "lucide-react"

function Scan() {

  // Trigger Scan
  const [scanTrigger, setScanTrigger] = useState(false)

  // Detection Result
  const [result, setResult] = useState({
    mood: "Happy",
    confidence: 98,
    expressions: {
      happy: 0.76,
      neutral: 0.16,
      surprised: 0.10,
    },
  })

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

          <Camera
            size={18}
            className="text-purple-400"
          />

        </button>

      </div>

      {/* Main */}
      <div className="relative z-10 px-4 mt-6">

        {/* Live Feed */}
        <p className="text-[9px] tracking-[4px] text-purple-200 text-center mb-4 uppercase">
          Live Feed // AI Analysis v2.4b
        </p>

        {/* Scanner Card */}
        <div className="bg-white/[0.05] border border-white/10 rounded-[30px] p-3 shadow-[0_0_35px_rgba(168,85,247,0.18)]">

          {/* Camera */}
          <div className="w-full h-[320px] md:h-[450px] relative rounded-[25px] overflow-hidden border-4 border-purple-400/60">

            <FacialExpression
              scanTrigger={scanTrigger}
              onDetect={(data) => {
                setResult(data)
                setScanTrigger(false)
              }}
            />

          </div>

          {/* Bottom Text */}
          <div className="flex justify-between mt-4 px-2 text-[10px] tracking-[2px] uppercase">

            <span className="text-purple-300">
              Biometric Sync
            </span>

            <span className="text-pink-300">
              Focus Lock: True
            </span>

          </div>

        </div>

        {/* Scan Button */}
        <button
          onClick={() => setScanTrigger(true)}
          className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-300 text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >

          <ScanFace size={18} />

          Scan Mood

        </button>

        {/* Info */}
        <p className="text-center text-gray-300 text-sm leading-6 mt-5 px-4">
          Position your face within the frame for a precise emotional reading.
        </p>

        {/* Detection Result */}
        <div className="mt-7 bg-white/[0.05] border border-white/10 rounded-[28px] p-4">

          {/* Top */}
          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-lg font-bold">
                Detection Result
              </h2>

              <p className="text-gray-400 text-xs mt-1 leading-5 max-w-[170px]">
                We’ve identified your current vibe.
              </p>

            </div>

            {/* Confidence */}
            <div className="bg-purple-500/20 border border-purple-400/10 px-4 py-3 rounded-2xl text-center">

              <h3 className="text-2xl font-bold">
                {result.confidence}%
              </h3>

              <p className="text-[10px] text-gray-400 mt-1">
                Confidence
              </p>

            </div>

          </div>

          {/* Bars */}
          <div className="mt-7 space-y-5">

            {/* Happy */}
            <div>

              <div className="flex items-center justify-between text-sm mb-2">

                <span className="flex items-center gap-2">
                  😊 Happy
                </span>

                <span>
                  {Math.round((result.expressions.happy || 0) * 100)}%
                </span>

              </div>

              <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-pink-400 rounded-full"
                  style={{
                    width: `${Math.round(
                      (result.expressions.happy || 0) * 100
                    )}%`,
                  }}
                />

              </div>

            </div>

            {/* Calm */}
            <div>

              <div className="flex items-center justify-between text-sm mb-2">

                <span className="flex items-center gap-2">
                  😌 Calm
                </span>

                <span>
                  {Math.round((result.expressions.neutral || 0) * 100)}%
                </span>

              </div>

              <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{
                    width: `${Math.round(
                      (result.expressions.neutral || 0) * 100
                    )}%`,
                  }}
                />

              </div>

            </div>

            {/* Energetic */}
            <div>

              <div className="flex items-center justify-between text-sm mb-2">

                <span className="flex items-center gap-2">
                  ⚡ Energetic
                </span>

                <span>
                  {Math.round((result.expressions.surprised || 0) * 100)}%
                </span>

              </div>

              <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{
                    width: `${Math.round(
                      (result.expressions.surprised || 0) * 100
                    )}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* Playlist Button */}
          <button className="w-full mt-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-sm shadow-[0_0_30px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2">

            Generate Playlist for "{result.mood}"

            <Sparkles size={16} />

          </button>

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          {/* History */}
          <div className="bg-white/[0.05] border border-white/10 rounded-[24px] p-4">

            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">

              <History
                size={22}
                className="text-purple-300"
              />

            </div>

            <h3 className="mt-5 text-lg font-bold">
              History
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              24 total scans
            </p>

          </div>

          {/* Trends */}
          <div className="bg-white/[0.05] border border-white/10 rounded-[24px] p-4">

            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

              <TrendingUp
                size={22}
                className="text-cyan-300"
              />

            </div>

            <h3 className="mt-5 text-lg font-bold">
              Trends
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Calmer this week
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNav />

    </div>

  )
}

export default Scan