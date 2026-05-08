import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-10 px-16 z-50 relative w-full font-sans max-w-[1440px] mx-auto">
      <div className="flex items-center space-x-12">
        <div className="w-20 h-20 bg-[#006241] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
           {/* Placeholder for Starbucks-like logo */}
           <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] fill-white" preserveAspectRatio="xMidYMid meet">
             <path d="M50 10 a40 40 0 1 0 0 80 a40 40 0 1 0 0 -80 z M50 20 a30 30 0 1 1 0 60 a30 30 0 1 1 0 -60 z" />
             <circle cx="50" cy="50" r="15" />
           </svg>
        </div>
        <div className="hidden md:flex space-x-10 text-[13px] font-bold tracking-[0.2em] text-[#1E3932] uppercase opacity-90">
          <span>Coffee</span>
          <span>Tea</span>
          <span>Menu</span>
        </div>
      </div>

      <div className="flex items-center space-x-6 opacity-40">
        <Menu size={32} className="text-gray-800" />
      </div>
    </nav>
  );
}
