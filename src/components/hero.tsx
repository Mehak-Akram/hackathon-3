"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[600px] sm:h-[720px] w-full flex items-center overflow-hidden">
      {/* --- BACKGROUND IMAGE (STAYING AS IS) --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-fixed hero"
        style={{ 
          // This ensures your CSS class "hero" background is preserved
          filter: "brightness(0.9)" 
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center sm:justify-end">
          
          {/* --- THE CONTENT BOX (REFINED SIZE) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9F3]/90 backdrop-blur-sm p-8 sm:p-12 rounded-xl shadow-xl sm:max-w-[580px] sm:mr-10 border border-white/20"
          >
            <div className="space-y-4">
              {/* Refined "New Arrival" */}
              <p className="font-mono text-[12px] uppercase tracking-[0.3em] font-bold text-black/60">
                New Arrival
              </p>

              {/* Scaled Down Heading */}
              <h2 className="text-3xl sm:text-5xl font-black text-myColor tracking-tighter leading-tight italic">
                Discover Our <br /> 
                New Collection
              </h2>

              {/* Balanced Paragraph */}
              <p className="text-black/80 font-medium leading-relaxed text-sm sm:text-base pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                elit tellus, luctus nec ullamcorper mattis.
              </p>

              {/* Refined Button */}
              <div className="pt-4">
                <button className="group relative flex items-center justify-center gap-4 bg-myColor text-white px-8 py-4 sm:py-5 rounded-md font-bold uppercase tracking-widest text-xs transition-all hover:bg-black overflow-hidden">
                  <span className="relative z-10">BUY NOW</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;