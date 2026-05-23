// components/BottomNav.jsx

import { Link, useLocation } from "react-router-dom"
import {
  House,
  ScanFace,
  Library,
  UserRound,
} from "lucide-react"

function BottomNav() {
  const location = useLocation()

  const navItems = [
    {
      name: "Home",
      path: "/home",
      icon: <House size={22} />,
    },
    {
      name: "Scan",
      path: "/scan",
      icon: <ScanFace size={22} />,
    },
    {
      name: "Library",
      path: "/library",
      icon: <Library size={22} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <UserRound size={22} />,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1A1833]/80 backdrop-blur-xl border-t border-white/10 py-4 flex justify-around z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center text-xs gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
            location.pathname === item.path
              ? "bg-purple-500/30 text-purple-300"
              : "text-gray-400"
          }`}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default BottomNav