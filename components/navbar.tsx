import { Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-12 z-50 relative w-full font-sans max-w-7xl mx-auto">
      <div className="flex items-center space-x-12">
        <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center overflow-hidden">
           {/* Placeholder for Starbucks-like logo */}
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white" preserveAspectRatio="xMidYMid meet">
             <path d="M50 10 a40 40 0 1 0 0 80 a40 40 0 1 0 0 -80 z M50 20 a30 30 0 1 1 0 60 a30 30 0 1 1 0 -60 z" />
             <circle cx="50" cy="50" r="15" />
           </svg>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest text-gray-800 uppercase">
          <a href="#" className="hover:text-green-800 transition-colors">Coffee</a>
          <a href="#" className="hover:text-green-800 transition-colors">Tea</a>
          <a href="#" className="hover:text-green-800 transition-colors">Menu</a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="hidden md:flex items-center space-x-4 border-b border-gray-300 pb-1 w-64">
          <span className="text-xs text-gray-400 font-medium tracking-widest uppercase flex-1">Search</span>
          <Search size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-800 uppercase">
          <div className="w-3 h-3 bg-red-600 rounded-full flex items-center justify-center text-[8px] text-white">0</div>
          <span>My Basket</span>
        </div>
        <Menu size={24} className="text-gray-800 cursor-pointer" />
      </div>
    </nav>
  );
}
