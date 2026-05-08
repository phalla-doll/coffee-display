"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { drinks } from "@/lib/data";

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % drinks.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden pt-10">
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
              x: delta * 340,
              scale: isActive ? 1 : 0.85,
              opacity: isActive ? 1 : 0.6,
              zIndex: isActive ? 30 : 10,
              backgroundColor: isActive ? "#006241" : "#F2F1EC",
              color: isActive ? "#FFFFFF" : "#1E3932",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute flex flex-col rounded-[2.5rem] p-8 min-h-[500px] w-[320px] shadow-xl origin-center`}
          >
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
               className="mt-6 flex flex-col items-center text-center px-2 flex-grow"
             >
                <h2 className={`font-display font-medium leading-tight ${isActive ? 'text-3xl' : 'text-2xl'} mb-1`}>
                  {drink.name}
                </h2>
                <h3 className={`font-display font-medium ${isActive ? 'text-xl opacity-90' : 'text-lg opacity-60'} mb-6`}>
                  {drink.type}
                </h3>

                {/* Nutritional Info (Inactive state) OR Selectors (Active state) */}
                <div className="w-full mt-auto">
                  {isActive ? (
                    <div className="flex flex-col space-y-4 w-full">
                      <div className="flex items-center justify-between border-b border-white/20 pb-2">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Size</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span className="text-sm font-medium">Select a size</span>
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/20 pb-2">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Milk</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span className="text-sm font-medium">Select a milk type</span>
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/20 pb-2">
                        <span className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">Drink</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span className="text-sm font-medium">Drink type</span>
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <button className="w-full mt-6 bg-white text-[#006241] py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition shadow-lg">
                        Add to basket
                      </button>
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
    </div>
  );
}
