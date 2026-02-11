"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Boxes } from "lucide-react";

// Assuming these paths based on your imports
import frame2 from "../../public/frame2.png";
import frame3 from "../../public/frame3.png";

export const Decoration = () => {
  return (
    <div className="w-full bg-slate-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: CONTENT MODULE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-black/5 shadow-sm">
              <Boxes size={14} className="text-myColor" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                Inspiration_Engine
              </span>
            </div>

            <h2 className="text-5xl font-black text-black tracking-tighter uppercase italic leading-[0.9]">
              50+ Beautiful <br /> 
              <span className="text-myColor">Rooms</span> <br /> 
              Inspiration
            </h2>

            <p className="text-slate-500 font-medium italic border-l-2 border-myColor/20 pl-6 leading-relaxed">
              Our designer already made a lot of beautiful <br /> 
              prototype of rooms that inspire you.
            </p>

            <button className="group relative flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-mono text-[11px] uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
              <div className="absolute inset-0 bg-myColor translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Explore_Portfolio</span>
              <MoveRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* --- RIGHT: PROJECTION CAROUSEL --- */}
          <div className="lg:col-span-8 relative flex items-center gap-8">
            
            {/* Main Featured Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-[400px] h-[580px] shrink-0 rounded-[40px] overflow-hidden group border-8 border-white shadow-2xl"
            >
              <div className="photo w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Floating Data Tag */}
              <div className="absolute bottom-10 left-10 flex items-end drop-shadow-2xl">
                <div className="bg-white/90 backdrop-blur-md p-8 border border-black/5 rounded-2xl">
                  <span className="font-mono text-[10px] text-myColor font-bold tracking-widest">01 — BED_ROOM</span>
                  <h3 className="text-2xl font-black text-black tracking-tighter uppercase mt-1">Inner Peace</h3>
                </div>
                <button className="w-14 h-14 bg-myColor text-white flex items-center justify-center rounded-xl -ml-2 mb-4 hover:scale-110 transition-transform shadow-lg">
                  <FaArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Secondary Image (Peek) */}
            <div className="relative h-[480px] w-[370px] shrink-0 hidden md:block">
               <Image 
                src={frame2} 
                alt="pic" 
                className="w-full h-full object-cover rounded-[40px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" 
              />
              
              {/* Navigation Indicators */}
              <div className="absolute -bottom-12 left-0 flex items-center gap-4">
                <div className="w-8 h-1 bg-myColor rounded-full" />
                <div className="w-3 h-3 bg-slate-200 rounded-full hover:bg-myColor transition-colors cursor-pointer" />
                <div className="w-3 h-3 bg-slate-200 rounded-full hover:bg-myColor transition-colors cursor-pointer" />
                <div className="w-3 h-3 bg-slate-200 rounded-full hover:bg-myColor transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Third Hidden Image Logic retained */}
            <div className="hidden">
              <Image src={frame3} alt="pic" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};