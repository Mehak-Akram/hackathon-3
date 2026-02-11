"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Monitor, Coffee, Bed, ChevronRight } from "lucide-react";

import bed from "../../public/bed.jpeg";
import office from "../../public/office.jpeg";
import living from "../../public/living-room.jpeg";
import dinning from "../../public/dinning.jpeg";

const categories = [
  { name: "Bedroom Furniture", src: bed, icon: <Bed size={16} />, code: "SEC_01" },
  { name: "Living-Room", src: living, icon: <Layers size={16} />, code: "SEC_02" },
  { name: "Office Furniture", src: office, icon: <Monitor size={16} />, code: "SEC_03" },
  { name: "Dinning-Room", src: dinning, icon: <Coffee size={16} />, code: "SEC_04" },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER: SYSTEM OVERVIEW --- */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-[10px] font-mono text-myColor tracking-[0.3em] uppercase"
          >
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none">
            Browse The <span className="text-myColor italic">Range</span>
          </h1>
          
          <p className="text-slate-500 text-sm md:text-base max-w-lg font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Select a sector to initialize the architectural manifest.
          </p>
        </div>

        {/* --- GRID: SECTOR ANALYSIS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-2xl bg-slate-100 border border-black/5"
            >
              <Link href="/shop" className="block w-full h-full">
                {/* Image Layer with Grayscale Hover */}
                <Image
                  src={cat.src}
                  alt={cat.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Technical HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Sector Code (Top Right) */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-white/40 group-hover:text-myColor transition-colors">
                  {cat.code}
                </div>

                {/* Content Block (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-myColor/20 backdrop-blur-md rounded-lg text-myColor border border-myColor/30 transition-transform duration-500 group-hover:-translate-y-2">
                      {cat.icon}
                    </div>
                    <div className="h-[1px] flex-1 bg-white/20" />
                  </div>

                  <div className="space-y-1 transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                      {cat.name.split(' ')[0]} <br />
                      <span className="text-myColor">{cat.name.split(' ')[1] || ""}</span>
                    </h3>
                  </div>

                  {/* View Details CTA */}
                  <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-mono text-white uppercase tracking-widest">Explore_Sector</span>
                    <ChevronRight size={14} className="text-myColor" />
                  </div>
                </div>

                {/* Animated Corner Border (Hover Effect) */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 rounded-xl pointer-events-none transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;