"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronDown, Play, Pause } from "lucide-react";
import Image from "next/image";
import { drinks } from "@/lib/data";

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % drinks.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center pt-8">
      {drinks.map((drink, i) => {
        const isActive = i === activeIndex;
        let delta = i - activeIndex;
        
        // Handle wrap around for smooth infinite feel visually if desired.
        // For simplicity, just standard linear offset.
        if (activeIndex === 0 && i === drinks.length - 1) delta = -1;
        if (activeIndex === drinks.length - 1 && i === 0) delta = 1;

        const isVisible = Math.abs(delta) <= 1;
        if (!isVisible) return null; // Only render visible cards

        return (
          <motion.div
            key={drink.id}
            initial={false}
            animate={{
              x: delta * 400,
              scale: isActive ? 1 : 0.85,
              opacity: isActive ? 1 : 0.6,
              zIndex: isActive ? 30 : 10,
              backgroundColor: isActive ? "#006241" : "#F2F1EC",
              color: isActive ? "#FFFFFF" : "#1E3932",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute flex flex-col rounded-[2.5rem] p-8 min-h-[500px] w-[380px] shadow-xl origin-center`}
          >
             {/* Background Pattern for active card */}
             {isActive && (
               <div
                 className="absolute inset-0 z-0 opacity-10 pointer-events-none rounded-[2.5rem]"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5l6.5 14.5 15.5 2.5-11 11 2.5 15.5-13.5-7.5-13.5 7.5 2.5-15.5-11-11 15.5-2.5z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px',
                 }}
               />
             )}

             {/* Drink Image */}
             {/* We use a white background circle for the image to handle non-transparent Unsplash photos */}
             <div className="relative w-full h-48 md:h-64 flex justify-center items-center mt-[-60px] z-20">
               <motion.div 
                 animate={{ scale: isActive ? 1.2 : 1, y: isActive ? -20 : 0 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 className="relative w-40 h-48 md:w-56 md:h-64 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white"
               >
                 <Image 
                   src={drink.image}
                   alt={drink.name}
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                 />
               </motion.div>
               
               {/* Controls for active item */}
               {isActive && (
                 <>
                   <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-md transition z-30">
                     <ChevronLeft size={24} className="text-white" />
                   </button>
                   <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-md transition z-30">
                     <ChevronRight size={24} className="text-white" />
                   </button>
                 </>
               )}
             </div>

             {/* Content */}
             <motion.div 
               animate={{ y: isActive ? 0 : 20 }}
               className="relative z-10 mt-6 flex flex-col items-center text-center px-2 flex-grow"
             >
                <h2 className={`font-display font-medium leading-tight ${isActive ? 'text-3xl' : 'text-2xl'} mb-1`}>
                  {drink.name}
                </h2>
                <h3 className={`font-display font-medium ${isActive ? 'text-xl opacity-90' : 'text-lg opacity-60'} mb-6`}>
                  {drink.type}
                </h3>

                {/* Nutritional Info (Inactive state) OR Highlights (Active state) */}
                <div className="w-full mt-auto">
                  {isActive ? (
                    <div className="flex flex-col space-y-5 w-full pt-4">
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Serving</span>
                        <span className="text-sm font-bold tracking-wide">Grande (16 fl oz)</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Calories</span>
                        <span className="text-sm font-bold tracking-wide">{drink.calories}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Caffeine</span>
                        <span className="text-sm font-bold tracking-wide">75mg</span>
                      </div>
                      <div className="w-full mt-6 bg-white text-[#006241] py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl text-center">
                        Order Now
                      </div>
                    </div>
                  ) : (
                    <div className="text-left w-full">
                      <p className="text-xs font-semibold mb-3 uppercase tracking-widest opacity-40">Calories</p>
                      
                      <div className="flex justify-between items-center text-xs opacity-60 mb-2">
                         <span>Total Fat {drink.totalFat.split(' ')[0]}</span>
                         <span>{drink.totalFat.split(' ')[1]?.replace(/[()]/g, '')}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs opacity-60 mb-2">
                         <span>Saturated Fat {drink.saturatedFat.split(' ')[0]}</span>
                         <span>{drink.saturatedFat.split(' ')[1]?.replace(/[()]/g, '')}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs opacity-60">
                         <span>Trans Fat {drink.transFat}</span>
                      </div>
                    </div>
                  )}
                </div>
             </motion.div>
          </motion.div>
        );
      })}

      {/* Auto-play Controls */}
      <div className="absolute bottom-8 right-8 md:right-16 flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-sm z-40 text-[#006241]">
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          {isPlaying ? (
            <>
               <Pause size={14} fill="currentColor" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Pause</span>
            </>
          ) : (
             <>
               <Play size={14} fill="currentColor" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Resume</span>
             </>
          )}
        </button>
      </div>
    </div>
  );
}
